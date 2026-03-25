import { Heart, Brain, Shield } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Acolhimento",
    description: "Um espaço de escuta genuína, sem julgamentos, onde você pode ser quem é.",
  },
  {
    icon: Brain,
    title: "Autoconhecimento",
    description: "Ferramentas e reflexões para compreender seus padrões e construir novos caminhos.",
  },
  {
    icon: Shield,
    title: "Ética Profissional",
    description: "Sigilo absoluto e compromisso com as diretrizes do Conselho Federal de Psicologia.",
  },
];

const InstitutionalSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Decorative line */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-16 bg-primary/40" />
          <span className="mx-4 text-xs tracking-[0.4em] uppercase text-muted-foreground font-body">
            Sobre
          </span>
          <div className="h-px w-16 bg-primary/40" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-8 leading-tight">
            Um olhar atento para a sua{" "}
            <span className="text-primary">singularidade</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Daniel Camaforte é psicólogo clínico com abordagem integrativa, 
            dedicado a oferecer um espaço terapêutico que respeita o ritmo 
            e a história de cada pessoa. Com anos de experiência, atua com 
            foco em saúde mental, desenvolvimento pessoal e qualidade de vida.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-primary/40 flex items-center justify-center group-hover:border-primary transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
