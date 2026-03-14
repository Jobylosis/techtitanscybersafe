import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const contacts = [
  { label: "PH National Cybercrime Hotline", number: "1326" },
  { label: "PNP Anti-Cybercrime Group", number: "(02) 8414-1560 / (02) 723-0401 loc 7491" },
  { label: "DSWD Makabata Helpline", number: "1383" },
  { label: "Hopeline PH (Mental Health)", number: "(02) 805-4673 / 0917-558-4673 / Toll-free: 2919" },
];

const EmergencySection = () => {
  return (
    <section id="emergency" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cyber-warning mb-4">EMERGENCY & SUPPORT</h2>
          <p className="text-muted-foreground">If you or someone you know needs help, reach out</p>
          <div className="w-24 h-1 bg-cyber-warning mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="space-y-4">
          {contacts.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 border-cyber rounded-xl p-5 bg-card/60"
            >
              <Phone className="w-6 h-6 text-cyber-warning shrink-0" />
              <div>
                <p className="font-display text-sm text-foreground font-semibold">{c.label}</p>
                <p className="text-primary text-lg font-bold font-display">{c.number}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
