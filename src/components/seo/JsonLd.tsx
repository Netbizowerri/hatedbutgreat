import { Helmet } from 'react-helmet-async';
import type { Profile, TalkShowEpisode } from '@/types';

const BASE_URL = 'https://www.hatedbutgreat.com';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hated But Great',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: 'Global Nigerian Image Redemption Platform — celebrating Nigerian excellence in medicine, business, and entertainment worldwide.',
    foundingDate: '2025',
    sameAs: [
      'https://www.youtube.com/@hatedbutgreat',
      'https://www.instagram.com/hatedbutgreat',
      'https://twitter.com/hatedbutgreat',
      'https://www.tiktok.com/@hatedbutgreat',
      'https://www.linkedin.com/company/hatedbutgreat',
    ],
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hated But Great',
    url: BASE_URL,
    description: 'Global Nigerian Image Redemption Platform',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function PersonSchema({ profile }: { profile: Profile }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    description: profile.achievement,
    knowsAbout: profile.field,
    ...(profile.location ? { homeLocation: { '@type': 'Place', name: profile.location } } : {}),
    ...(profile.sourceUrl ? { url: profile.sourceUrl } : {}),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function FAQPageSchema({ questions }: { questions: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function HowToSchema({ steps }: { steps: { name: string; text: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Submit an Excellence Dossier',
    description: 'Steps to submit a Nigerian excellence dossier to Hated But Great.',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function VideoObjectSchema({ episode }: { episode: TalkShowEpisode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: episode.title,
    description: episode.summary,
    thumbnailUrl: episode.thumbnail,
    duration: episode.duration,
    datePublished: episode.releaseDate,
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
