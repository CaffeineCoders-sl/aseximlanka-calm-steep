import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import SpicesPage from "./pages/SpicesPage";
import WellnessPage from "./pages/WellnessPage";
import ContactPage from "./pages/ContactPage";
import JournalPage from "./pages/JournalPage";
import JournalArticlePage from "./pages/JournalArticlePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollReveal />
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/spices" element={<SpicesPage />} />
              <Route path="/wellness" element={<WellnessPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/blog" element={<JournalPage />} />
              <Route path="/journal/:slug" element={<JournalArticlePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
