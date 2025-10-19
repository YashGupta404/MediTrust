import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const faqs = [
  {
    question: "Is buying medicines online safe?",
    answer: "Absolutely! All our medicines undergo a three-step quality check process to ensure they are of high quality. We source our products only from licensed retail pharmacies. MediTrust is used by 5M+ users across 1200+ cities in India including Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon, Noida, Pune, etc. for purchasing medicines online.",
  },
  {
    question: "Why choose us for your medicine home delivery?",
    answer: "We offer several benefits: Used by 5M+ customers, Delivery in 24-48 hours, Over 1L+ Products for you to select from, 3-step quality-checked products, MediTrust Plus subscription with exclusive benefits, We deliver in 19000+ pin codes across 1200+ cities, Scheduled reminders, Attractive deals and e-wallet cashbacks, Cash-on-delivery available.",
  },
  {
    question: "How do I order medicines from MediTrust?",
    answer: "1. Visit our website or open our online medicine app on your phone. 2. Search from our list of medicines. 3. Enter the address where you want your package to be delivered. 4. Our partner retailer will call you to confirm the order. 5. The medicine is packed by the pharmacist. 6. Our delivery person will deliver the package at your doorstep. You can use our app or visit the website to track your package.",
  },
  {
    question: "When will MediTrust deliver my medicines?",
    answer: "Once you purchase your medicines online with us, you will get it within 24-48 hours. *T&C: The delivery time might vary depending on the delivery location.",
  },
  {
    question: "Do I get discounts/cashback while ordering medicines online with MediTrust?",
    answer: "Yes, you can get huge discounts and massive e-wallet cashback on purchasing medicines.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-8 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
