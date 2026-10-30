export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
  benefits: string[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  parentOf: string;
  therapyType: string;
  quote: string;
  rating: number;
  avatarInitials: string;
  avatarBg: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  specialties: string[];
  bio: string;
}

export interface TrustHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accent: string;
}
