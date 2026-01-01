import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Droplets, Factory, Waves, Filter, Flame, Headphones, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'stp',
      title: 'Sewage Treatment Plants (STP)',
      description: 'Design and execute STPs ranging from 5 KLD to 2 MLD for residential, commercial, institutional, and industrial applications.',
      icon: Droplets,
      color: 'emerald',
      path: '/services/stp'
    },
    {
      id: 'etp',
      title: 'Effluent Treatment Plants (ETP)',
      description: 'Customized ETP solutions for industries with complex wastewater characteristics including Zero Liquid Discharge systems.',
      icon: Factory,
      color: 'blue',
      path: '/services/etp'
    },
    {
      id: 'wtp',
      title: 'Water Treatment Plants (WTP)',
      description: 'Complete solutions for treatment of raw and surface water with advanced filtration and purification systems.',
      icon: Waves,
      color: 'cyan',
      path: '/services/wtp'
    },
    {
      id: 'ro',
      title: 'RO, DM & UF Plants',
      description: 'Reverse Osmosis, Demineralization, and Ultrafiltration systems for process water, boiler feed, and drinking water.',
      icon: Filter,
      color: 'teal',
      path: '/services/ro-dm-uf'
    },
    {
      id: 'fire',
      title: 'Fire Fighting Systems',
      description: 'Comprehensive fire protection solutions including hydrant systems, sprinklers, and gas suppression systems as per NBC 2016.',
      icon: Flame,
      color: 'red',
      path: '/services/fire-fighting'
    },
    {
      id: 'amc',
      title: 'AMC - Annual Maintenance Contract',
      description: 'Comprehensive maintenance services ensuring uninterrupted plant performance and regulatory compliance.',
      icon: Headphones,
      color: 'purple',
      path: '/services/amc'
    },
    {
      id: 'pipeline',
      title: 'Pipeline & O&M Services',
      description: 'Complete turnkey solutions for pipeline works and ongoing operation & maintenance services.',
      icon: Settings,
      color: 'slate',
      path: '/services/pipeline'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate('/')} 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="mr-2" /> Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comprehensive environmental engineering solutions for water, wastewater, and fire protection systems
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-slate-100 hover:border-emerald-300 group"
                  onClick={() => navigate(service.path)}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;