import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    id: 1,
    title: 'Transform Your Business',
    subtitle: 'With Cutting-Edge Technology',
    description: 'We build innovative web and mobile solutions that drive growth and enhance user experiences.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwdGVhbXxlbnwxfHx8fDE3NjA2Nzc3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Start Your Project',
  },
  {
    id: 2,
    title: 'Expert Software Development',
    subtitle: 'Tailored to Your Needs',
    description: 'From React to AI/ML, we master the technologies that power modern businesses.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjA2Nzc4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'View Our Services',
  },
  {
    id: 3,
    title: 'Mobile-First Solutions',
    subtitle: 'For iOS & Android',
    description: 'Create stunning mobile experiences that engage users and deliver results.',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDY3NzgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Explore Projects',
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent Solutions',
    description: 'Harness the power of artificial intelligence to transform your business operations.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NjA2Nzc4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Learn More',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = (slideId: number) => {
    switch (slideId) {
      case 1:
        scrollToSection('contact');
        break;
      case 2:
        scrollToSection('services');
        break;
      case 3:
        scrollToSection('projects');
        break;
      case 4:
        scrollToSection('about');
        break;
      default:
        scrollToSection('contact');
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-background">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60 dark:from-background/90 dark:via-background/75 dark:to-background/50"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-20 lg:px-32 relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="inline-flex items-center space-x-2 bg-accent backdrop-blur-sm border border-border rounded-full px-4 py-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-foreground/80">Atlantic K Solutions</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#05264e] dark:text-foreground mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-[#e95f33] to-primary bg-clip-text text-transparent mb-6"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-foreground/80 mb-8 mx-auto max-w-2xl"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  onClick={() => handleCTAClick(slides[currentSlide].id)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6"
                >
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  onClick={() => scrollToSection('about')}
                  variant="outline"
                  className="border-border text-foreground hover:bg-accent px-8 py-6"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-card/90 backdrop-blur-sm border-2 border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-card/90 backdrop-blur-sm border-2 border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 h-3 bg-primary'
                : 'w-3 h-3 bg-foreground/30 hover:bg-foreground/50'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
      >
        <span className="text-foreground/60 mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
