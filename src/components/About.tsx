import { motion } from "framer-motion";
import { CheckCircle2, Users, Lightbulb, Target } from "lucide-react";

const features = [
  "Formação em Ciência da Computação",
  "Anos de experiência como professor universitário",
  "Especialista em IA, EaD e plataformas de atendimento",
  "Projetos personalizados para cada cliente",
  "Suporte técnico dedicado e humanizado",
];

const stats = [
  { icon: Users, value: "50+", label: "Clientes atendidos" },
  { icon: Lightbulb, value: "100+", label: "Projetos entregues" },
  { icon: Target, value: "98%", label: "Taxa de satisfação" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              Parceiros na sua{" "}
              <span className="gradient-text">jornada digital</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A J4 Treinamento e Soluções em Sistemas é uma empresa liderada por 
              profissional formado em Computação com vasta experiência acadêmica. 
              Combinamos expertise em Inteligência Artificial, plataformas educacionais 
              e soluções de atendimento omnichannel para entregar resultados excepcionais.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossa missão é democratizar o acesso à tecnologia de ponta, oferecendo 
              treinamentos especializados e consultoria para empresas e instituições 
              aproveitarem todo o potencial da transformação digital.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 gradient-primary rounded-3xl opacity-10 blur-3xl" />
            <div className="relative bg-card rounded-3xl shadow-card p-10 border border-border">
              <div className="grid gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-4xl font-display font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
