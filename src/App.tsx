import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <main>
          <HeroSlider />
          <Services />
          <Projects />
          <Blog />
          <About />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
