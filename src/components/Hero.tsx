import { motion } from 'motion/react';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1604783125462-37d81c7385e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc2MDYwNDgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern Technology"
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#05264e]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-foreground/80">Transforming Ideas into Digital Reality</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#05264e] dark:text-foreground mb-6"
          >
            Building Next-Gen
            <span className="block bg-gradient-to-r from-primary via-[#e95f33] to-primary bg-clip-text text-transparent">
              IT Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/70 mb-12 max-w-3xl mx-auto"
          >
            We specialize in crafting exceptional websites, mobile applications, and AI-powered solutions.
            From concept to deployment, we bring your vision to life with cutting-edge technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-border text-foreground hover:bg-accent px-8 py-6"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                <Globe className="text-[#e95f33]" size={32} />
              </div>
              <span className="text-foreground/70">Web Development</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                <Smartphone className="text-[#e95f33]" size={32} />
              </div>
              <span className="text-foreground/70">Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                <Code className="text-[#e95f33]" size={32} />
              </div>
              <span className="text-foreground/70">Custom Solutions</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
