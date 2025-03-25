"use client";

import { Navbar } from "@/components/navbar/navbar";
import FeaturedModels from "@/components/featured-models/featured-models";
import RunModel from "@/components/run-model/run-model";
import HeroSection from "@/components/hero-section/hero-section";
import ModelGrid from "@/components/model-grid/model-grid";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Models Section */}
      <FeaturedModels />

      {/* Model Grid Section */}
      <ModelGrid />

      {/* Run Model Section */}
      <RunModel />

      {/* Footer */}
      <Footer />
    </main>
  );
}
