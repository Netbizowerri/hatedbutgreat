import { Helmet } from 'react-helmet-async';

interface SeoMetaProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SITE_NAME = 'Hated But Great';
const BASE_URL = 'https://www.hatedbutgreat.com';
const DEFAULT_IMAGE = 'https://i.ibb.co/hFKGTPpr/Whats-App-Image-2026-06-29-at-11-46-59-AM.jpg';

export function SeoMeta({ title, description, image, url, type = 'website' }: SeoMetaProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_NG" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}
