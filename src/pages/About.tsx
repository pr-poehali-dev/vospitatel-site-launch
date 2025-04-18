import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const experience = [
    {
      period: "2015 - настоящее время",
      role: "Старший воспитатель",
      place: "Детский сад \"Солнышко\", г. Москва",
      description: "Работа с детьми дошкольного возраста, разработка образовательных программ, проведение развивающих занятий."
    },
    {
      period: "2010 - 2015",
      role: "Воспитатель",
      place: "Детский сад №42, г. Москва",
      description: "Организация воспитательного процесса, взаимодействие с родителями, проведение утренников и мероприятий."
    },
    {
      period: "2008 - 2010",
      role: "Помощник воспитателя",
      place: "Детский центр \"Умка\", г. Москва",
      description: "Помощь в организации занятий, присмотр за детьми, создание комфортной среды для развития."
    }
  ];

  const education = [
    {
      year: "2008",
      degree: "Высшее педагогическое образование",
      institution: "Московский педагогический государственный университет",
      specialization: "Дошкольная педагогика и психология"
    },
    {
      year: "2014",
      degree: "Курсы повышения квалификации",
      institution: "Академия повышения квалификации работников образования",
      specialization: "Современные методы дошкольного образования"
    },
    {
      year: "2018",
      degree: "Профессиональная переподготовка",
      institution: "Институт развития образования",
      specialization: "Менеджмент в образовании"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-educator-primary mb-8 text-center">Обо мне</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <img 
                src="/placeholder.svg" 
                alt="Фото воспитателя" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4 text-educator-primary">Анна Сергеевна Иванова</h2>
              <p className="text-gray-700 mb-4">
                Я воспитатель с более чем 10-летним опытом работы в сфере дошкольного образования. 
                Моя профессиональная деятельность направлена на создание благоприятной среды для 
                всестороннего развития детей.
              </p>
              <p className="text-gray-700 mb-4">
                Я убеждена, что дошкольный возраст — один из самых важных периодов в жизни ребенка, 
                когда закладывается фундамент его личности, формируются основные навыки и качества. 
                Поэтому считаю своей главной задачей помочь каждому ребенку раскрыть свой потенциал, 
                развить любознательность, творческие способности и уверенность в себе.
              </p>
              <p className="text-gray-700">
                В своей работе я использую современные педагогические методики и индивидуальный подход 
                к каждому ребенку, учитывая его особенности и интересы. Стремлюсь сделать процесс 
                познания увлекательным и радостным для детей.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-educator-primary">Опыт работы</h2>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="mb-2">
                      <span className="text-sm font-medium bg-educator-primary/10 text-educator-primary px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-1">{item.role}</h3>
                    <p className="text-gray-600 mb-3">{item.place}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-educator-primary">Образование и квалификация</h2>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="mb-2">
                      <span className="text-sm font-medium bg-educator-primary/10 text-educator-primary px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-1">{item.degree}</h3>
                    <p className="text-gray-600 mb-3">{item.institution}</p>
                    <p className="text-gray-700">{item.specialization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
