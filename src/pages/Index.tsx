import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ActivitiesSection from "@/components/ActivitiesSection";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <ActivitiesSection />
        
        {/* Галерея */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-educator-primary mb-4">Наша фотогалерея</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Счастливые моменты из жизни нашей группы
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Фото ${i}`} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" className="border-educator-primary text-educator-primary hover:bg-educator-primary/10">
                <Link to="/gallery">Смотреть все фото</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* Контакты */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-educator-primary mb-4">Свяжитесь с нами</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Если у вас есть вопросы или предложения, не стесняйтесь обращаться
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button asChild className="bg-educator-primary hover:bg-educator-primary/90">
                <Link to="/contact">Написать сообщение</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
