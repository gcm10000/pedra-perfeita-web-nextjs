'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Residência Moderna",
    category: "Construção Residencial",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Construção completa de uma residência moderna com acabamentos premium e soluções sustentáveis."
  },
  {
    id: 2,
    title: "Espaço Comercial",
    category: "Construção Comercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Reforma de espaço comercial com foco em acessibilidade e design contemporâneo."
  },
  {
    id: 3,
    title: "Renovação Completa",
    category: "Reforma",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    description: "Renovação completa de uma casa antiga, preservando elementos históricos e atualizando instalações."
  },
  {
    id: 4,
    title: "Condomínio Residencial",
    category: "Construção Residencial",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Projeto de construção de condomínio residencial com áreas comuns e 12 unidades habitacionais."
  },
  {
    id: 5,
    title: "Muro de Contenção",
    category: "Estruturas",
    image: "https://images.unsplash.com/photo-1500630417200-63156e226754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    description: "Construção de muro de contenção em terreno acidentado com técnicas avançadas de estabilização."
  }
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <section id="projetos" className="bg-masonry-dark text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos Realizados</h2>
          <p className="text-gray-300">
            Conheça alguns dos nossos principais projetos concluídos com excelência e satisfação dos clientes.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-masonry-accent text-white px-3 py-1 rounded">
                {currentProject.category}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">{currentProject.title}</h3>
            <p className="mb-6 text-gray-300">{currentProject.description}</p>
            
            <div className="flex justify-between items-center">
              <div className="text-gray-400">
                Projeto {currentProjectIndex + 1} de {projects.length}
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={prevProject}
                  className="p-2 bg-gray-800 rounded-full hover:bg-masonry-accent transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextProject}
                  className="p-2 bg-gray-800 rounded-full hover:bg-masonry-accent transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-2 mt-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                index === currentProjectIndex ? "bg-masonry-accent w-full" : "bg-gray-700 w-full"
              }`}
              onClick={() => setCurrentProjectIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
