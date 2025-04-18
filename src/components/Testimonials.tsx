import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
  avatarSrc?: string;
}

const TestimonialCard = ({ text, name, role, avatarSrc }: TestimonialProps) => {
  const initials = name.split(' ').map(part => part[0]).join('');
  
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <p className="text-gray-700 mb-6 italic">"{text}"</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatarSrc} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "Наш ребенок ходит в группу к Анне Сергеевне уже второй год, и мы видим, как он растет и развивается. Воспитатель всегда находит подход к каждому ребенку!",
      name: "Елена Петрова",
      role: "Мама Миши, 5 лет",
    },
    {
      text: "Очень довольны работой воспитателя. Дочка каждое утро с радостью идет в садик и делится впечатлениями о проведенном дне. Спасибо за ваш труд!",
      name: "Сергей Иванов",
      role: "Папа Алисы, 4 года",
    },
    {
      text: "Благодарим за индивидуальный подход и внимательное отношение к нашему сыну. Он стал более общительным и самостоятельным благодаря вашей работе.",
      name: "Наталья Смирнова",
      role: "Мама Димы, 6 лет",
    }
  ];

  return (
    <section className="py-16 bg-educator-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-educator-primary mb-4">Отзывы родителей</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Что говорят родители о нашей работе
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
