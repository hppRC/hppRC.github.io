type Theme = Readonly<{
  color: string;
  backgroundColor: string;
}>;

type ColorMode = "theme-base" | "theme-light" | "theme-dark";

type LangMode = "ja-JP" | "en-US";

type Resource = {
  title: string;
  period: string;
  text?: string;
  relatedLink?: string;
  additionalHtml?: string;
};
