import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Importar todos os artigos
import IAGenerativaCriacaoConteudo from "./pages/articles/IAGenerativaCriacaoConteudo";
import AgentesIASistemasAutonomos from "./pages/articles/AgentesIASistemasAutonomos";
import IASaudeDignosticoMedicinaPersonalizada from "./pages/articles/IASaudeDignosticoMedicinaPersonalizada";
import EdgeAIExecutadaLocalmenteOffline from "./pages/articles/EdgeAIExecutadaLocalmenteOffline";
import IANegociosMarketingChatbots from "./pages/articles/IANegociosMarketingChatbots";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Artigos sobre IA */}
          <Route path="/ia-generativa-criacao-conteudo" element={<IAGenerativaCriacaoConteudo />} />
          <Route path="/agentes-ia-sistemas-autonomos" element={<AgentesIASistemasAutonomos />} />
          <Route path="/ia-saude-diagnostico-medicina-personalizada" element={<IASaudeDignosticoMedicinaPersonalizada />} />
          <Route path="/edge-ai-executada-localmente-offline" element={<EdgeAIExecutadaLocalmenteOffline />} />
          <Route path="/ia-negocios-marketing-chatbots" element={<IANegociosMarketingChatbots />} />
          
          {/* Placeholder routes para outros artigos (a serem implementados) */}
          <Route path="/etica-ia-explicavel-xai" element={<NotFound />} />
          <Route path="/ia-multimodal-multissensorial" element={<NotFound />} />
          <Route path="/seo-ia-generative-engine-optimization" element={<NotFound />} />
          <Route path="/companheiros-ia-ai-companions" element={<NotFound />} />
          <Route path="/modelos-menores-ageis-small-language-models" element={<NotFound />} />
          <Route path="/traducao-videos-ia" element={<NotFound />} />
          <Route path="/terapeutica-digital-ia-saude-mental" element={<NotFound />} />
          <Route path="/centros-dados-ia-infraestrutura-verde" element={<NotFound />} />
          <Route path="/visao-computacional-processamento-imagens" element={<NotFound />} />
          <Route path="/ciberseguranca-ia-defesa-ameaca" element={<NotFound />} />
          <Route path="/ia-educacao-aprendizagem-personalizada" element={<NotFound />} />
          <Route path="/ia-sustentabilidade-mudancas-climaticas" element={<NotFound />} />
          <Route path="/ia-veiculos-autonomos-robotica" element={<NotFound />} />
          <Route path="/ia-regulatoria-governanca-global" element={<NotFound />} />
          <Route path="/vibe-coding-programacao-assistida-ia" element={<NotFound />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
