import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5549999591057";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre os serviços da J4 Treinamento.`;

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Vamos{" "}
            <span className="gradient-text">conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos ajudar 
            sua empresa a alcançar seus objetivos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <a 
              href={`mailto:jacsonmatte@gmail.com`}
              className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  Email
                </h3>
                <p className="text-muted-foreground group-hover:text-accent transition-colors">
                  jacsonmatte@gmail.com
                </p>
              </div>
            </a>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  Telefone / WhatsApp
                </h3>
                <p className="text-muted-foreground group-hover:text-accent transition-colors">
                  (49) 9 9959-1057
                </p>
              </div>
            </a>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  Localização
                </h3>
                <p className="text-muted-foreground">Santa Catarina - Brasil</p>
              </div>
            </div>

            <div className="pt-8">
              <div className="p-8 rounded-2xl glass border border-border">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  Por que escolher a J4?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ Atendimento personalizado</li>
                  <li>✓ Experiência acadêmica e prática</li>
                  <li>✓ Soluções sob medida</li>
                  <li>✓ Resultados comprovados</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="bg-card rounded-2xl shadow-card p-12 border border-border text-center max-w-md w-full">
              <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-8">
                <MessageCircle className="w-12 h-12 text-green-500" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Fale conosco pelo WhatsApp
              </h3>
              
              <p className="text-muted-foreground mb-8">
                Resposta rápida e atendimento personalizado. 
                Clique no botão abaixo para iniciar uma conversa.
              </p>
              
              <Button 
                asChild
                size="lg" 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-lg h-14"
              >
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-6 h-6" />
                  Iniciar Conversa
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                Horário de atendimento: Seg - Sex, 8h às 18h
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
