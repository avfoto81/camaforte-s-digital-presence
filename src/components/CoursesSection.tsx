import CourseCard from "./CourseCard";

const courses = [
  {
    image: "/placeholder.svg",
    title: "Inteligência Emocional na Prática",
    price: "R$ 297,00",
    description: "Aprenda a gerenciar suas emoções e melhorar seus relacionamentos.",
  },
  {
    image: "/placeholder.svg",
    title: "Ansiedade: Compreender e Superar",
    price: "R$ 247,00",
    description: "Ferramentas práticas para lidar com a ansiedade no dia a dia.",
  },
  {
    image: "/placeholder.svg",
    title: "Autoconhecimento e Propósito",
    price: "R$ 347,00",
    description: "Uma jornada guiada para descobrir seus valores e propósito de vida.",
  },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Decorative line */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-16 bg-primary/40" />
          <span className="mx-4 text-xs tracking-[0.4em] uppercase text-muted-foreground font-body">
            Cursos
          </span>
          <div className="h-px w-16 bg-primary/40" />
        </div>

        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-6">
            Aprenda no seu <span className="text-primary">ritmo</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Cursos online desenvolvidos para transformar conhecimento em prática no seu dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
