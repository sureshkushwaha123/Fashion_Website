import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero_video.mp4";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-top scale-[1.03]"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">

            {/* Brand tag */}
            <h2 className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-accent mb-4 animate-fade-in">
              Reeeti
            </h2>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-primary-foreground mb-6 animate-fade-in-up">
              Where Heritage <br />
              <span className="italic font-normal">Becomes</span> Wearable.
            </h1>

            {/* Subtitle */}
            <p
              className="font-body text-base md:text-lg text-primary-foreground/80 max-w-lg mb-10 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Handcrafted Indian apparel that celebrate heritage,
              artistry, and timeless femininity.
            </p>

            {/* CTA */}
            <div
              className="flex items-center gap-6 animate-fade-in"
              style={{ animationDelay: "0.35s" }}
            >
              <Button
                variant="accent"
                size="lg"
                className="rounded-full px-8 tracking-wide"
              >
                Explore Collection
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="text-primary-foreground/80 hover:text-primary-foreground tracking-widest uppercase text-xs"
              >
                View Lookbook →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-xs tracking-[0.3em] uppercase animate-bounce">
        Scroll
      </div>
    </section>
  );
};

export default HeroSection;
