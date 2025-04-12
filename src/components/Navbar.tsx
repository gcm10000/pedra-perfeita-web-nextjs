'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Hammer } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-masonry-accent" />
            <span className="font-bold text-xl text-masonry-dark">João Silva</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-masonry-dark hover:text-masonry-accent transition-colors">Início</a>
            <a href="#sobre" className="text-masonry-dark hover:text-masonry-accent transition-colors">Sobre</a>
            <a href="#servicos" className="text-masonry-dark hover:text-masonry-accent transition-colors">Serviços</a>
            <a href="#projetos" className="text-masonry-dark hover:text-masonry-accent transition-colors">Projetos</a>
            <a href="#depoimentos" className="text-masonry-dark hover:text-masonry-accent transition-colors">Depoimentos</a>
          </div>
          
          <Button className="hidden md:block bg-masonry-accent hover:bg-masonry-dark">
            <a href="#contato">Contato</a>
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-masonry-dark"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#inicio" className="text-masonry-dark hover:text-masonry-accent transition-colors" onClick={toggleMenu}>Início</a>
            <a href="#sobre" className="text-masonry-dark hover:text-masonry-accent transition-colors" onClick={toggleMenu}>Sobre</a>
            <a href="#servicos" className="text-masonry-dark hover:text-masonry-accent transition-colors" onClick={toggleMenu}>Serviços</a>
            <a href="#projetos" className="text-masonry-dark hover:text-masonry-accent transition-colors" onClick={toggleMenu}>Projetos</a>
            <a href="#depoimentos" className="text-masonry-dark hover:text-masonry-accent transition-colors" onClick={toggleMenu}>Depoimentos</a>
            <Button className="w-full bg-masonry-accent hover:bg-masonry-dark" onClick={toggleMenu}>
              <a href="#contato">Contato</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
