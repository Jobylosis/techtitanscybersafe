import { motion } from "framer-motion";
import { Shield, Globe, Users, ExternalLink } from "lucide-react";
import cyberLockImg from "@/assets/child-cyber-lock.jpg";
import beCyberSafeImg from "@/assets/be-cyber-safe.jpg";

const references = [
  { label: "UN — Child & Youth Safety Online", url: "https://www.un.org/en/global-issues/child-and-youth-safety-online" },
  { label: "Raising Children — Internet Safety for Teens", url: "https://raisingchildren.net.au/teens/entertainment-technology/cyberbullying-online-safety/internet-safety-teens" },
  { label: "JHAH — Internet Safety Tips for Kids", url: "https://www.jhah.com/en/news-events/news-articles/internet-safety-tips-for-kids-in-cyberspace/" },
];

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

        {/* Image + text row */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={cyberLockImg} alt="Youth cyber security" className="w-full rounded-xl border-cyber box-glow" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Youth Safety in Cyberspace aims to give awareness about the risks that the youth may encounter online, by providing guidance, education, and resources that will help them navigate and be protected in the digital world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Young people aged 15 to 24 are more likely to use the Internet than the rest of the population. According to estimates, <span className="text-primary font-semibold">82%</span> of people aged between 15 and 24 used the Internet in 2025.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Globe, title: "Cyberspace", desc: "The virtual space where people communicate and engage through interconnected networks. The internet has become essential for learning, communication, and entertainment." },
            { icon: Shield, title: "Protection", desc: "Over a third of young people in 30 countries report being cyberbullied. 80% of children feel in danger of sexual abuse online." },
            { icon: Users, title: "Community", desc: "The Child Online Protection (COP) Initiative by ITU promotes awareness and develops tools to assist governments, industry, and educators." },
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

        {/* Be Cyber Safe image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <img src={beCyberSafeImg} alt="Be Cyber Safe" className="w-full max-w-2xl mx-auto rounded-xl border-cyber box-glow" />
        </motion.div>

        {/* References */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-cyber rounded-xl p-6 gradient-cyber"
        >
          <h3 className="font-display text-sm tracking-widest text-primary mb-4">REFERENCES</h3>
          <ul className="space-y-2">
            {references.map((ref) => (
              <li key={ref.url}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  {ref.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
