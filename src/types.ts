export type PageId = 'home' | 'services' | 'about' | 'gallery' | 'service-areas' | 'reviews' | 'contact';

export type DogSize = 'small' | 'medium' | 'large' | 'giant';

export type CoatType = 'short' | 'medium' | 'double' | 'curly_doodle';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'groom' | 'bath' | 'vip' | 'alacarte';
  priceStartingAt: number;
  duration: string;
  popular?: boolean;
  tagline: string;
  description: string;
  includes: string[];
  imageUrl: string;
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface BeforeAfterItem {
  id: string;
  dogName: string;
  breed: string;
  service: string;
  beforeImg: string;
  afterImg: string;
  story: string;
}

export interface Testimonial {
  id: string;
  ownerName: string;
  city: string;
  dogName: string;
  breed: string;
  rating: number;
  comment: string;
  avatarUrl: string;
  dogImgUrl: string;
  date: string;
}

export interface ServiceCity {
  name: string;
  county: string;
  driveTimeMin: number;
  highlight?: boolean;
}

export interface BookingFormData {
  dogName: string;
  breed: string;
  size: DogSize;
  coatType: CoatType;
  serviceId: string;
  addOnIds: string[];
  ownerName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
