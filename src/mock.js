// Mock data for Ishita Environment Landing Page

export const services = [
  {
    id: 1,
    title: "Sewage Treatment Plants (STP)",
    description: "Design and execute STPs ranging from 5 KLD to 2 MLD for residential, commercial, institutional, and industrial applications.",
    technologies: ["MBBR", "SBR", "MBR", "Activated Sludge"],
    icon: "droplets"
  },
  {
    id: 2,
    title: "Effluent Treatment Plants (ETP)",
    description: "Customized ETP solutions for industries with complex wastewater characteristics including Zero Liquid Discharge systems.",
    technologies: ["ZLD", "MEE Integration", "Sludge Handling"],
    icon: "factory"
  },
  {
    id: 3,
    title: "Water Treatment Plants (WTP)",
    description: "Complete solutions for treatment of raw and surface water with advanced filtration and purification systems.",
    technologies: ["Pressure Sand Filters", "Activated Carbon", "Clarifiers"],
    icon: "waves"
  },
  {
    id: 4,
    title: "RO, DM & UF Plants",
    description: "Reverse Osmosis, Demineralization, and Ultrafiltration systems for process water, boiler feed, and drinking water.",
    technologies: ["RO Systems", "DM Plants", "UF Systems"],
    icon: "filter"
  },
  {
    id: 5,
    title: "Fire Fighting Systems",
    description: "Comprehensive fire protection solutions including hydrant systems, sprinklers, and gas suppression systems as per NBC 2016.",
    technologies: ["Hydrant Systems", "Sprinklers", "Foam Systems"],
    icon: "flame"
  },
  {
    id: 6,
    title: "AMC - Annual Maintenance Contract",
    description: "Comprehensive maintenance services ensuring uninterrupted plant performance, regulatory compliance, and optimal efficiency throughout the year.",
    technologies: ["Preventive Maintenance", "24/7 Support", "Regular Inspections"],
    icon: "headphones"
  },
  {
    id: 7,
    title: "Pipeline & O&M Services",
    description: "Complete turnkey solutions for pipeline works and ongoing operation & maintenance services.",
    technologies: ["Pipeline Design", "Installation", "Commissioning"],
    icon: "settings"
  }
];

export const technologies = [
  {
    id: 1,
    name: "MBBR (Moving Bed Biofilm Reactor)",
    description: "Highly efficient biological treatment process using free-floating carrier media to support biofilm growth, providing large surface area for microorganisms to break down organic pollutants.",
    advantages: ["High BOD/COD removal efficiency", "Compact and modular design", "Low sludge generation", "Stable performance with load fluctuations"]
  },
  {
    id: 2,
    name: "SBR (Sequencing Batch Reactor)",
    description: "Time-sequenced wastewater treatment where equalization, aeration, and clarification occur in a single tank through cyclic operations, ensuring excellent treated water quality.",
    advantages: ["Fully automated cyclic operation", "Superior nutrient removal (BOD, COD, TSS, nitrogen)", "No separate clarifier required", "Consistent treated water quality suitable for reuse"]
  },
  {
    id: 3,
    name: "MBR (Membrane Bioreactor)",
    description: "Combines biological treatment with membrane filtration (UF membranes) to produce crystal-clear, high-quality treated water suitable for reuse applications.",
    advantages: ["Very high filtration quality (TSS ~0 mg/l)", "Compact footprint — up to 50% smaller", "Pathogen-free, reusable treated water", "Fully enclosed, odor-free operation"]
  },
  {
    id: 4,
    name: "Conventional Activated Sludge Process",
    description: "Proven, reliable technology using aeration and secondary clarification for effective wastewater treatment across various applications.",
    advantages: ["Time-tested technology", "Reliable performance", "Cost-effective for larger capacities", "Scalable solution"]
  }
];

export const industries = [
  "Cement Plants",
  "Textile Industries",
  "Hospitals & Hotels",
  "Residential Townships",
  "Commercial Buildings",
  "Manufacturing Units",
  "Food & Beverage",
  "Pharmaceuticals"
];

export const whyChooseUs = [
  {
    title: "Proven Expertise",
    description: "Strong technical expertise and practical field experience in environmental engineering.",
    icon: "award"
  },
  {
    title: "Customized Solutions",
    description: "Site-specific designs tailored to your operational needs and requirements.",
    icon: "wrench"
  },
  {
    title: "Quality Assured",
    description: "High-quality equipment and components ensuring long-term reliability.",
    icon: "shield-check"
  },
  {
    title: "Timely Execution",
    description: "Strong project management with on-time delivery and commissioning.",
    icon: "clock"
  },
  {
    title: "Compliance",
    description: "All systems meet CPCB/SPCB norms and regulatory requirements.",
    icon: "check-circle"
  },
  {
    title: "After-Sales Support",
    description: "Comprehensive AMC and O&M services for uninterrupted performance.",
    icon: "headphones"
  }
];

// Mock form submission
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      resolve({ success: true, message: 'Thank you! We will contact you soon.' });
    }, 1000);
  });
};

export const submitQuoteRequest = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Quote request submitted:', formData);
      resolve({ success: true, message: 'Quote request received! Our team will reach out shortly.' });
    }, 1000);
  });
};