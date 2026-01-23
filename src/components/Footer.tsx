const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">J4</span>
            </div>
            <div>
              <span className="font-display font-semibold text-foreground">
                J4 Treinamento
              </span>
              <p className="text-sm text-muted-foreground">
                Soluções em Sistemas
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-8">
            <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Serviços
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Sobre
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contato
            </a>
          </nav>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              J4 Treinamento e Soluções em Sistemas LTDA
            </p>
            <p className="text-xs text-muted-foreground">
              CNPJ: 44.618.978/0001-97
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
