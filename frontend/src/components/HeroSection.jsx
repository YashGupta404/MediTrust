import { Search, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--hero-gradient)' }}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white">
                  <path d="M2 7h20M2 12h20M2 17h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Cash on Delivery</h3>
                <p className="text-white/80 text-sm">On all your orders</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Express Delivery</h3>
                <p className="text-white/80 text-sm">Free* and fast in your city</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Easy Returns</h3>
                <p className="text-white/80 text-sm">No questions asked</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto p-8 md:p-10 bg-white rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Order & Avail Max Discounts</p>
          </div>

          <div className="flex gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search for Medicines..." 
                className="pl-12 h-14 text-base border-2 focus:border-primary"
              />
            </div>
            <Button className="h-14 px-10 text-base font-semibold">
              Search
            </Button>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">OR YOU CAN ORDER VIA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button className="h-14 flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-lg hover:border-teal-500 transition-all">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-medium">Order with WhatsApp</span>
            </button>
            <button className="h-14 flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-lg hover:border-teal-500 transition-all">
              <Phone className="w-5 h-5 text-gray-800" />
              <span className="text-gray-800 font-medium">Call us to Order</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <p className="text-blue-600 text-xs font-semibold uppercase mb-2">APP ONLY OFFER</p>
              <h3 className="text-gray-900 text-lg font-bold mb-1">Get 25% OFF on order above ₹1000</h3>
              <p className="text-gray-600 text-sm mb-4">on medicine & healthcare</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white h-10 px-6">
                Install App
              </Button>
            </div>

            <div className="bg-pink-50 border border-pink-100 rounded-xl p-6 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-pink-600 text-xs font-semibold uppercase mb-2">WEBSITE OFFER</p>
              <h3 className="text-gray-900 text-lg font-bold mb-1">Get 23%* OFF</h3>
              <p className="text-gray-600 text-sm mb-4">on medicine orders</p>
              <div className="bg-pink-200 rounded-lg px-4 py-2 inline-block">
                <p className="text-pink-900 text-xs font-semibold tracking-wider">CODE: MEDISAVE</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
