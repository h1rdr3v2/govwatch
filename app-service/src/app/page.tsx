"use client"

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import ReportingMethods from '../components/home/ReportingMethods';
import CategorySection from '../components/home/CategorySection';
import TrackingSection from '../components/home/TrackingSection';
import SuccessStories from '../components/home/SuccessStories';
import ReportForm from '../components/home/ReportForm';

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Header />
        <HeroSection />
        <ReportingMethods />
        <CategorySection />
        <TrackingSection />
        <SuccessStories />
        <ReportForm />
        <Footer />
      </div>
  );
}