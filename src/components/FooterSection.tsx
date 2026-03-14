import logo from "@/assets/tech-titans-logo.jpg";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4 text-center">
        <img src={logo} alt="Tech Titans" className="w-16 h-16 rounded-lg object-cover" />
        <p className="font-display text-sm text-primary tracking-wider">TECH TITANS</p>
        <p className="text-muted-foreground text-sm max-w-lg">
          Youth Safety in Cyberspace — Promoting safe, responsible, and positive internet use among young individuals.
        </p>
        <p className="text-muted-foreground/50 text-xs mt-4">© 2025 Tech Titans. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
