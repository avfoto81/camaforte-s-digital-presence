import { Instagram, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl tracking-widest uppercase mb-4">
              Daniel Camaforte
            </h3>
            <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed">
              Psicólogo Clínico<br />
              CRP: XX/XXXXX
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-body text-sm font-medium tracking-wide uppercase mb-4 text-secondary-foreground/80">
              Links
            </h4>
            <a href="#inicio" className="block text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
              Início
            </a>
            <a href="#sobre" className="block text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
              Sobre
            </a>
            <a href="#cursos" className="block text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
              Cursos
            </a>
            <a href="#" className="block text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors font-body">
              Política de Privacidade
            </a>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-sm font-medium tracking-wide uppercase mb-4 text-secondary-foreground/80">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-secondary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-secondary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-secondary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-xs text-secondary-foreground/50 font-body">
            © {new Date().getFullYear()} Daniel Camaforte. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
