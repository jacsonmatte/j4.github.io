# Novo logo e nova frase de abertura

## O que muda
**Logo**
- Criar um logo próprio da J4 (desenho vetorial): um "J4" estilizado ligado a pontos de conexão, representando IA, conectividade (IoT/atendimento) e educação.
- Usar o logo no topo do site, no rodapé e como ícone da aba do navegador.
- Nome ao lado do logo: "J4 Soluções" com "Treinamento e Sistemas" menor embaixo.

**Frase de abertura (topo da página)**
- Selo: "IA • Atendimento • IoT • Educação"
- Título: "Tecnologia que conecta, automatiza e ensina"
- Texto: "Soluções sob medida em Inteligência Artificial, atendimento omnichannel com CRM e IA, plataformas IoT, Moodle personalizado e treinamentos em tecnologia — com a experiência de quem é professor universitário e formado em computação."
- Botões: "Conheça nossos serviços" e "Falar no WhatsApp" (link direto).
- Ícones flutuantes passam a mostrar os 4 pilares (IA, atendimento, IoT, educação).

Nenhum nome das plataformas parceiras será citado.

## Detalhes técnicos
- Novo componente `Logo.tsx` em SVG usando as cores do tema; reaproveitado em Hero e Footer.
- `public/favicon.svg` e link no `index.html`; remover `favicon.ico`.
- Atualizar título/descrição do `index.html` com a nova frase.
- Teste de nomes proibidos continua passando.
