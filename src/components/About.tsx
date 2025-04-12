
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const skills = [
    "Alvenaria residencial e comercial",
    "Reformas e acabamentos",
    "Assentamento de pisos e revestimentos",
    "Construção de muros e fundações",
    "Instalações hidráulicas básicas",
    "Acabamentos de alta qualidade"
  ];

  return (
    <section id="sobre" className="bg-masonry-light">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1345&q=80" 
                alt="João Silva trabalhando em uma obra" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-masonry-accent text-white p-4 rounded-lg shadow-lg md:w-48">
              <p className="font-bold text-2xl">15+</p>
              <p className="text-sm">Anos de experiência</p>
            </div>
          </div>
          
          <div>
            <h2 className="section-heading">Sobre Mim</h2>
            <p className="mb-6 text-masonry-medium">
              Sou João Silva, pedreiro profissional com mais de 15 anos de experiência na construção civil. 
              Comecei minha jornada como ajudante e, ao longo dos anos, aperfeiçoei minhas habilidades 
              através de cursos técnicos e prática constante. Hoje, trabalho de forma autônoma, 
              oferecendo serviços de qualidade para residências e estabelecimentos comerciais.
            </p>
            
            <h3 className="section-subheading">Minhas Especialidades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-masonry-accent" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <p className="text-masonry-medium">
              Meu compromisso é com a qualidade do trabalho e a satisfação dos clientes. 
              Utilizo técnicas tradicionais combinadas com métodos modernos para garantir 
              um resultado durável e esteticamente agradável em cada projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
