import { Profile, StatItem, TalkShowEpisode } from '../types';

export const profiles: Profile[] = [
  // --- TOP 6 FEATURED INDIVIDUALS (LIVING PROOF OF GREATNESS) ---
  {
    id: 305,
    name: 'Wizkid (Ayodeji Balogun)',
    field: 'Global Pop & Afrobeats',
    category: 'entertainment',
    achievement: 'Grammy Award winner & Billboard Hot 100 record-breaker with "Essence"',
    bio: 'Starting from church choirs in Surulere, Wizkid rose to become one of the most streamed African musicians in history. His collaborations with Drake, Beyoncé, and Justin Bieber broke international chart barriers.',
    image: 'https://i.ibb.co/L49WGcP/Hated-But-Great-22.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Wizkid',
    quote: 'Starboy is not just a moniker; it is the unbreakable conviction that Africa shines brightest.',
    location: 'Lagos & London'
  },
  {
    id: 206,
    name: 'Pearlena Igbokwe',
    field: 'Media & Television Executive',
    category: 'business',
    achievement: 'First woman of African descent to head a major US television studio as Chairman of Universal Studio Group',
    bio: 'Born in Lagos and raised in the United States, Pearlena rose to oversee NBCUniversal\'s television production operations. She leads one of the most powerful content-producing engines in Hollywood, shaping global television narrative.',
    image: 'https://i.ibb.co/DgCF17C0/Hated-But-Great-15.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Pearlena_Igbokwe',
    quote: 'We are telling stories that reflect the beautiful, complex reality of the human experience on a global stage.',
    location: 'Los Angeles, USA'
  },
  {
    id: 103,
    name: 'Chimamanda Ngozi Adichie',
    field: 'Contemporary Literature & Public Philosophy',
    category: 'entertainment',
    achievement: 'MacArthur Genius Fellow & author of "Half of a Yellow Sun" and "Americanah"',
    bio: 'One of the world\'s most translated modern novelists. Her iconic TED talk "We Should All Be Feminists" was sampled by Beyoncé and distributed to every high school student in Sweden, reframing African storytelling.',
    image: 'https://i.ibb.co/PvkBFSCy/Hated-But-Great-23.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Chimamanda_Ngozi_Adichie',
    quote: 'The single narrative creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete.',
    location: 'Enugu & Maryland, USA'
  },
  {
    id: 111,
    name: 'Dr. Ola Orekunrin',
    field: 'Trauma Medicine & Aviation Healthcare',
    category: 'medical',
    achievement: 'Founder of Flying Doctors Nigeria, West Africa\'s first air ambulance service',
    bio: 'Following the tragic loss of her sister due to a lack of rapid transport, Dr. Orekunrin trained as a helicopter pilot and medical doctor to establish the first air ambulance service in West Africa, transforming emergency trauma response.',
    image: 'https://i.ibb.co/nNjyv056/Hated-But-Great-4.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Ola_Brown',
    quote: 'Active emergency medicine is the difference between life and death. Speed saves lives, and every African deserves that speed.',
    location: 'Lagos & London'
  },
  {
    id: 101,
    name: 'Ridwan Olalere',
    field: 'Fintech & Cross-Border Payments',
    category: 'business',
    achievement: 'Co-founded LemFi to simplify global cross-border payments for Africa',
    bio: 'Co-founded the fintech platform LemFi (formerly Lemonade Finance), simplifying cross-border payments and remittances, allowing Africans in the diaspora to send money and manage funds without heavy traditional banking fees.',
    image: 'https://i.ibb.co/67cpNbYC/Hated-But-Great-16.jpg',
    sourceUrl: 'https://www.ycombinator.com/companies/lemfi',
    quote: 'We are building the financial infrastructure that connects the African diaspora back to their roots.',
    location: 'London, UK & Lagos'
  },
  {
    id: 106,
    name: 'Dr. Oluyinka Olutoye',
    field: 'Fetal & Pediatric Surgery',
    category: 'medical',
    achievement: 'Performed world-first in-utero surgery on a fetus with a rare tumor',
    bio: 'A world-renowned fetal and pediatric surgeon based in Texas. Dr. Olutoye is globally celebrated for successfully performing a high-risk in-utero surgery on a fetus at 23 weeks, removing a rare, life-threatening tumor (sacrococcygeal teratoma), and returning the fetus safely to the womb to complete a healthy gestation.',
    image: 'https://i.ibb.co/zVr2WLyV/Hated-But-Great-8.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Oluyinka_Olutoye',
    quote: 'To see a baby who has been operated on before birth, born and doing well, is the ultimate joy.',
    location: 'Texas, USA'
  },

  // --- REST OF THE CATALOG FOR ARCHIVE PAGES AND CATEGORIES ---
  // MEDICAL
  {
    id: 104,
    name: 'Prof. Iyalla Elvis Peterside',
    field: 'Neonatology & Critical Care',
    category: 'medical',
    achievement: 'Pioneered advanced life-support (ECMO) therapies for critically ill neonates',
    bio: 'An attending neonatologist at the Children’s Hospital of Philadelphia and Director of the Intensive Care Unit at the Hospital of the University of Pennsylvania, Professor Peterside is renowned globally for his leading-edge clinical work using Extracorporeal Membrane Oxygenation (ECMO).',
    image: 'https://i.ibb.co/1fTm4gXx/Hated-But-Great-9.jpg',
    sourceUrl: 'https://www.chop.edu/doctors/peterside-iyalla-elvis',
    quote: 'Every infant, no matter how fragile, deserves the highest standard of clinical excellence and technological intervention.',
    location: 'Philadelphia, USA'
  },
  {
    id: 105,
    name: 'Dr. Adesola Ogunniyi',
    field: 'Neurosciences & Geriatrics',
    category: 'medical',
    achievement: 'Leading authority on Alzheimer\'s disease and Neurodegeneration in African populations',
    bio: 'Author of groundbreaking comparative studies between African-Americans and native Yoruba populations that revolutionized our understanding of genetic vs environmental triggers of dementia.',
    image: 'https://i.ibb.co/FkdVvwKw/Hated-But-Great-10.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Adesola_Ogunniyi',
    quote: 'Our elders hold our history; protecting their minds is preserving our collective soul.',
    location: 'Ibadan, Nigeria'
  },
  {
    id: 107,
    name: 'Dr. Onyema Ogbuagu',
    field: 'Infectious Diseases & Yale Associate Professor',
    category: 'medical',
    achievement: 'Played a leading role in the clinical trials for the Pfizer-BioNTech COVID-19 vaccine',
    bio: 'An Associate Professor of Medicine at Yale University, Dr. Ogbuagu served as a Principal Investigator on the critical Pfizer-BioNTech COVID-19 vaccine clinical trials, driving the global clinical response to contain the pandemic.',
    image: 'https://i.ibb.co/kVNgCY8S/Hated-But-Great-11.jpg',
    sourceUrl: 'https://medicine.yale.edu/profile/onyema_ogbuagu/',
    quote: 'Our work is not just about scientific innovation; it is about restoring public confidence and saving lives.',
    location: 'Yale University, USA'
  },
  {
    id: 108,
    name: 'Dr. Bennet Omalu',
    field: 'Forensic Pathology & Neuropathology',
    category: 'medical',
    achievement: 'Discovered Chronic Traumatic Encephalopathy (CTE) in American football players',
    bio: 'Dr. Omalu discovered CTE during his autopsy of Pittsburgh Steelers center Mike Webster in 2002. His relentless pursuit of scientific truth against fierce opposition from major sporting leagues permanently changed global sports medicine. His journey was immortalized in the major Hollywood film "Concussion".',
    image: 'https://i.ibb.co/67m22fHw/Hated-But-Great-12.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Bennet_Omalu',
    quote: 'You must never be afraid to speak the truth, even if you are standing alone.',
    location: 'California, USA'
  },
  {
    id: 109,
    name: 'Dr. Njideka Udochi',
    field: 'Family Medicine & Public Health Equity',
    category: 'medical',
    achievement: 'Set up rigorous vaccination and community care networks during global health crises',
    bio: 'A Maryland-based family physician and prominent advocate for community health. Dr. Udochi has been highly recognized for establishing rigorous local testing, vaccination, and support systems to combat medical disparities in vulnerable populations.',
    image: 'https://i.ibb.co/CsvsG0yw/Hated-But-Great-13.jpg',
    sourceUrl: 'https://www.millenniumfamilypractice.com/dr-njideka-udochi',
    quote: 'Medicine is a public trust. We must meet the community where they are to ensure health for all.',
    location: 'Maryland, USA'
  },
  {
    id: 110,
    name: 'Dr. Stella Ameyo Adadevoh',
    field: 'Internal Medicine & Endocrinology',
    category: 'medical',
    achievement: 'Contained the 2014 Ebola Outbreak in Nigeria, saving over 200 million citizens',
    bio: 'Serving at First Consultant Hospital in Lagos, Dr. Adadevoh correctly diagnosed and physically restrained the patient zero of Ebola in Nigeria despite immense diplomatic pressure. Her supreme sacrifice and clinical heroism stopped a continental catastrophe.',
    image: 'https://i.ibb.co/PGxRKX7F/Hated-But-Great-14.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Stella_Adadevoh',
    quote: 'I did what any dedicated physician sworn to the Hippocratic oath would do for their nation.',
    location: 'Lagos, Nigeria (Memorial)'
  },

  // BUSINESS
  {
    id: 201,
    name: 'Aliko Dangote',
    field: 'Industrial Manufacturing & Infrastructure',
    category: 'business',
    achievement: 'Built Africa\'s largest industrial conglomerate and single-train petroleum refinery',
    bio: 'Starting as a commodity trader in 1977, Aliko Dangote built a multi-billion dollar manufacturing powerhouse spanning cement, fertilizer, sugar, and oil refining. His $20B refinery project stands as a monument to indigenous African capital engineering.',
    image: 'https://i.ibb.co/N6d77v2J/Hated-But-Great-17.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Aliko_Dangote',
    quote: 'Nothing is impossible if you have the stamina to invest long-term in your own soil.',
    location: 'Lagos, Nigeria'
  },
  {
    id: 202,
    name: 'Dr. Ngozi Okonjo-Iweala',
    field: 'Global Macroeconomics & Trade Diplomacy',
    category: 'business',
    achievement: 'First woman and first African Director-General of the World Trade Organization (WTO)',
    bio: 'A Harvard and MIT economist who served twice as Nigeria\'s Finance Minister, spearheading negotiations that wiped out $30 billion of Paris Club debt. She now steers global multilateral commerce.',
    image: 'https://i.ibb.co/XfdY9ctv/Hated-But-Great-18.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Ngozi_Okonjo-Iweala',
    quote: 'When you empower African women in global trade, you lift entire continents out of poverty.',
    location: 'Geneva, Switzerland'
  },
  {
    id: 203,
    name: 'Tony O. Elumelu',
    field: 'Pan-African Banking & Venture Philanthropy',
    category: 'business',
    achievement: 'Pioneer of "Africapitalism" & founder of the $100M Tony Elumelu Entrepreneurship Program',
    bio: 'Architect of the United Bank for Africa (UBA) expansion across 20 African nations and major global financial capitals. Through TEF, he has funded and mentored over 18,000 young African startup founders.',
    image: 'https://i.ibb.co/vCx9rhgS/Hated-But-Great-19.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Tony_Elumelu',
    quote: 'Africapitalism is the economic philosophy that the private sector holds the key to unlocking Africa\'s wealth.',
    location: 'Lagos & London'
  },
  {
    id: 204,
    name: 'Jason Njoku',
    field: 'Digital Media & Streaming Tech',
    category: 'business',
    achievement: 'Founder of iROKOTV, bringing Nollywood cinema to global streaming audiences',
    bio: 'Starting from his mother\'s flat in London after several failed ventures, Jason secured global digital distribution rights for thousands of Nigerian films, pioneering video-on-demand across emerging markets.',
    image: 'https://i.ibb.co/fGGFtwjp/Hated-But-Great-20.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Jason_Njoku',
    quote: 'Failure is merely data. You iterate until the market has no choice but to pay attention.',
    location: 'London, UK & Accra'
  },
  {
    id: 205,
    name: 'Sim Shagaya',
    field: 'E-Commerce & EdTech Innovation',
    category: 'business',
    achievement: 'Founder of Konga and uLesson, democratizing STEM education across Africa',
    bio: 'A serial entrepreneur who built Nigeria\'s premier online retail marketplace before launching uLesson, a mobile learning platform that delivers high-quality interactive curriculum to millions of secondary school students.',
    image: 'https://i.ibb.co/5X5DwDrT/Hated-But-Great-21.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Sim_Shagaya',
    quote: 'Technology is only as great as the human potential it unleashes in the next generation.',
    location: 'Abuja, Nigeria'
  },

  // ENTERTAINMENT
  {
    id: 301,
    name: 'BURNA BOY',
    field: 'Afrobeats & World Music',
    category: 'entertainment',
    achievement: 'Grammy Award winner & first African artist to headline sold-out U.S. and European stadiums',
    bio: 'Pioneer of the "Afrofusion" genre, Burna Boy fused Fela Kuti\'s Afrobeat rhythms with dancehall and hip-hop. His landmark album "Twice as Tall" earned global critical acclaim and cemented African soundscapes at the apex of pop culture.',
    image: 'https://i.ibb.co/jkhFXDPJ/Hated-But-Great-24.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Burna_Boy',
    quote: 'Remember where you come from. We are African giants, and our voice cannot be muted.',
    location: 'Port Harcourt & Global'
  },
  {
    id: 303,
    name: 'Wole Soyinka',
    field: 'Dramatic Literature & Political Activism',
    category: 'entertainment',
    achievement: 'First African recipient of the Nobel Prize in Literature (1986)',
    bio: 'Playwright, poet, and fearless political essayist who was imprisoned during the Nigerian Civil War for demanding peace. His masterworks like "Death and the King\'s Horseman" bridge Yoruba mythology and existential tragedy.',
    image: 'https://i.ibb.co/9mGQgPSp/Hated-But-Great-25.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Wole_Soyinka',
    quote: 'The man dies in all who keep silent in the face of tyranny.',
    location: 'Abeokuta, Nigeria'
  },
  {
    id: 304,
    name: 'Genevieve Nnaji',
    field: 'Cinematic Direction & Acting',
    category: 'entertainment',
    achievement: 'Director and star of "Lionheart", Netflix\'s first original Nigerian movie acquisition',
    bio: 'Referred to as the Julia Roberts of Africa, Genevieve transitioned from starring in over 100 classic Nollywood dramas to producing high-end cinema that portrays Nigerian family dignity and entrepreneurial resilience.',
    image: 'https://i.ibb.co/zHQXM5hJ/Hated-But-Great-26.jpg',
    sourceUrl: 'https://en.wikipedia.org/wiki/Genevieve_Nnaji',
    quote: 'We have always had world-class stories; now we own the lens through which the world watches us.',
    location: 'Lagos & Los Angeles'
  }
];

