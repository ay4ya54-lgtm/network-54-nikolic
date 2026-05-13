"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CyberLayout } from "@/components/cyber-layout"
import { Globe } from "lucide-react"

export default function MarijaNikolicPage() {
  const [activeTab, setActiveTab] = useState<"artigo" | "discussao">("artigo")

  return (
    <CyberLayout>
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2 text-neon-green tracking-wide" style={{
          textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41'
        }}>Marija Nikolic</h1>
        <p className="text-sm text-gray-500 font-mono">Origem: W54 DataNet Archive // Neo-Iugoslávia</p>
      </div>
      
      {/* Tabs */}
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

      {activeTab === "artigo" ? (
        <div className="flex gap-6">
          {/* Infobox */}
          <aside className="hidden md:block w-72 flex-shrink-0 order-2">
            <div className="cyber-card rounded border-neon-green/50">
              <div className="bg-gradient-to-r from-neon-green/20 to-green-900/40 px-3 py-3 border-b border-neon-green/30 text-center">
                <span className="text-lg font-bold text-neon-green uppercase tracking-wider" style={{ textShadow: '0 0 10px #00ff41' }}>MARIJA NIKOLIC</span>
              </div>
              
              <div className="p-3 border-b border-neon-green/20">
                <div className="w-full h-48 bg-cyber-gray rounded flex items-center justify-center border border-neon-green/20">
                  <span className="text-gray-600 text-xs font-mono uppercase">[IMAGEM INDISPONÍVEL]</span>
                </div>
              </div>
              
              <div className="divide-y divide-neon-green/10 text-sm font-mono">
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nome completo</span>
                  <p className="text-gray-300">Marija Aleksandar Nikolic</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nascimento</span>
                  <p className="text-gray-300">1968</p>
                  <p className="text-gray-500 text-xs">Neo-Iugoslávia</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Idade em 2045</span>
                  <p className="text-neon-cyan">~77 anos</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nacionalidade</span>
                  <p className="text-gray-300">Neo-iugoslava</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Residência</span>
                  <p className="text-gray-300">Neo-Iugoslávia</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Profissão</span>
                  <p className="text-gray-300">Acadêmica</p>
                  <p className="text-gray-300">Pesquisadora</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Irmão</span>
                  <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Chidi Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Sobrinhas</span>
                  <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Daniela Nikolic</Link>
                  <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Sophia Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Status legal</span>
                  <p className="text-neon-green">Sem registros criminais</p>
                </div>
              </div>
            </div>

            {/* Neo-Yugoslavia Ad */}
            <div className="mt-4 cyber-card rounded overflow-hidden border-neon-green/50">
              <div className="bg-gradient-to-br from-green-950 to-gray-900 p-4 text-center">
                <Globe className="h-8 w-8 text-neon-green mx-auto mb-2" />
                <span className="text-lg font-bold text-neon-green block" style={{ textShadow: '0 0 10px #00ff41' }}>NEO-IUGOSLÁVIA</span>
                <p className="text-gray-400 text-xs mt-2 font-mono">Turismo Europeu</p>
                <p className="text-white text-xs mt-2">Descubra o Leste</p>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="flex-1 order-1 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-neon-green">Marija Aleksandar Nikolic</strong> (Neo-Iugoslávia, 1968) é uma acadêmica e pesquisadora neo-iugoslava, irmã mais velha do jornalista <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors">Chidi Aleksandar Nikolic</Link>.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Diferentemente de seu irmão, que emigrou para Night City nas décadas anteriores, Marija permaneceu na <span className="text-neon-green">Neo-Iugoslávia</span>, onde construiu carreira no meio acadêmico. Poucas informações públicas estão disponíveis sobre suas atividades específicas.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Família
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              Marija é filha de uma família tradicional neo-iugoslava com fortes ligações ao meio acadêmico e político regional. Sua família de origem incluía intelectuais e profissionais liberais, ambiente que influenciou tanto sua trajetória quanto a de seu irmão Chidi.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Relação com Chidi
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              Apesar da distância geográfica, Marija mantém contato regular com seu irmão. Após a morte de <Link href="/wiki/eleanor-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Eleanor</Link>, ofereceu apoio à família e manteve presença nas vidas de suas sobrinhas <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Daniela</Link> e <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Sophia</Link>.
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
    </CyberLayout>
  )
}
