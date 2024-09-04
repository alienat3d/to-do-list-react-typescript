import { Helmet, HelmetProvider } from 'react-helmet-async';

import { SeoAttributes } from '../models/seo-attributes';

export const Seo = (props: SeoAttributes) => {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:type" content={props.type} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta name="twitter:creator" content={props.name} />
        <meta name="twitter:card" content={props.type} />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <noscript>{`<link href="%PUBLIC_URL%/no-js.css" rel="stylesheet">`}</noscript>
      </Helmet>
    </HelmetProvider>
  );
};
