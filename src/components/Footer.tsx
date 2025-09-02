import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-cta-primary" />
              <span className="font-bold text-lg">IA Trends Brasil</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              O seu portal completo sobre tendências em Inteligência Artificial no Brasil. 
              Informações atualizadas, análises profundas e oportunidades de negócio.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                SEO Otimizado
              </span>
              <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">
                Conteúdo Atualizado
              </span>
              <span className="text-xs bg-tech-accent/10 text-tech-accent px-2 py-1 rounded">
                IA & Tecnologia
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Principais Tópicos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/ia-generativa-criacao-conteudo" className="hover:text-foreground">IA Generativa</Link></li>
              <li><Link to="/agentes-ia-sistemas-autonomos" className="hover:text-foreground">Agentes de IA</Link></li>
              <li><Link to="/ia-multimodal-multissensorial" className="hover:text-foreground">IA Multimodal</Link></li>
              <li><Link to="/ia-saude-diagnostico-medicina-personalizada" className="hover:text-foreground">IA na Saúde</Link></li>
              <li><Link to="/ciberseguranca-ia-defesa-ameaca" className="hover:text-foreground">Cibersegurança IA</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Parceiros</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://lovable.dev/?via=marcelo-barbosa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground flex items-center gap-1"
                >
                  Lovable IA <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://readdy.ai/invite/Abq8XgpzJGtX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground flex items-center gap-1"
                >
                  Readdy IA <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground flex items-center gap-1"
                >
                  Hostinger <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 IA Trends Brasil. Todos os direitos reservados.</p>
          <p className="mt-2">
            Conteúdo otimizado para SEO e tráfego orgânico no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;