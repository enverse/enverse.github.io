import { Fragment, h } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import {
  createClient,
  EntryCollection,
  RichTextContent,
  LinkType,
  ContentTypeLink,
  Entry,
} from "contentful";
import "./index.css";

const { PUBLIC_CONTENTFUL_API, PUBLIC_CONTENTFUL_SPACE } = import.meta.env;

type RelationType = {
  sys: {
    id: string;
    linkType: LinkType;
    type: "Entry" | "Asset";
  };
};

type Fields = {
  title: string;
  preview: string;
  subtitle: string;
  content: RichTextContent;
  author: RelationType;
  image: RelationType;
};

type FieldsWithContent = Fields & {
  author: any;
  image: any;
};

export default () => {
  const [posts, setPosts] = useState<Entry<FieldsWithContent>[]>();
  const [loading, setLoading] = useState(true);

  /**
   * get image, author, et any content included in 'includes' array
   */
  const getLinkedContent = useCallback(
    (
      contentfulResponse: EntryCollection<Fields>,
      fieldName: "author" | "image",
      post: Entry<Fields>
    ) => {
      const { id, type } = post.fields[fieldName].sys;
      return contentfulResponse.includes[type]?.find(
        ({ sys }) => sys.id === id
      );
    },
    []
  );
  useEffect(() => {
    const getAndSetPosts = async () => {
      const client = createClient({
        accessToken: PUBLIC_CONTENTFUL_API,
        space: PUBLIC_CONTENTFUL_SPACE,
      });

      try {
        const contentfulResponse = await client.getEntries<Fields>({
          limit: 3,
          order: "-sys.createdAt",
          content_type: "title",
        });

        const postsWithContent = contentfulResponse.items.map((item) => {
          return {
            ...item,
            fields: {
              ...item.fields,
              author: getLinkedContent(contentfulResponse, "author", item),
              image: getLinkedContent(contentfulResponse, "image", item),
            },
          };
        });

        setPosts(postsWithContent);
        setLoading(false);
      } catch (e) {
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
  if (posts) {
    console.log(posts);
    return (
      <div className="blog-post__container">
        {posts.map(({ fields: { title, preview, image }, sys: { id } }) => (
          <a href={`/posts/${id}`}>
            <div className="blog-post__post-container">
              <img
                className="blog-post__preview-image"
                src={image.fields.file.url}
                alt={image.fields.description}
              />
              <h2 className="blog-post__title">{title}</h2>
              <div className="blog-post__preview-text">{preview}</div>
              <div className="blog-post__button-container">
                <a href={`/posts/${id}`}>Read article</a>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
  return null;
};
