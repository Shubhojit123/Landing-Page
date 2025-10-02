import React from "react";
import NavBar from "./Component/NavBar";
import HeroSection from "./Component/HeroSection";
import SubHeroSection from "./Component/SubHeroSection";
import WhyInstalanesSection from "./Component/WhyInstalanesSection";
import ChallengeSection from "./Component/ChallengeSection";
import TMSSection from "./Component/TMSSection";
import TMSSection2 from "./Component/TMSSection2";
import Footer from "./Component/Footer";
import { Box } from "@mui/material";
import Testimonials from "./Component/Testimonials";
import FeaturesSection from "./Component/FeaturesSection";
import FeaturedBlogs from "./Component/FeaturedBlogs";
import CTASection from "./Component/CTASection";
import ContactForm from "./Component/ContactForm";

function App() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <NavBar />
      <Box sx={{ height: 64 }} />

      <HeroSection />
      <SubHeroSection />
      <WhyInstalanesSection />
      <ChallengeSection />
      <TMSSection />
      <TMSSection2 />
      <FeaturesSection/>
      <Testimonials/>
      <FeaturedBlogs/>
      <CTASection/>
      <ContactForm/>
      <Footer />
    </Box>
  );
}

export default App;
