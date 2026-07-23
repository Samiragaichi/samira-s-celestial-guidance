import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Sparkles,
  Moon,
  Star,
  ShieldCheck,
  Wifi,
  MessageCircle,
  ChevronDown,
  Instagram,
  Gem,
  Wand2,
  Compass,
  Coins,
  HandHeart,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";
import samiraHero from "@/assets/samira-hero.jpg";
import samiraAbout from "@/assets/samira-about.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WA_URL =
  "https://wa.me/5511976109761?text=" +
  encodeURIComponent(
    "Olá, Samira! Vim através do seu site e gostaria de agendar uma consulta.",
  );

const WA_FLOAT =
  "https://wa.me/5511976109761?text=" +
  encodeURIComponent("Olá, Samira! Gostaria de agendar minha consulta.");

function StarField() {
  const stars = Array.from({ length: 40 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 4;
        const size = Math.random() * 2 + 1;
        return (
          <span
            key={i}
            className="animate-twinkle absolute rounded-full bg-gold"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              boxShadow: "0 0 6px var(--gold)",
            }}
          />
        );
      })}
    </div>
  );
}

function GoldParticles() {
  const particles = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((_, i) => (
        <span
          key={i}
          className="animate-particle absolute bottom-0 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: "var(--gold)",
            opacity: 0.5,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            boxShadow: "0 0 8px var(--gold)",
          }}
        />
      ))}
    </div>
  );
}

