import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Experience from "./components/Experiancce";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/Contactus";
import Footer from "./components/Footer";

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mefeydal | Translation Agency",
    url: "https://mefeydal-agency.abdoab.dev",
    logo: "https://mefeydal-agency.abdoab.dev/mefeydal-logo.png",
    image: "https://mefeydal-agency.abdoab.dev/mefeydal-logo.png",
    description:
      "Expert Afar-Af language translation, interpretation, and localization services.",
    founder: {
      "@type": "Person",
      name: "Abdo Ab",
      sameAs: "https://abdoab.dev",
    },
    areaServed: ["ET", "DJ", "ER"],
    knowsAbout: [
      "Afar-Af Translation",
      "Language Localization",
      "Professional Interpretation",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "mefeydal@gmail.com", // Update this
    },
  };

  useEffect(() => {
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.innerHTML = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.id = "structured-data";
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Testimonials />
        <Experience />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
