import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CDB from "./pages/CDB";
import LCI from "./pages/LCI";
import LCA from "./pages/LCA";
import Acoes from "./pages/Acoes";
import Fundos from "./pages/Fundos";
import Cripto from "./pages/Cripto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cdb" element={<CDB />} />
          <Route path="/lci" element={<LCI />} />
          <Route path="/lca" element={<LCA />} />
          <Route path="/acoes" element={<Acoes />} />
          <Route path="/fundos" element={<Fundos />} />
          <Route path="/cripto" element={<Cripto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
