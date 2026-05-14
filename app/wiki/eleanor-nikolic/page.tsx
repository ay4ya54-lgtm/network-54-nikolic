"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CyberLayout } from "@/components/cyber-layout"

export default function EleanorNikolicPage() {
  const [activeTab, setActiveTab] = useState<"artigo" | "discussao">("artigo")

  return (
    <CyberLayout>
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2 text-neon-magenta tracking-wide" style={{
          textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff'
        }}>Eleanor Vivienne Moreau Nikolic</h1>
        <p className="text-sm text-gray-500 font-mono">Origem: W54 DataNet Archive // Status: FALECIDA</p>
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
            <div className="cyber-card rounded border-neon-magenta/50">
              <div className="bg-gradient-to-r from-neon-magenta/20 to-neon-cyan/20 px-3 py-3 border-b border-neon-magenta/30 text-center">
                <span className="text-lg font-bold text-neon-magenta uppercase tracking-wider" style={{ textShadow: '0 0 10px #ff00ff' }}>ELEANOR MOREAU NIKOLIC</span>
              </div>
              
              <div className="p-3 border-b border-neon-magenta/20">
                <Image
                  src="/images/eleanor-nikolic.png"
                  alt="Eleanor Vivienne Moreau Nikolic"
                  width={280}
                  height={320}
                  className="w-full h-auto rounded object-cover border border-neon-magenta/30"
                />
                <p className="text-xs text-gray-500 text-center mt-2 font-mono">Eleanor Moreau, circa 2005</p>
              </div>
              
              <div className="divide-y divide-neon-magenta/10 text-sm font-mono">
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nome completo</span>
                  <p className="text-gray-300">Eleanor Vivienne Moreau Nikolic</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nascimento</span>
                  <p className="text-gray-300">12 de setembro de 1972</p>
                  <p className="text-gray-500 text-xs">Marseille, França</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Falecimento</span>
                  <p className="text-neon-red">17 de novembro de 2009</p>
                  <p className="text-gray-500 text-xs">Night City (37 anos)</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nacionalidade</span>
                  <p className="text-gray-300">Franco-americana</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Residência</span>
                  <p className="text-gray-300">Westbrook, Night City</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Profissão</span>
                  <p className="text-gray-300">Artista plástica</p>
                  <p className="text-gray-300">Pianista</p>
                  <p className="text-gray-300">Curadora cultural</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Anos ativos</span>
                  <p className="text-gray-300">1993 — 2009</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Cônjuge</span>
                  <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Chidi Aleksandar Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Filhos</span>
                  <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Daniela Nikolic</Link>
                  <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Sophia Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Movimentos</span>
                  <p className="text-gray-300">Arte neo-vintage</p>
                  <p className="text-gray-300">Preservacionismo cultural</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Causa da morte</span>
                  <p className="text-neon-yellow">Explosão em centro de imprensa</p>
                  <p className="text-gray-500 text-xs">(investigação: Arasaka)</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Legado</span>
                  <p className="text-gray-300">Símbolo da resistência cultural analógica</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="flex-1 order-1 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-neon-magenta">Eleanor Vivienne Moreau Nikolic</strong> (Marseille, 12 de setembro de 1972 — Night City, 17 de novembro de 2009) foi uma artista plástica, pianista e curadora cultural franco-americana reconhecida dentro dos círculos artísticos independentes de Night City durante o início do século XXI.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Filha de um restaurador cinematográfico e de uma cantora de jazz, Eleanor cresceu em ambientes ligados à música clássica, cinema analógico e artes tradicionais europeias. Desde jovem, demonstrava forte interesse por objetos históricos, decoração vintage e movimentos culturais norte-americanos das décadas de 1950 e 1960.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Carreira artística
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              Durante o final da década de 1990, mudou-se para Night City em busca de espaço dentro da cena artística alternativa. Em contraste ao crescimento da arte digital corporativa, Eleanor defendia a preservação de materiais físicos, restauração manual de obras antigas e experiências culturais presenciais.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Seu trabalho tornou-se particularmente conhecido em <span className="text-neon-cyan">Heywood</span>, <span className="text-neon-cyan">Pacifica</span> e <span className="text-neon-cyan">Westbrook</span>, onde organizava apresentações de jazz analógico, exposições de restauração artística e encontros culturais independentes.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Vida pessoal
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              Em 2002, conheceu o jornalista investigativo <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors">Chidi Aleksandar Nikolic</Link> durante um evento beneficente. Casaram-se em 2005 em uma cerimônia privada em Westbrook. O casal teve duas filhas: <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Daniela Nikolic</Link> e <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Sophia Nikolic</Link>.
            </p>

            <h2 className="text-xl font-bold text-neon-red mt-8 mb-3 border-b border-neon-red/30 pb-2 uppercase tracking-wider">
              Morte
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              Em 17 de novembro de 2009, Eleanor morreu durante uma explosão ocorrida em um centro de imprensa independente em Heywood. O caso foi oficialmente registrado como acidente estrutural. Entretanto, jornalistas independentes associaram o ocorrido a investigações conduzidas contra subsidiárias da <span className="text-neon-red">Arasaka</span>.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Legado
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Após a morte da esposa, Chidi preservou praticamente todos os objetos, móveis e hábitos relacionados à Eleanor, transformando a residência em um memorial permanente. Décadas após sua morte, Eleanor continua sendo citada em arquivos culturais independentes de Night City como símbolo da resistência artística analógica.
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
