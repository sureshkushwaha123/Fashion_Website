import { useState } from "react";
import { MessageCircle, X, Phone, Mail, MessageSquare } from "lucide-react";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Call Us",
      href: "tel:+919876543210",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "WhatsApp",
      href: "https://wa.me/919876543210",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:hello@reet.com",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {contactOptions.map((option, index) => (
          <a
            key={option.label}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-card rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 group animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-primary group-hover:text-accent transition-colors">
              {option.icon}
            </span>
            <span className="font-body text-sm font-medium text-card-foreground whitespace-nowrap">
              {option.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-accent text-accent-foreground rotate-0"
            : "bg-primary text-primary-foreground hover:shadow-[var(--shadow-gold)]"
        }`}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        <span
          className={`absolute inset-0 rounded-full bg-accent opacity-0 animate-ping ${
            !isOpen ? "opacity-50" : ""
          }`}
          style={{ animationDuration: "2s" }}
        />
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300" />
        ) : (
          <MessageCircle className="h-6 w-6 transition-transform duration-300" />
        )}
      </button>
    </div>
  );
};

export default FloatingContactButton;
