import Document, { Html, Head, Main, NextScript } from "next/document";
import { JSX } from "react";

class MyDocument extends Document {
    render(): JSX.Element {
        return (
          <Html lang="en">
            <Head />
            <body>
              <Main />
            </body>
            <NextScript />
            <div id="notification"></div>
          </Html>
        );
    }
}

export default MyDocument;