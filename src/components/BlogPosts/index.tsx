import { useCallback, useEffect, useState } from 'preact/hooks';
import * as Contentful from 'contentful';
import './index.css';
import { h } from 'preact';

const { createClient } = Contentful;

const { PUBLIC_CONTENTFUL_API, PUBLIC_CONTENTFUL_SPACE } = import.meta.env;

type RelationType = {
  sys: {
    id: string;
    linkType: Contentful.LinkType;
    type: 'Entry' | 'Asset';
  };
};

type Fields = {
  title: string;
  preview: string;
  subtitle: string;
  content: Contentful.RichTextContent;
  author?: RelationType;
  image?: RelationType;
  slug: string;
};

type FieldsWithContent = Fields & {
  author?: any;
  image?: any;
};

export default () => {
  const [posts, setPosts] = useState<Contentful.Entry<FieldsWithContent>[]>([]);
  const [loading, setLoading] = useState(true);

  /**
   * get image, author, et any content included in 'includes' array
   */
  const getLinkedContent = useCallback(
    (
      contentfulResponse: Contentful.EntryCollection<Fields>,
      fieldName: 'author' | 'image',
      post: Contentful.Entry<Fields>
    ) => {
      const { id, type } = post.fields[fieldName]?.sys;
      return contentfulResponse.includes[type]?.find(({ sys }) => sys.id === id);
    },
    []
  );
  useEffect(() => {
    const getAndSetPosts = async () => {
      const client = createClient({
        accessToken: PUBLIC_CONTENTFUL_API,
        space: PUBLIC_CONTENTFUL_SPACE
      });

      try {
        const contentfulResponse = await client.getEntries<Fields>({
          limit: 3,
          order: '-sys.createdAt',
          content_type: 'title'
        });

        const postsWithContent = contentfulResponse.items.map((item) => {
          return {
            ...item,
            fields: {
              ...item.fields,
              author: getLinkedContent(contentfulResponse, 'author', item),
              image: getLinkedContent(contentfulResponse, 'image', item)
            }
          };
        });

        setPosts(postsWithContent);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    };

    if (loading) {
      getAndSetPosts();
    }
  }, [loading]);

  if (loading) {
    return <div>loading ... </div>;
  }

  if (posts.length === 0) {
    return <div>Coming soon ...</div>;
  }

  if (posts) {
    return (
      <div className="blog-post__container">
        {posts.map(({ fields: { title, preview, image, slug } }) => (
          <a href={`/posts/${slug}`}>
            <div className="blog-post__post-container">
              <img className="blog-post__preview-image" src={image.fields.file.url} alt={image.fields.description} />
              <h2 className="blog-post__title">{title}</h2>
              <div className="blog-post__preview-text">{preview}</div>
              <div className="blog-post__button-container">
                <a href={`/posts/${slug}`}>Read article</a>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
  return null;
};
