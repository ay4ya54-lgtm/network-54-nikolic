"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CyberLayout } from "@/components/cyber-layout"
import { EyeOff } from "lucide-react"

export default function SophiaNikolicPage() {
  const [activeTab, setActiveTab] = useState<"artigo" | "discussao">("artigo")

  return (
    <CyberLayout>
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2 text-neon-purple tracking-wide" style={{
          textShadow: '0 0 10px #bf00ff, 0 0 20px #bf00ff'
        }}>Sophia Nikolic</h1>
        <p className="text-sm text-gray-500 font-mono">Origem: W54 DataNet Archive // Status: PERFIL RESTRITO</p>
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
            <div className="cyber-card rounded border-neon-purple/50">
              <div className="bg-gradient-to-r from-neon-purple/20 to-purple-900/40 px-3 py-3 border-b border-neon-purple/30 text-center">
                <span className="text-lg font-bold text-neon-purple uppercase tracking-wider" style={{ textShadow: '0 0 10px #bf00ff' }}>SOPHIA NIKOLIC</span>
              </div>
              
              <div className="p-3 border-b border-neon-purple/20">
                <Image
                  src="/images/sophia-nikolic.png"
                  alt="Sophia Nikolic"
                  width={280}
                  height={320}
                  className="w-full h-auto rounded object-cover border border-neon-purple/30"
                />
                <p className="text-xs text-gray-500 text-center mt-2 font-mono">Sophia Nikolic, 2045</p>
              </div>
              
              <div className="divide-y divide-neon-purple/10 text-sm font-mono">
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nome completo</span>
                  <p className="text-gray-300">Sophia Vivienne Nikolic</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nascimento</span>
                  <p className="text-gray-300">3 de dezembro de 2008</p>
                  <p className="text-gray-500 text-xs">Night City</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Idade em 2045</span>
                  <p className="text-neon-cyan">36 anos</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Residência</span>
                  <p className="text-gray-300">Westbrook, Night City</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Profissão</span>
                  <p className="text-neon-yellow">[DADOS RESTRITOS]</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Presença digital</span>
                  <p className="text-neon-purple">Mínima / Oculta</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Pai</span>
                  <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Chidi Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Mãe</span>
                  <Link href="/wiki/eleanor-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Eleanor Moreau Nikolic</Link>
                  <p className="text-gray-500 text-xs">(falecida)</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Irmã</span>
                  <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Daniela Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Status legal</span>
                  <p className="text-neon-green">Sem registros criminais</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nota NetWatch</span>
                  <p className="text-neon-yellow text-xs">Perfil de baixa exposição intencional</p>
                </div>
              </div>
            </div>

            {/* Privacy Ad */}
            <div className="mt-4 cyber-card rounded overflow-hidden border-neon-purple/50">
              <div className="bg-gradient-to-br from-purple-950 to-gray-900 p-4 text-center">
                <EyeOff className="h-8 w-8 text-neon-purple mx-auto mb-2" />
                <span className="text-lg font-bold text-neon-purple block" style={{ textShadow: '0 0 10px #bf00ff' }}>GHOSTLINK VPN</span>
                <p className="text-gray-400 text-xs mt-2 font-mono">Invisível na Net</p>
                <p className="text-neon-green text-xs mt-2 font-bold">100% Anônimo</p>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="flex-1 order-1 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-neon-purple">Sophia Vivienne Nikolic</strong> (Night City, 3 de dezembro de 2008) é a filha mais nova do jornalista <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors">Chidi Nikolic</Link> e da artista <Link href="/wiki/eleanor-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Eleanor Vivienne Moreau Nikolic</Link>.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Diferentemente de outros membros de sua família, Sophia mantém perfil público extremamente limitado, com presença digital quase inexistente e poucas informações verificáveis sobre suas atividades profissionais ou pessoais.
            </p>

            {/* Warning Box */}
            <div className="my-6 p-4 cyber-card rounded border-neon-yellow/50 bg-yellow-950/20">
              <div className="flex items-center gap-3">
                <EyeOff className="h-6 w-6 text-neon-yellow" />
                <div>
                  <span className="text-neon-yellow font-bold text-sm">AVISO DE DADOS LIMITADOS</span>
                  <p className="text-gray-400 text-xs font-mono">Informações sobre este perfil são intencionalmente restritas</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Infância e juventude
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Sophia tinha apenas um ano de idade quando sua mãe, <Link href="/wiki/eleanor-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Eleanor Vivienne Moreau Nikolic</Link>, faleceu em novembro de 2009 durante a explosão em um centro de imprensa independente em Heywood. Por ser ainda bebê à época, Sophia não guarda nenhuma memória direta da mãe, construindo sua relação com Eleanor através de fotografias, gravações e dos relatos do pai e da irmã mais velha <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Daniela</Link>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Cresceu em <span className="text-neon-cyan">Westbrook</span>, na residência que seu pai preservou praticamente intacta com a estética cultural dos anos 1960 que Eleanor cultivava. Este ambiente saturado de memória e objetos históricos moldou profundamente a sensibilidade de Sophia, que desenvolveu desde jovem um apreço por elementos analógicos, materiais físicos e formas de existência fora dos circuitos digitais predominantes em Night City.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Sua formação aconteceu à sombra da ausência materna e do luto contínuo do pai, mas também sob a influência protetora e prática de Daniela, que assumiu papel quase materno na criação da irmã mais nova. As duas desenvolveram um vínculo particularmente forte, mantido até o período adulto apesar de seus estilos de vida radicalmente diferentes.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Vida adulta e perfil público
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Na idade adulta, Sophia optou deliberadamente por manter-se afastada de qualquer forma de exposição pública. Evita redes sociais, aparições midiáticas, registros digitais extensivos e qualquer conexão com estruturas corporativas. Sua presença nos sistemas de informação pública é mínima e dificilmente rastreável, uma característica que analistas associam tanto à influência de sua criação quanto a uma escolha consciente motivada pelo histórico familiar.
            </p>

            <p className="text-gray-300 leading-relaxed">
              A morte de Eleanor em circunstâncias ligadas a investigações contra subsidiárias da <span className="text-neon-red">Arasaka</span> deixou marca permanente na família, e Sophia parece ter internalizado de forma profunda a lição implícita: visibilidade pública pode ser perigosa. Diferentemente da irmã Daniela, que encontrou proteção dentro de uma corporação poderosa como a Trauma Team, Sophia escolheu o caminho oposto — a invisibilidade como forma de segurança.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Maternidade
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Sophia é mãe de <strong className="text-neon-purple">Penelope Nikolic</strong>, atualmente estudante universitária que reside com ela em <span className="text-neon-cyan">Westbrook</span>. Nenhuma informação pública está disponível sobre o pai de Penelope. A relação entre Sophia e a filha é descrita por pessoas próximas à família como próxima e protetora, com Sophia mantendo para Penelope o mesmo ambiente de discrição e baixo perfil digital que ela própria escolheu para si.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Relações familiares
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Sophia mantém contato regular com sua irmã <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Daniela</Link>, apesar das diferenças de estilo de vida. Visita frequentemente o pai <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors">Chidi</Link> em Westbrook, onde as duas partilham a mesma memória física e afetiva da mãe que jamais conheceu plenamente. É descrita por Chidi, nas raras ocasiões em que fala publicamente sobre a família, como a filha que mais herdou a sensibilidade artística e cultural de Eleanor, ainda que não a expresse pelos mesmos caminhos.
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
