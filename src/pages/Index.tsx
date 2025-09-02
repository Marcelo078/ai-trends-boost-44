import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CtaButton } from '@/components/ui/cta-button';
import CtaSection from '@/components/CtaSection';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Shield, 
  Heart,
  Building2,
  Microscope,
  Bot,
  Eye,
  Cpu,
  Clock,
  ArrowRight
} from 'lucide-react';

const Index = () => {
  const featuredArticles = [
    {
      title: "IA Generativa e Criação de Conteúdo: Revolução Criativa em 2025",
      description: "Como a inteligência artificial está transformando a produção de conteúdo, arte e mídia no Brasil",
      slug: "ia-generativa-criacao-conteudo",
      icon: <Brain className="h-5 w-5" />,
      category: "Tendência Principal",
      readTime: "8 min"
    },
    {
      title: "Agentes de IA e Sistemas Autônomos: O Futuro da Automação",
      description: "Sistemas inteligentes que operam independentemente estão revolucionando indústrias inteiras",
      slug: "agentes-ia-sistemas-autonomos",
      icon: <Bot className="h-5 w-5" />,
      category: "Inovação",
      readTime: "7 min"
    },
    {
      title: "IA na Saúde: Diagnóstico e Medicina Personalizada",
      description: "Transformação digital na medicina brasileira através da inteligência artificial",
      slug: "ia-saude-diagnostico-medicina-personalizada",
      icon: <Heart className="h-5 w-5" />,
      category: "Saúde & IA",
      readTime: "9 min"
    },
    {
      title: "Edge AI: IA Executada Localmente e Offline",
      description: "Processamento local de IA sem dependência da internet está ganhando força",
      slug: "edge-ai-executada-localmente-offline",
      icon: <Cpu className="h-5 w-5" />,
      category: "Tecnologia",
      readTime: "6 min"
    }
  ];

  const allArticles = [
    { title: "Ética e IA Explicável (XAI)", slug: "etica-ia-explicavel-xai", icon: <Shield className="h-4 w-4" /> },
    { title: "IA Multimodal (Multissensorial)", slug: "ia-multimodal-multissensorial", icon: <Eye className="h-4 w-4" /> },
    { title: "SEO para IA (GEO)", slug: "seo-ia-generative-engine-optimization", icon: <TrendingUp className="h-4 w-4" /> },
    { title: "Companheiros de IA", slug: "companheiros-ia-ai-companions", icon: <Bot className="h-4 w-4" /> },
    { title: "Modelos Menores e Ágeis", slug: "modelos-menores-ageis-small-language-models", icon: <Zap className="h-4 w-4" /> },
    { title: "Tradução de Vídeos com IA", slug: "traducao-videos-ia", icon: <Eye className="h-4 w-4" /> },
    { title: "Terapêutica Digital com IA", slug: "terapeutica-digital-ia-saude-mental", icon: <Heart className="h-4 w-4" /> },
    { title: "Centros de Dados de IA Verde", slug: "centros-dados-ia-infraestrutura-verde", icon: <Building2 className="h-4 w-4" /> },
    { title: "Visão Computacional", slug: "visao-computacional-processamento-imagens", icon: <Eye className="h-4 w-4" /> },
    { title: "IA nos Negócios e Marketing", slug: "ia-negocios-marketing-chatbots", icon: <Building2 className="h-4 w-4" /> },
    { title: "Cibersegurança com IA", slug: "ciberseguranca-ia-defesa-ameaca", icon: <Shield className="h-4 w-4" /> },
    { title: "IA na Educação", slug: "ia-educacao-aprendizagem-personalizada", icon: <Microscope className="h-4 w-4" /> },
    { title: "IA na Sustentabilidade", slug: "ia-sustentabilidade-mudancas-climaticas", icon: <Building2 className="h-4 w-4" /> },
    { title: "IA em Veículos Autônomos", slug: "ia-veiculos-autonomos-robotica", icon: <Cpu className="h-4 w-4" /> },
    { title: "IA Regulatória e Governança", slug: "ia-regulatoria-governanca-global", icon: <Shield className="h-4 w-4" /> },
    { title: "Vibe Coding - Programação com IA", slug: "vibe-coding-programacao-assistida-ia", icon: <Zap className="h-4 w-4" /> }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted/30 via-background to-muted/20 py-16 px-4">
        <div className="container text-center">
          <Badge variant="secondary" className="mb-4">
            <Clock className="h-3 w-3 mr-1" />
            Atualizado diariamente
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            IA Trends Brasil
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            O portal líder em tendências de Inteligência Artificial no Brasil. 
            Análises profundas, oportunidades de negócio e as últimas inovações em IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CtaButton asChild size="xl" variant="primary">
              <Link to="/ia-generativa-criacao-conteudo">
                Explorar IA Generativa <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CtaButton>
            <CtaButton asChild size="xl" variant="secondary">
              <Link to="/agentes-ia-sistemas-autonomos">
                Ver Agentes de IA <Brain className="ml-2 h-4 w-4" />
              </Link>
            </CtaButton>
          </div>
        </div>
      </section>

      <CtaSection position="top" variant="primary" />

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Artigos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={article.slug} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {article.icon}
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">• {article.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-cta-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription>
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CtaButton asChild variant="outline" className="w-full">
                    <Link to={`/${article.slug}`}>
                      Ler Artigo Completo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CtaButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection position="middle" variant="secondary" />

      {/* All Articles Grid */}
      <section className="py-16 px-4 bg-muted/10">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Todos os Artigos sobre IA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article, index) => (
              <Card key={article.slug} className="hover:shadow-soft transition-all duration-200 hover:border-cta-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {article.icon}
                    <h3 className="font-semibold text-sm">{article.title}</h3>
                  </div>
                  <CtaButton asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/${article.slug}`}>
                      Ler Agora <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CtaButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection position="bottom" variant="success" />

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-12">Por que Escolher IA Trends Brasil?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-cta-primary mb-2">20+</div>
              <h3 className="text-lg font-semibold mb-2">Artigos Especializados</h3>
              <p className="text-muted-foreground text-sm">Conteúdo profundo sobre todas as tendências de IA em 2025</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-success mb-2">100%</div>
              <h3 className="text-lg font-semibold mb-2">Foco no Brasil</h3>
              <p className="text-muted-foreground text-sm">Análises específicas para o mercado e realidade brasileira</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-tech-accent mb-2">2025</div>
              <h3 className="text-lg font-semibold mb-2">Sempre Atualizado</h3>
              <p className="text-muted-foreground text-sm">Informações mais recentes e tendências emergentes</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
