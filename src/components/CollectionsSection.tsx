import SareeCard from "./SareeCard";
import sareeSambalpuri from "@/assets/saree-sambalpuri.jpg";
import sareeBomkai from "@/assets/saree-bomkai.jpg";
import sareeIkat from "@/assets/saree-ikat.jpg";
import sareeKotpad from "@/assets/saree-kotpad.jpg";
import sareeTussar from "@/assets/saree-tussar.jpg";
import sareeBanarasi from "@/assets/saree-banarasi.jpg";

const sarees = [
  {
    image: sareeSambalpuri,
    name: "Sambalpuri Silk Saree",
    price: 8500,
    originalPrice: 12000,
    tag: "Bestseller",
  },
  {
    image: sareeBomkai,
    name: "Bomkai Traditional Saree",
    price: 7800,
    tag: "New Arrival",
  },
  {
    image: sareeIkat,
    name: "Ikat Handwoven Saree",
    price: 6500,
    originalPrice: 8500,
  },
  {
    image: sareeKotpad,
    name: "Kotpad Organic Cotton",
    price: 5200,
  },
  {
    image: sareeTussar,
    name: "Tussar Silk Elegance",
    price: 9800,
    tag: "Premium",
  },
  {
    image: sareeBanarasi,
    name: "Banarasi Brocade",
    price: 15000,
    originalPrice: 18000,
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
            Our Collection
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            New Arrivals
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of authentic handloom sarees, each woven with 
            centuries-old traditions and the skilled hands of master artisans.
          </p>
        </div>

        {/* Saree Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sarees.map((saree, index) => (
            <div
              key={saree.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SareeCard {...saree} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body font-medium text-primary hover:text-accent transition-colors border-b-2 border-primary hover:border-accent pb-1"
          >
            View All Collections
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
