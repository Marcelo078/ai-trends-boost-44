import React from 'react';
import Layout from './Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import CtaSection from './CtaSection';
import { Clock, Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ArticleLayoutProps {
  title: string;
  description: string;
  readTime: string;
  category: string;
  publishDate: string;
  author?: string;
  children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  description,
  readTime,
  category,
  publishDate,
  author = "IA Trends Brasil",
  children
}) => {
  return (
    <Layout>
      <div className="py-8 px-4">
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Início
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <Badge variant="outline" className="mb-4">{category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b py-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime} de leitura</span>
              </div>
            </div>
          </header>

          <CtaSection position="top" variant="primary" />

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {children}
          </article>

          <CtaSection position="middle" variant="secondary" />

          {/* FAQ Section */}
          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Como a IA está impactando o mercado brasileiro?</h3>
                  <p className="text-muted-foreground">
                    O Brasil está experimentando uma transformação digital acelerada com a adoção de IA em setores como saúde, 
                    educação, agricultura e serviços financeiros. Empresas brasileiras estão investindo pesadamente em soluções 
                    de inteligência artificial para melhorar a eficiência e competitividade.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quais são as principais tendências de IA para 2025?</h3>
                  <p className="text-muted-foreground">
                    As principais tendências incluem IA generativa, agentes autônomos, edge AI, IA multimodal, 
                    e soluções específicas para sustentabilidade e saúde mental. O foco está na democratização 
                    da tecnologia e aplicações práticas no dia a dia.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Como começar uma carreira em IA no Brasil?</h3>
                  <p className="text-muted-foreground">
                    Recomenda-se começar com cursos online, participar de comunidades tech, desenvolver projetos práticos 
                    e se especializar em áreas específicas como machine learning, processamento de linguagem natural ou 
                    visão computacional. O mercado brasileiro oferece crescentes oportunidades.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <CtaSection position="bottom" variant="success" />

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6 text-center">Artigos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" asChild className="h-auto p-4 justify-start">
                <Link to="/ia-generativa-criacao-conteudo">
                  <div className="text-left">
                    <div className="font-semibold">IA Generativa e Criação de Conteúdo</div>
                    <div className="text-sm text-muted-foreground mt-1">Revolução criativa em 2025</div>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto p-4 justify-start">
                <Link to="/agentes-ia-sistemas-autonomos">
                  <div className="text-left">
                    <div className="font-semibold">Agentes de IA e Sistemas Autônomos</div>
                    <div className="text-sm text-muted-foreground mt-1">O futuro da automação</div>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleLayout;