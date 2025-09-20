import { AboutSection } from "./components/about/about-section";
import { ContentLayout } from "./components/layouts/content-layout";
import { HeroSection } from "./components/hero/hero-section";
import { MainLayout } from "./components/layouts/main-layout";
import { Navigation } from "./components/other/navigation";
import { TuitionSection } from "./components/tuition/tuition-section";
import { ThemeProvider } from "./components/theme-provider";

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
        </MainLayout>
      </main>
    </ThemeProvider>
  );
}

export default App;
