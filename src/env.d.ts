interface ImportMetaEnv {
  readonly PUBLIC_CONTENTFUL_SPACE: string;
  readonly PUBLIC_CONTENTFUL_API: string;
  readonly PUBLIC_FORMSPREE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
