const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Preserving the Art of Handloom
            </h2>
            <div className="space-y-4 font-poppins text-muted-foreground">
              <p>
                REEETI is a women's wear brand from Bhubaneswar that revives India's fading crafts 
                by turning traditional handlooms into contemporary, everyday clothing. Working 
                closely with artisan clusters, we design culture-driven pieces rooted in our 3 
                E's—Economic upliftment, Eco-friendly production, and Empowerment of craft 
                communities.REEETI brings heritage into modern life, ensuring timeless crafts 
                continue to thrive.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <span className="block font-heading text-3xl md:text-4xl font-bold text-primary">
                  500+
                </span>
                <span className="font-body text-sm text-muted-foreground">
                  Artisans
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-heading text-3xl md:text-4xl font-bold text-primary">
                  25+
                </span>
                <span className="font-body text-sm text-muted-foreground">
                  Weaving Styles
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-heading text-3xl md:text-4xl font-bold text-primary">
                  10K+
                </span>
                <span className="font-body text-sm text-muted-foreground">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop"
                  alt="Handloom weaving process"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)] bg-primary p-6 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-heading text-4xl text-accent">✦</span>
                  <p className="font-heading text-primary-foreground text-lg mt-2">
                    Handcrafted with Love
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)] bg-accent p-6 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-heading text-4xl text-accent-foreground">∞</span>
                  <p className="font-heading text-accent-foreground text-lg mt-2">
                    Timeless Elegance
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop"
                  alt="Traditional saree draping"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
