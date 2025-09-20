import { AboutSection } from "./components/about/about-section";
import { ContentLayout } from "./components/layouts/content-layout";
import { HeroSection } from "./components/hero/hero-section";
import { MainLayout } from "./components/layouts/main-layout";
import { Navigation } from "./components/other/navigation";
import { TuitionSection } from "./components/tuition/tuition-section";
import { ThemeProvider } from "./components/theme-provider";
import FacilitiesSection from "./components/facilities/facilities-section";
import ProgramsSection from "./components/programs/programs-section";
import RegistrationSection from "./components/registration/registration-section";
import Footer from "./components/other/footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Navigation />
        <HeroSection />
        <MainLayout>
          <ContentLayout>
            <AboutSection />
          </ContentLayout>
          <ContentLayout>
            <TuitionSection />
          </ContentLayout>
          <ContentLayout>
            <FacilitiesSection />
          </ContentLayout>
          <ContentLayout>
            <ProgramsSection />
          </ContentLayout>
          <ContentLayout>
            <RegistrationSection />
          </ContentLayout>
        </MainLayout>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
