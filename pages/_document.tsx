import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import Link from 'next/link';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <header className="flex justify-end px-4 pt-2 md:px-10">
            <nav>
              <ul className="flex">
                <li className="px-2 border-r-2 last:border-r-0">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="px-2 border-r-2 last:border-r-0">
                  <Link href="/projects">
                    <a>Projects</a>
                  </Link>
                </li>
                <li className="px-2 border-r-2 last:border-r-0">
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <Main />
          <footer className="text-center">Emmanuel Meinike - 2021</footer>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
