import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-educator-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Детский сад "Солнышко"</h3>
            <p className="mb-2">Создаем счастливое детство для каждого ребенка</p>
            <p>© 2023 Все права защищены</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+7 (123) 456-78-90</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@solnyshko.ru</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>г. Москва, ул. Детская, 123</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Режим работы</h3>
            <p className="mb-2">Понедельник - Пятница: 7:00 - 19:00</p>
            <p>Суббота, Воскресенье: выходные дни</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
