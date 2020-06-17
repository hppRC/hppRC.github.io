export type Theme = Readonly<{
  color: string;
  backgroundColor: string;
}>;

export type ColorMode = 'theme-base' | 'theme-light' | 'theme-dark';

export type LangMode = 'ja-JP' | 'en-US';

export type Resource = {
  title: string;
  period: string;
  text?: string;
  relatedLink?: string;
};
