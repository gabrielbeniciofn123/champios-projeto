/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  CreditCard, 
  MessageCircle, 
  ChevronRight, 
  ShoppingBag, 
  Users, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// Mock Data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Como manter a constância nos treinos",
    excerpt: "Dicas práticas para você não desistir da sua transformação e alcançar seus resultados.",
    date: "24 Mar, 2026",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "A importância da alimentação no pós-treino",
    excerpt: "Saiba o que comer para recuperar seus músculos e ter mais energia no dia seguinte.",
    date: "20 Mar, 2026",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Benefícios do treino de força para iniciantes",
    excerpt: "Por que começar pela musculação é a melhor escolha para sua saúde a longo prazo.",
    date: "15 Mar, 2026",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
  }
];

const PRODUCTS = [
  {
    id: 1,
    name: "Camiseta Team Champion",
    price: "R$ 79,90",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Shorts Performance Masculino",
    price: "R$ 89,90",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Legging Sculpt Feminina",
    price: "R$ 119,90",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Top Suporte Extra",
    price: "R$ 69,90",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop"
  }
];

const PARTNERS = [
  { name: "NutriLife", category: "Nutrição", logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=200&auto=format&fit=crop" },
  { name: "FisioCare", category: "Fisioterapia", logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=200&auto=format&fit=crop" },
  { name: "Suplementos BC", category: "Suplementação", logo: "https://images.unsplash.com/photo-1593094478221-3d473c067b9b?q=80&w=200&auto=format&fit=crop" },
  { name: "Saúde Ativa", category: "Clínica Médica", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=200&auto=format&fit=crop" }
];

const PLANS = [
  {
    name: "Plano Mensal",
    price: "129",
    features: ["Acesso total à musculação", "Avaliação física mensal", "Sem fidelidade"],
    popular: false
  },
  {
    name: "Plano Trimestral",
    price: "109",
    features: ["Acesso total à musculação", "Avaliação física mensal", "Fidelidade 3 meses", "Brinde exclusivo"],
    popular: true
  },
  {
    name: "Plano Anual",
    price: "89",
    features: ["Acesso total à musculação", "Avaliação física mensal", "Fidelidade 12 meses", "Camiseta Team Champion"],
    popular: false
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-yellow-400/20' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <img 
              src="https://drive.google.com/thumbnail?id=1-jkgiya-WRPgM9zI5wbwCIkGnT0q8rw9&sz=w200" 
              alt="Champion Fitness Logo" 
              className="w-12 h-12 rounded-full border-2 border-yellow-400 object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-xl tracking-tighter hidden sm:block">CHAMPION <span className="text-yellow-400">FITNESS</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Início', 'Planos', 'Blog', 'Loja', 'Contato'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-sm font-medium hover:text-yellow-400 transition-colors uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/553138609698" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              MATRICULE-SE
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-yellow-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 pt-20"
          >
            {['Início', 'Planos', 'Blog', 'Loja', 'Contato'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-2xl font-bold hover:text-yellow-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/553138609698" 
              className="bg-yellow-400 text-black px-10 py-4 rounded-full font-black text-lg"
            >
              WHATSAPP
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
            alt="Gym Background" 
            className="w-full h-full object-cover scale-110 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://drive.google.com/thumbnail?id=1-jkgiya-WRPgM9zI5wbwCIkGnT0q8rw9&sz=w400" 
              alt="Champion Fitness Logo Large" 
              className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full border-4 border-yellow-400 mb-8 shadow-2xl shadow-yellow-400/20"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-none">
              CHAMPION <span className="text-yellow-400">FITNESS</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-neutral-300 mb-8 max-w-2xl mx-auto italic">
              💛 Saúde, transformação e resultado. Viva a experiência <span className="text-yellow-400 font-bold">#Teamchampion</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollTo('planos')}
                className="w-full sm:w-auto bg-yellow-400 text-black px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 group"
              >
                <CreditCard size={20} />
                ESCOLHA SEU PLANO
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/553138609698"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-yellow-400/50">
          <ChevronRight size={40} className="rotate-90" />
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">PLANOS <span className="text-yellow-400">EXCLUSIVOS</span></h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Temos o plano ideal para o seu objetivo. Comece hoje mesmo sua jornada de transformação.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PLANS.map((plan, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-yellow-400 bg-yellow-400/5' : 'border-neutral-800 bg-neutral-950'} flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-sm text-neutral-400 font-medium">R$</span>
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-sm text-neutral-400 font-medium">/mês</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-neutral-300">
                      <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                        <ChevronRight size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-black text-sm transition-all ${plan.popular ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                  ASSINAR AGORA
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Dicas & <span className="text-yellow-400 italic">Blog</span></h2>
              <p className="text-neutral-400 text-lg">Conteúdo exclusivo para potencializar seus resultados.</p>
            </div>
            <button className="text-yellow-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              VER TODOS OS POSTS <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {post.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors leading-tight">{post.title}</h3>
                <p className="text-neutral-400 line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-yellow-400/80">
                  LER MAIS <ChevronRight size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="loja" className="py-24 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <ShoppingBag size={14} /> LOJA TEAM CHAMPION
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">VISTA A <span className="text-yellow-400">MARCA</span></h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Roupas e acessórios exclusivos para você treinar com estilo e conforto.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-4 bg-neutral-800">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ShoppingBag size={20} />
                  </button>
                </div>
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-yellow-400 font-black">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 text-neutral-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <Users size={14} /> NOSSAS PARCERIAS
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">REDE DE <span className="text-yellow-400 italic">VANTAGENS</span></h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Alunos Champion Fitness possuem descontos exclusivos em nossos parceiros.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PARTNERS.map((partner, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-bold text-xl mb-1">{partner.name}</h3>
                <p className="text-sm text-yellow-400 font-medium">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section id="contato" className="py-24 px-6 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none uppercase">FALE <br /> <span className="text-white">CONOSCO</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-black text-yellow-400 p-4 rounded-2xl">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black text-lg uppercase mb-1">Localização</h4>
                  <p className="font-medium text-black/80">Av. Wilson Alvarenga de Oliveira, 917 - Viúva<br />Barão de Cocais - MG, 35970-000</p>
                  <a href="https://maps.google.com/?q=Av. Wilson Alvarenga de Oliveira, 917 - Viúva, Barão de Cocais - MG, 35970-000" target="_blank" className="text-sm font-black underline mt-2 block">VER NO MAPA</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-black text-yellow-400 p-4 rounded-2xl">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black text-lg uppercase mb-1">Telefone</h4>
                  <p className="font-medium text-black/80">(31) 3860-9698</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-black text-yellow-400 p-4 rounded-2xl">
                  <Instagram size={28} />
                </div>
                <div>
                  <h4 className="font-black text-lg uppercase mb-1">Instagram</h4>
                  <p className="font-medium text-black/80">@championfitnessbc</p>
                  <a href="https://instagram.com" target="_blank" className="text-sm font-black underline mt-2 block">SEGUIR AGORA</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-10 rounded-[40px] shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="text-yellow-400" size={32} />
              <h3 className="text-3xl font-black tracking-tighter uppercase">Horários</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { day: 'Segunda-feira', time: '5h às 22h' },
                { day: 'Terça-feira', time: '5h às 22h' },
                { day: 'Quarta-feira', time: '5h às 22h' },
                { day: 'Quinta-feira', time: '5h às 22h' },
                { day: 'Sexta-feira', time: '5h às 21h' },
                { day: 'Sábado', time: '7h às 12h' },
                { day: 'Domingo', time: 'Fechado', closed: true },
              ].map((item, idx) => (
                <div key={idx} className={`flex justify-between items-center py-3 border-b border-white/10 ${item.closed ? 'text-neutral-500' : ''}`}>
                  <span className="font-bold">{item.day}</span>
                  <span className={`font-black ${item.closed ? '' : 'text-yellow-400'}`}>{item.time}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-10 bg-white/10 border border-white/20 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition-all">
              SUGERIR NOVOS HORÁRIOS
            </button>
          </div>
        </div>
      </section>

      {/* Google Maps Section at the end */}
      <section className="w-full h-[500px] relative grayscale hover:grayscale-0 transition-all duration-1000 group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.548454553488!2d-43.4836697241355!3d-19.753106581595166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa506f366052843%3A0x899f899999999999!2sAv.%20Wilson%20Alvarenga%20de%20Oliveira%2C%20917%20-%20Vi%C3%BAva%2C%20Bar%C3%A3o%20de%20Cocais%20-%20MG%2C%2035970-000!5e0!3m2!1spt-BR!2sbr!4v1711472268000!5m2!1spt-BR!2sbr" 
          className="w-full h-full border-0" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Champion Fitness Location"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a 
            href="https://maps.google.com/?q=Av. Wilson Alvarenga de Oliveira, 917 - Viúva, Barão de Cocais - MG, 35970-000" 
            target="_blank" 
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
          >
            Como chegar na Champion
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="https://drive.google.com/thumbnail?id=1-jkgiya-WRPgM9zI5wbwCIkGnT0q8rw9&sz=w100" 
              alt="Champion Fitness Logo Small" 
              className="w-10 h-10 rounded-full border border-yellow-400 object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="font-black tracking-tighter">CHAMPION <span className="text-yellow-400">FITNESS</span></span>
          </div>
          
          <p className="text-neutral-500 text-sm">© 2026 Champion Fitness | BC. Todos os direitos reservados.</p>
          
          <div className="flex gap-6">
            <Instagram className="text-neutral-400 hover:text-yellow-400 cursor-pointer transition-colors" size={20} />
            <MessageCircle className="text-neutral-400 hover:text-yellow-400 cursor-pointer transition-colors" size={20} />
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/553138609698"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
          Fale conosco!
        </span>
      </a>

    </div>
  );
}
