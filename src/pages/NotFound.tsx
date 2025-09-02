import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import { CtaButton } from '@/components/ui/cta-button';
import { Brain, Home, Search } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <Brain className="h-24 w-24 mx-auto text-cta-primary mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            404
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            Oops! Esta página sobre IA ainda não existe
          </p>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            A página que você está procurando pode ter sido movida, removida ou ainda não foi criada. 
            Explore nossos artigos sobre as principais tendências de Inteligência Artificial no Brasil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton asChild size="lg" variant="primary">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Voltar ao Início
              </Link>
            </CtaButton>
            
            <CtaButton asChild size="lg" variant="secondary">
              <Link to="/ia-generativa-criacao-conteudo">
                <Search className="mr-2 h-4 w-4" />
                Ver IA Generativa
              </Link>
            </CtaButton>
          </div>

          {/* Sugestões de artigos */}
          <div className="mt-12 p-6 bg-muted/20 rounded-lg border">
            <h2 className="text-lg font-semibold mb-4">Artigos Populares sobre IA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <Link 
                to="/agentes-ia-sistemas-autonomos" 
                className="text-cta-primary hover:underline"
              >
                → Agentes de IA e Sistemas Autônomos
              </Link>
              <Link 
                to="/ia-saude-diagnostico-medicina-personalizada" 
                className="text-cta-primary hover:underline"
              >
                → IA na Saúde e Medicina
              </Link>
              <Link 
                to="/ia-generativa-criacao-conteudo" 
                className="text-cta-primary hover:underline"
              >
                → IA Generativa e Criação de Conteúdo
              </Link>
              <Link 
                to="/" 
                className="text-cta-primary hover:underline"
              >
                → Todas as Tendências de IA 2025
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
