import { motion } from "framer-motion";
import { AlertTriangle, Eye, Clock, Lock } from "lucide-react";

const dangers = [
  { icon: AlertTriangle, title: "Cyberbullying", desc: "Over a third of young people report being cyberbullied, with 1 in 5 skipping school because of it." },
  { icon: Eye, title: "Online Exploitation", desc: "80% of children in 25 countries report feeling in danger of sexual abuse or exploitation online." },
  { icon: Lock, title: "Privacy & Identity Theft", desc: "Sharing personal details can make young users vulnerable to identity theft, scams, and online predators." },
  { icon: Clock, title: "Excessive Screen Time", desc: "Too much screen time negatively affects physical health, academic performance, sleep patterns, and mental wellbeing." },
];

const DangersSection = () => {
  return (
    <section className="py-24 px-6 gradient-cyber">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cyber-danger mb-4">ONLINE DANGERS</h2>
          <p className="text-muted-foreground">Threats that children and teens face in cyberspace</p>
          <div className="w-24 h-1 bg-cyber-danger mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {dangers.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/80 border-cyber rounded-xl p-6 flex gap-4"
            >
              <d.icon className="w-8 h-8 text-cyber-danger shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DangersSection;
