import { Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SareeCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  tag?: string;
}

const SareeCard = ({ image, name, price, originalPrice, tag }: SareeCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Tag */}
        {tag && (
          <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded-full">
            {tag}
          </span>
        )}

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <button
            className="p-3 bg-background rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
            aria-label="Quick view"
          >
            <Eye className="h-5 w-5" />
          </button>
          <button
            className="p-3 bg-background rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-body text-lg font-bold text-accent">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="font-body text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <Button variant="primary" className="w-full">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default SareeCard;
