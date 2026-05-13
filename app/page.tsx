"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CyberLayout } from "@/components/cyber-layout"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"artigo" | "discussao">("artigo")

  return (
    <CyberLayout>
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2 text-red-500 tracking-wide" style={{
          textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000'
        }}>Chidi Nikolic</h1>
        <p className="text-sm text-gray-600 font-mono">Origem: W54 DataNet Archive // Acesso público autorizado</p>
      </div>
      
      {/* Wikipedia Tabs */}
      <div className="border-b border-red-900/50 mb-6">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("artigo")}
            className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === "artigo"
                ? "border-b-2 border-red-500 text-red-500 bg-red-950/30"
                : "text-gray-500 hover:text-yellow-500 hover:bg-yellow-950/20"
            }`}
          >
            Artigo
          </button>
          <button
            onClick={() => setActiveTab("discussao")}
            className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === "discussao"
                ? "border-b-2 border-yellow-500 text-yellow-500 bg-yellow-950/30"
                : "text-gray-500 hover:text-yellow-500 hover:bg-yellow-950/20"
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
            <div className="bg-black border border-red-900/50 rounded">
              {/* Header */}
              <div className="bg-gradient-to-r from-red-950 to-red-900 px-3 py-3 border-b border-red-500/30 text-center">
                <span className="text-lg font-bold text-red-500 uppercase tracking-wider" style={{ textShadow: '0 0 10px #ff0000' }}>CHIDI NIKOLIC</span>
              </div>
              
              {/* Image */}
              <div className="p-3 border-b border-red-900/30">
                <Image
                  src="/images/chidi-nikolic.png"
                  alt="Chidi Nikolic quando jovem"
                  width={280}
                  height={320}
                  className="w-full h-auto rounded object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="text-xs text-gray-600 text-center mt-2 font-mono">Chidi Nikolic, circa 1995</p>
              </div>
              
              {/* Info Table */}
              <div className="divide-y divide-red-900/20 text-sm font-mono">
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Nome completo</span>
                  <p className="text-gray-300">Chidi Aleksandar Nikolic</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Nascimento</span>
                  <p className="text-gray-300">17 de fevereiro de 1970</p>
                  <p className="text-gray-500 text-xs">Neo-Iugoslávia</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Idade em 2045</span>
                  <p className="text-red-400">75 anos</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Nacionalidade</span>
                  <p className="text-gray-300">Neo-iugoslavo naturalizado norte-americano</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Residência</span>
                  <p className="text-gray-300">Westbrook, Night City</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Profissão</span>
                  <p className="text-gray-300">Jornalista investigativo</p>
                  <p className="text-gray-300">Escritor</p>
                  <p className="text-gray-300">Comentarista político</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Anos de atividade</span>
                  <p className="text-gray-300">1990 — 2038</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Estado civil</span>
                  <p className="text-gray-300">Viúvo</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Cônjuge</span>
                  <Link href="/wiki/eleanor-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors block">Eleanor Vivienne Moreau Nikolic</Link>
                  <p className="text-gray-500 text-xs">(1972 — 2007)</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Filhos</span>
                  <Link href="/wiki/daniela-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors block">Daniela Nikolic</Link>
                  <Link href="/wiki/sophia-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors block">Sophia Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Netos</span>
                  <p className="text-gray-300">Penelope Nikolic</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Parentes conhecidos</span>
                  <Link href="/wiki/marija-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors block">Marija Nikolic (irmã)</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Afiliações</span>
                  <p className="text-gray-300">Imprensa Independente de Night City</p>
                  <p className="text-gray-300">Free Press Archive</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Conhecido por</span>
                  <p className="text-gray-300">Investigações corporativas</p>
                  <p className="text-gray-300">Cobertura pós-guerra corporativa</p>
                  <p className="text-gray-300">Ética jornalística</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Obras notáveis</span>
                  <p className="text-gray-300 italic">Cinzas Sobre Corpo Plaza (2023)</p>
                  <p className="text-gray-300 italic">O Preço da Reconstrução (2031)</p>
                  <p className="text-gray-300 italic">Quem Controla a Guerra? (2036)</p>
                  <p className="text-gray-300 italic">Filhos do Concreto (2040)</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Status legal</span>
                  <p className="text-green-500">Sem antecedentes criminais registrados</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-yellow-500 text-xs uppercase">Status público em 2045</span>
                  <p className="text-gray-300">Aposentado / Figura histórica da mídia independente</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="flex-1 order-1 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-red-500">Chidi Aleksandar Nikolic</strong> (Neo-Iugoslávia, 17 de fevereiro de 1970) é um jornalista investigativo aposentado, escritor e comentarista político reconhecido por sua atuação durante os períodos de instabilidade corporativa em Night City ao longo das décadas de 1990, 2000 e 2030. É considerado uma das figuras mais influentes da imprensa independente da era pós-Guerra Corporativa, conhecido principalmente por reportagens relacionadas à corrupção institucional, megacorporações militares privadas e manipulação de informação pública.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Ao longo de mais de cinquenta anos de carreira, Nikolic desenvolveu reputação pública marcada por neutralidade política aparente, ética jornalística rígida e ausência completa de envolvimento criminal ou corporativo direto. Seu nome tornou-se referência recorrente em universidades, arquivos históricos e estudos sobre mídia independente na reconstrução de Night City após os eventos do início do século XXI.
            </p>

            <h2 className="text-xl font-bold text-yellow-500 mt-8 mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-wider">
              Origem e formação
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Filho de uma tradicional família neo-iugoslava ligada ao meio acadêmico e político, Chidi iniciou sua carreira jornalística ainda durante o final dos conflitos econômicos internacionais da década de 1990. Sua ascensão profissional ocorreu após a publicação de séries investigativas relacionadas à atuação clandestina de corporações privadas em zonas civis urbanas.
            </p>

            <h2 className="text-xl font-bold text-yellow-500 mt-8 mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-wider">
              Carreira jornalística
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Entre seus trabalhos mais conhecidos estão <em className="text-red-400">Cinzas Sobre Corpo Plaza</em> (2023), <em className="text-red-400">O Preço da Reconstrução</em> (2031), <em className="text-red-400">Quem Controla a Guerra?</em> (2036) e <em className="text-red-400">Filhos do Concreto</em> (2040), materiais frequentemente citados em cursos de ética jornalística e história contemporânea de Night City.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Sua cobertura jornalística durante a <span className="text-yellow-500">Guerra Corporativa</span> e os anos de reconstrução subsequente consolidou sua posição como uma das vozes mais respeitadas do jornalismo independente. Nikolic foi um dos poucos jornalistas a documentar sistematicamente as operações de megacorporações em zonas civis, frequentemente arriscando sua segurança pessoal para obter informações que outros consideravam inalcançáveis.
            </p>

            <h2 className="text-xl font-bold text-yellow-500 mt-8 mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-wider">
              Vida pessoal
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              Em 2005, casou-se com <Link href="/wiki/eleanor-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors">Eleanor Vivienne Moreau Nikolic</Link>, artista franco-americana ligada ao movimento cultural retrô independente da cidade. Eleanor faleceu em 17 de novembro de 2007 durante uma explosão em um centro de imprensa independente localizado em Heywood, caso oficialmente tratado como acidente estrutural, embora jornalistas independentes e antigos colegas de Nikolic associem o ocorrido a investigações conduzidas contra subsidiárias da <span className="text-red-500">PetroChem</span>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Após a morte da esposa, Chidi passou a viver de maneira reclusa em <span className="text-yellow-500">Westbrook</span>. Sua residência tornou-se conhecida pela preservação integral da estética cultural norte-americana dos anos 1960, incluindo decoração, aparelhos eletrônicos analógicos, discos físicos e objetos pertencentes à esposa falecida. O imóvel é frequentemente descrito por visitantes como <em>&quot;uma cápsula do tempo em meio ao colapso urbano de Night City&quot;</em>.
            </p>

            <h2 className="text-xl font-bold text-yellow-500 mt-8 mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-wider">
              Família
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Nikolic possui duas filhas: <Link href="/wiki/daniela-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors">Daniela Nikolic</Link>, médica militarizada e cirurgiã de trauma renomada da <span className="text-red-500">Trauma Team</span>, e <Link href="/wiki/sophia-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors">Sophia Nikolic</Link>, empresária e proprietária noturna de baixa exposição pública com presença digital extremamente limitada. Também é avô de <span className="text-yellow-500">Penelope Nikolic</span>, estudante universitária que atualmente reside em Night City.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Sua irmã, <Link href="/wiki/marija-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors">Marija Nikolic</Link>, permaneceu na Neo-Iugoslávia durante a maior parte de sua vida, mantendo contato limitado mas constante com o irmão ao longo das décadas.
            </p>

            <h2 className="text-xl font-bold text-yellow-500 mt-8 mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-wider">
              Legado e status atual
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Apesar de sua aposentadoria oficial em 2038, Chidi Nikolic continua sendo citado em debates acadêmicos, documentários e arquivos jornalísticos relacionados à história moderna de Night City. Seu nome permanece associado à integridade jornalística em uma cidade historicamente marcada pela influência corporativa, violência urbana e manipulação midiática.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Em 2045, aos 75 anos, Chidi vive em relativa reclusão em sua residência em Westbrook, cercado pelas memórias de Eleanor e ocasionalmente visitado por suas filhas e neta. Seu arquivo pessoal de investigações permanece um dos mais completos registros independentes da história corporativa de Night City, embora grande parte do material permaneça não publicado a pedido do próprio Nikolic.
            </p>

            {/* See Also Section */}
            <div className="mt-8 p-4 bg-black border border-red-900/50 rounded">
              <h3 className="text-sm font-bold text-yellow-500 uppercase tracking-wider mb-3">Ver também</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/wiki/eleanor-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors text-sm font-mono">
                    &gt; Eleanor Vivienne Moreau Nikolic
                  </Link>
                </li>
                <li>
                  <Link href="/wiki/daniela-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors text-sm font-mono">
                    &gt; Daniela Nikolic
                  </Link>
                </li>
                <li>
                  <Link href="/wiki/sophia-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors text-sm font-mono">
                    &gt; Sophia Nikolic
                  </Link>
                </li>
                <li>
                  <Link href="/wiki/marija-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors text-sm font-mono">
                    &gt; Marija Nikolic
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs font-mono text-gray-600">Categorias:</span>
              <span className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-mono">Jornalistas</span>
              <span className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-mono">Escritores</span>
              <span className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-mono">Night City</span>
              <span className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-mono">Westbrook</span>
              <span className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-mono">Imprensa Independente</span>
            </div>
          </article>
        </div>
      ) : (
        <div className="bg-black border border-yellow-900/50 rounded p-6">
          <p className="text-gray-500 text-center font-mono">// SEÇÃO DE DISCUSSÃO DESABILITADA //</p>
          <p className="text-gray-600 text-center text-sm mt-2">Este artigo está protegido contra edições públicas.</p>
          <p className="text-yellow-500 text-center text-xs mt-4 font-mono">NETWATCH ID: NW-744-2045</p>
        </div>
      )}
    </CyberLayout>
  )
}
