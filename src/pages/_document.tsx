import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";
import Script from "next/script"; // Importing the Script component

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Other tags */}

          {/* Google Analytics Script using next/script */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-71QP3X0V8R"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-71QP3X0V8R');
              `,
            }}
          />

          {/* New Google Tag (gtag.js) Script */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-11420570446"
            strategy="afterInteractive"
          />
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11420570446');
              `,
            }}
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

export default MyDocument;
