import React from 'react';
import { CtaButton } from '@/components/ui/cta-button';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';

interface CtaSectionProps {
  position?: 'top' | 'middle' | 'bottom';
  variant?: 'primary' | 'secondary' | 'success';
}

const CtaSection: React.FC<CtaSectionProps> = ({ position = 'middle', variant = 'primary' }) => {
  const ctaLinks = [
    {
      title: "Ganhe R$ 20 e Mais Benefícios com Nossos Parceiros Financeiros",
      description: "Abra sua conta em poucos minutos, resgate cupons exclusivos e faça seu dinheiro render muito mais!",
      url: "https://renda-boost.lovable.app",
      buttonText: "Aproveite esta oferta agora",
      icon: <TrendingUp className="h-4 w-4" />
    },
    {
      title: "Lovable IA - Crie Aplicativos NOCODE em Segundos",
      description: "Plataforma de IA para criar aplicações web automaticamente. Fundada em 2023, revolucionando o desenvolvimento.",
      url: "https://lovable.dev/?via=marcelo-barbosa",
      buttonText: "Clique aqui e garanta já",
      icon: <Star className="h-4 w-4" />
    },
    {
      title: "Fórmula Negócio Online - Alex Vargas",
      description: "Todos começaram do zero com o FNO. Hoje mudaram de vida. Aprenda os segredos do marketing digital.",
      url: "https://go.hotmart.com/E11195793E?ap=305a",
      buttonText: "Transforme sua vida agora",
      icon: <ExternalLink className="h-4 w-4" />
    }
  ];

  const getRandomCta = () => {
    const randomIndex = Math.floor(Math.random() * ctaLinks.length);
    return ctaLinks[randomIndex];
  };

  const selectedCta = getRandomCta();

  return (
    <div className="my-8 p-6 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg border shadow-soft">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-3">
          {selectedCta.icon}
          <h3 className="text-lg font-semibold text-foreground">
            {selectedCta.title}
          </h3>
        </div>
        <p className="text-muted-foreground mb-4 text-sm">
          {selectedCta.description}
        </p>
        <CtaButton
          asChild
          variant={variant}
          size="lg"
          className="animate-pulse-soft"
        >
          <a
            href={selectedCta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            {selectedCta.buttonText}
            <ExternalLink className="h-4 w-4" />
          </a>
        </CtaButton>
      </div>
    </div>
  );
};

export default CtaSection;