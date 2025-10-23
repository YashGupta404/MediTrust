import { ShoppingCart, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" opacity="0.9"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">MediTrust</h1>
                <p className="text-xs text-muted-foreground">Healthcare Simplified</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Medicine</a>
              <Link to="/healthcare" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Healthcare</Link>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Lab Tests</a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Health Articles</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden lg:flex items-center gap-2 text-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Select Location</span>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex text-gray-700 hover:text-teal-600 hover:bg-transparent font-medium px-6">
              Sign In
            </Button>
            <Button size="sm" className="hidden md:flex bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 rounded-md border-0">
              Sign Up
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
