import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ActivityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ActivityCard = ({ title, description, icon, link }: ActivityCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 mb-4 rounded-full bg-educator-primary/20 flex items-center justify-center text-educator-primary">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full text-educator-primary border-educator-primary hover:bg-educator-primary/10">
          <Link to={link}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
