const CoursesSection = () => {
  return (
    <section id="cursos" className="py-24 bg-[#fcfaf6]">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        
        {/* Título e Subtítulo */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary leading-tight">
            Conheça minha <span className="text-primary">Metodologia</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Assista ao vídeo abaixo para entender como preparei cada conteúdo para auxiliar no seu processo de transformação.
          </p>
        </div>

        {/* Player de Vídeo */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl border-2 border-primary/20 overflow-hidden shadow-2xl bg-black group">
             {/* Substitua o ID abaixo pelo ID do seu vídeo real no YouTube */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/S5-uWaEq_9I"
              
              title="Vídeo de Apresentação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Chamada para a Página de Cursos */}
        <div className="mt-16">
          <a 
            href="/cursos" 
            className="inline-flex items-center text-primary font-semibold text-xl hover:text-primary/80 transition-all group gap-2"
          >
            Acesse a vitrine completa de cursos
            <svg 
              className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;