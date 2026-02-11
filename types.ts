import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPrimary?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface FacilityImage {
  id: string;
  url: string;
  title: string;
  colSpan?: string;
}