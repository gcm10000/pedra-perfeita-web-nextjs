
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-masonry-dark text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Serviços de Alvenaria com Excelência</h1>
          <p className="text-xl mb-8">Olá, sou João Silva, pedreiro profissional com mais de 15 anos de experiência. Transformo seus projetos em realidade com qualidade e dedicação.</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-masonry-accent hover:bg-masonry-accent/90 text-white px-8 py-6 text-lg">
              <a href="#servicos" className="flex items-center">
                Meus Serviços <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <a href="#contato">Solicitar Orçamento</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
