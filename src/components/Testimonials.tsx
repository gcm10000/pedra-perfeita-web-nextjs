
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Proprietário Residencial",
    quote: "O trabalho do Pedra Perfeita superou todas as minhas expectativas. A equipe foi profissional, pontual e o acabamento foi impecável. Recomendo fortemente.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Maria Oliveira",
    role: "Empresária",
    quote: "Contratei para a reforma do meu comércio e fiquei extremamente satisfeita. Entregaram dentro do prazo, com qualidade excepcional e sem surpresas no orçamento.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Pedro Santos",
    role: "Engenheiro Civil",
    quote: "Como profissional da área, sou exigente com os serviços de alvenaria. Esta equipe demonstrou conhecimento técnico e habilidade notáveis. Trabalho de excelência.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-masonry-light">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">O Que Nossos Clientes Dizem</h2>
          <p className="text-masonry-medium">
            A satisfação dos nossos clientes é nossa melhor recomendação. 
            Confira alguns depoimentos de quem já contou com nossos serviços.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-masonry-dark">{testimonial.name}</h3>
                    <p className="text-sm text-masonry-medium">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-masonry-accent text-masonry-accent" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-masonry-medium italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
