import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-educator-primary text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Детский сад "Солнышко"</span>
          </div>
          
          {/* Мобильное меню */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white" 
            onClick={toggleMenu}
          >
            <Menu />
          </Button>
          
          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-educator-accent transition-colors">
              Главная
            </Link>
            <Link to="/about" className="hover:text-educator-accent transition-colors">
              Обо мне
            </Link>
            <Link to="/activities" className="hover:text-educator-accent transition-colors">
              Занятия
            </Link>
            <Link to="/gallery" className="hover:text-educator-accent transition-colors">
              Фотогалерея
            </Link>
            <Link to="/contact" className="hover:text-educator-accent transition-colors">
              Контакты
            </Link>
          </nav>
        </div>
        
        {/* Выпадающее мобильное меню */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="hover:text-educator-accent transition-colors py-2"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <Link 
              to="/about" 
              className="hover:text-educator-accent transition-colors py-2"
              onClick={toggleMenu}
            >
              Обо мне
            </Link>
            <Link 
              to="/activities" 
              className="hover:text-educator-accent transition-colors py-2"
              onClick={toggleMenu}
            >
              Занятия
            </Link>
            <Link 
              to="/gallery" 
              className="hover:text-educator-accent transition-colors py-2"
              onClick={toggleMenu}
            >
              Фотогалерея
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-educator-accent transition-colors py-2"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
