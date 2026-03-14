import { motion } from "framer-motion";
import { Shield, Globe, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-glow mb-4">ABOUT THE ADVOCACY</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Youth Safety in Cyberspace aims to give awareness about the risks that the youth may encounter online, by providing guidance, education, and resources that will help them navigate and be protected in the digital world.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: "Cyberspace", desc: "The virtual space where people communicate and engage through interconnected networks. 82% of people aged 15–24 use the Internet." },
            { icon: Shield, title: "Protection", desc: "Over a third of young people in 30 countries report being cyberbullied. 80% of children feel in danger of sexual abuse online." },
            { icon: Users, title: "Community", desc: "The Child Online Protection (COP) Initiative promotes awareness and develops tools to assist governments, industry, and educators." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="gradient-cyber border-cyber rounded-xl p-6 box-glow"
            >
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
