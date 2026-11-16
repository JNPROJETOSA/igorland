import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Dumbbell,
  MapPin,
  Instagram,
  Quote,
  ChevronRight,
  ChevronLeft,
  Check,
  Calendar,
  Clock,
  Sparkles,
  Smartphone,
  Video,
  UserCheck,
  TrendingUp,
  Maximize2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ============================================================
   CONFIGURAÇÃO CENTRALIZADA DE IMAGEM DO HERO
   ============================================================ */
const HERO_TRAINER_CONFIG = {
  src: "/images/igor-portrait-real.png",
  alt: "Igor Almeida — Treinador Especialista",
  desktop: {
    containerWidth: "w-[58%] xl:w-[54%]",
    imgHeight: "h-[98%]",
    objectFit: "object-contain" as const,
    objectPosition: "object-bottom" as const,
    scale: "scale-100",
    filter: "drop-shadow(0 30px 40px oklch(0.05 0 0 / 0.6))",
  },
  mobile: {
    maxWidth: "max-w-[360px]",
    imgWidth: "w-[88%]",
    objectFit: "object-contain" as const,
    objectPosition: "object-bottom" as const,
    scale: "scale-100",
    filter: "drop-shadow(0 26px 22px oklch(0.03 0 0 / 0.75))",
  },
};

// Mídias servidas localmente
const igorAbout = { url: "/images/igor-about.jpg" };
const presencialVideo = { url: "/videos/presencial.mp4" };
const heroBgVideo = { url: "/videos/hero-bg.mp4" };
const onlineApp = { url: "/images/online-app.png" };
const logoImg = { url: "/logos/logo-igor-almeida.png" };
const result1 = { url: "/images/results/resultado-aluno-01.png" };
const result2 = { url: "/images/results/resultado-aluno-02.png" };
const result3 = { url: "/images/results/resultado-aluno-03.png" };
const result4 = { url: "/images/results/resultado-aluno-04.png" };
const result5 = { url: "/images/results/resultado-aluno-05.png" };
const result6 = { url: "/images/results/resultado-aluno-06.png" };
const result7 = { url: "/images/results/resultado-aluno-07.jpg" };
const result8 = { url: "/images/results/resultado-aluno-08.jpg" };
const result9 = { url: "/images/results/resultado-aluno-09.jpg" };

const RESULT_IMAGES = [
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
  result7,
  result8,
  result9,
];

export const Route = createFileRoute("/")({
  component: Index,
});

