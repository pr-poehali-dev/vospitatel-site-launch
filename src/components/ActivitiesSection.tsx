import ActivityCard from "./ActivityCard";
import { Palette, Book, Music } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Творческие занятия",
      description: "Развиваем воображение и мелкую моторику через рисование, лепку и аппликации",
      icon: <Palette className="h-6 w-6" />,
      link: "/activities/creative"
    },
    {
      title: "Обучающие игры",
      description: "Знакомим детей с буквами, цифрами и окружающим миром через игровую деятельность",
      icon: <Book className="h-6 w-6" />,
      link: "/activities/educational"
    },
    {
      title: "Музыкальное развитие",
      description: "Разучиваем песни, танцы и игры на музыкальных инструментах",
      icon: <Music className="h-6 w-6" />,
      link: "/activities/music"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-educator-primary mb-4">Наши занятия</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Мы предлагаем разнообразные развивающие занятия, 
            которые помогают детям раскрывать свои таланты и приобретать новые навыки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard 
              key={index}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
              link={activity.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
