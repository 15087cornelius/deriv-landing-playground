import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navLinks = [
    { label: "Trading", href: "https://deriv.com/trade/options" },
    { label: "Platforms", href: "https://deriv.com/trading-platforms/deriv-trader" },
    { label: "Learning", href: "http://traders-academy.deriv.com/" },
    { label: "About", href: "https://deriv.com/why-choose-us" },
    { label: "Partners", href: "https://deriv.com/partners" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 trading-glass animate-slide-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground">
              Deriv
              <span className="text-sm text-primary font-normal ml-2">| 25 years</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-accent/50"
              asChild
            >
              <a href="https://hub.deriv.com/tradershub" target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="trading-gradient hover:shadow-trading transition-all duration-300"
              asChild
            >
              <a href="https://hub.deriv.com/tradershub" target="_blank" rel="noopener noreferrer">
                Sign up
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;