'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contato" className="bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Entre em Contato</h2>
          <p className="text-masonry-medium">
            Estou disponível para orçamentos e dúvidas sobre seu projeto.
            Preencha o formulário abaixo que responderei o mais breve possível.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-masonry-dark mb-1">Nome Completo</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-masonry-dark mb-1">E-mail</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu.email@exemplo.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-masonry-dark mb-1">Telefone</label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-masonry-dark mb-1">Mensagem</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Descreva seu projeto ou dúvida aqui..."
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-masonry-accent hover:bg-masonry-dark">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div className="bg-masonry-light rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-masonry-dark">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-masonry-accent mt-1" />
                <div>
                  <h4 className="font-medium text-masonry-dark">Área de Atendimento</h4>
                  <p className="text-masonry-medium">São Paulo e Grande São Paulo</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-masonry-accent mt-1" />
                <div>
                  <h4 className="font-medium text-masonry-dark">Telefone</h4>
                  <p className="text-masonry-medium">(11) 98765-4321</p>
                  <p className="text-masonry-medium">(11) 3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-masonry-accent mt-1" />
                <div>
                  <h4 className="font-medium text-masonry-dark">E-mail</h4>
                  <p className="text-masonry-medium">joao.silva@email.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-masonry-accent mt-1" />
                <div>
                  <h4 className="font-medium text-masonry-dark">Horário de Atendimento</h4>
                  <p className="text-masonry-medium">Segunda a Sexta: 7h às 18h</p>
                  <p className="text-masonry-medium">Sábado: 7h às 12h</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 h-48 bg-gray-300 rounded-lg">
              {/* Map would go here in a real implementation */}
              <div className="w-full h-full flex items-center justify-center text-masonry-medium">
                Área de Atendimento: São Paulo e Região
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
