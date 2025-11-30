import React from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  brand: string;
  quote: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}