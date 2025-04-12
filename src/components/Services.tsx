
import React from 'react';
import { BrickWall, Building, Home, LineChart, Wrench, Shovel } from 'lucide-react';

const serviceList = [
  {
    title: "Alvenaria Residencial",
    description: "Construção e reforma de casas, apartamentos e espaços residenciais com acabamento de qualidade.",
    icon: Home
  },
  {
    title: "Construção Comercial",
    description: "Projetos para espaços comerciais, com foco em funcionalidade, segurança e estética adequada ao negócio.",
    icon: Building
  },
  {
    title: "Muros e Estruturas",
    description: "Construção de muros, cercas e estruturas de contenção com materiais de primeira linha.",
    icon: BrickWall
  },
  {
    title: "Fundações",
    description: "Desenvolvimento e execução de fundações sólidas para garantir a segurança e durabilidade da obra.",
    icon: Shovel
  },
  {
    title: "Reformas",
    description: "Serviços de reforma e renovação para atualizar e melhorar espaços existentes.",
    icon: Wrench
  },
  {
    title: "Consultoria",
    description: "Análise e consultoria técnica para projetos, identificando as melhores soluções construtivas.",
    icon: LineChart
  }
];

const Services = () => {
  return (
    <section id="servicos" className="bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Nossos Serviços</h2>
          <p className="text-masonry-medium">
            Oferecemos uma ampla gama de serviços de alvenaria e construção, 
            adaptados às necessidades específicas de cada cliente e projeto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow hover:border-masonry-accent/30"
            >
              <div className="bg-masonry-light inline-flex p-3 rounded-lg mb-4">
                <service.icon className="h-8 w-8 text-masonry-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-masonry-dark">{service.title}</h3>
              <p className="text-masonry-medium">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
