import { motion } from 'motion/react';
import { Code2, Smartphone, Globe, Brain, Database, Rocket } from 'lucide-react';
import { FloatingBubbles } from './FloatingBubbles';

const technologies = [
  { name: 'HTML/CSS', color: 'from-primary to-[#e95f33]' },
  { name: 'JavaScript', color: 'from-primary to-[#e95f33]' },
  { name: 'React', color: 'from-primary to-[#e95f33]' },
  { name: 'PHP', color: 'from-primary to-[#e95f33]' },
  { name: 'WordPress', color: 'from-primary to-[#e95f33]' },
  { name: 'Laravel', color: 'from-primary to-[#e95f33]' },
  { name: 'Ruby on Rails', color: 'from-primary to-[#e95f33]' },
  { name: 'Python', color: 'from-primary to-[#e95f33]' },
  { name: 'AI/ML', color: 'from-primary to-[#e95f33]' },
  { name: 'Node.js', color: 'from-primary to-[#e95f33]' },
];

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks and best practices.',
    gradient: 'from-primary to-[#e95f33]',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
    gradient: 'from-[#e95f33] to-primary',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to meet your unique business requirements.',
    gradient: 'from-primary to-[#e95f33]',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
    gradient: 'from-[#e95f33] to-primary',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust and scalable backend systems with secure APIs and database architecture.',
    gradient: 'from-primary to-[#e95f33]',
  },
  {
    icon: Rocket,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services to modernize your business operations.',
    gradient: 'from-[#e95f33] to-primary',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-accent dark:bg-background relative overflow-hidden">
      {/* Floating Bubbles */}
      <FloatingBubbles />
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#05264e]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#05264e] dark:text-foreground mb-4">Our Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We offer comprehensive IT solutions leveraging the latest technologies to help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-[#05264e] dark:text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-[#05264e] dark:text-foreground mb-8">Technologies We Master</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-r ${tech.color} p-[1px] rounded-full`}>
                  <div className="bg-background dark:bg-card rounded-full px-6 py-3 hover:bg-accent transition-colors">
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
