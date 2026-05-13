"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SophiaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"artigo" | "discussao">("artigo")

  return (
    <div className="min-h-screen bg-black">
      {/* Top Info Bar */}
      <div className="bg-gray-950 border-b border-gray-800 px-4 py-1">
        <div className="container mx-auto flex items-center justify-between text-xs text-gray-500 font-mono">
          <span>2045 edition // Ver 3.17.12</span>
          <span>Acesso Público Da Net</span>
        </div>
      </div>

      <header className="border-b border-red-900">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-4xl font-serif font-bold text-red-600">W54</span>
            <div className="flex flex-col">
              <span className="text-lg font-serif text-red-600">Wikipédia</span>
              <span className="text-xs text-red-600">A enciclopédia livre</span>
            </div>
          </Link>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Pesquisar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-600"
            />
          </div>
        </div>
      </header>

      {/* Banner Ad */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-center gap-4 text-center">
            <span className="text-yellow-500 text-xs font-bold uppercase tracking-wider">Anúncio</span>
            <p className="text-gray-300 text-sm">
              Serviço de inteligência de dados corporativos - <span className="text-red-500 font-semibold">CorpStats AI</span> - Análise em tempo real!
            </p>
            <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-black text-xs">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Wikipedia Style Sidebar */}
        <aside className="hidden lg:block w-56 p-4 border-r border-gray-800">
          <div className="sticky top-4 space-y-6">
            {/* Navegação Principal */}
            <nav className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-3 py-2 border-b border-gray-700">
                <span className="text-sm font-semibold text-red-600">Navegação principal</span>
              </div>
              <ul className="divide-y divide-gray-800">
                <li>
                  <Link href="/" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-red-500 transition-colors">
                    Página principal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-red-500 transition-colors">
                    Conteúdo destacado
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-red-500 transition-colors">
                    Ajuda da Wikipédia
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Banco de Dados */}
            <nav className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-3 py-2 border-b border-gray-700">
                <span className="text-sm font-semibold text-red-600">Banco de Dados</span>
              </div>
              <ul className="divide-y divide-gray-800">
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-red-500 transition-colors">
                    Artigos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-red-500 transition-colors">
                    Portais
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-red-500 transition-colors">
                    Páginas relacionadas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-red-500 transition-colors">
                    Ver histórico
                  </Link>
                </li>
              </ul>
            </nav>

            {/* NetWatch Notice */}
            <div className="bg-gray-900 border border-yellow-900 rounded-lg overflow-hidden">
              <div className="bg-yellow-900/30 px-3 py-2 border-b border-yellow-900">
                <span className="text-sm font-semibold text-yellow-500">Aviso da NetWatch</span>
              </div>
              <div className="px-3 py-3 space-y-2">
                <p className="text-xs text-gray-400">
                  Esta página está sendo monitorada
                </p>
                <p className="text-xs text-gray-500">
                  ID: <span className="text-gray-300 font-mono">NW-744-2045</span>
                </p>
                <p className="text-xs text-gray-500">
                  Nível de risco: <span className="text-yellow-500 font-semibold">Médio</span>
                </p>
                <div className="pt-3 border-t border-gray-800 text-center">
                  <span className="text-xl font-bold tracking-widest text-yellow-500">NETWATCH</span>
                  <p className="text-xs text-gray-500 mt-1">sua segurança, nosso controle</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 py-6 px-6">
          <h1 className="text-4xl font-serif font-medium mb-2 text-red-600">Sophia Nikolic</h1>
          <p className="text-sm text-gray-500 mb-4">Origem: Wikipédia, a enciclopédia livre.</p>
          
          {/* Wikipedia Tabs */}
          <div className="border-b border-gray-700 mb-6">
            <div className="flex">
              <button
                onClick={() => setActiveTab("artigo")}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "artigo"
                    ? "border-red-600 text-red-600 bg-gray-900"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                }`}
              >
                Artigo
              </button>
              <button
                onClick={() => setActiveTab("discussao")}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "discussao"
                    ? "border-red-600 text-red-600 bg-gray-900"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
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
                <div className="bg-gray-900 border border-gray-700 rounded">
                  {/* Header */}
                  <div className="bg-red-900/50 px-3 py-2 border-b border-gray-700 text-center">
                    <span className="text-lg font-serif font-semibold text-red-500">SOPHIA NIKOLIC</span>
                  </div>
                  
                  {/* Image */}
                  <div className="p-3 border-b border-gray-700">
                    <Image
                      src="/images/sophia-nikolic.png"
                      alt="Sophia Nikolic"
                      width={280}
                      height={320}
                      className="w-full h-auto rounded object-cover"
                    />
                    <p className="text-xs text-gray-500 text-center mt-2">Sophia Nikolic, 2044</p>
                  </div>
                  
                  {/* Info Table */}
                  <div className="divide-y divide-gray-800 text-sm">
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nome completo</span>
                      <p className="text-gray-300">Sophia Eleanor Nikolic</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nascimento</span>
                      <p className="text-gray-300">22 de março de 2008</p>
                      <p className="text-gray-400 text-xs">Westbrook, Night City</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Idade em 2045</span>
                      <p className="text-gray-300">37 anos</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nacionalidade</span>
                      <p className="text-gray-300">Norte-americana</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Residência</span>
                      <p className="text-gray-300">Westbrook, Night City</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Profissão</span>
                      <p className="text-gray-300">Produtora musical</p>
                      <p className="text-gray-300">Curadora de áudio</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Afiliações</span>
                      <p className="text-gray-300">Estúdios independentes</p>
                      <p className="text-gray-300">Coletivo de jazz underground</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Anos de atividade</span>
                      <p className="text-gray-300">2028 — Presente</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Pais</span>
                      <Link href="/" className="text-red-500 hover:underline block">Chidi Aleksandar Nikolic</Link>
                      <Link href="/wiki/eleanor-nikolic" className="text-red-500 hover:underline block">Eleanor Vivienne Moreau Nikolic</Link>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Irmã</span>
                      <Link href="/wiki/daniela-nikolic" className="text-red-500 hover:underline block">Daniela Nikolic</Link>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Conhecido por</span>
                      <p className="text-gray-300">Produção de jazz analógico</p>
                      <p className="text-gray-300">Preservação de áudio vintage</p>
                      <p className="text-gray-300">Colunismo musical independente</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Presença digital</span>
                      <p className="text-yellow-500">Extremamente limitada</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Status legal</span>
                      <p className="text-green-500">Sem antecedentes criminais registrados</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Legado familiar</span>
                      <p className="text-gray-300">Continuidade do trabalho artístico de Eleanor</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="prose prose-invert max-w-none flex-1 order-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Sophia Eleanor Nikolic</strong> (Westbrook, 22 de março de 2008) é uma produtora musical e curadora de áudio independente, ativa em círculos artísticos underground de Night City. Conhecida por sua abordagem minimalista à produção de áudio analógico, Sophia segue o legado cultural iniciado por sua mãe, <Link href="/wiki/eleanor-nikolic" className="text-red-500 hover:underline">Eleanor Vivienne Moreau Nikolic</Link>, mantendo presença digital extremamente limitada e dedicando-se quase inteiramente ao trabalho presencial em estúdios independentes.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Filha de <Link href="/" className="text-red-500 hover:underline">Chidi Aleksandar Nikolic</Link> e Eleanor, Sophia cresceu em um ambiente que combatia ativamente a cultura corporativa digital, sendo exposta desde a infância a mídias físicas, instrumentos analógicos e tradições artísticas analógicas. Sua trajetória profissional reflete essa origem, marcada pela recusa deliberada a modernização corporativa e integração digital.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Carreira artística</h2>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Sophia iniciou sua carreira musical aos vinte anos, após completar formação autodidata em produção de áudio e técnicas de gravação analógica. Diferentemente de produtores corporativos que utilizam sistemas digitalizados, Sophia trabalha exclusivamente com equipamentos de áudio vintage: gravadores de fita magnética, mesas de som mecânicas, microfones de válvula e sistemas de amplificação de era analógica.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Seu trabalho concentra-se principalmente na produção e curadoria de sessões de jazz underground, gênero que serviu como ponte emocional entre ela e sua mãe falecida. Produz álbuns de artistas independentes em Heywood e Pacifica, frequentemente trabalhando com músicos que rejeitam interfaces corporativas e preferem experiências artísticas puramente presenciais.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  A produção musical de Sophia caracteriza-se por qualidade sonora extraordinária alcançada através de métodos completamente analógicos, criando discos de vinil que se tornaram objetos de culto entre colecionadores de mídia física. Sua recusa a distribuição digital tornou seu trabalho ainda mais inacessível e desejado, criando paradoxo onde a obscuridade amplifica seu valor cultural.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Vida pessoal e isolamento digital</h2>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Sophia é notoriamente reclusa, preferindo comunicação presencial e recusando-se deliberadamente a participar de redes sociais digitais, plataformas de streaming ou qualquer forma de presença online corporativa. Sua presença digital é praticamente inexistente, com informações públicas limitadas a menções ocasionais em arquivos culturais independentes.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Continua vivendo em Westbrook, na residência familiar onde cresceu, cercada pelos objetos colecionados por sua mãe. Mantém relacionamento próximo com sua irmã <Link href="/wiki/daniela-nikolic" className="text-red-500 hover:underline">Daniela Nikolic</Link>, apesar de suas escolhas de vida divergentes. Com seu pai, compartilha reverência pela memória de Eleanor e dedicação à preservação de seu legado artístico.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Significado cultural</h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Sophia Nikolic representa uma forma contemporânea de resistência cultural: a recusa ativa à integração digital corporativa. Em uma era onde a conformidade tecnológica é praticamente obrigatória, sua existência como produtora artística sem nenhum rastro digital mensurável torna-se ato político implícito.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Círculos artísticos independentes a reconhecem como continuadora do trabalho de sua mãe, mantendo viva uma forma de expressão artística que celebra materialidade, impermanência e presença humana. Em 2045, continua produzindo silenciosamente em Westbrook, distante do escrutínio público, dedicada ao trabalho artístico que honra o legado de Eleanor.
                </p>
              </article>
            </div>
          ) : (
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-400 text-center">Nenhuma discussão iniciada para este artigo.</p>
              <div className="mt-4 text-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Iniciar discussão
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Side Ads Right */}
        <aside className="hidden lg:block w-48 p-4">
          <div className="sticky top-4 bg-gray-900 border border-gray-800 rounded-lg p-4 text-center space-y-4">
            <div>
              <span className="text-yellow-500 text-xs font-bold uppercase tracking-wider">Anúncio</span>
              <div className="mt-2 space-y-2">
                <div className="w-full h-24 bg-gradient-to-br from-purple-900 to-purple-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MindSpace</span>
                </div>
                <p className="text-gray-400 text-xs">Realidade virtual premium</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
