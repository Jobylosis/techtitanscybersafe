import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Advocacy", href: "#about" },
  { label: "Online Dangers", href: "#dangers" },
  { label: "Safety Tips", href: "#safety-tips" },
  { label: "Video", href: "#video" },
  { label: "Emergency", href: "#emergency" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-display text-sm tracking-widest",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-primary/20 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="text-primary font-bold text-base tracking-wider">TECH TITANS</a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/20 px-6 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
