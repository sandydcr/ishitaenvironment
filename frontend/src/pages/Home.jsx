import React, { useState, useEffect } from 'react';
import { 
  Droplets, Factory, Waves, Filter, Flame, Settings, 
  Award, Wrench, ShieldCheck, Clock, CheckCircle, Headphones,
  Phone, Mail, MapPin, ArrowRight, Menu, X 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import { services, technologies, industries, whyChooseUs, submitContactForm } from '../mock';

const iconMap = {
  droplets: Droplets,
  factory: Factory,
  waves: Waves,
  filter: Filter,
  flame: Flame,
  settings: Settings,
  award: Award,
  wrench: Wrench,
  'shield-check': ShieldCheck,
  clock: Clock,
  'check-circle': CheckCircle,
  headphones: Headphones
};

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast.success(result.message);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="bg-white rounded-lg shadow-lg p-2 border-2 border-emerald-100">
                <img 
                  src="https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/59uhjpwd_ChatGPT%20Image%20Dec%207%2C%202025%2C%2010_10_36%20AM.png" 
                  alt="Ishita Environment Logo" 
                  className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-500 cursor-pointer"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('technologies')} className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Technologies
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Get Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-3 border-t border-slate-200">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded">
                Services
              </button>
              <button onClick={() => scrollToSection('technologies')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded">
                Technologies
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded">
                Contact
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1533077162801-86490c593afb" 
            alt="Sewage Treatment Plant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-teal-900/90 to-cyan-900/95"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced Sewage Treatment Solutions
              <span className="block text-emerald-300 mt-2">From 5 KLD to 2 MLD</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Leading engineering company dedicated to providing advanced and reliable STP solutions across India. Specializing in MBBR, SBR, MBR, and Conventional technologies with turnkey execution and after-sales service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('services')} 
                size="lg" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg group shadow-xl"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 mt-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '15+', label: 'Years Experience' },
              { number: '100%', label: 'CPCB Compliant' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl border border-emerald-100">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">About Ishita Environment</h2>
              <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/mltu2hku_WhatsApp%20Image%202025-12-08%20at%2015.52.59.jpeg" 
                  alt="Ishita Environment STP Plant" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Leading STP Solutions Provider</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Ishita Environment is a leading engineering company dedicated to providing advanced and reliable Sewage Treatment Plant solutions across India. We design, manufacture, install, and commission STPs ranging from 5 KLD to 2 MLD.
                </p>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Our STP systems are engineered for high efficiency, low power consumption, compact design, and long-term reliability. We specialize in modern technologies including MBBR, SBR, MBR, RBC, and Conventional Activated Sludge, ensuring each plant meets required discharge norms.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Compact & Modular Construction</h4>
                      <p className="text-slate-600 text-sm">Space-efficient design suitable for any location</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Low Operation & Maintenance Cost</h4>
                      <p className="text-slate-600 text-sm">Minimal manpower with reliable performance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">High Treatment Efficiency</h4>
                      <p className="text-slate-600 text-sm">Superior treated water quality for reuse applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive environmental engineering solutions for all your water treatment needs</p>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              const servicePath = service.id === 1 ? '/services/stp' : '/services';
              return (
                <Card 
                  key={service.id} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-100 hover:border-emerald-200 group cursor-pointer"
                  onClick={() => window.location.href = servicePath}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Images Section - STP/ETP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">STP & ETP Installations</h2>
            <p className="text-slate-600">Our sewage and effluent treatment plant projects</p>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/s9k2ozyv_WhatsApp%20Image%202025-12-06%20at%2015.58.07.jpeg',
                title: 'STP Installation Project'
              },
              {
                url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/bv2slsvi_WhatsApp%20Image%202025-12-06%20at%2015.58.17.jpeg',
                title: 'Treatment Plant Facility'
              },
              {
                url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/bbzfp1ip_WhatsApp%20Image%202025-12-06%20at%2015.58.18.jpeg',
                title: 'Processing Unit'
              },
              {
                url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/mltu2hku_WhatsApp%20Image%202025-12-08%20at%2015.52.59.jpeg',
                title: 'Complete STP System'
              },
              {
                url: 'https://images.unsplash.com/photo-1533077162801-86490c593afb',
                title: 'Treatment Tanks & Clarifiers'
              },
              {
                url: 'https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4',
                title: 'Aerial Treatment Facility'
              },
              {
                url: 'https://images.unsplash.com/photo-1622322977885-8ee6d45ea016',
                title: 'Industrial Water Treatment'
              },
              {
                url: 'https://images.pexels.com/photos/24802113/pexels-photo-24802113.jpeg',
                title: 'Wastewater Processing'
              },
              {
                url: 'https://images.pexels.com/photos/1259924/pexels-photo-1259924.jpeg',
                title: 'Treatment Infrastructure'
              }
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg h-64">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-lg p-6">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fire Fighting Systems Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Fire Fighting Systems</h2>
            <p className="text-slate-600">Professional fire protection and safety installations</p>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/xukmvltd_-3umq6unj.webp',
                title: 'Fire Hose Reel System'
              },
              {
                url: 'https://images.unsplash.com/photo-1707938852794-7d26e80c6519',
                title: 'Fire Fighting Equipment'
              },
              {
                url: 'https://images.unsplash.com/photo-1760228793179-aeb9b305861f',
                title: 'Industrial Fire Hose Installation'
              },
              {
                url: 'https://images.unsplash.com/photo-1735321626737-f80d9d2076c9',
                title: 'Fire Hydrant System'
              },
              {
                url: 'https://images.unsplash.com/photo-1695578882970-8ae51eed7d2a',
                title: 'Industrial Fire Hydrant'
              },
              {
                url: 'https://images.unsplash.com/photo-1766244658779-862e7bf46a49',
                title: 'Fire Safety Equipment'
              }
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg h-64">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-lg p-6">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Advanced Technologies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Industry-leading treatment technologies for optimal performance</p>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech) => (
              <Card key={tech.id} className="hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">{tech.name}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-slate-900 mb-3">Key Advantages:</h4>
                  <ul className="space-y-2">
                    {tech.advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-slate-700">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Ishita Environment</h2>
            <p className="text-slate-600">Your trusted partner for environmental solutions</p>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-xl hover:bg-emerald-50 transition-colors group">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <IconComponent className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-slate-600">Diverse sectors, tailored solutions</p>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-100 text-center">
                <p className="text-slate-800 font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Valued Clients</h2>
            <p className="text-slate-600 text-lg">Trusted by leading organizations across industries</p>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/iqwddqc7_WhatsApp%20Image%202025-12-09%20at%2015.36.55%20%282%29.jpeg',
                  name: 'JM Laboratories'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/snfvsqob_WhatsApp%20Image%202025-12-09%20at%2015.36.55%20%283%29.jpeg',
                  name: 'JSW Energy'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/6ydrmcen_WhatsApp%20Image%202025-12-09%20at%2015.36.55%20%285%29.jpeg',
                  name: 'Life Vision Healthcare'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/6k8tpnx7_WhatsApp%20Image%202025-12-09%20at%2015.36.54%20%281%29.jpeg',
                  name: 'Chatha Foods'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/1bfob9q7_WhatsApp%20Image%202025-12-09%20at%2015.36.54%20%283%29.jpeg',
                  name: 'City Superspecialty Hospital'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/x0ekf67l_WhatsApp%20Image%202025-12-09%20at%2015.36.54.jpeg',
                  name: 'Aastha Hospital IVF Centre'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/w681noyq_WhatsApp%20Image%202025-12-09%20at%2015.36.55%20%281%29.jpeg',
                  name: 'Fortis Hospital'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/zdhh8tp1_WhatsApp%20Image%202025-12-09%20at%2015.36.55%20%284%29.jpeg',
                  name: 'Arogyam Hospital'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/04w0gy7r_WhatsApp%20Image%202025-12-09%20at%2015.36.55%20%285%29.jpeg',
                  name: 'Bansal Hospital'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/s7xl0yma_WhatsApp%20Image%202025-12-09%20at%2015.36.55%20%286%29.jpeg',
                  name: 'RML Hospital'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/gqops1dc_WhatsApp%20Image%202025-12-09%20at%2015.36.55%20%287%29.jpeg',
                  name: 'Max Healthcare'
                },
                {
                  url: 'https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/3k4iaz0s_WhatsApp%20Image%202025-12-09%20at%2015.36.55%20%288%29.jpeg',
                  name: 'AIIMS'
                }
              ].map((client, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-emerald-300 flex items-center justify-center group aspect-square"
                >
                  <img 
                    src={client.url} 
                    alt={client.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-700 text-lg font-medium mb-2">
              Serving 100+ satisfied clients across India
            </p>
            <p className="text-slate-600">
              From hospitals and industries to commercial establishments
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-slate-600">Ready to start your project? Contact us today</p>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600">#1 Manakpur Lodhimajra<br />Baddi, Himachal Pradesh<br />India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600">+91 7087304101</p>
                    <p className="text-slate-600">+91 8894001157</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">Ishitaenvironment@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                <h4 className="font-semibold text-slate-900 mb-2">Business Hours</h4>
                <p className="text-slate-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-slate-700">Sunday: Closed</p>
                <p className="text-sm text-slate-600 mt-2">Emergency services available 24/7</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-2 border-slate-100">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="border-slate-300"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="border-slate-300"
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="border-slate-300"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        rows={5}
                        className="border-slate-300"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_eco-solutions-hub/artifacts/59uhjpwd_ChatGPT%20Image%20Dec%207%2C%202025%2C%2010_10_36%20AM.png" 
                    alt="Ishita Environment Logo" 
                    className="h-16 w-auto object-contain hover:scale-105 transition-all duration-300"
                    style={{ filter: 'brightness(1.1) drop-shadow(0 2px 8px rgba(255,255,255,0.3))' }}
                  />
                </div>
              </div>
              <p className="text-slate-400 text-sm">Leading provider of sustainable water and wastewater treatment solutions across India.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-emerald-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-emerald-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('technologies')} className="text-slate-400 hover:text-emerald-400 transition-colors">Technologies</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Sewage Treatment Plants</li>
                <li>Effluent Treatment Plants</li>
                <li>Water Treatment Plants</li>
                <li>Fire Fighting Systems</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Baddi, Himachal Pradesh</li>
                <li>+91 7087304101</li>
                <li>+91 8894001157</li>
                <li>Ishitaenvironment@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Ishita Environment. All rights reserved. | CPCB/SPCB Compliant Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;