import { motion } from "framer-motion";
import { Brain, GraduationCap, Cog, MessageSquare, BarChart3, Shield } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Consultoria em IA",
    description: "Desenvolvemos estratégias personalizadas de Inteligência Artificial para otimizar processos e aumentar a eficiência do seu negócio.",
  },
  {
    icon: GraduationCap,
    title: "Moodle Customizado",
    description: "Personalizamos a plataforma Moodle de acordo com suas necessidades, criando ambientes de aprendizado únicos e eficientes.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    description: "Criamos chatbots com IA para automatizar atendimento ao cliente e suporte técnico 24 horas por dia.",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Transformamos dados em insights valiosos através de dashboards e relatórios inteligentes para tomada de decisão.",
  },
  {
    icon: Cog,
    title: "Integração de Sistemas",
    description: "Integramos o Moodle e soluções de IA aos seus sistemas existentes de forma transparente e eficiente.",
  },
  {
    icon: Shield,
    title: "Suporte Especializado",
    description: "Oferecemos suporte técnico contínuo e treinamentos para garantir o máximo aproveitamento das soluções.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Soluções que{" "}
            <span className="gradient-text">transformam</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos um conjunto completo de serviços para levar sua empresa 
            ao próximo nível com tecnologia de ponta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group h-full p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
