export interface NavItem {
  label: string;
  href: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface SectorItem {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  practicalConsideration: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface EnquiryFormData {
  fullName: string;
  institutionName: string;
  workEmail: string;
  institutionType: string;
  estimatedWasteVolume: string;
  message: string;
}
