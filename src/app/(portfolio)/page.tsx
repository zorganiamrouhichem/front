"use client";
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
import Technologies from "../components/Technologies";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Technologies/>
      <Tech/>
      <ImageGallery/>
    </>
  );
}
