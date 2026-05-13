"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Zap, Shield, Cpu, Radio, Eye, AlertTriangle } from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"artigo" | "discussao">("artigo")

  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Top Info Bar */}
      <div className="bg-cyber-darker border-b border-neon-cyan/30 px-4 py-1 relative z-10">
        <div className="container mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-4">
            <span className="text-neon-cyan animate-pulse">2045 edition</span>
            <span className="text-gray-600">//</span>
            <span className="text-neon-magenta">Ver 3.17.12</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            <span className="text-neon-yellow uppercase tracking-widest">Acesso Público Da Net</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-neon-cyan/30 bg-cyber-darker/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-5xl font-bold text-neon-cyan glitch-text tracking-wider" style={{
              textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff'
            }}>W54</span>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-neon-magenta tracking-wide" style={{
                textShadow: '0 0 10px #ff00ff'
              }}>WIKIPÉDIA</span>
              <span className="text-xs text-neon-yellow uppercase tracking-widest">DataNet Archive</span>
            </div>
          </Link>
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neon-cyan" />
            <Input
              type="text"
              placeholder="PESQUISAR DATABANK..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-cyber-dark border-neon-cyan/50 text-neon-cyan placeholder:text-neon-cyan/50 focus:border-neon-magenta focus:shadow-neon-magenta font-mono text-sm uppercase tracking-wider"
            />
          </div>
        </div>
      </header>

      {/* Banner Ad - Trauma Team */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-y border-neon-red/50 relative z-10">
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-center gap-6">
            <AlertTriangle className="h-5 w-5 text-neon-red animate-pulse" />
            <div className="flex items-center gap-4">
              <span className="text-neon-red font-bold text-lg tracking-wider" style={{ textShadow: '0 0 10px #ff0040' }}>TRAUMA TEAM</span>
              <span className="text-gray-300 text-sm font-mono">Plano Premium: Resposta em 3 minutos ou seu dinheiro de volta</span>
            </div>
            <Button size="sm" className="bg-neon-red hover:bg-red-600 text-white font-bold uppercase tracking-wider text-xs">
              Assinar Agora
            </Button>
          </div>
        </div>
      </div>

      <div className="flex relative z-10">
        {/* Wikipedia Style Sidebar */}
        <aside className="hidden lg:block w-60 p-4 border-r border-neon-cyan/20">
          <div className="sticky top-4 space-y-4">
            {/* Navegação Principal */}
            <nav className="cyber-card rounded overflow-hidden">
              <div className="bg-neon-cyan/10 px-3 py-2 border-b border-neon-cyan/30">
                <span className="text-sm font-bold text-neon-cyan uppercase tracking-wider flex items-center gap-2">
                  <Radio className="h-4 w-4" /> Navegação
                </span>
              </div>
              <ul className="divide-y divide-neon-cyan/10">
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all font-mono">
                    &gt; Página principal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all font-mono">
                    &gt; Conteúdo destacado
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all font-mono">
                    &gt; Ajuda DataNet
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Banco de Dados */}
            <nav className="cyber-card rounded overflow-hidden">
              <div className="bg-neon-magenta/10 px-3 py-2 border-b border-neon-magenta/30">
                <span className="text-sm font-bold text-neon-magenta uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="h-4 w-4" /> Banco de Dados
                </span>
              </div>
              <ul className="divide-y divide-neon-magenta/10">
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-neon-magenta/10 hover:text-neon-magenta transition-all font-mono">
                    &gt; Artigos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-neon-magenta/10 hover:text-neon-magenta transition-all font-mono">
                    &gt; Portais
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-neon-magenta/10 hover:text-neon-magenta transition-all font-mono">
                    &gt; Páginas relacionadas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-neon-magenta/10 hover:text-neon-magenta transition-all font-mono">
                    &gt; Ver histórico
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Ad - Kiroshi Optics */}
            <div className="cyber-card rounded overflow-hidden border-neon-purple/50">
              <div className="bg-gradient-to-br from-purple-950 to-purple-900 p-3 text-center">
                <Eye className="h-8 w-8 text-neon-purple mx-auto mb-2" />
                <span className="text-neon-purple font-bold text-sm block" style={{ textShadow: '0 0 10px #bf00ff' }}>KIROSHI OPTICS</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">Veja além do possível</p>
                <p className="text-neon-yellow text-xs mt-2 font-bold">MK.4 DISPONÍVEL</p>
              </div>
            </div>

            {/* NetWatch Notice */}
            <div className="rounded overflow-hidden border border-neon-yellow/50 bg-yellow-950/20">
              <div className="bg-neon-yellow/10 px-3 py-2 border-b border-neon-yellow/30">
                <span className="text-sm font-bold text-neon-yellow uppercase tracking-wider flex items-center gap-2">
                  <Shield className="h-4 w-4" /> NETWATCH
                </span>
              </div>
              <div className="px-3 py-3 space-y-2">
                <p className="text-xs text-gray-400 font-mono">
                  ALERTA: Página monitorada
                </p>
                <p className="text-xs font-mono">
                  ID: <span className="text-neon-cyan">NW-744-2045</span>
                </p>
                <p className="text-xs font-mono">
                  Risco: <span className="text-neon-green font-bold">BAIXO</span>
                </p>
                <div className="pt-3 border-t border-neon-yellow/20 text-center">
                  <span className="text-lg font-bold tracking-widest text-neon-yellow" style={{ textShadow: '0 0 10px #ffff00' }}>NETWATCH</span>
                  <p className="text-xs text-gray-500 mt-1 font-mono">sua segurança, nosso controle</p>
                </div>
              </div>
            </div>

            {/* Ad - Militech */}
            <div className="cyber-card rounded overflow-hidden border-neon-red/50">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-3 text-center">
                <span className="text-neon-red font-bold text-lg block tracking-wider" style={{ textShadow: '0 0 10px #ff0040' }}>MILITECH</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">Proteção Total</p>
                <div className="mt-2 border-t border-gray-700 pt-2">
                  <p className="text-xs text-gray-500">Armas &bull; Segurança &bull; Cyberware</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 py-6 px-6">
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-2 text-neon-cyan tracking-wide" style={{
              textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff'
            }}>Chidi Nikolic</h1>
            <p className="text-sm text-gray-500 font-mono">Origem: W54 DataNet Archive // Acesso público autorizado</p>
          </div>
          
          {/* Wikipedia Tabs */}
          <div className="border-b border-neon-cyan/30 mb-6">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab("artigo")}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === "artigo"
                    ? "border-b-2 border-neon-cyan text-neon-cyan bg-neon-cyan/10"
                    : "text-gray-500 hover:text-neon-cyan hover:bg-neon-cyan/5"
                }`}
              >
                Artigo
              </button>
              <button
                onClick={() => setActiveTab("discussao")}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === "discussao"
                    ? "border-b-2 border-neon-magenta text-neon-magenta bg-neon-magenta/10"
                    : "text-gray-500 hover:text-neon-magenta hover:bg-neon-magenta/5"
                }`}
              >
                Discussão
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "artigo" ? (
            <div className="flex gap-6">
              {/* Infobox - Right Side */}
              <aside className="hidden md:block w-72 flex-shrink-0 order-2">
                <div className="cyber-card rounded border-neon-cyan/50">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 px-3 py-3 border-b border-neon-cyan/30 text-center">
                    <span className="text-lg font-bold text-neon-cyan uppercase tracking-wider" style={{ textShadow: '0 0 10px #00ffff' }}>CHIDI NIKOLIC</span>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="p-3 border-b border-neon-cyan/20">
                    <div className="w-full h-48 bg-cyber-gray rounded flex items-center justify-center border border-neon-cyan/20">
                      <span className="text-gray-600 text-xs font-mono uppercase">[IMAGEM INDISPONÍVEL]</span>
                    </div>
                  </div>
                  
                  {/* Info Table */}
                  <div className="divide-y divide-neon-cyan/10 text-sm font-mono">
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Nome completo</span>
                      <p className="text-gray-300">Chidi Aleksandar Nikolic</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Nascimento</span>
                      <p className="text-gray-300">17 de fevereiro de 1970</p>
                      <p className="text-gray-500 text-xs">Neo-Iugoslávia</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Idade em 2045</span>
                      <p className="text-neon-cyan">75 anos</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Residência</span>
                      <p className="text-gray-300">Westbrook, Night City</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Profissão</span>
                      <p className="text-gray-300">Jornalista investigativo</p>
                      <p className="text-gray-300">Escritor</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Anos ativos</span>
                      <p className="text-gray-300">1990 — 2038</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Estado civil</span>
                      <p className="text-gray-300">Viúvo</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Cônjuge</span>
                      <Link href="/wiki/eleanor-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Eleanor V. Moreau Nikolic</Link>
                      <p className="text-gray-500 text-xs">(1972 — 2009)</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Filhos</span>
                      <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Daniela Nikolic</Link>
                      <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Sophia Nikolic</Link>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Netos</span>
                      <p className="text-neon-cyan">Penelope Nikolic</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Parentes</span>
                      <Link href="/wiki/marija-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Marija Nikolic (irmã)</Link>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Afiliações</span>
                      <p className="text-gray-300">Imprensa Independente NC</p>
                      <p className="text-gray-300">Free Press Archive</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Status legal</span>
                      <p className="text-neon-green">Sem registros criminais</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-neon-magenta text-xs uppercase">Status 2045</span>
                      <p className="text-gray-300">Aposentado</p>
                    </div>
                  </div>
                </div>

                {/* Side Ad - Arasaka */}
                <div className="mt-4 cyber-card rounded overflow-hidden border-neon-red/50">
                  <div className="bg-gradient-to-br from-red-950 to-gray-900 p-4 text-center">
                    <span className="text-2xl font-bold text-white block tracking-widest">ARASAKA</span>
                    <p className="text-gray-400 text-xs mt-2 font-mono">Seu futuro. Nossa visão.</p>
                    <div className="mt-3 border-t border-red-900/50 pt-3">
                      <p className="text-neon-red text-xs font-bold">SECURITY DIVISION</p>
                      <p className="text-gray-500 text-xs mt-1">Proteção corporativa premium</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="flex-1 order-1 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-neon-cyan">Chidi Aleksandr Nikolic</strong> (Neo-Iugoslávia, 17 de fevereiro de 1970) é um jornalista investigativo aposentado, escritor e comentarista político reconhecido por sua atuação durante os períodos de instabilidade corporativa em Night City ao longo das décadas de 1990, 2000 e 2030. É considerado uma das figuras mais influentes da imprensa independente da era pós-Guerra Corporativa.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Ao longo de mais de cinquenta anos de carreira, Nikolic desenvolveu reputação pública marcada por neutralidade política aparente, ética jornalística rígida e ausência completa de envolvimento criminal ou corporativo direto.
                </p>

                {/* Inline Ad */}
                <div className="my-6 p-4 cyber-card rounded border-neon-yellow/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="h-6 w-6 text-neon-yellow" />
                      <div>
                        <span className="text-neon-yellow font-bold text-sm">ZETATECH NEURAL LINK</span>
                        <p className="text-gray-400 text-xs font-mono">Conexão direta com a Net. Sem lag. Sem limites.</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-neon-yellow text-black hover:bg-yellow-400 font-bold text-xs uppercase">
                      Ver Mais
                    </Button>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-neon-magenta mt-8 mb-3 border-b border-neon-magenta/30 pb-2 uppercase tracking-wider">
                  Início da carreira
                </h2>
                
                <p className="text-gray-300 leading-relaxed">
                  Filho de uma tradicional família neo-iugoslava ligada ao meio acadêmico e político, Chidi iniciou sua carreira jornalística ainda durante o final dos conflitos econômicos internacionais da década de 1990. Entre seus trabalhos mais conhecidos estão <em className="text-neon-cyan">Cinzas Sobre Corpo Plaza</em> (2023), <em className="text-neon-cyan">O Preço da Reconstrução</em> (2031) e <em className="text-neon-cyan">Quem Controla a Guerra?</em> (2036).
                </p>

                <h2 className="text-xl font-bold text-neon-magenta mt-8 mb-3 border-b border-neon-magenta/30 pb-2 uppercase tracking-wider">
                  Vida pessoal
                </h2>
                
                <p className="text-gray-300 leading-relaxed">
                  Em 2005, casou-se com <Link href="/wiki/eleanor-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Eleanor Vivienne Moreau Nikolic</Link>, artista franco-americana ligada ao movimento cultural retrô independente da cidade. Eleanor faleceu em 17 de novembro de 2009 durante uma explosão em um centro de imprensa independente, caso oficialmente tratado como acidente estrutural, embora associado a investigações contra <span className="text-neon-red">Arasaka</span>.
                </p>

                {/* Inline Ad 2 */}
                <div className="my-6 p-4 cyber-card rounded border-neon-green/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-neon-green" />
                      <div>
                        <span className="text-neon-green font-bold text-sm">BIOTECHNICA MEDSPRAYS</span>
                        <p className="text-gray-400 text-xs font-mono">Recuperação instantânea. Sua vida vale mais.</p>
                      </div>
                    </div>
                    <span className="text-neon-yellow text-xs font-bold">-30% HOJE</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Após a morte da esposa, Chidi passou a viver de maneira reclusa em <span className="text-neon-cyan">Westbrook</span>. Sua residência tornou-se conhecida pela preservação integral da estética cultural norte-americana dos anos 1960.
                </p>

                <h2 className="text-xl font-bold text-neon-magenta mt-8 mb-3 border-b border-neon-magenta/30 pb-2 uppercase tracking-wider">
                  Família
                </h2>
                
                <p className="text-gray-300 leading-relaxed">
                  Nikolic possui duas filhas: <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Daniela Nikolic</Link>, médica renomada da <span className="text-neon-red">Trauma Team</span>, e <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Sophia Nikolic</Link>, figura de baixa exposição pública. Também é avô de <span className="text-neon-cyan">Penelope Nikolic</span>, estudante universitária.
                </p>
              </article>
            </div>
          ) : (
            <div className="cyber-card rounded-lg p-6 text-center">
              <p className="text-gray-400 font-mono">// Nenhuma discussão iniciada para este arquivo</p>
              <div className="mt-4">
                <Button className="bg-neon-magenta hover:bg-pink-600 text-white font-bold uppercase tracking-wider">
                  Iniciar Thread
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Side Ads Right */}
        <aside className="hidden xl:block w-52 p-4 space-y-4">
          <div className="sticky top-4 space-y-4">
            {/* Ad - Johnny Silverhand Memorial */}
            <div className="cyber-card rounded overflow-hidden border-neon-yellow/50">
              <div className="bg-gradient-to-br from-yellow-950 to-gray-900 p-3 text-center">
                <span className="text-neon-yellow font-bold text-sm block">SAMURAI</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">Never Fade Away Tour 2045</p>
                <p className="text-neon-magenta text-xs mt-2 font-bold">INGRESSOS ESGOTADOS</p>
              </div>
            </div>

            {/* Ad - Ripperdoc */}
            <div className="cyber-card rounded overflow-hidden border-neon-cyan/50">
              <div className="bg-gradient-to-br from-cyan-950 to-gray-900 p-3 text-center">
                <Cpu className="h-6 w-6 text-neon-cyan mx-auto mb-2" />
                <span className="text-neon-cyan font-bold text-sm block">VIK&apos;S RIPPERDOC</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">Cyberware Premium</p>
                <p className="text-neon-green text-xs mt-2">Parcelamos em 12x</p>
              </div>
            </div>

            {/* Ad - Delamain */}
            <div className="cyber-card rounded overflow-hidden border-neon-purple/50">
              <div className="bg-gradient-to-br from-purple-950 to-gray-900 p-3 text-center">
                <span className="text-neon-purple font-bold text-sm block">DELAMAIN</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">Transporte Autônomo</p>
                <p className="text-white text-xs mt-2">Seguro. Confiável. Discreto.</p>
              </div>
            </div>

            {/* Ad - Lizzie's Bar */}
            <div className="cyber-card rounded overflow-hidden border-neon-pink/50">
              <div className="bg-gradient-to-br from-pink-950 to-gray-900 p-3 text-center">
                <span className="text-neon-pink font-bold text-sm block" style={{ textShadow: '0 0 10px #ff0080' }}>LIZZIE&apos;S BAR</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">Braindance Premium</p>
                <p className="text-neon-cyan text-xs mt-2">Entrada VIP: 500 ED$</p>
              </div>
            </div>

            {/* Ad - Night City News */}
            <div className="cyber-card rounded overflow-hidden border-gray-600">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 text-center">
                <span className="text-white font-bold text-sm block">N54 NEWS</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">Notícias 24/7</p>
                <p className="text-neon-red text-xs mt-2 animate-pulse">AO VIVO</p>
              </div>
            </div>

            {/* Ad - Afterlife */}
            <div className="cyber-card rounded overflow-hidden border-neon-orange/50">
              <div className="bg-gradient-to-br from-orange-950 to-gray-900 p-3 text-center">
                <span className="text-neon-orange font-bold text-sm block" style={{ textShadow: '0 0 10px #ff6600' }}>AFTERLIFE</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">O Bar dos Lendários</p>
                <p className="text-gray-500 text-xs mt-2">Apenas convidados</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Ad Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-cyber-darker via-purple-950 to-cyber-darker border-t border-neon-magenta/50 py-2 z-50">
        <div className="container mx-auto flex items-center justify-center gap-6">
          <span className="text-neon-magenta font-bold text-sm animate-pulse">OFERTA ESPECIAL</span>
          <span className="text-gray-300 text-sm font-mono">Kang Tao Mantis Blades - Instalação grátis na compra do par</span>
          <Button size="sm" className="bg-neon-magenta hover:bg-pink-600 text-white font-bold text-xs uppercase">
            Garantir Oferta
          </Button>
        </div>
      </div>
    </div>
  )
}
