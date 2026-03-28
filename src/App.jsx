import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import About          from "./components/About";
import Courses        from "./components/Courses";
import StudyResources from "./components/StudyResources";
import Results        from "./components/Results";
import Features       from "./components/Features";
import FAQ            from "./components/Faq";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";

// Global UI layer — always mounted on top of everything
import ScrollProgress from "./components/ui/ScrollProgress";
import FloatingCTA    from "./components/ui/FloatingCTA";

export default function App() {
  return (
    <div className="font-body bg-cream text-navy overflow-x-hidden">
      {/* Global overlays — visible across all sections */}
      <ScrollProgress />
      <FloatingCTA />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <StudyResources />
        <Results />
        <Features />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}