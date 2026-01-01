import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Droplets } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const STPService = () => {
  const navigate = useNavigate();

  const features = [
    'High BOD/COD removal efficiency',
    'Compact and modular design',
    'Low operation & maintenance cost',
    'Easy installation - civil or containerized',
    'Meets CPCB/SPCB discharge norms',
    'Suitable for water reuse applications'
  ];

  const technologies = [
    {
      name: 'MBBR (Moving Bed Biofilm Reactor)',
      description: 'Highly efficient biological treatment using free-floating carrier media. Ideal for decentralized and small-to-medium STPs.',
      applications: 'Hotels, hospitals, residential complexes, industrial wastewater'
    },
    {
      name: 'SBR (Sequencing Batch Reactor)',
      description: 'Time-sequenced treatment with fully automated cyclic operation. Superior nutrient removal and consistent treated water quality.',
      applications: 'Townships, municipalities, large commercial complexes'
    },
    {
      name: 'MBR (Membrane Bioreactor)',
      description: 'Combines biological treatment with membrane filtration for crystal-clear water quality. Up to 50% smaller footprint.',
      applications: 'Hospitals, premium residential projects, zero-discharge applications'
    },
    {
      name: 'Conventional Activated Sludge',
      description: 'Proven, reliable technology with time-tested performance. Cost-effective for larger capacities.',
      applications: 'Large industrial facilities, municipal projects'
    }
  ];

  const applications = [
    'Residential Societies & Apartments',
    'Hotels & Resorts',
    'Hospitals & Healthcare Facilities',
    'Commercial Buildings & Offices',
    'Educational Institutions',
    'Industrial Facilities',
    'Municipal Projects'
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
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Droplets className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Sewage Treatment Plants (STP)</h1>
              <p className="text-xl text-emerald-200 mt-2">Capacity: 5 KLD to 2 MLD</p>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Advanced and reliable STP solutions designed for high efficiency, low power consumption, and long-term reliability.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Ishita Environment specializes in designing, manufacturing, installing, and commissioning Sewage Treatment Plants ranging from 5 KLD to 2 MLD. Our STP systems are engineered for diverse applications including hotels, hospitals, industries, residential societies, commercial complexes, and municipal projects.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We employ modern technologies including MBBR, SBR, MBR, and Conventional Activated Sludge, ensuring that each plant meets required discharge norms and delivers superior treated water quality suitable for reuse.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Treatment Technologies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-emerald-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">{tech.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{tech.description}</p>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-emerald-900 mb-1">Best For:</p>
                      <p className="text-sm text-emerald-700">{tech.applications}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Applications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center">
                  <p className="text-slate-800 font-medium">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">Contact us for a customized STP solution for your facility</p>
          <Button 
            onClick={() => navigate('/#contact')} 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-slate-100"
          >
            Request Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default STPService;