import { Search, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--hero-gradient)' }}>
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get Medicines <span className="text-accent">Fast</span> with Superfast Delivery
          </h2>
          <p className="text-white/90 text-lg">in your city</p>
          <div className="inline-block mt-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-white text-sm font-medium">ONLY ON MEDITRUST</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                  <path d="M2 7h20M2 12h20M2 17h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Cash on Delivery</h3>
                <p className="text-white/80 text-sm">On all your orders</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Express Delivery</h3>
                <p className="text-white/80 text-sm">Free* and fast in your city</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Easy Returns</h3>
                <p className="text-white/80 text-sm">No questions asked</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto p-6 md:p-8 bg-white">
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Order & Avail Max Discounts</p>
          </div>

          <div className="flex gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search for Medicines..." 
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button className="h-12 px-8 bg-primary hover:bg-primary-dark">
              Search
            </Button>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground">OR YOU CAN ORDER VIA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Button variant="outline" className="h-12 gap-2 hover:border-primary hover:text-primary">
              <MessageCircle className="w-5 h-5 text-green-600" />
              Order with WhatsApp
            </Button>
            <Button variant="outline" className="h-12 gap-2 hover:border-primary hover:text-primary">
              <Phone className="w-5 h-5" />
              Call us to Order
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-xs text-blue-600 font-semibold mb-1">APP ONLY OFFER</p>
                  <p className="text-sm font-bold text-foreground">Get 25% OFF on order above ₹1000</p>
                  <p className="text-xs text-muted-foreground mt-1">on medicine & healthcare</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-blue-600">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="mt-2 bg-blue-600 text-white hover:bg-blue-700">
                Install App
              </Button>
            </Card>

            <Card className="p-4 bg-pink-50 border-pink-200">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-xs text-pink-600 font-semibold mb-1">WEBSITE OFFER</p>
                  <p className="text-sm font-bold text-foreground">Get 23%* OFF</p>
                  <p className="text-xs text-muted-foreground mt-1">on medicine orders</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-pink-600">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="mt-2 px-3 py-1 bg-pink-200 rounded inline-block">
                <span className="text-xs font-mono font-bold text-pink-800">CODE: MEDISAVE</span>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
