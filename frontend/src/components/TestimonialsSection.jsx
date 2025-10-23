import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Amit",
    location: "Mumbai",
    text: "I recently tried the MediTrust app for ordering my medicines and to my surprise the delivery was very quick!! Also medicine was packed and handled properly.",
  },
  {
    name: "Priya",
    location: "Delhi",
    text: "Have purchased medicines from nearby chemist in the past and was not really sure about whole online order process...tried MediTrust app and it was good experience with fast delivery.",
  },
  {
    name: "Alina",
    location: "Bangalore",
    text: "My mother's daily medicine was not available in any of the chemist shops near my home...had to search for them online and found it available on MediTrust.",
  },
  {
    name: "Rajesh",
    location: "Hyderabad",
    text: "I have been using MediTrust app for sometime now for my family's medicine needs. The order process is very simple and easy and the discounts are attractive.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <Avatar key={i} className="border-2 border-background w-12 h-12">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {i === 1 ? "A" : i === 2 ? "P" : "R"}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            See What Our Customers Have to Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-card-hover transition-shadow"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                {testimonial.text}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
