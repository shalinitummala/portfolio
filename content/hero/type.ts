export interface CTAButton {
  text: string;
  href: string;
  external?: boolean;
}

export interface HeroData {
  statusBadge: string;
  headlinePart1: string;
  headlineHighlight: string;
  name: string;
  title: string;
  bio: string;
  primaryCta: CTAButton;
  secondaryCta: CTAButton;
  contactEmail: string;
  location: string;
}
