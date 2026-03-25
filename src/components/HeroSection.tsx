import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body">
              Psicólogo Clínico
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary leading-tight">
              Cuidar da mente é um ato de{" "}
              <span className="text-primary">coragem</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-lg">
              Psicoterapia com acolhimento, ética e profundidade. Um espaço seguro 
              para o seu processo de autoconhecimento e transformação.
            </p>
            <Button size="lg" className="rounded-full px-8 py-6 text-base font-body">
              Agendar Consulta
            </Button>
          </div>

          {/* Right - circular image */}
          <div className="flex justify-center md:justify-end" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Daniel Camaforte - Psicólogo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
