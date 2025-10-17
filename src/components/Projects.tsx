import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FloatingBubbles } from './FloatingBubbles';

interface Project {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media?: number;
  link: string;
  acf?: any;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch from custom post type 'project' or from pages
      let response = await fetch('https://atlanticksolutions.com/wp-json/wp/v2/project?_embed&per_page=6');
      
      // If custom post type doesn't exist, try fetching specific pages or posts
      if (!response.ok) {
        response = await fetch('https://atlanticksolutions.com/wp-json/wp/v2/posts?_embed&per_page=6&categories=projects');
      }
      
      if (!response.ok) {
        // Fallback to regular posts
        response = await fetch('https://atlanticksolutions.com/wp-json/wp/v2/posts?_embed&per_page=6');
      }

      const data = await response.json();
      setProjects(data);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Unable to load projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getFeaturedImage = (project: Project) => {
    if (project._embedded && project._embedded['wp:featuredmedia']?.[0]?.source_url) {
      return project._embedded['wp:featuredmedia'][0].source_url;
    }
    return 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjA2NDMwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080';
  };

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Floating Bubbles */}
      <FloatingBubbles />
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#05264e]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#05264e] dark:text-foreground mb-4">Our Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-[#e95f33] animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={fetchProjects} variant="outline" className="border-border text-foreground hover:bg-accent">
              Try Again
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={getFeaturedImage(project)}
                    alt={project.title.rendered}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#05264e] dark:text-foreground mb-3 line-clamp-2">{project.title.rendered}</h3>
                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {stripHtml(project.excerpt.rendered)}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="https://atlanticksolutions.com/project/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All Projects
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
