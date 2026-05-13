"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Zap, Shield, Cpu, Radio, Eye, AlertTriangle, Crosshair } from "lucide-react"
import { AdPopup, cyberAds } from "./ad-popup"

interface CyberLayoutProps {
  children: ReactNode
}

const wikiPages = [
  { name: "Chidi Nikolic", slug: "/", keywords: ["chidi", "nikolic", "jornalista", "escritor"] },
  { name: "Eleanor Nikolic", slug: "/wiki/eleanor-nikolic", keywords: ["eleanor", "moreau", "artista", "pianista"] },
  { name: "Daniela Nikolic", slug: "/wiki/daniela-nikolic", keywords: ["daniela", "trauma team", "médica"] },
  { name: "Sophia Nikolic", slug: "/wiki/sophia-nikolic", keywords: ["sophia", "velvet room", "club"] },
  { name: "Marija Nikolic", slug: "/wiki/marija-nikolic", keywords: ["marija", "irmã"] },
  { name: "Martin Nikolic", slug: "/wiki/martin-nikolic", keywords: ["martin", "sobrinho"] },
]

export function CyberLayout({ children }: CyberLayoutProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [activeAd, setActiveAd] = useState<keyof typeof cyberAds | null>(null)

  const filteredPages = wikiPages.filter((page) =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (filteredPages.length > 0) {
      router.push(filteredPages[0].slug)
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Top Info Bar */}
      <div className="bg-black border-b border-red-900/50 px-4 py-1 relative z-10">
        <div className="container mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-4">
            <span className="text-red-500 animate-pulse">2045 edition</span>
            <span className="text-gray-700">//</span>
            <span className="text-yellow-500">Ver 3.17.12</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-yellow-500 uppercase tracking-widest">Acesso Público Da Net</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-red-900/50 bg-black/90 backdrop-blur-sm relative z-10">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-5xl font-bold text-red-500 tracking-wider" style={{
              textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000'
            }}>W54</span>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-yellow-500 tracking-wide" style={{
                textShadow: '0 0 10px #ffff00'
              }}>WIKIPÉDIA</span>
              <span className="text-xs text-red-400 uppercase tracking-widest">Night City DataNet</span>
            </div>
          </Link>
          <form onSubmit={handleSearch} className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-red-500 z-10" />
            <Input
              type="text"
              placeholder="PESQUISAR DATABANK..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setShowResults(true)
              }}
              onFocus={() => setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
              className="pl-10 bg-black border-red-900/50 text-red-400 placeholder:text-red-900 focus:border-yellow-500 font-mono text-sm uppercase tracking-wider"
            />
            {showResults && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-black border border-red-900/50 rounded-md overflow-hidden z-50 shadow-lg shadow-red-500/20">
                {filteredPages.length > 0 ? (
                  filteredPages.map((page) => (
                    <Link
                      key={page.slug}
                      href={page.slug}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-900/30 hover:text-yellow-500 font-mono transition-colors border-b border-red-900/20 last:border-b-0"
                    >
                      {page.name}
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-600 font-mono">
                    Nenhum resultado encontrado
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </header>

      {/* Banner Ad - Trauma Team */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-y border-red-500/30 relative z-10">
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-center gap-6">
            <AlertTriangle className="h-5 w-5 text-red-500 animate-pulse" />
            <div className="flex items-center gap-4">
              <span className="text-red-500 font-bold text-lg tracking-wider" style={{ textShadow: '0 0 10px #ff0000' }}>TRAUMA TEAM</span>
              <span className="text-gray-400 text-sm font-mono">Plano Premium: Resposta em 3 minutos ou seu dinheiro de volta</span>
            </div>
            <Button 
              size="sm" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs"
              onClick={() => setActiveAd("traumaTeam")}
            >
              Assinar Agora
            </Button>
          </div>
        </div>
      </div>

      <div className="flex relative z-10">
        {/* Sidebar */}
        <aside className="hidden lg:block w-60 p-4 border-r border-red-900/30">
          <div className="sticky top-4 space-y-4">
            {/* Navegação Principal */}
            <nav className="bg-black border border-red-900/50 rounded overflow-hidden">
              <div className="bg-red-950/50 px-3 py-2 border-b border-red-900/50">
                <span className="text-sm font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
                  <Radio className="h-4 w-4" /> Navegação
                </span>
              </div>
              <ul className="divide-y divide-red-900/20">
                <li>
                  <Link href="/" className="block px-3 py-2 text-sm text-gray-400 hover:bg-red-950/30 hover:text-yellow-500 transition-all font-mono">
                    &gt; Página principal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-red-950/30 hover:text-yellow-500 transition-all font-mono">
                    &gt; Conteúdo destacado
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-red-950/30 hover:text-yellow-500 transition-all font-mono">
                    &gt; Ajuda DataNet
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Banco de Dados */}
            <nav className="bg-black border border-yellow-900/50 rounded overflow-hidden">
              <div className="bg-yellow-950/30 px-3 py-2 border-b border-yellow-900/50">
                <span className="text-sm font-bold text-yellow-500 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="h-4 w-4" /> Banco de Dados
                </span>
              </div>
              <ul className="divide-y divide-yellow-900/20">
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-yellow-950/30 hover:text-yellow-500 transition-all font-mono">
                    &gt; Artigos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-yellow-950/30 hover:text-yellow-500 transition-all font-mono">
                    &gt; Portais
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-400 hover:bg-yellow-950/30 hover:text-yellow-500 transition-all font-mono">
                    &gt; Ver histórico
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Ad - Militech */}
            <button 
              onClick={() => setActiveAd("militech")}
              className="w-full bg-black border border-orange-500/50 rounded overflow-hidden hover:border-orange-400 transition-colors"
            >
              <div className="bg-gradient-to-br from-orange-950 to-black p-3 text-center">
                <Crosshair className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <span className="text-orange-500 font-bold text-sm block" style={{ textShadow: '0 0 10px #ff6600' }}>MILITECH</span>
                <p className="text-gray-500 text-xs mt-1 font-mono">Proteção Total</p>
                <span className="text-xs text-orange-400 mt-2 block uppercase">Clique para saber mais</span>
              </div>
            </button>

            {/* NetWatch Notice */}
            <div className="rounded overflow-hidden border border-yellow-500/50 bg-yellow-950/10">
              <div className="bg-yellow-900/20 px-3 py-2 border-b border-yellow-500/30">
                <span className="text-sm font-bold text-yellow-500 uppercase tracking-wider flex items-center gap-2">
                  <Shield className="h-4 w-4" /> NETWATCH
                </span>
              </div>
              <div className="px-3 py-3 space-y-2">
                <p className="text-xs text-gray-500 font-mono">ALERTA: Página monitorada</p>
                <p className="text-xs font-mono">ID: <span className="text-yellow-500">NW-744-2045</span></p>
                <p className="text-xs font-mono">Risco: <span className="text-green-500 font-bold">BAIXO</span></p>
                <button 
                  onClick={() => setActiveAd("netwatch")}
                  className="w-full pt-3 border-t border-yellow-900/30 text-center hover:bg-yellow-950/20 transition-colors"
                >
                  <span className="text-lg font-bold tracking-widest text-yellow-500" style={{ textShadow: '0 0 10px #ffff00' }}>NETWATCH</span>
                  <p className="text-xs text-gray-600 mt-1 font-mono">sua segurança, nosso controle</p>
                </button>
              </div>
            </div>

            {/* Ad - Ripperdoc */}
            <button 
              onClick={() => setActiveAd("ripperdoc")}
              className="w-full bg-black border border-yellow-500/50 rounded overflow-hidden hover:border-yellow-400 transition-colors"
            >
              <div className="bg-gradient-to-br from-yellow-950 to-black p-3 text-center">
                <Cpu className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <span className="text-yellow-500 font-bold text-sm block">VIK&apos;S RIPPERDOC</span>
                <p className="text-gray-500 text-xs mt-1 font-mono">Cyberware Premium</p>
                <span className="text-xs text-yellow-400 mt-2 block uppercase">Clique para saber mais</span>
              </div>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 py-6 px-6 pb-20">
          {children}
        </div>

        {/* Side Ads Right */}
        <aside className="hidden xl:block w-52 p-4 space-y-4">
          <div className="sticky top-4 space-y-4">
            {/* Ad - Arasaka */}
            <button 
              onClick={() => setActiveAd("arasaka")}
              className="w-full bg-black border border-red-500/50 rounded overflow-hidden hover:border-red-400 transition-colors"
            >
              <div className="bg-gradient-to-br from-red-950 to-black p-4 text-center">
                <span className="text-xl font-bold text-white block tracking-widest">ARASAKA</span>
                <p className="text-gray-500 text-xs mt-2 font-mono">Seu futuro. Nossa visão.</p>
                <span className="text-xs text-red-400 mt-2 block uppercase">Clique para saber mais</span>
              </div>
            </button>

            {/* Ad - Kiroshi */}
            <div className="bg-black border border-red-900/50 rounded overflow-hidden">
              <div className="bg-gradient-to-br from-red-950 to-black p-3 text-center">
                <Eye className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <span className="text-red-500 font-bold text-sm block">KIROSHI OPTICS</span>
                <p className="text-gray-500 text-xs mt-1 font-mono">Veja além do possível</p>
              </div>
            </div>

            {/* Ad - Afterlife */}
            <button 
              onClick={() => setActiveAd("afterlife")}
              className="w-full bg-black border border-orange-500/50 rounded overflow-hidden hover:border-orange-400 transition-colors"
            >
              <div className="bg-gradient-to-br from-orange-950 to-black p-3 text-center">
                <span className="text-orange-500 font-bold text-sm block" style={{ textShadow: '0 0 10px #ff6600' }}>AFTERLIFE</span>
                <p className="text-gray-500 text-xs mt-1 font-mono">O Bar dos Lendários</p>
                <span className="text-xs text-orange-400 mt-2 block uppercase">Clique para saber mais</span>
              </div>
            </button>

            {/* Ad - Biotechnica */}
            <div className="bg-black border border-yellow-900/50 rounded overflow-hidden">
              <div className="bg-gradient-to-br from-yellow-950 to-black p-3 text-center">
                <Zap className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <span className="text-yellow-500 font-bold text-sm block">BIOTECHNICA</span>
                <p className="text-gray-500 text-xs mt-1 font-mono">Medsprays -30%</p>
              </div>
            </div>

            {/* Ad - Samurai */}
            <div className="bg-black border border-red-500/50 rounded overflow-hidden">
              <div className="bg-gradient-to-br from-red-950 to-black p-3 text-center">
                <span className="text-red-500 font-bold text-lg block tracking-wider">SAMURAI</span>
                <p className="text-gray-500 text-xs mt-1 font-mono italic">&quot;Never Fade Away&quot;</p>
                <p className="text-yellow-500 text-xs mt-2">Tour 2045</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Ad Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-black via-red-950 to-black border-t border-red-500/50 py-2 z-50">
        <div className="container mx-auto flex items-center justify-center gap-6">
          <span className="text-red-500 font-bold text-sm animate-pulse">OFERTA ESPECIAL</span>
          <span className="text-gray-400 text-sm font-mono">Kang Tao Mantis Blades - Instalação grátis na compra do par</span>
          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase">
            Garantir
          </Button>
        </div>
      </div>

      {/* Ad Popup */}
      {activeAd && (
        <AdPopup 
          isOpen={!!activeAd}
          onClose={() => setActiveAd(null)}
          ad={cyberAds[activeAd]}
        />
      )}
    </div>
  )
}
