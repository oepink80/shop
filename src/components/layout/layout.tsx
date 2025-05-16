// src/components/layout.tsx

import * as React from 'react';

import { Footer } from '@/components/footer/footer';
import Header from '@/components/header/header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
