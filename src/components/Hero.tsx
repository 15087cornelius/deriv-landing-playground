import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trading.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Trading for<br />
              <span className="hero-text-gradient">Anyone</span><br />
              <span className="hero-text-gradient">Anywhere</span><br />
              <span className="hero-text-gradient">Anytime</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Widest range of products, markets, platforms with 24/7 customer support.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="trading-gradient hover:shadow-trading text-lg px-8 py-6 animate-glow-pulse"
                asChild
              >
                <a href="https://hub.deriv.com/tradershub" target="_blank" rel="noopener noreferrer">
                  Open account
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="trading-card rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Professional trading environment"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;