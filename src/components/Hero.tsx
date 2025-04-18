import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-educator-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-educator-primary mb-4">
              Дарим детям радость и знания каждый день
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              Я профессиональный воспитатель с многолетним опытом работы. 
              Моя миссия — создать для детей безопасную, вдохновляющую среду, 
              в которой каждый ребенок может раскрыть свой потенциал.
            </p>
            <div className="flex space-x-4">
              <Button asChild className="bg-educator-primary hover:bg-educator-primary/90">
                <Link to="/about">Подробнее обо мне</Link>
              </Button>
              <Button asChild variant="outline" className="border-educator-primary text-educator-primary hover:bg-educator-primary/10">
                <Link to="/contact">Связаться</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="Дети на занятии" 
              className="rounded-lg shadow-lg max-w-full h-auto" 
              width="500"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
