import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  image: string;
  title: string;
  price: string;
  description?: string;
}

const CourseCard = ({ image, title, price, description }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 border-border/60">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-display text-lg text-secondary">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground font-body">{description}</p>
        )}
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="font-display text-xl text-primary font-semibold">
          {price}
        </span>
        <Button variant="outline" size="sm" className="rounded-full font-body text-xs border-primary text-secondary hover:bg-primary hover:text-primary-foreground">
          Saiba mais
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
