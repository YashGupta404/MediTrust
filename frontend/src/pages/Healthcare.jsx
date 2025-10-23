import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Baby, 
  Pill, 
  Stethoscope, 
  Dumbbell, 
  Wind, 
  Leaf, 
  Home, 
  Activity, 
  Shield, 
  Accessibility, 
  Sparkles,
  ShoppingBag,
  Thermometer,
  User
} from "lucide-react";

const healthcareCategories = [
  { name: "Must Haves", icon: ShoppingBag, discount: null },
  { name: "Personal Care", icon: Sparkles, discount: "Upto 80% off" },
  { name: "Vitamins & Supplements", icon: Pill, discount: "Upto 80% off" },
  { name: "Breathe Easy", icon: Wind, discount: null },
  { name: "Diabetes Essentials", icon: Activity, discount: "Upto 65% off" },
  { name: "Health Food and Drinks", icon: Dumbbell, discount: "Upto 57% off" },
  { name: "Heart Care", icon: Heart, discount: null },
  { name: "Ayurvedic Care", icon: Leaf, discount: "Upto 70% off" },
  { name: "Health Concerns", icon: Shield, discount: "Upto 65% off" },
  { name: "Mother and Baby Care", icon: Baby, discount: "Upto 50% off" },
  { name: "Mobility & Elderly Care", icon: Accessibility, discount: "Upto 45% off" },
  { name: "Sports Nutrition", icon: Dumbbell, discount: null },
  { name: "Healthcare Devices", icon: Thermometer, discount: "Upto 65% off" },
  { name: "Sexual Wellness", icon: Heart, discount: "Upto 53% off" },
  { name: "Skin Care", icon: User, discount: "Upto 50% off" },
];

const categoryDetails = [
  {
    title: "Devices",
    description: "With the pandemic upending our lives, we have all realized that there are some medical devices that we need to keep in our homes such as Oximeter, Thermometer, Inhaler, Blood pressure monitor, Glucometer."
  },
  {
    title: "Personal care",
    description: "Personal care products can include a wide range of products such as Bath products, Skincare essentials, Razor blades, Toothpaste and toothbrush, Wet wipes, Lip balm, Face masks, Hand sanitizer, etc."
  },
  {
    title: "Nutrition and fitness supplements",
    description: "To give your health a helping hand, you can order a wide variety of health supplements including Health drinks, Nutritional powder, Nutrition tablets/capsules."
  },
  {
    title: "Ayurvedic care",
    description: "Place your trust in the goodness of natural and organic ayurvedic products for an all-around healthy mind and body. There's plenty to choose from such as Aloe vera juice, Moringa capsules, Garlic capsules."
  },
  {
    title: "Home care",
    description: "Home care products are things you need every day such as disinfectant spray, phenyl, dishwashing liquid, etc. Get them all at spectacular discounts on MediTrust."
  },
  {
    title: "Baby and mom care",
    description: "MediTrust also has an impressive range of baby and mom care products including Diapers, Baby bath products, Infant formula food, Mother's health drinks, Diaper rash creams, Baby wipes."
  }
];

const Healthcare = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Categories Grid */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-foreground mb-8">Healthcare Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer border-border hover:border-primary/30"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">{category.name}</h3>
                      </div>
                      {category.discount && (
                        <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                          {category.discount}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16 bg-primary-light rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Shop Safely And Worry-Free On MediTrust
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            MediTrust is a renowned name in the online shopping of Over The Counter or healthcare products and other daily essentials. 
            Ordering online on MediTrust is convenient, fast and hassle-free; you can avoid the annoyance of queuing up at your local 
            pharmacy and also avail of huge discounts of up to 80% OFF. Purchasing the healthcare requirements such as medical devices 
            and nutritional supplements that you need will no longer burn a hole in your pocket. At MediTrust, you are sure to find 
            everything that you need because we have products across all healthcare categories.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-4">Why choose MediTrust?</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">8400+ Brands</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">35K products in our stock</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Delivery to 22000+ pin codes</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Delivered to 50 lakh+ families</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground">Over 2M customers served</span>
            </li>
          </ul>
        </section>

        {/* Category Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Our most popular categories:</h2>
          <div className="space-y-8">
            {categoryDetails.map((category, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-b-0">
                <h3 className="text-xl font-semibold text-foreground mb-3">{category.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Section */}
        <section className="bg-secondary rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Your safety is our priority</h2>
          <p className="text-muted-foreground leading-relaxed">
            Stay safe at home and shop at your convenience from MediTrust. All you have to do is place your order and we will 
            try to deliver it at the earliest.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Healthcare;