function Moonlet({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`animate-moon ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mg" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#F0D8A8" />
          <stop offset="100%" stopColor="#C9A86B" />
        </radialGradient>
      </defs>
      <path
        d="M44 8a24 24 0 1 0 12 40A20 20 0 0 1 44 8z"
        fill="url(#mg)"
      />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const items = [
    ["Início", "#home"],
    ["Sobre", "#sobre"],
    ["Serviços", "#servicos"],
    ["Depoimentos", "#depoimentos"],
    ["FAQ", "#faq"],
    ["Contato", "#contato"],
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="glass flex items-center justify-between rounded-full px-5 py-3">
          <a href="#home" className="flex items-center gap-2">
            <Moonlet className="h-7 w-7" />
            <span className="font-display text-sm font-semibold text-wine sm:text-base">
              TARÓLOGA SAMIRA
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {items.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-foreground/80 transition-colors hover:text-wine"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden rounded-full px-5 py-2.5 text-xs uppercase tracking-wider sm:inline-flex"
          >
            Agendar Consulta
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-wine"
            aria-label="Abrir menu"
          >
            <ChevronDown
              className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
        {open && (
          <div className="glass mt-2 rounded-2xl p-4 lg:hidden">
            <ul className="flex flex-col gap-3">
              {items.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-1 text-sm text-foreground/80"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-2 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-xs uppercase tracking-wider"
                >
                  Agendar Consulta
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <StarField />
      <Moonlet className="absolute top-24 right-8 h-16 w-16 opacity-80 sm:right-20 sm:h-24 sm:w-24" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-up relative z-10">
          <span className="font-display inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/50 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-wine">
            <Sparkles className="h-3 w-3 text-gold" /> Tarot & Espiritualidade
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] text-wine sm:text-5xl lg:text-6xl">
            Descubra os caminhos que o{" "}
            <em className="text-gold not-italic italic">Universo</em> preparou
            para você.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/80 sm:text-lg">
            Mais de <strong className="text-wine">8 mil atendimentos</strong>{" "}
            realizados, ajudando pessoas através do Tarot, direcionamento
            espiritual e tratamentos energéticos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              [Wifi, "Atendimento Online"],
              [ShieldCheck, "Sigilo Absoluto"],
              [Star, "+8 mil consultas"],
            ].map(([Icon, label], i) => (
              <span
                key={i}
                className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-wine"
              >
                <Icon className="h-3.5 w-3.5 text-gold" />
                {label as string}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm uppercase tracking-widest"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-wine/20 bg-white/40 px-8 py-4 text-sm text-wine backdrop-blur-md transition-colors hover:bg-white/70"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        <div className="animate-fade-in-slow relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-rose/40 via-nude/30 to-gold-soft/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_30px_80px_-20px_rgba(110,50,70,0.35)]">
            <img
              src={samiraHero}
              alt="Taróloga Samira"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-wine/20 via-transparent to-transparent" />
          </div>
          <div className="glass animate-float-slow absolute -bottom-6 -left-4 rounded-2xl p-4 sm:-left-8">
            <div className="flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-full"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Gem className="h-4 w-4 text-wine" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-wine/70">
                  Consultas
                </p>
                <p className="font-display text-lg text-wine">8.000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <span className="font-display text-[11px] uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 text-3xl text-wine sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-foreground/75">{subtitle}</p>
          )}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-nude/40 to-rose/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_30px_80px_-20px_rgba(110,50,70,0.35)]">
            <img
              src={samiraAbout}
              alt="Retrato Samira"
              width={900}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <Moonlet className="absolute -top-6 -right-6 h-14 w-14" />
        </div>
        <div className="order-1 lg:order-2">
          <span className="font-display text-[11px] uppercase tracking-[0.3em] text-gold">
            Sobre
          </span>
          <h2 className="mt-3 text-3xl text-wine sm:text-4xl lg:text-5xl">
            Quem é Taróloga Samira?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Minha missão é oferecer direcionamento espiritual com ética,
            respeito, responsabilidade e sigilo absoluto.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Cada atendimento é personalizado, utilizando o Tarot e tratamentos
            energéticos para proporcionar clareza, equilíbrio e direcionamento
            nas áreas do <em className="text-wine">amor</em>,{" "}
            <em className="text-wine">prosperidade</em>,{" "}
            <em className="text-wine">espiritualidade</em> e vida pessoal.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              ["8k+", "Atendimentos"],
              ["100%", "Sigilo"],
              ["24/7", "Online"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="glass rounded-2xl p-4 text-center"
              >
                <p className="font-display text-2xl text-wine">{n}</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-foreground/60">
                  {l}
                </p>
              </div>
            ))}
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs uppercase tracking-widest"
          >
            <MessageCircle className="h-4 w-4" /> Falar com Samira
          </a>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Heart,
    title: "Consulta Amorosa",
    desc: "Descubra sentimentos, possibilidades e caminhos para sua vida afetiva.",
  },
  {
    icon: Wand2,
    title: "Tarot Completo",
    desc: "Pergunte sobre qualquer área da sua vida e receba respostas claras.",
  },
  {
    icon: Sparkles,
    title: "Tratamentos Energéticos",
    desc: "Equilíbrio, limpeza espiritual e fortalecimento energético.",
  },
  {
    icon: Coins,
    title: "Prosperidade",
    desc: "Orientações para abrir caminhos financeiros e profissionais.",
  },
  {
    icon: Compass,
    title: "Direcionamento Espiritual",
    desc: "Conecte-se com sua energia e encontre clareza para suas decisões.",
  },
];

function Services() {
  return (
    <Section
      id="servicos"
      eyebrow="Serviços"
      title="Consultas que iluminam seu caminho"
      subtitle="Cada consulta é conduzida com sensibilidade, ética e escuta atenta."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="glass group relative overflow-hidden rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-gold-soft/40 to-rose/40 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div
              className="relative grid h-14 w-14 place-items-center rounded-2xl"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Icon className="h-6 w-6 text-wine" />
            </div>
            <h3 className="relative mt-6 text-2xl text-wine">{title}</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-foreground/75">
              {desc}
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-wine transition-colors hover:text-gold"
            >
              Agendar <Send className="h-3 w-3" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

const STEPS = [
  { icon: MessageCircle, text: "Clique no WhatsApp" },
  { icon: HandHeart, text: "Conte sua situação" },
  { icon: Wand2, text: "Escolha sua consulta" },
  { icon: Sparkles, text: "Receba seu atendimento online" },
  { icon: Compass, text: "Saia com clareza e direcionamento" },
];

function HowItWorks() {
  return (
    <Section
      id="como"
      eyebrow="Como Funciona"
      title="Um caminho simples até sua consulta"
    >
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent lg:block" />
        <ol className="space-y-8 lg:space-y-14">
          {STEPS.map(({ icon: Icon, text }, i) => {
            const left = i % 2 === 0;
            return (
              <li
                key={i}
                className={`relative flex flex-col items-center gap-6 lg:flex-row ${left ? "" : "lg:flex-row-reverse"}`}
              >
                <div
                  className={`glass flex-1 rounded-3xl p-6 lg:max-w-md ${left ? "lg:text-right" : "lg:text-left"}`}
                >
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                    Passo {i + 1}
                  </p>
                  <p className="mt-2 text-lg text-wine">{text}</p>
                </div>
                <div
                  className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-4 border-background"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Icon className="h-5 w-5 text-wine" />
                </div>
                <div className="hidden flex-1 lg:block" />
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

const BENEFITS = [
  "Atendimento personalizado",
  "Sigilo absoluto",
  "Atendimento online",
  "Mais de 8 mil atendimentos",
  "Direcionamento verdadeiro",
  "Ambiente acolhedor",
  "Atendimento humanizado",
];

function Benefits() {
  return (
    <Section
      eyebrow="Benefícios"
      title="Uma experiência de acolhimento e verdade"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b) => (
          <div
            key={b}
            className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Star className="h-4 w-4 text-wine" />
            </div>
            <p className="text-sm text-wine">{b}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const TESTIMONIALS = [
  {
    name: "Mariana L.",
    text: "Samira é sensacional! Fui acolhida do início ao fim e saí com clareza para tomar decisões importantes.",
  },
  {
    name: "Juliana R.",
    text: "A consulta me trouxe uma paz que eu buscava há tempos. Cada palavra fez sentido no meu momento.",
  },
  {
    name: "Camila S.",
    text: "Profissional incrível, ética e sensível. Recomendo de olhos fechados para quem busca direcionamento.",
  },
];

function Testimonials() {
  return (
    <Section
      id="depoimentos"
      eyebrow="Depoimentos"
      title="Histórias de quem já se conectou"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="glass flex flex-col gap-5 rounded-3xl p-8"
          >
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-sm leading-relaxed text-foreground/80">
              "{t.text}"
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 border-t border-wine/10 pt-4">
              <div
                className="grid h-10 w-10 place-items-center rounded-full text-wine"
                style={{ background: "var(--gradient-gold)" }}
              >
                <User className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-wine">{t.name}</p>
                <p className="text-[11px] uppercase tracking-widest text-foreground/50">
                  Cliente
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

const FAQS = [
  {
    q: "A consulta é online?",
    a: "Sim. Todos os atendimentos são realizados online, com conforto e privacidade, direto pelo WhatsApp.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento é feito de forma simples e segura via PIX antes do início do atendimento.",
  },
  {
    q: "Quanto tempo dura?",
    a: "A duração varia conforme o tipo de consulta escolhida, geralmente entre 30 e 60 minutos.",
  },
  {
    q: "Posso perguntar sobre qualquer assunto?",
    a: "Sim, todas as áreas da sua vida podem ser abordadas com respeito e responsabilidade.",
  },
  {
    q: "Como faço para agendar?",
    a: "Basta clicar em qualquer botão do WhatsApp para conversar diretamente comigo e escolher o melhor horário.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Perguntas Frequentes">
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="glass overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-medium text-wine sm:text-base">
                  {f.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-foreground/75">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--gradient-wine)" }}
    >
      <StarField />
      <Moonlet className="absolute top-10 right-10 h-20 w-20 opacity-90" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <span className="font-display text-[11px] uppercase tracking-[0.3em] text-gold">
          Chamada Final
        </span>
        <h2 className="mt-4 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          "O Universo sempre encontra uma forma de responder."
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/80">
          Agende sua consulta e descubra os caminhos que estão à sua frente.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-10 inline-flex items-center gap-3 rounded-full px-10 py-5 text-sm uppercase tracking-[0.25em]"
        >
          <MessageCircle className="h-5 w-5" /> Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-wine/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Moonlet className="h-6 w-6" />
          <span className="font-display text-sm text-wine">
            TARÓLOGA SAMIRA
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="glass grid h-10 w-10 place-items-center rounded-full text-wine transition-transform hover:-translate-y-0.5"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="glass grid h-10 w-10 place-items-center rounded-full text-wine transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-foreground/60">
          © {new Date().getFullYear()} Taróloga Samira. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

function WhatsFloat() {
  return (
    <a
      href={WA_FLOAT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
      style={{ background: "#25D366" }}
    >
      <MessageCircle className="h-6 w-6" />
      <span
        className="absolute inset-0 -z-10 animate-ping rounded-full opacity-40"
        style={{ background: "#25D366" }}
      />
    </a>
  );
}

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GoldParticles />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsFloat />
    </div>
  );
}
