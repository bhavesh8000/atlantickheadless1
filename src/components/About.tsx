import { motion } from 'motion/react';
import { Target, Users, Award, TrendingUp, Linkedin, Code, TestTube } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import anoshImage from 'figma:asset/fa95563fe2f2556ecf7b82cba056d661527881d5.png';
import arashImage from 'figma:asset/ecf646afd0bb7e3b237f9ae3e6a3f4ceeb96ba16.png';
import anuragImage from 'figma:asset/15a15a2082f44a918c9d0260dcf4709123c75d02.png';

const stats = [
  { icon: Users, label: 'Happy Clients', value: '100+' },
  { icon: Award, label: 'Projects Completed', value: '250+' },
  { icon: TrendingUp, label: 'Years Experience', value: '10+' },
  { icon: Target, label: 'Success Rate', value: '98%' },
];

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve by embracing cutting-edge technologies and methodologies.',
  },
  {
    title: 'Quality',
    description: 'Excellence is our standard. We deliver solutions that exceed expectations.',
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients, turning their vision into reality through partnership.',
  },
  {
    title: 'Reliability',
    description: 'Count on us for consistent, dependable service and support throughout your project.',
  },
];

const founders = [
  {
    name: 'Anosh Ilavia',
    role: 'Co-Founder',
    description: 'Anosh oversees operations, ensuring seamless execution and efficient resource management. His expertise drives innovation and excellence in delivering cutting-edge IT solutions.',
    linkedin: 'https://in.linkedin.com/in/anosh-ilavia-577582a',
    image: anoshImage,
  },
  {
    name: 'Arash Ilavia',
    role: 'Co-Founder',
    description: 'Arash spearheads strategic growth, finance, and global business development. His leadership ensures scalable solutions and a strong international presence for the company.',
    linkedin: 'https://in.linkedin.com/in/arash-ilavia-207913227',
    image: arashImage,
  },
  {
    name: 'Anurag Srivastava',
    role: 'Director',
    description: "Anurag leads the company's technology and innovation, driving the transition from traditional services to advanced software product engineering. His vision shapes the company's tech-driven future.",
    linkedin: 'https://www.linkedin.com/in/anuragsrivastava',
    image: anuragImage,
  },
];

const teamMembers = [
  {
    name: 'Ayush',
    role: 'Backend Developer & Data Engineer',
    skills: ['Python Django', 'HTML', 'CSS', 'MySQL', 'PostgreSQL', 'BigQuery', 'PowerBI', 'Machine Learning'],
    icon: Code,
  },
  {
    name: 'Nikhil',
    role: 'Frontend Developer',
    skills: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'AngularJS'],
    icon: Code,
  },
  {
    name: 'Ankit',
    role: 'Full Stack Developer',
    skills: ['Python Django', 'HTML', 'CSS', 'MySQL', 'PostgreSQL', 'React', 'API Testing', 'Node.js', 'Express.js', 'SvelteKit', 'JavaScript', 'REST APIs'],
    icon: Code,
  },
  {
    name: 'Bhavesh',
    role: 'Tech Lead & Project Manager',
    skills: ['PHP', 'WordPress', 'Laravel', 'CodeIgniter', 'Ruby on Rails', 'Python Django', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'PostgreSQL', 'AWS', 'Heroku', 'Team Leadership', 'Project Management'],
    icon: Code,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#05264e]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#05264e] dark:text-foreground mb-4">About Atlantic K Solutions</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We are a team of passionate developers, designers, and strategists dedicated to transforming businesses through innovative technology solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjA2NDMwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-[#e95f33] rounded-2xl blur-2xl opacity-30"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-[#05264e] dark:text-foreground mb-4">Who We Are</h3>
            <p className="text-foreground/70 mb-6">
              Atlantic K Solutions is a leading IT solutions provider specializing in web development, mobile applications, and custom software solutions. With years of experience and a talented team of professionals, we help businesses navigate the digital landscape and achieve their goals.
            </p>
            <p className="text-foreground/70 mb-6">
              Our expertise spans a wide range of technologies including React, Laravel, Python, AI/ML, and more. We pride ourselves on delivering high-quality, scalable solutions that drive business growth and innovation.
            </p>
            <a 
              href="https://atlanticksolutions.com/about-us/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
            >
              Learn More About Us →
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-[#e95f33]" size={32} />
              </div>
              <div className="text-[#05264e] dark:text-foreground mb-2">{stat.value}</div>
              <div className="text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#05264e] dark:text-foreground text-center mb-12">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h4 className="text-[#05264e] dark:text-foreground mb-2">{founder.name}</h4>
                  <p className="text-primary mb-4">{founder.role}</p>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl items-center justify-center text-[#e95f33] hover:bg-primary hover:text-white transition-all"
                    aria-label={`${founder.name}'s LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
                <p className="text-foreground/70 leading-relaxed text-center">{founder.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#05264e] dark:text-foreground mb-4">Our Development Team</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Meet the talented professionals who bring your ideas to life with their expertise and dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="mb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all bg-primary/5">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-[#05264e] dark:text-foreground mb-1">{member.name}</h4>
                    <p className="text-primary text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 bg-accent dark:bg-muted border border-border rounded-full text-foreground/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#05264e] dark:text-foreground text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
              >
                <h4 className="text-[#05264e] dark:text-foreground mb-3">{value.title}</h4>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