// Configuração WhatsApp
const WHATSAPP_BASE_PHONE = "558197526995";
const INSTAGRAM_URL = "https://instagram.com/";

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_BASE_PHONE}?text=${encodeURIComponent(message)}`;
}

// Planos da Consultoria
interface Plan {
  id: string;
  name: string;
  badge?: string;
  durationLabel: string;
  totalPrice: number;
  monthlyEquivalent?: number;
  subtitle: string;
  highlight?: boolean;
  performancePlus: boolean;
  ctaText: string;
  whatsappMessage: string;
}

const PLANS: Plan[] = [
  {
    id: "mensal",
    name: "MENSAL",
    durationLabel: "30 dias de acompanhamento",
    totalPrice: 179.99,
    subtitle: "Flexibilidade para começar.",
    performancePlus: false,
    ctaText: "ESCOLHER MENSAL ↗",
    whatsappMessage:
      "Olá, Igor! Tenho interesse no plano mensal da consultoria online, no valor de R$ 179,99. Gostaria de saber como começar.",
  },
  {
    id: "trimestral",
    name: "TRIMESTRAL",
    durationLabel: "3 meses de acompanhamento",
    totalPrice: 479.99,
    monthlyEquivalent: 160.0,
    subtitle: "Mais tempo para desenvolver consistência.",
    performancePlus: false,
    ctaText: "ESCOLHER TRIMESTRAL ↗",
    whatsappMessage:
      "Olá, Igor! Tenho interesse no plano trimestral da consultoria online, no valor de R$ 479,99. Gostaria de saber como começar.",
  },
  {
    id: "semestral",
    name: "SEMESTRAL",
    badge: "PLANO EM DESTAQUE",
    durationLabel: "6 meses de acompanhamento",
    totalPrice: 899.99,
    monthlyEquivalent: 150.0,
    subtitle: "Mais estratégia e acompanhamento contínuo.",
    highlight: true,
    performancePlus: true,
    ctaText: "ESCOLHER SEMESTRAL ↗",
    whatsappMessage:
      "Olá, Igor! Tenho interesse no plano semestral da consultoria online, no valor de R$ 899,99, incluindo a sessão Performance+. Gostaria de saber como começar.",
  },
  {
    id: "anual",
    name: "ANUAL",
    badge: "MELHOR CUSTO MENSAL",
    durationLabel: "12 meses de acompanhamento",
    totalPrice: 1559.99,
    monthlyEquivalent: 130.0,
    subtitle: "Um ano para construir uma rotina sólida com método.",
    performancePlus: true,
    ctaText: "ESCOLHER ANUAL ↗",
    whatsappMessage:
      "Olá, Igor! Tenho interesse no plano anual da consultoria online, no valor de R$ 1559,99, incluindo a sessão Performance+. Gostaria de saber como começar.",
  },
];

const COMMON_BENEFITS = [
  "Prescrição individualizada por Igor Almeida.",
  "Treinos disponíveis no aplicativo.",
  "Planejamento adaptado aos objetivos.",
  "Acompanhamento da evolução.",
  "Ajustes conforme necessidade.",
  "Suporte para dúvidas e execução.",
];

const FAQ_ITEMS = [
  {
    q: "1. Nunca treinei. Posso contratar a consultoria?",
    a: "Sim. A consultoria atende desde iniciantes que nunca praticaram musculação até atletas avançados. O questionário inicial avalia detalhadamente seu ponto de partida para estruturar um planejamento seguro, didático e progressivo.",
  },
  {
    q: "2. Preciso ter equipamentos específicos?",
    a: "Não. O planejamento se adapta totalmente ao seu ambiente de treino: seja em uma academia completa, condomínio ou até mesmo com pesos livres em casa.",
  },
  {
    q: "3. Quem monta meu treino?",
    a: "Todos os treinamentos são prescritos diretamente por Igor Almeida. Não há terceirização para estagiários ou treinos gerados automaticamente por sistemas.",
  },
  {
    q: "4. Como recebo meu treinamento?",
    a: "Os treinos são disponibilizados pelo aplicativo utilizado na consultoria, com vídeos demonstrativos de cada exercício, orientações de execução, séries, repetições e intervalos.",
  },
  {
    q: "5. Como funciona o suporte?",
    a: "O atendimento de dúvidas ocorre de segunda a sexta-feira, por WhatsApp exclusivo para alunos, com prazo de resposta de até 48 horas úteis.",
  },
  {
    q: "6. Qual é a diferença entre os planos?",
    a: "Os planos variam principalmente pela duração do acompanhamento. Os planos semestral e anual também incluem uma sessão Performance+ de orientação técnica.",
  },
  {
    q: "7. Como funciona a Performance+?",
    a: "É uma sessão individual de orientação técnica, presencial (na Clínica Tratus em Arcoverde–PE) ou por videochamada, destinada à revisão dos exercícios e ao aprimoramento da execução.",
  },
  {
    q: "8. Posso contratar uma consulta presencial?",
    a: "Sim. O atendimento presencial é oferecido separadamente, na Clínica Tratus, em Arcoverde–PE, mediante agendamento.",
  },
  {
    q: "9. Como faço para começar?",
    a: "Escolha um dos planos e entre em contato pelo WhatsApp para receber as orientações de contratação e o formulário de anamnese.",
  },
];

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#consultoria", label: "Consultoria" },
  { href: "#resultados", label: "Resultados" },
  { href: "#metodo", label: "Método" },
  { href: "#planos", label: "Planos" },
  { href: "#sobre", label: "Sobre" },
];

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function Index() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page-enter min-h-screen bg-background text-foreground overflow-x-hidden antialiased selection:bg-copper selection:text-white">
      <Header />
      <main>
        {/* 01 — Início (Hero) */}
        <Hero />

        {/* 02 — Consultoria Online (Produto Principal) */}
        <OnlineConsulting />

        {/* 03 — Resultados Reais (Carrossel Ampliado + Lightbox) */}
        <ResultsSection />

        {/* 04 — Método (Pilares + Timeline Compacta) */}
        <MethodSection />

        {/* 05 — Planos (Cards Redesenhados + Faixa de Benefícios Comuns) */}
        <PricingSection />

        {/* 06 — Performance+ (Sessão de Ajuste Técnico) */}
        <PerformancePlusSection />

        {/* 07 — Suporte (Faixa Horizontal Compacta) */}
        <SupportSection />

        {/* 08 — Sobre Igor Almeida (Autoridade Fortalecida) */}
        <AboutSection />

        {/* 09 — Consulta Presencial (Secundário) */}
        <InPersonConsultationSection />

        {/* 10 — Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 11 — Chamada Final */}
        <FinalCTASection />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante de WhatsApp (Surge após primeira dobra) */}
      <div
        className={`fixed bottom-5 right-5 z-40 transition-all duration-300 ${
          showStickyBar ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href={getWhatsAppUrl("Olá, Igor! Conheci sua consultoria pelo site e gostaria de receber mais informações.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium flex items-center gap-2.5 rounded-full bg-copper px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-2xl hover:brightness-110 active:scale-95"
          aria-label="Falar com o Igor no WhatsApp"
        >
          <MessageCircle size={18} />
          <span>Falar com o Igor ↗</span>
        </a>
      </div>
    </div>
  );
}

/* ============================================================
   Motion primitives
   ============================================================ */
function Reveal({
  children,
  as: Tag = "div",
  className = "",
  variant = "up",
  delay = 0,
  amount = 0.15,
}: {
  children: React.ReactNode;
  as?: any;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  amount?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "scale"
          ? "reveal-scale"
          : "";

  return (
    <Tag
      ref={ref as any}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{ ["--reveal-delay" as any]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids.join("|")]);
  return active;
}

/* ============================================================
   Header
   ============================================================ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection([
    "inicio",
    "consultoria",
    "resultados",
    "metodo",
    "planos",
    "sobre",
  ]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[oklch(0.10_0.004_250/0.88)] border-b border-[oklch(0.68_0.17_40/0.18)] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#inicio" className="flex items-center gap-3 shrink-0" aria-label="Igor Almeida">
          {logoImg.url ? (
            <img
              src={logoImg.url}
              alt="Igor Almeida"
              className="h-9 w-auto md:h-10 object-contain"
            />
          ) : (
            <div className="leading-tight">
              <div className="font-display text-base font-semibold tracking-[0.18em] uppercase">
                Igor <span className="text-copper">Almeida</span>
              </div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                Consultoria
              </div>
            </div>
          )}
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-active={active === n.href.slice(1)}
              className="nav-link group text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground font-medium"
            >
              {n.label}
              <span className="nav-underline mt-1 block h-px w-0 bg-[var(--copper)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#planos"
            className="btn-premium inline-flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground hover:brightness-110 shadow-elegant"
          >
            <span>Começar Agora ↗</span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full copper-border bg-[oklch(0.16_0.005_250/0.7)] backdrop-blur text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        } bg-[oklch(0.10_0.004_250/0.98)] backdrop-blur-xl border-b border-[oklch(0.68_0.17_40/0.15)]`}
      >
        <nav className="flex flex-col px-6 py-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 font-display text-lg uppercase tracking-wide text-foreground/90 border-b border-[oklch(1_0_0/0.05)]"
            >
              {n.label}
              <ChevronRight size={16} className="text-copper" />
            </a>
          ))}
          <div className="pt-6">
            <a
              href="#planos"
              onClick={() => setOpen(false)}
              className="btn-premium flex w-full items-center justify-center gap-2 rounded-full bg-copper px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground hover:brightness-110 shadow-elegant"
            >
              <span>Começar Agora ↗</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-copper font-semibold">
      <span className="h-px w-8 bg-[var(--copper)]" />
      {children}
    </div>
  );
}

/* ============================================================
   01 — Hero Section (Primeira Dobra)
   ============================================================ */
function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:min-h-[100svh] flex flex-col justify-between"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 75% 30%, oklch(0.28 0.04 55 / 0.9), oklch(0.10 0.004 250) 60%), linear-gradient(180deg, oklch(0.12 0.004 250), oklch(0.10 0.004 250))",
          }}
        />
        {heroBgVideo.url ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            src={heroBgVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : null}

        {/* Overlays */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.10 0.004 250 / 0.6) 0%, oklch(0.10 0.004 250 / 0.4) 45%, oklch(0.10 0.004 250 / 0.96) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.10 0.004 250 / 0.94) 0%, oklch(0.10 0.004 250 / 0.6) 50%, transparent 80%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-15%] h-[620px] w-[620px] rounded-full animate-glow"
          style={{
            background: "radial-gradient(circle, oklch(0.68 0.17 40 / 0.35), transparent 65%)",
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.68 0.17 40) 1px, transparent 1px), linear-gradient(90deg, oklch(0.68 0.17 40) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at 20% 40%, black 20%, transparent 70%)",
          }}
        />
      </div>

      {/* Imagem do Treinador Desktop */}
      <div
        aria-hidden="false"
        className={`pointer-events-none absolute inset-y-0 right-0 z-[1] hidden lg:block ${HERO_TRAINER_CONFIG.desktop.containerWidth}`}
      >
        <div
          aria-hidden
          className="absolute right-[6%] top-[8%] h-[78%] w-[70%] rounded-full opacity-70 blur-3xl animate-glow"
          style={{
            background: "radial-gradient(circle at 50% 50%, oklch(0.68 0.17 40 / 0.55), transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-[6%] right-[8%] h-10 w-[62%] rounded-[50%] opacity-70 blur-2xl"
          style={{ background: "oklch(0.05 0 0 / 0.75)" }}
        />
        <img
          src={HERO_TRAINER_CONFIG.src}
          alt={HERO_TRAINER_CONFIG.alt}
          className={`hero-media-in absolute bottom-0 right-0 ${HERO_TRAINER_CONFIG.desktop.imgHeight} w-auto max-w-none ${HERO_TRAINER_CONFIG.desktop.objectFit} ${HERO_TRAINER_CONFIG.desktop.objectPosition} ${HERO_TRAINER_CONFIG.desktop.scale}`}
          style={{
            filter: HERO_TRAINER_CONFIG.desktop.filter,
            ["--hero-delay" as any]: "260ms",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background: "linear-gradient(180deg, transparent, oklch(0.10 0.004 250 / 0.98))",
          }}
        />
      </div>

      {/* Conteúdo Hero */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 md:px-8 lg:min-h-[calc(100svh-180px)] lg:justify-between">
        <div className="pt-4 md:pt-10">
          <div className="relative z-10 max-w-2xl">
            <div className="hero-rise" style={{ ["--hero-delay" as any]: "80ms" }}>
              <SectionEyebrow>10 ANOS DE EXPERIÊNCIA | TREINAMENTO INDIVIDUALIZADO</SectionEyebrow>
            </div>

            {/* Título Principal */}
            <h1
              className="hero-rise mt-6 font-display font-bold uppercase leading-[1.0] text-[42px] sm:text-5xl md:text-6xl lg:text-[70px] tracking-tight"
              style={{ ["--hero-delay" as any]: "180ms" }}
            >
              TREINE COM <span className="text-copper">MÉTODO.</span>
              <br />
              EVOLUA COM <span className="text-copper">DIREÇÃO.</span>
            </h1>

            {/* Subtítulo com excelente legibilidade */}
            <p
              className="hero-rise mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-foreground/85"
              style={{ ["--hero-delay" as any]: "340ms" }}
            >
              Treinos individualizados, prescritos diretamente por Igor Almeida, com acompanhamento profissional para você evoluir de acordo com seus objetivos.
            </p>

            {/* Botões do Hero */}
            <div
              className="hero-rise mt-8 flex flex-col gap-3.5 sm:flex-row"
              style={{ ["--hero-delay" as any]: "460ms" }}
            >
              <a
                href="#planos"
                className="btn-premium group inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hover:brightness-110 shadow-elegant"
              >
                <span>Conhecer os planos ↗</span>
              </a>
              <a
                href="#consultoria"
                className="btn-premium group inline-flex items-center justify-center gap-2 rounded-full copper-border px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-foreground hover:bg-[oklch(0.68_0.17_40/0.08)]"
              >
                <span>Entenda a consultoria ↗</span>
              </a>
            </div>
          </div>

          {/* Imagem do Treinador Mobile */}
          <div
            className="hero-media-in relative mt-8 lg:hidden"
            style={{ ["--hero-delay" as any]: "260ms" }}
          >
            <div className={`relative mx-auto w-full ${HERO_TRAINER_CONFIG.mobile.maxWidth}`}>
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[20%] h-[50%] w-[80%] -translate-x-1/2 rounded-full opacity-70 blur-3xl animate-glow"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, oklch(0.68 0.17 40 / 0.55), transparent 65%)",
                }}
              />
              <img
                src={HERO_TRAINER_CONFIG.src}
                alt={HERO_TRAINER_CONFIG.alt}
                className={`relative z-[1] mx-auto block h-auto ${HERO_TRAINER_CONFIG.mobile.imgWidth} max-w-full ${HERO_TRAINER_CONFIG.mobile.objectFit} ${HERO_TRAINER_CONFIG.mobile.objectPosition} ${HERO_TRAINER_CONFIG.mobile.scale}`}
                style={{ filter: HERO_TRAINER_CONFIG.mobile.filter }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20"
                style={{
                  background: "linear-gradient(180deg, transparent, oklch(0.10 0.004 250) 90%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Faixa de Autoridade */}
        <div className="hero-rise relative z-10 pt-4" style={{ ["--hero-delay" as any]: "620ms" }}>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[oklch(0.68_0.17_40/0.5)] to-transparent" />
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 py-5 text-xs uppercase tracking-[0.24em] text-foreground/80 font-medium">
            {[
              "Consultoria Online",
              "Prescrição Individualizada",
              "10 Anos de Experiência",
              "CREF PE-011148-G/PE",
            ].map((t, i) => (
              <li key={t} className="flex items-center gap-2">
                <span className="font-display text-copper font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   02 — Consultoria Online (Produto Principal)
   ============================================================ */
function OnlineConsulting() {
  const differentials = [
    {
      n: "01",
      icon: Smartphone,
      title: "TREINO NO APLICATIVO",
      desc: "Planejamento organizado e acessível.",
    },
    {
      n: "02",
      icon: UserCheck,
      title: "PRESCRIÇÃO PELO IGOR",
      desc: "Treinos elaborados diretamente pelo profissional.",
    },
    {
      n: "03",
      icon: TrendingUp,
      title: "SUPORTE E ACOMPANHAMENTO",
      desc: "Orientações e ajustes durante o período contratado.",
    },
  ];

  return (
    <section
      id="consultoria"
      className="relative overflow-hidden bg-[oklch(0.10_0.004_250)] py-20 md:py-28 border-t border-[oklch(0.68_0.17_40/0.12)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 90% 20%, oklch(0.68 0.17 40 / 0.12), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal variant="left">
            <SectionEyebrow>Consultoria Online</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold uppercase leading-[1.04]">
              SEU TREINO NA PALMA DA MÃO.
              <br />
              <span className="text-copper">SUA EVOLUÇÃO COM DIREÇÃO.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
              <p>
                Receba um planejamento individualizado, desenvolvido diretamente por Igor Almeida e organizado em aplicativo para você treinar com mais praticidade e estratégia.
              </p>
              <p>
                Cada treinamento considera seus objetivos, sua rotina, seu histórico e suas necessidades.
              </p>
            </div>

            {/* Três Diferenciais */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {differentials.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.n}
                    className="rounded-2xl copper-border bg-[oklch(0.12_0.004_250)] p-5 hover:border-copper/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold text-copper">{d.n}</span>
                      <Icon size={18} className="text-copper/80" />
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold uppercase text-foreground leading-tight">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {d.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <a
                href="#planos"
                className="btn-premium group inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hover:brightness-110 shadow-elegant"
              >
                <span>Ver planos e valores ↗</span>
              </a>
            </div>
          </Reveal>

          {/* Visualização do App com Alto Protagonismo */}
          <Reveal variant="right" delay={120} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-10 rounded-[40px] opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, oklch(0.68 0.17 40 / 0.35), transparent 65%)",
              }}
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl copper-border bg-[oklch(0.12_0.004_250)] shadow-2xl">
              <img
                src={onlineApp.url}
                alt="App da consultoria online com treinos"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.10 0.004 250 / 0.15) 0%, oklch(0.10 0.004 250 / 0.25) 50%, oklch(0.10 0.004 250 / 0.95) 100%)",
                }}
              />
              <div className="pointer-events-none absolute -bottom-px -right-px h-16 w-16 border-b-2 border-r-2 border-[var(--copper)]" />
              <div className="pointer-events-none absolute -top-px -left-px h-16 w-16 border-t-2 border-l-2 border-[var(--copper)]" />

              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-2 rounded-full copper-border bg-[oklch(0.12_0.004_250/0.85)] px-3.5 py-1.5 text-xs uppercase tracking-[0.24em] text-copper backdrop-blur font-semibold">
                  <Smartphone size={13} /> App Dedicado
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-xl font-bold uppercase tracking-wide leading-tight text-foreground">
                  Seu treino na palma da mão
                </p>
                <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed">
                  Vídeos demonstrativos, séries, cargas e organização completa da sua rotina.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   03 — Resultados Reais (Carrossel Ampliado + Lightbox Modal com Teclado)
   ============================================================ */
function ResultsSection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  // Navegação no Lightbox (ESC, Setas Esquerda/Direita)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : RESULT_IMAGES.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null && prev < RESULT_IMAGES.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  return (
    <section
      id="resultados"
      className="relative overflow-hidden border-t border-[oklch(0.68_0.17_40/0.12)] py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.68 0.17 40 / 0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>Resultados Reais</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold uppercase leading-[1.04]">
              RESULTADOS REAIS.
              <br />
              HISTÓRIAS DIFERENTES.
              <br />
              <span className="text-copper">UM TREINAMENTO COM DIREÇÃO.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/80">
              Cada trajetória tem seu próprio ponto de partida. O treinamento individualizado considera essas diferenças para orientar uma evolução consistente.
            </p>
          </div>

          {/* Controles de Navegação */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="h-11 w-11 rounded-full copper-border bg-[oklch(0.12_0.004_250)] flex items-center justify-center text-foreground hover:bg-copper hover:text-black transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="h-11 w-11 rounded-full copper-border bg-[oklch(0.12_0.004_250)] flex items-center justify-center text-foreground hover:bg-copper hover:text-black transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>

        {/* Carrossel com Cards Ampliados */}
        <Reveal className="relative mt-12">
          <div
            ref={scrollRef}
            className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-6 md:-mx-8 md:px-8 [scrollbar-color:var(--copper)_transparent] [scrollbar-width:thin]"
            style={{ scrollPaddingLeft: "1.25rem", scrollPaddingRight: "1.25rem" }}
          >
            {RESULT_IMAGES.map((asset, i) => (
              <article
                key={i}
                onClick={() => setSelectedIdx(i)}
                className="card-hover group relative shrink-0 snap-start overflow-hidden rounded-2xl copper-border bg-[oklch(0.12_0.004_250)] shadow-elegant w-[85%] sm:w-[48%] lg:w-[31.5%] cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[oklch(0.10_0.004_250)]">
                  <img
                    src={asset.url}
                    alt={`Transformação real de aluno ${i + 1}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-white flex items-center gap-1.5">
                      <Maximize2 size={14} className="text-copper" /> Clique para ampliar
                    </span>
                  </div>
                  <div className="pointer-events-none absolute -bottom-px -right-px h-14 w-14 border-b-2 border-r-2 border-[var(--copper)]" />
                  <div className="pointer-events-none absolute -top-px -left-px h-14 w-14 border-t-2 border-l-2 border-[var(--copper)]" />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-2 text-center text-xs uppercase tracking-[0.24em] text-muted-foreground md:text-left">
            ← Arraste ou use as setas para ver mais resultados · Clique para ampliar →
          </p>
        </Reveal>

        {/* CTA e Observação */}
        <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center pt-4 border-t border-[oklch(1_0_0/0.06)]">
          <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
            * Os resultados são individuais e podem variar conforme diferentes fatores, rotina e constância.
          </p>
          <a
            href="#planos"
            className="btn-premium group inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hover:brightness-110 shadow-elegant"
          >
            <span>Quero começar minha evolução ↗</span>
          </a>
        </Reveal>
      </div>

      {/* Lightbox Modal com Navegação entre Imagens */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity"
          onClick={() => setSelectedIdx(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl copper-border bg-[oklch(0.12_0.004_250)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/80 text-white copper-border hover:bg-copper hover:text-black transition-colors"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Setas no Modal */}
            <button
              onClick={() =>
                setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : RESULT_IMAGES.length - 1))
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/80 text-white copper-border hover:bg-copper hover:text-black transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() =>
                setSelectedIdx((prev) => (prev !== null && prev < RESULT_IMAGES.length - 1 ? prev + 1 : 0))
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/80 text-white copper-border hover:bg-copper hover:text-black transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>

            <img
              src={RESULT_IMAGES[selectedIdx].url}
              alt={`Resultado ampliado ${selectedIdx + 1}`}
              className="max-h-[85vh] w-auto object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================
   04 — Posicionamento, 3 Pilares & Timeline Compacta
   ============================================================ */
function MethodSection() {
  const pillars = [
    {
      n: "01",
      title: "INDIVIDUALIDADE",
      text: "Seu treinamento é desenvolvido com base em informações específicas sobre seus objetivos, limitações e experiência.",
    },
    {
      n: "02",
      title: "MÉTODO",
      text: "Cada programa segue um planejamento estruturado, com exercícios selecionados de acordo com sua realidade.",
    },
    {
      n: "03",
      title: "ACOMPANHAMENTO",
      text: "Orientações e suporte contínuo para tirar dúvidas, corrigir a execução dos movimentos e realizar ajustes.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "VOCÊ CONTA SUA HISTÓRIA",
      text: "Preencha um questionário sobre seus objetivos, histórico de treinamento, limitações e rotina.",
      side: "left" as const,
    },
    {
      n: "02",
      title: "EU ANALISO SUA REALIDADE",
      text: "Suas informações são analisadas para compreender suas necessidades e definir as prioridades do planejamento.",
      side: "right" as const,
    },
    {
      n: "03",
      title: "EU PLANEJO SEU TREINO",
      text: "Seu treinamento é elaborado individualmente por Igor Almeida, considerando suas características e objetivos.",
      side: "left" as const,
    },
    {
      n: "04",
      title: "VOCÊ COMEÇA A TREINAR",
      text: "Receba seu planejamento pelo aplicativo e comece a seguir o programa.",
      side: "right" as const,
    },
    {
      n: "05",
      title: "ACOMPANHAMOS SUA EVOLUÇÃO",
      text: "Durante a consultoria, você recebe orientações e ajustes conforme suas necessidades.",
      side: "left" as const,
    },
  ];

  return (
    <section id="metodo" className="relative overflow-hidden py-20 md:py-28 bg-[oklch(0.10_0.004_250)] border-t border-[oklch(0.68_0.17_40/0.12)]">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Posicionamento Integrado */}
        <Reveal className="max-w-4xl">
          <SectionEyebrow>O Método</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.04]">
            VOCÊ NÃO PRECISA DE MAIS UMA FICHA DE TREINO.
            <br />
            <span className="text-copper">PRECISA DE UM PLANEJAMENTO QUE FAÇA SENTIDO.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/80">
            Treinar sem direção pode transformar esforço em frustração. Na consultoria Igor Almeida, cada programa é elaborado pessoalmente com estratégia e acompanhamento ao longo da sua evolução.
          </p>
        </Reveal>

        {/* Três Pilares */}
        <div className="mt-12 grid gap-px bg-[oklch(0.68_0.17_40/0.15)] md:grid-cols-3 md:overflow-hidden md:rounded-2xl md:border md:border-[oklch(0.68_0.17_40/0.18)]">
          {pillars.map((it, i) => (
            <Reveal
              key={it.n}
              as="article"
              delay={i * 100}
              className="card-hover group relative overflow-hidden bg-[oklch(0.12_0.004_250)] p-7 md:p-8 hover:bg-[oklch(0.14_0.006_45)] transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-[64px] font-bold leading-none text-copper/30 transition-colors duration-500 group-hover:text-copper/70 md:text-[80px]">
                  {it.n}
                </span>
                <span className="h-px w-10 bg-[var(--copper)] transition-all duration-500 group-hover:w-16" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide md:text-2xl text-foreground">
                {it.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {it.text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Conector Visual Contínuo entre os Pilares e a Timeline */}
        <div className="flex flex-col items-center justify-center my-10 md:my-14" aria-hidden="true">
          <div className="h-10 md:h-14 w-[2px] bg-gradient-to-b from-copper/60 via-copper/30 to-copper/10" />
          <div className="h-2 w-2 rounded-full bg-copper/70 ring-4 ring-copper/15" />
        </div>

        {/* Como Funciona o Treinamento — TIMELINE REFINADA COM CONTINUIDADE VISUAL */}
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto">
            <SectionEyebrow>Como Funciona o Treinamento</SectionEyebrow>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase leading-tight text-foreground">
              COMO SEU TREINO É CRIADO
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/80">
              Do primeiro contato ao acompanhamento, cada etapa é pensada para construir um treinamento adaptado à sua realidade.
            </p>
          </Reveal>

          {/* Timeline com Linha Contínua, Círculos Centrais e Conexões Horizontais */}
          <MethodTimeline steps={steps} />

          <Reveal className="mt-12 text-center">
            <a
              href="#planos"
              className="btn-premium group inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hover:brightness-110 shadow-elegant"
            >
              <span>Escolher meu plano ↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Componente Dedicado da Timeline da Metodologia */
interface MethodStepItem {
  n: string;
  title: string;
  text: string;
  side: "left" | "right";
}

function MethodTimeline({ steps }: { steps: MethodStepItem[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const desktopRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observers: IntersectionObserver[] = [];

    const handleObserve = (el: HTMLDivElement | null, index: number) => {
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setActiveIdx((prev) => Math.max(prev, index));
            }
          });
        },
        { rootMargin: "-10% 0px -25% 0px", threshold: 0.25 }
      );
      io.observe(el);
      observers.push(io);
    };

    desktopRefs.current.forEach((el, i) => handleObserve(el, i));
    mobileRefs.current.forEach((el, i) => handleObserve(el, i));

    return () => {
      observers.forEach((io) => io.disconnect());
    };
  }, [steps.length]);

  return (
    <div className="relative mt-12">
      {/* ============================================================
          DESKTOP TIMELINE (md e acima): Linha Central Contínua + Cards Alternados
          ============================================================ */}
      <div className="hidden md:block relative max-w-3xl lg:max-w-4xl mx-auto">
        {/* Linha vertical central contínua (do centro da etapa 01 à etapa 05) */}
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 top-7 bottom-7 w-[2px] bg-[oklch(0.68_0.17_40/0.3)] pointer-events-none"
        />
        {/* Destaque progressivo da linha vertical durante a rolagem */}
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 top-7 w-[2px] bg-gradient-to-b from-copper via-copper to-copper/40 pointer-events-none transition-all duration-500 ease-out motion-reduce:transition-none"
          style={{ height: `${(activeIdx / (steps.length - 1)) * 100}%` }}
        />

        <div className="space-y-4 lg:space-y-5">
          {steps.map((s, i) => {
            const isLeft = s.side === "left";
            const isHighlighted = hoveredIdx !== null ? hoveredIdx === i : i === activeIdx;
            const isPassed = i <= activeIdx;

            return (
              <div
                key={s.n}
                ref={(el) => {
                  desktopRefs.current[i] = el;
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="grid grid-cols-[1fr_60px_1fr] items-center group cursor-default transition-all duration-300"
              >
                {/* Coluna Esquerda */}
                {isLeft ? (
                  <div className="flex items-center justify-end">
                    <div
                      className={`w-full max-w-md rounded-xl border p-4 sm:p-5 shadow-sm text-right transition-all duration-300 motion-reduce:transition-none ${
                        isHighlighted
                          ? "border-copper/80 bg-[oklch(0.14_0.006_45)] shadow-[0_0_20px_oklch(0.68_0.17_40/0.18)]"
                          : isPassed
                            ? "border-[oklch(0.68_0.17_40/0.45)] bg-[oklch(0.12_0.004_250)]"
                            : "border-[oklch(0.68_0.17_40/0.25)] bg-[oklch(0.12_0.004_250)] group-hover:border-copper/60"
                      }`}
                    >
                      <h4 className="font-display text-base font-bold uppercase tracking-wide text-foreground">
                        {s.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                    {/* Linha horizontal conectando o card ao círculo */}
                    <div
                      aria-hidden
                      className={`h-[2px] w-6 lg:w-10 shrink-0 transition-all duration-300 motion-reduce:transition-none ${
                        isHighlighted || isPassed
                          ? "bg-copper shadow-[0_0_8px_oklch(0.68_0.17_40/0.5)]"
                          : "bg-[oklch(0.68_0.17_40/0.3)] group-hover:bg-copper/60"
                      }`}
                    />
                  </div>
                ) : (
                  <div className="w-full" aria-hidden="true" />
                )}

                {/* Coluna Central: Círculo Numerado Centralizado sobre a Linha */}
                <div className="flex items-center justify-center relative z-10">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border font-display font-bold text-xs tracking-wider transition-all duration-300 motion-reduce:transition-none ${
                      isHighlighted
                        ? "border-copper bg-[oklch(0.18_0.02_45)] text-copper shadow-[0_0_16px_oklch(0.68_0.17_40/0.5)] scale-110 ring-2 ring-copper/40"
                        : isPassed
                          ? "border-copper bg-[oklch(0.14_0.008_45)] text-copper shadow-[0_0_10px_oklch(0.68_0.17_40/0.25)]"
                          : "border-[oklch(0.68_0.17_40/0.35)] bg-[oklch(0.12_0.004_250)] text-copper/70 group-hover:border-copper/70 group-hover:text-copper"
                    }`}
                  >
                    {s.n}
                  </div>
                </div>

                {/* Coluna Direita */}
                {!isLeft ? (
                  <div className="flex items-center justify-start">
                    {/* Linha horizontal conectando o círculo ao card */}
                    <div
                      aria-hidden
                      className={`h-[2px] w-6 lg:w-10 shrink-0 transition-all duration-300 motion-reduce:transition-none ${
                        isHighlighted || isPassed
                          ? "bg-copper shadow-[0_0_8px_oklch(0.68_0.17_40/0.5)]"
                          : "bg-[oklch(0.68_0.17_40/0.3)] group-hover:bg-copper/60"
                      }`}
                    />
                    <div
                      className={`w-full max-w-md rounded-xl border p-4 sm:p-5 shadow-sm text-left transition-all duration-300 motion-reduce:transition-none ${
                        isHighlighted
                          ? "border-copper/80 bg-[oklch(0.14_0.006_45)] shadow-[0_0_20px_oklch(0.68_0.17_40/0.18)]"
                          : isPassed
                            ? "border-[oklch(0.68_0.17_40/0.45)] bg-[oklch(0.12_0.004_250)]"
                            : "border-[oklch(0.68_0.17_40/0.25)] bg-[oklch(0.12_0.004_250)] group-hover:border-copper/60"
                      }`}
                    >
                      <h4 className="font-display text-base font-bold uppercase tracking-wide text-foreground">
                        {s.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================
          MOBILE TIMELINE (< md): Coluna Única com Linha à Esquerda
          ============================================================ */}
      <div className="md:hidden relative">
        {/* Linha vertical à esquerda conectando as etapas */}
        <div
          aria-hidden
          className="absolute left-[20px] -translate-x-1/2 top-6 bottom-6 w-[2px] bg-[oklch(0.68_0.17_40/0.3)] pointer-events-none"
        />
        {/* Progresso iluminado da linha vertical */}
        <div
          aria-hidden
          className="absolute left-[20px] -translate-x-1/2 top-6 w-[2px] bg-gradient-to-b from-copper via-copper to-copper/40 pointer-events-none transition-all duration-500 ease-out motion-reduce:transition-none"
          style={{ height: `${(activeIdx / (steps.length - 1)) * 100}%` }}
        />

        <div className="space-y-3.5">
          {steps.map((s, i) => {
            const isHighlighted = i === activeIdx;
            const isPassed = i <= activeIdx;

            return (
              <div
                key={s.n}
                ref={(el) => {
                  mobileRefs.current[i] = el;
                }}
                className="relative flex items-center gap-0"
              >
                {/* Círculo numerado posicionado sobre a linha */}
                <div
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-display font-bold text-xs transition-all duration-300 motion-reduce:transition-none ${
                    isHighlighted
                      ? "border-copper bg-[oklch(0.18_0.02_45)] text-copper shadow-[0_0_14px_oklch(0.68_0.17_40/0.45)] ring-2 ring-copper/30"
                      : isPassed
                        ? "border-copper bg-[oklch(0.14_0.008_45)] text-copper shadow-[0_0_8px_oklch(0.68_0.17_40/0.25)]"
                        : "border-[oklch(0.68_0.17_40/0.35)] bg-[oklch(0.12_0.004_250)] text-copper/70"
                  }`}
                >
                  {s.n}
                </div>

                {/* Conexão horizontal entre círculo e card */}
                <div
                  aria-hidden
                  className={`h-[2px] w-4 sm:w-5 shrink-0 transition-colors duration-300 motion-reduce:transition-none ${
                    isHighlighted || isPassed
                      ? "bg-copper shadow-[0_0_6px_oklch(0.68_0.17_40/0.4)]"
                      : "bg-[oklch(0.68_0.17_40/0.3)]"
                  }`}
                />

                {/* Card da etapa à direita */}
                <div
                  className={`flex-1 min-w-0 rounded-xl border p-4 shadow-sm text-left transition-all duration-300 motion-reduce:transition-none ${
                    isHighlighted
                      ? "border-copper/80 bg-[oklch(0.14_0.006_45)] shadow-[0_0_16px_oklch(0.68_0.17_40/0.14)]"
                      : isPassed
                        ? "border-[oklch(0.68_0.17_40/0.45)] bg-[oklch(0.12_0.004_250)]"
                        : "border-[oklch(0.68_0.17_40/0.25)] bg-[oklch(0.12_0.004_250)]"
                  }`}
                >
                  <h4 className="font-display text-base font-bold uppercase tracking-wide text-foreground">
                    {s.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   05 — Planos (Redesenho Completo dos Cards — Prioridade CRO)
   ============================================================ */
function PricingSection() {
  return (
    <section
      id="planos"
      className="relative overflow-hidden py-20 md:py-28 border-t border-[oklch(0.68_0.17_40/0.12)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 50% at 50% 0%, oklch(0.68 0.17 40 / 0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <SectionEyebrow>Planos e Preços</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold uppercase leading-[1.04]">
            ESCOLHA SEU PLANO.
            <br />
            <span className="text-copper">COMECE SUA TRANSFORMAÇÃO.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/80">
            Treinamento individualizado, acompanhamento profissional e opções para diferentes momentos da sua jornada.
          </p>
          <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
            * Valores totais por período contratado.
          </p>
        </Reveal>

        {/* Grade de Cards Redesenhados: Fundo Grafite Escuro, Preço em Destaque, Sem Listas Repetidas */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.id}
              delay={i * 70}
              className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 relative ${
                plan.highlight
                  ? "bg-[oklch(0.14_0.007_250)] border-2 border-[var(--copper)] shadow-2xl lg:-translate-y-2"
                  : "bg-[oklch(0.12_0.004_250)] border border-[oklch(0.68_0.17_40/0.2)] hover:border-[oklch(0.68_0.17_40/0.5)]"
              }`}
            >
              {/* Selo Superior */}
              {plan.badge ? (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="rounded-full bg-copper px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-md">
                    {plan.badge}
                  </span>
                </div>
              ) : null}

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[oklch(1_0_0/0.07)]">
                  <span className="font-display text-xs uppercase tracking-[0.24em] text-muted-foreground font-semibold">
                    Consultoria Igor Almeida
                  </span>
                  <Dumbbell size={16} className="text-copper/70" />
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mt-1 font-medium">
                    {plan.durationLabel}
                  </p>
                </div>

                {/* Preço Total em Destaque */}
                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-copper">R$</span>
                    <span className="font-display text-4xl sm:text-5xl font-black text-foreground tracking-tight">
                      {formatBRL(plan.totalPrice)}
                    </span>
                  </div>

                  {/* Equivalente Mensal quando aplicável */}
                  {plan.monthlyEquivalent ? (
                    <p className="mt-2 text-xs sm:text-sm font-bold text-copper/90">
                      ≈ R$ {formatBRL(plan.monthlyEquivalent)}/MÊS
                    </p>
                  ) : (
                    <div className="h-6" />
                  )}
                </div>

                {/* Benefício Exclusivo Performance+ nos planos Semestral e Anual */}
                {plan.performancePlus ? (
                  <div className="mt-5 rounded-xl border border-[var(--copper)]/40 bg-[oklch(0.16_0.01_40/0.25)] p-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-copper">
                      <Sparkles size={14} />
                      <span>+ 1 SESSÃO PERFORMANCE+</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/85">
                      Orientação técnica individual presencial ou por videochamada.
                    </p>
                  </div>
                ) : (
                  <p className="mt-5 text-xs text-muted-foreground leading-relaxed italic">
                    {plan.subtitle}
                  </p>
                )}
              </div>

              {/* Botão de Contratação Alinhado na Parte Inferior */}
              <div className="mt-7 pt-5 border-t border-[oklch(1_0_0/0.07)]">
                <a
                  href={getWhatsAppUrl(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-premium flex w-full items-center justify-center gap-2 rounded-full py-4 px-4 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all ${
                    plan.highlight
                      ? "bg-copper text-primary-foreground hover:brightness-110 shadow-elegant"
                      : "copper-border text-foreground hover:bg-[oklch(0.68_0.17_40/0.1)] hover:text-white"
                  }`}
                >
                  <MessageCircle size={16} />
                  <span>{plan.ctaText}</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Faixa Informativa Compacta: TODOS OS PLANOS INCLUEM */}
        <Reveal delay={200} className="mt-10 rounded-2xl copper-border bg-[oklch(0.12_0.004_250)] p-6 md:p-8">
          <div className="text-center md:text-left">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-copper mb-4">
              TODOS OS PLANOS INCLUEM:
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm sm:text-base text-foreground/85 font-medium">
              {COMMON_BENEFITS.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Check size={18} className="text-copper shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 pt-4 border-t border-[oklch(1_0_0/0.06)] text-xs text-muted-foreground leading-relaxed">
              * Valores referentes ao período completo de acompanhamento. Equivalentes mensais apresentados apenas para comparação.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   06 — Performance+ (Sessão de Ajuste Técnico)
   ============================================================ */
function PerformancePlusSection() {
  const benefits = [
    "Sessão presencial ou por videochamada.",
    "Revisão dos exercícios.",
    "Orientação técnica.",
    "Correção de movimentos.",
    "Esclarecimento de dúvidas.",
  ];

  return (
    <section
      id="performance-plus"
      className="relative overflow-hidden py-16 md:py-24 border-t border-[oklch(0.68_0.17_40/0.12)] bg-[oklch(0.10_0.004_250)]"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-3xl copper-border bg-[oklch(0.12_0.004_250)] p-8 md:p-12 shadow-elegant">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            {/* Vídeo Preservado */}
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] w-full overflow-hidden rounded-2xl copper-border bg-[oklch(0.10_0.004_250)]">
              <video
                src={presencialVideo.url}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.10 0.004 250 / 0.25) 0%, oklch(0.10 0.004 250 / 0.3) 50%, oklch(0.10 0.004 250 / 0.95) 100%)",
                }}
              />
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-2 rounded-full copper-border bg-[oklch(0.12_0.004_250/0.85)] px-3.5 py-1.5 text-xs uppercase tracking-[0.24em] text-copper backdrop-blur font-semibold">
                  <Video size={13} /> Ajuste de Execução
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-xl font-bold uppercase tracking-wide leading-tight text-foreground">
                  PERFORMANCE+
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  Presencial em Arcoverde–PE ou por Videochamada para todo o Brasil
                </p>
              </div>
            </div>

            {/* Conteúdo Performance+ */}
            <div>
              <SectionEyebrow>PERFORMANCE+ — SESSÃO DE AJUSTE TÉCNICO</SectionEyebrow>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase leading-tight text-foreground">
                SEU TREINO É PERSONALIZADO.
                <br />
                <span className="text-copper">SUA EXECUÇÃO TAMBÉM.</span>
              </h3>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-foreground/80">
                Nos planos semestral e anual, você recebe uma sessão individual de orientação técnica para revisar exercícios, esclarecer dúvidas e aperfeiçoar a execução dos movimentos.
              </p>

              <div className="my-5 rounded-xl border border-[oklch(0.68_0.17_40/0.3)] bg-[oklch(0.14_0.005_250)] p-4 flex items-center gap-3">
                <Sparkles size={20} className="text-copper shrink-0" />
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-foreground">
                  INCLUÍDA NOS PLANOS <span className="text-copper">SEMESTRAL</span> E <span className="text-copper">ANUAL</span> (1 sessão por contratação).
                </p>
              </div>

              <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-foreground/85 font-medium">
                    <Check size={16} className="text-copper shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   07 — Suporte (Faixa Horizontal Compacta)
   ============================================================ */
function SupportSection() {
  const items = [
    {
      icon: MessageCircle,
      title: "WHATSAPP EXCLUSIVO",
      desc: "Para dúvidas dos alunos.",
    },
    {
      icon: Calendar,
      title: "SEGUNDA A SEXTA",
      desc: "Dias de atendimento.",
    },
    {
      icon: Clock,
      title: "ATÉ 48 HORAS ÚTEIS",
      desc: "Prazo de resposta.",
    },
    {
      icon: Dumbbell,
      title: "ORIENTAÇÃO TÉCNICA",
      desc: "Dúvidas sobre o treino e execução.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 border-t border-[oklch(0.68_0.17_40/0.12)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-2xl copper-border bg-[oklch(0.12_0.004_250)] p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[oklch(1_0_0/0.07)]">
            <div>
              <SectionEyebrow>Regras Claras</SectionEyebrow>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase text-foreground">
                SUPORTE DE VERDADE. <span className="text-copper">REGRAS CLARAS.</span>
              </h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md">
              Acompanhamento estruturado com transparência de atendimento durante todo o período da sua consultoria.
            </p>
          </div>

          {/* Faixa Horizontal com 4 Elementos */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl copper-border bg-[oklch(0.10_0.004_250)] p-4 flex items-start gap-3.5"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg copper-border bg-[oklch(0.14_0.005_250)] text-copper">
                    <Icon size={17} />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   08 — Sobre Igor Almeida (Autoridade Fortalecida)
   ============================================================ */
function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 md:py-28 bg-[oklch(0.10_0.004_250)] border-t border-[oklch(0.68_0.17_40/0.12)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 100% 100%, oklch(0.68 0.17 40 / 0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Retrato */}
        <Reveal variant="left" className="relative">
          <div
            aria-hidden
            className="absolute -inset-10 rounded-[40px] opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 40% 60%, oklch(0.68 0.17 40 / 0.3), transparent 65%)",
            }}
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl copper-border bg-[oklch(0.12_0.004_250)] shadow-2xl">
            <img
              src={igorAbout.url}
              alt="Igor Almeida Treinador"
              className="absolute inset-0 h-full w-full object-cover object-[center_top]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, oklch(0.10 0.004 250 / 0.9) 100%)",
              }}
            />
            <div className="pointer-events-none absolute -bottom-px -right-px h-20 w-20 border-b-2 border-r-2 border-[var(--copper)]" />
            <div className="pointer-events-none absolute -top-px -left-px h-20 w-20 border-t-2 border-l-2 border-[var(--copper)]" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-sm uppercase tracking-[0.28em] text-copper font-bold">
                Igor Almeida
              </p>
              <p className="mt-1 text-sm text-foreground/90 font-medium">
                Especialista em Prescrição de Exercícios
              </p>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 rounded-xl copper-border bg-[oklch(0.10_0.004_250)] px-4 py-3 shadow-elegant backdrop-blur">
            <div className="font-display text-[10px] uppercase tracking-[0.28em] text-copper font-bold">
              CREF
            </div>
            <div className="mt-0.5 font-display text-xs font-bold text-foreground">PE-011148-G/PE</div>
          </div>
        </Reveal>

        {/* Biografia e Indicadores */}
        <Reveal variant="right" delay={120}>
          <SectionEyebrow>Sobre o Treinador</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.04]">
            10 ANOS DE EXPERIÊNCIA.
            <br />
            <span className="text-copper">UM MÉTODO ADAPTADO À SUA REALIDADE.</span>
          </h2>

          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
            <p>
              Sou Igor Almeida, graduado em Educação Física Plena pela UniFBV e especialista em prescrição de exercícios.
            </p>
            <p>
              Tenho dez anos de experiência em treinamento voltado à hipertrofia e ao emagrecimento.
            </p>
            <p>
              Na minha consultoria, cada programa é elaborado diretamente por mim, considerando seus objetivos, limitações e rotina.
            </p>
          </div>

          <blockquote className="relative mt-7 rounded-2xl copper-border bg-[oklch(0.12_0.004_250/0.85)] p-6 backdrop-blur border-l-4 border-l-[var(--copper)]">
            <Quote size={22} className="text-copper mb-2 opacity-70" />
            <p className="font-display text-lg sm:text-xl leading-relaxed text-foreground font-bold">
              "ALÉM DE ESPECIALISTA, EU SOU REALISTA."
            </p>
            <footer className="mt-1.5 font-display text-xs uppercase tracking-[0.24em] text-copper font-semibold">
              — Igor Almeida
            </footer>
          </blockquote>

          {/* Indicadores Profissionais */}
          <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-[oklch(1_0_0/0.08)]">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-black text-copper">10 ANOS</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1 font-semibold">
                DE EXPERIÊNCIA
              </div>
            </div>
            <div>
              <div className="font-display text-base sm:text-lg font-black text-copper uppercase leading-tight">
                PRESCRIÇÃO INDIVIDUALIZADA
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1 font-semibold">
                PLANEJAMENTO EXCLUSIVO
              </div>
            </div>
            <div>
              <div className="font-display text-base sm:text-lg font-black text-copper uppercase leading-tight">
                DIRETAMENTE PELO IGOR
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1 font-semibold">
                SEM TERCEIRIZAÇÃO
              </div>
            </div>
          </div>

          <div className="mt-9">
            <a
              href={getWhatsAppUrl("Olá, Igor! Conheci sua história pelo site e gostaria de falar com você sobre a consultoria.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium group inline-flex items-center justify-center gap-2 rounded-full copper-border px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-foreground hover:bg-[oklch(0.68_0.17_40/0.1)] shadow-sm"
            >
              <MessageCircle size={16} className="text-copper" />
              <span>Falar com o Igor ↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   09 — Consulta Presencial (Opção Secundária)
   ============================================================ */
function InPersonConsultationSection() {
  const whatsappMsg =
    "Olá, Igor! Gostaria de receber informações sobre a consulta presencial na Clínica Tratus, em Arcoverde–PE.";

  return (
    <section className="relative overflow-hidden py-14 border-t border-[oklch(0.68_0.17_40/0.12)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="rounded-2xl copper-border bg-[oklch(0.12_0.004_250)] p-7 md:p-10 shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-copper font-semibold">
              <MapPin size={14} /> Atendimento Presencial
            </div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-foreground">
              PREFERE UMA CONSULTA PRESENCIAL?
            </h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Também é possível agendar um atendimento presencial com Igor Almeida na <strong>Clínica Tratus</strong>, em Arcoverde–PE.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
              <span className="text-copper">Local:</span> CLÍNICA TRATUS — ARCOVERDE/PE
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={getWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium group inline-flex items-center justify-center gap-2 rounded-full copper-border px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-foreground hover:bg-[oklch(0.68_0.17_40/0.1)] shadow-sm"
            >
              <MessageCircle size={15} className="text-copper" />
              <span>Agendar consulta na Clínica Tratus ↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   10 — Perguntas Frequentes (FAQ)
   ============================================================ */
function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.10_0.004_250)] py-20 md:py-28 border-t border-[oklch(0.68_0.17_40/0.12)]">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <SectionEyebrow>Tire Suas Dúvidas</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.04]">
            PERGUNTAS <span className="text-copper">FREQUENTES.</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Tudo o que você precisa saber sobre a consultoria e a metodologia antes de começar.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-3.5">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl copper-border bg-[oklch(0.12_0.004_250)] px-6 py-1.5 border-b-0"
              >
                <AccordionTrigger className="font-display text-base md:text-lg font-bold uppercase tracking-wide text-foreground hover:text-copper hover:no-underline text-left py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base leading-relaxed text-muted-foreground pt-1 pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   11 — Chamada Final
   ============================================================ */
function FinalCTASection() {
  const directWhatsappMsg =
    "Olá, Igor! Conheci sua consultoria pelo site e gostaria de tirar algumas dúvidas sobre os planos.";

  return (
    <section id="contato" className="relative overflow-hidden pt-8">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-t-[40px] border border-[oklch(0.68_0.17_40/0.2)] bg-[oklch(0.10_0.004_250)] px-6 py-20 md:px-16 md:py-28">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 100% at 50% 100%, oklch(0.68 0.17 40 / 0.28), transparent 70%), linear-gradient(180deg, oklch(0.12 0.004 250), oklch(0.08 0.004 250))",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 left-1/2 h-[520px] w-[820px] max-w-[110%] -translate-x-1/2 rounded-full animate-glow"
            style={{
              background:
                "radial-gradient(circle, oklch(0.68 0.17 40 / 0.45), transparent 65%)",
              filter: "blur(30px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.68 0.17 40) 1px, transparent 1px), linear-gradient(90deg, oklch(0.68 0.17 40) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%)",
            }}
          />

          <div className="pointer-events-none absolute inset-x-0 -bottom-6 select-none text-center font-display text-[26vw] font-black leading-none text-[oklch(1_0_0/0.03)] md:-bottom-10 md:text-[220px]">
            IGOR
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionEyebrow>PRÓXIMO PASSO</SectionEyebrow>
            </Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-6 font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold uppercase leading-[1.0]"
            >
              COMEÇA COM UMA DECISÃO.
              <br />
              <span className="text-copper">TREINE COM MÉTODO.</span>
              <br />
              EVOLUA COM DIREÇÃO.
            </Reveal>
            <Reveal
              as="p"
              delay={180}
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-foreground/85"
            >
              Escolha seu plano e comece a treinar com um planejamento desenvolvido para sua realidade.
            </Reveal>
            <Reveal
              delay={280}
              className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
            >
              <a
                href="#planos"
                className="btn-premium group inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hover:brightness-110 shadow-elegant w-full sm:w-auto"
              >
                <span>Escolher meu plano ↗</span>
              </a>
              <a
                href={getWhatsAppUrl(directWhatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium group inline-flex items-center justify-center gap-2 rounded-full copper-border px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-foreground hover:bg-[oklch(0.68_0.17_40/0.08)] w-full sm:w-auto"
              >
                <MessageCircle size={16} className="text-copper" />
                <span>Falar com o Igor ↗</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Rodapé
   ============================================================ */
function Footer() {
  const directWhatsappMsg =
    "Olá, Igor! Conheci sua consultoria pelo site e gostaria de tirar algumas dúvidas.";

  return (
    <footer className="border-t border-[oklch(0.68_0.17_40/0.15)] bg-[oklch(0.06_0.003_250)] py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 01 — Marca */}
          <div>
            {logoImg.url ? (
              <img
                src={logoImg.url}
                alt="Igor Almeida"
                className="h-11 w-auto object-contain"
              />
            ) : (
              <div className="leading-tight">
                <div className="font-display text-xl font-semibold uppercase tracking-[0.18em]">
                  Igor <span className="text-copper">Almeida</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                  Consultoria
                </div>
              </div>
            )}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Consultoria online de treinamento individualizado, com prescrição direta e acompanhamento profissional.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-[oklch(0.68_0.17_40/0.25)] bg-[oklch(0.10_0.004_250)] px-2.5 py-1 text-[11px] font-semibold text-copper">
              <span>CREF PE-011148-G/PE</span>
            </div>
          </div>

          {/* 02 — Navegação */}
          <div>
            <div className="font-display text-xs uppercase tracking-[0.3em] text-copper font-bold">
              Navegação
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground font-medium"
                  >
                    <span className="h-px w-3 bg-[var(--copper)] opacity-60" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 03 — Contato */}
          <div>
            <div className="font-display text-xs uppercase tracking-[0.3em] text-copper font-bold">
              Contato
            </div>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href={getWhatsAppUrl(directWhatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle size={15} className="text-copper" /> +55 81 9752-6995
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Instagram size={15} className="text-copper" /> Instagram Oficial
                </a>
              </li>
            </ul>
          </div>

          {/* 04 — Atendimento Presencial */}
          <div>
            <div className="font-display text-xs uppercase tracking-[0.3em] text-copper font-bold">
              Atendimento Presencial
            </div>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground flex items-center gap-2">
                <MapPin size={15} className="text-copper shrink-0" />
                Clínica Tratus
              </p>
              <p className="pl-6 text-xs uppercase tracking-wider text-muted-foreground">
                Arcoverde – PE
              </p>
              <p className="pl-6 text-xs text-muted-foreground/80">
                Atendimento independente mediante agendamento prévio.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[oklch(1_0_0/0.06)] pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Igor Almeida. Todos os direitos reservados.
          </p>
          <p className="max-w-md md:text-right">
            O acompanhamento físico não substitui avaliação médica quando necessária.
          </p>
        </div>
      </div>
    </footer>
  );
}
