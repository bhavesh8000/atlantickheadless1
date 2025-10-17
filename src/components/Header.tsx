import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('home')} className="flex items-center">
            <span className="text-2xl font-bold text-primary">Atlantick Solutions</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground/70 hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground/70 hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-foreground/70 hover:text-primary transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground/70 hover:text-primary transition-colors">
              About
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground/70" />
              ) : (
                <Sun className="w-5 h-5 text-foreground/70" />
              )}
            </button>
            
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground/70" />
              ) : (
                <Sun className="w-5 h-5 text-foreground/70" />
              )}
            </button>
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-foreground/70 hover:text-primary transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-primary transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground/70 hover:text-primary transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-foreground/70 hover:text-primary transition-colors text-left">
                Blog
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground/70 hover:text-primary transition-colors text-left">
                About
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
