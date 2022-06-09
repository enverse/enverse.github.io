interface ImportMetaEnv {
  readonly PUBLIC_CONTENTFUL_SPACE: string;
  readonly PUBLIC_CONTENTFUL_API: string;
  readonly PUBLIC_FORMSPREE_KEY_CONTACT: string;
  readonly PUBLIC_FORMSPREE_FUNNEL_KEY: string;
  readonly PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
