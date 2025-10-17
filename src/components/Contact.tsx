import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { FloatingBubbles } from './FloatingBubbles';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your server or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-accent dark:bg-background relative overflow-hidden">
      {/* Floating Bubbles */}
      <FloatingBubbles />
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
          <h2 className="text-[#05264e] dark:text-foreground mb-4">Get In Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#05264e] dark:text-foreground mb-6">Contact Information</h3>
              <p className="text-foreground/70 mb-8">
                We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#e95f33]" size={20} />
                </div>
                <div>
                  <h4 className="text-[#05264e] dark:text-foreground mb-1">Email</h4>
                  <a href="mailto:info@atlanticksolutions.com" className="text-foreground/70 hover:text-primary transition-colors">
                    info@atlanticksolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#e95f33]" size={20} />
                </div>
                <div>
                  <h4 className="text-[#05264e] dark:text-foreground mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#e95f33]" size={20} />
                </div>
                <div>
                  <h4 className="text-[#05264e] dark:text-foreground mb-1">Location</h4>
                  <p className="text-foreground/70">
                    Global Services<br />
                    Remote & On-site Available
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-[#05264e] dark:text-foreground mb-4">Business Hours</h4>
              <div className="space-y-2 text-foreground/70">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#05264e] dark:text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-input-background dark:bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#05264e] dark:text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-input-background dark:bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#05264e] dark:text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="bg-input-background dark:bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#05264e] dark:text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="bg-input-background dark:bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                  <Send className="ml-2" size={18} />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
