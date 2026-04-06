import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Experience from "./components/Experiancce";
import ContactUs from "./components/Contactus";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  // SEO Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mefeydal Translation Agency",
    alternateName: "Mefeydal Agency",
    url: "https://mefeydal-agency.abdoab.dev",
    image: "https://mefeydal-agency.abdoab.dev/mefeydal-logo.webp",
    description:
      "Expert Afar-Af language translation, interpretation, and localization services.",
    founder: {
      "@type": "Person",
      name: "Abdo Ab",
      jobTitle: "Senior Software Engineer",
      url: "https://abdoab.dev",
    },
    knowsAbout: [
      "Afar-Af Translation",
      "Language Localization",
      "Professional Interpretation",
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <Header />
      <Hero />
      <Services />
      <Industries />
      <Testimonials />
      <Experience />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
