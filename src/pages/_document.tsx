import Document, { Head, Html, Main, NextScript } from "next/document";

interface CustomDocumentInterface {
  url: string;
  title: string;
  description: string;
}

class CustomDocument extends Document implements CustomDocumentInterface {
  url = `https://hpprc.dev`;

  title = `Hayato Tsukagoshi (塚越駿) Profile Page`;

  description = `The proflie pages of Hayato Tsukagoshi. Please contact me if you have any questions.`;

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head lang="en-US">
          <meta name="charset" content="UTF-8" />

          <meta name="description" content={this.description} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.title} />
          <meta property="og:url" content={this.url} />
          <meta property="og:description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:image" content={`${this.url}/images/ogp.png`} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={this.title} />
          <meta name="twitter:description" content={this.description} />
          <meta name="twitter:image" content={`${this.url}/images/ogp.png`} />

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/images/icons/ms-icon-144x144.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/images/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/images/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/images/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/icons/favicon-16x16.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
