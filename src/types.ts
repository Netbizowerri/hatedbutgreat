export type PillarCategory = 'medical' | 'business' | 'entertainment';

export interface Profile {
  id: number;
  name: string;
  field: string;
  category: PillarCategory;
  achievement: string;
  bio: string;
  image: string;
  sourceUrl?: string;
  quote?: string;
  location?: string;
}

export interface TalkShowEpisode {
  id: number;
  title: string;
  pillar: PillarCategory;
  guestName: string;
  guestTitle: string;
  duration: string;
  releaseDate: string;
  thumbnail: string;
  summary: string;
  featuredQuote: string;
}

export interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
}
