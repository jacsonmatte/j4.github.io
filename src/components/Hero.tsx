import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(hsl(185 80% 45% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(185 80% 45% / 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center min-h-screen">
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-50 glass-dark px-6 py-4"
        >
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">J4</span>
              </div>
              <span className="text-primary-foreground font-display font-semibold text-lg hidden sm:block">
                J4 Treinamento
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
                Serviços
              </a>
              <a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
                Sobre
              </a>
              <a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
                Contato
              </a>
            </div>
            <Button variant="hero" size="sm" asChild>
              <a href="#contato">
                Fale Conosco
              </a>
            </Button>
          </div>
        </motion.nav>

        {/* Hero content */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-accent text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Transformando o futuro com IA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
          >
            Inteligência Artificial &{" "}
            <span className="text-accent">Educação Digital</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10"
          >
            Consultoria especializada em soluções de Inteligência Artificial e personalização 
            do Moodle para impulsionar sua empresa e instituição educacional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#servicos" className="group">
                Conheça nossos serviços
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contato">
                Entre em contato
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Floating icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-20 left-10 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center animate-float">
            <Brain className="w-8 h-8 text-accent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-40 right-20 hidden lg:block"
        >
          <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
