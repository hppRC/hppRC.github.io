/* eslint-disable react/no-danger */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import { extractCritical } from 'emotion-server';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

interface CustomDocumentInterface {
  url: string;
  title: string;
  description: string;
}

type DocumentProps = {
  html: string;
  ids: string[];
  css: string;
  head?: (JSX.Element | null)[] | undefined;
};

class CustomDocument extends Document<DocumentProps> implements CustomDocumentInterface {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  url = `https://hpprc.dev`;

  title = `hpp Profile Page`;

  description = `The proflie pages of hpp. Please contact me if you have any questions.`;

  render(): JSX.Element {
    return (
      <Html>
        <Head lang='en-US'>
          <meta name='charset' content='UTF-8' />
          <meta name='description' content={this.description} />
          <meta name='theme-color' content='#09090f' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' key='viewport' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={this.title} />
          <meta property='og:url' content={this.url} />
          <meta property='og:description' content={this.description} />
          <meta property='og:site_name' content={this.title} />
          <meta property='og:image' content={`${this.url}/ogp.png`} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={this.title} />
          <meta name='twitter:description' content={this.description} />
          <meta name='twitter:image' content={`${this.url}/ogp.png`} />
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />

          <style data-emotion-css={this.props.ids.join(` `)} dangerouslySetInnerHTML={{ __html: this.props.css }} />
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
