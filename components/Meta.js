import Head from 'next/head'

export default function Meta({ title, keywords, description }) {
    return (
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Future Cayla',
    keywords: 'web development, programming',
    description: 'The best web development tutorials',
}

// Language: javascript
// Path: pages/index.js
// Compare this snippet from pages/index.js: