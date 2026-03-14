import { motion } from "framer-motion";
import parentChildImg from "@/assets/parent-child-computer.jpg";
import childLaptopImg from "@/assets/child-laptop.jpg";
import cyberLockImg from "@/assets/cybersecurity-lock.jpg";

const tips = [
  { num: "01", title: "Keep Personal Info Private", desc: "Never share your full name, address, school, phone number, or passwords online. Think twice before posting." },
  { num: "02", title: "Be Careful Who You Talk To", desc: "Only interact with people you know and trust. Avoid meeting strangers without informing a parent or guardian." },
  { num: "03", title: "Use Strong Passwords", desc: "Create strong, unique passwords. Use two-factor authentication and set social media profiles to private." },
  { num: "04", title: "Report & Block Harmful Content", desc: "Report cyberbullying, scams, or inappropriate content immediately. Block users spreading negativity." },
  { num: "05", title: "Balance Online & Offline", desc: "Limit screen time. Engage in hobbies, sports, and face-to-face interactions for mental and emotional health." },
];

const SafetyTipsSection = () => {
  return (
    <section id="safety-tips" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cyber-accent mb-4">SAFETY TIPS</h2>
          <p className="text-muted-foreground">5 things every young person should know</p>
          <div className="w-24 h-1 bg-cyber-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Images gallery */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={parentChildImg}
            alt="Parent guiding child on computer"
            className="w-full h-48 object-cover rounded-xl border-cyber"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            src={childLaptopImg}
            alt="Child using laptop with supervision"
            className="w-full h-48 object-cover rounded-xl border-cyber"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            src={cyberLockImg}
            alt="Cybersecurity concept"
            className="w-full h-48 object-cover rounded-xl border-cyber"
          />
        </div>

        <div className="space-y-4">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 items-start border-cyber rounded-xl p-5 gradient-cyber box-glow"
            >
              <span className="font-display text-3xl font-bold text-primary/30">{tip.num}</span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{tip.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tip.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyTipsSection;
