"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Zap, Shield, Cpu, Radio, Eye, AlertTriangle } from "lucide-react"

interface CyberLayoutProps {
  children: ReactNode
}

export function CyberLayout({ children }: CyberLayoutProps) {
  const [searchQuery, setSearchQuery] = useState("")

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
        {/* Sidebar */}
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
                  <Link href="/" className="block px-3 py-2 text-sm text-gray-400 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all font-mono">
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
                <p className="text-xs text-gray-400 font-mono">ALERTA: Página monitorada</p>
                <p className="text-xs font-mono">ID: <span className="text-neon-cyan">NW-744-2045</span></p>
                <p className="text-xs font-mono">Risco: <span className="text-neon-green font-bold">BAIXO</span></p>
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
              </div>
            </div>
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
            <div className="cyber-card rounded overflow-hidden border-neon-red/50">
              <div className="bg-gradient-to-br from-red-950 to-gray-900 p-4 text-center">
                <span className="text-xl font-bold text-white block tracking-widest">ARASAKA</span>
                <p className="text-gray-400 text-xs mt-2 font-mono">Seu futuro. Nossa visão.</p>
              </div>
            </div>

            {/* Ad - Ripperdoc */}
            <div className="cyber-card rounded overflow-hidden border-neon-cyan/50">
              <div className="bg-gradient-to-br from-cyan-950 to-gray-900 p-3 text-center">
                <Cpu className="h-6 w-6 text-neon-cyan mx-auto mb-2" />
                <span className="text-neon-cyan font-bold text-sm block">VIK&apos;S RIPPERDOC</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">Cyberware Premium</p>
              </div>
            </div>

            {/* Ad - Delamain */}
            <div className="cyber-card rounded overflow-hidden border-neon-purple/50">
              <div className="bg-gradient-to-br from-purple-950 to-gray-900 p-3 text-center">
                <span className="text-neon-purple font-bold text-sm block">DELAMAIN</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">Transporte Autônomo</p>
              </div>
            </div>

            {/* Ad - Afterlife */}
            <div className="cyber-card rounded overflow-hidden border-neon-orange/50">
              <div className="bg-gradient-to-br from-orange-950 to-gray-900 p-3 text-center">
                <span className="text-neon-orange font-bold text-sm block" style={{ textShadow: '0 0 10px #ff6600' }}>AFTERLIFE</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">O Bar dos Lendários</p>
              </div>
            </div>

            {/* Ad - Biotechnica */}
            <div className="cyber-card rounded overflow-hidden border-neon-green/50">
              <div className="bg-gradient-to-br from-green-950 to-gray-900 p-3 text-center">
                <Zap className="h-6 w-6 text-neon-green mx-auto mb-2" />
                <span className="text-neon-green font-bold text-sm block">BIOTECHNICA</span>
                <p className="text-gray-400 text-xs mt-1 font-mono">Medsprays -30%</p>
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
            Garantir
          </Button>
        </div>
      </div>
    </div>
  )
}