export const statsData: StatItem[] = [
  { id: 1, value: 200, suffix: 'M+', label: 'Nigerians Worldwide' },
  { id: 2, value: 3, suffix: '', label: 'Pillars of Excellence' },
  { id: 3, value: 74, suffix: '%', label: 'U.S. Diaspora Degree Holders (Highest Census Group)' },
  { id: 4, value: 100, suffix: '%', label: 'Undeniable Impact' }
];

export const talkShowEpisodes: TalkShowEpisode[] = [
  {
    id: 1,
    title: 'Hands That Heal: The Unsung Heroes of Global Surgery',
    pillar: 'medical',
    guestName: 'Dr. Stella Ameyo Adadevoh & Chimamanda Ngozi Adichie',
    guestTitle: 'Ebola Heroine & Literary Icon',
    duration: '48 MIN',
    releaseDate: 'EPISODE 01 — PREMIERING SOON',
    thumbnail: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80',
    summary: 'An intimate conversation exploring the intense sacrifice and systemic bias Nigerian medical professionals face abroad and at home, and how their undeniable clinical brilliance forces global recognition.',
    featuredQuote: 'I did what any dedicated physician sworn to the Hippocratic oath would do for their nation. Duty has no border.'
  },
  {
    id: 2,
    title: 'Lagos to London: Scaling Billion-Dollar African Infrastructure',
    pillar: 'business',
    guestName: 'Tony O. Elumelu & Jason Njoku',
    guestTitle: 'Architect of Africapitalism & Tech Founder',
    duration: '55 MIN',
    releaseDate: 'EPISODE 02 — COMING JULY',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
    summary: 'Deconstructing the myth of African investment risk. Our guests break down how Nigerian tenacity turns chaotic emerging markets into high-yield venture empires.',
    featuredQuote: 'Nobody will develop Africa for us. The capital must come from our own sweat and vision.'
  },
  {
    id: 3,
    title: 'Owning the Lens: How Afrobeats & Nollywood Conquered Earth',
    pillar: 'entertainment',
    guestName: 'Chimamanda Adichie & Genevieve Nnaji',
    guestTitle: 'Literary Icon & Filmmaker',
    duration: '62 MIN',
    releaseDate: 'EPISODE 03 — COMING AUGUST',
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    summary: 'A deep cultural dive into narrative sovereignty. Why telling our own nuanced stories is the most potent weapon against dehumanizing western media portrayals.',
    featuredQuote: 'We refused to ask for permission to be heard. We simply turned up the volume.'
  }
];


