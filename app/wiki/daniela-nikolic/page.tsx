"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CyberLayout } from "@/components/cyber-layout"
import { AlertTriangle } from "lucide-react"

export default function DanielaNikolicPage() {
  const [activeTab, setActiveTab] = useState<"artigo" | "discussao">("artigo")

  return (
    <CyberLayout>
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2 text-neon-red tracking-wide" style={{
          textShadow: '0 0 10px #ff0040, 0 0 20px #ff0040'
        }}>Daniela Nikolic</h1>
        <p className="text-sm text-gray-500 font-mono">Origem: W54 DataNet Archive // Clearance: TRAUMA TEAM</p>
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
            <div className="cyber-card rounded border-neon-red/50">
              <div className="bg-gradient-to-r from-neon-red/20 to-red-900/40 px-3 py-3 border-b border-neon-red/30 text-center">
                <span className="text-lg font-bold text-neon-red uppercase tracking-wider" style={{ textShadow: '0 0 10px #ff0040' }}>DANIELA NIKOLIC</span>
              </div>
              
              <div className="p-3 border-b border-neon-red/20">
                <Image
                  src="/images/daniela-nikolic.png"
                  alt="Daniela Nikolic"
                  width={280}
                  height={320}
                  className="w-full h-auto rounded object-cover border border-neon-red/30"
                />
                <p className="text-xs text-gray-500 text-center mt-2 font-mono">Daniela Nikolic, 2045</p>
              </div>
              
              <div className="divide-y divide-neon-red/10 text-sm font-mono">
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nome completo</span>
                  <p className="text-gray-300">Daniela Eleanor Nikolic</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nascimento</span>
                  <p className="text-gray-300">14 de julho de 2006</p>
                  <p className="text-gray-500 text-xs">Night City</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Idade em 2045</span>
                  <p className="text-neon-cyan">38 anos</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Residência</span>
                  <p className="text-gray-300">Corpo Plaza, Downtown</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Profissão</span>
                  <p className="text-neon-red font-bold">Médica - Trauma Team</p>
                  <p className="text-gray-300">Cirurgiã de Campo</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Afiliação</span>
                  <p className="text-neon-red" style={{ textShadow: '0 0 5px #ff0040' }}>TRAUMA TEAM INTERNATIONAL</p>
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
                  <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Sophia Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Especializações</span>
                  <p className="text-gray-300">Traumas de combate</p>
                  <p className="text-gray-300">Implantes cibernéticos</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Status legal</span>
                  <p className="text-neon-green">Sem registros criminais</p>
                </div>
              </div>
            </div>

            {/* Trauma Team Ad */}
            <div className="mt-4 cyber-card rounded overflow-hidden border-neon-red/50">
              <div className="bg-gradient-to-br from-red-950 to-gray-900 p-4 text-center">
                <AlertTriangle className="h-8 w-8 text-neon-red mx-auto mb-2 animate-pulse" />
                <span className="text-xl font-bold text-neon-red block" style={{ textShadow: '0 0 10px #ff0040' }}>TRAUMA TEAM</span>
                <p className="text-gray-400 text-xs mt-2 font-mono">Resposta em 3 minutos</p>
                <p className="text-neon-yellow text-xs mt-2 font-bold">PLANO PLATINUM: 5.000 ED$/mês</p>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="flex-1 order-1 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-neon-red">Daniela Eleanor Nikolic</strong> (Night City, 14 de julho de 2006) é uma cirurgiã e médica de trauma de renome internacional, atualmente trabalhando como paramedic especialista na <span className="text-neon-red" style={{ textShadow: '0 0 5px #ff0040' }}>Trauma Team International</span>.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Filha de <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors">Chidi Aleksandar Nikolic</Link> e da artista <Link href="/wiki/eleanor-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Eleanor Vivienne Moreau Nikolic</Link>, Daniela cresceu em ambientes que combinavam rigor investigativo e sensibilidade cultural.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Infância e impacto da perda materna
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Daniela tinha três anos quando sua mãe, <Link href="/wiki/eleanor-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Eleanor Vivienne Moreau Nikolic</Link>, faleceu em novembro de 2009 na explosão de um centro de imprensa em Heywood. Diferentemente da irmã <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Sophia</Link>, Daniela guarda fragmentos de memória da mãe, imagens e sensações de uma criança pequena que via Eleanor ao piano ou organizando exposições culturais em espaços do bairro.
            </p>

            <p className="text-gray-300 leading-relaxed">
              A perda prematura de Eleanor moldou de forma decisiva a trajetória de Daniela. Pessoas que acompanharam sua formação descrevem uma jovem que, desde a adolescência, demonstrava obsessão com a ideia de salvar vidas — uma resposta direta, segundo analistas, à incapacidade de salvar a mãe. Esta motivação transformou-se no combustível de uma das carreiras médicas mais dedicadas de sua geração em Night City.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Formação médica
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Formou-se como médica generalista pela Universidade de Night City em 2027, com distinção em cirurgia de emergência e traumatologia. Completou sua especialização em medicina de trauma pela Academy of Trauma Medicine em 2031, onde desenvolveu pesquisa específica sobre compatibilidade cirúrgica entre tecidos biológicos e implantes cibernéticos — uma área de crescente importância em Night City, onde a linha entre corpo humano e tecnologia se torna progressivamente nebulosa.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Sua tese de especialização, intitulada <em className="text-neon-cyan">Compatibilidade Biotech em Trauma de Alto Impacto: Protocolos para Pacientes com Modificação Cibernética Extensiva</em>, foi reconhecida pela Academia como uma das contribuições mais relevantes da década na área de medicina de campo em ambientes urbanos de alta densidade corporativa.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Carreira na Trauma Team
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Em 2033, foi recrutada pela <span className="text-neon-red" style={{ textShadow: '0 0 5px #ff0040' }}>Trauma Team International</span> após se destacar em operações de campo durante os conflitos corporativos menores que varreram <span className="text-neon-cyan">Heywood</span> e <span className="text-neon-cyan">Pacifica</span> no início da década de 2030. Seu recrutamento foi descrito internamente como prioritário, dado o perfil excepcional de suas avaliações clínicas e sua capacidade demonstrada de tomar decisões cirúrgicas críticas sob pressão extrema.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Particularmente reconhecida por sua capacidade de lidar com ferimentos relacionados a modificações corporais extremas — implantes de combate danificados, cyberware de alto custo com falha sistêmica, e traumas causados por armas anti-cibernéticas — Daniela desenvolveu protocolos próprios que passaram a ser utilizados internamente pela Trauma Team como referência para situações de alto grau de modificação corporal.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Trabalha atualmente baseada no complexo da Trauma Team em <span className="text-neon-cyan">Corpo Plaza</span>, respondendo a chamados de alto perfil em toda a extensão de Night City. Clientes corporativos do nível Platinum têm acesso prioritário à sua equipe durante emergências de campo.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Vida pessoal
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Daniela mantém residência em <span className="text-neon-cyan">Corpo Plaza</span>, próxima ao complexo operacional da Trauma Team, o que lhe permite resposta rápida a chamados de emergência. Seu estilo de vida é marcado pela intensidade profissional, com longas jornadas de plantão e disponibilidade quase permanente para intervenções de campo.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Apesar da distância física em relação à casa paterna em Westbrook, mantém forte vínculo afetivo com o pai <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors">Chidi</Link> e com a irmã <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Sophia</Link>. Visita a residência familiar regularmente, onde o ambiente preservado por Chidi em memória de Eleanor funciona como âncora emocional para as duas filhas.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Pessoas próximas a Daniela descrevem uma mulher de presença forte e temperamento direto, forjado em anos de decisões de vida ou morte em campo. Sua relação com a morte, inevitavelmente moldada pela perda materna precoce e pela natureza de sua profissão, é descrita como serena e pragmática — uma paz conquistada, não herdada.
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
