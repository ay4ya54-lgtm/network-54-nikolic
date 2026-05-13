"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function EleanorNikolicPage() {
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
              Aprenda programação do zero ao avançado - <span className="text-red-500 font-semibold">CursoTech Pro</span> - 70% de desconto hoje!
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
                  Nível de risco: <span className="text-green-500 font-semibold">Baixo</span>
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
          <h1 className="text-4xl font-serif font-medium mb-2 text-red-600">Eleanor Vivienne Moreau Nikolic</h1>
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
                    <span className="text-lg font-serif font-semibold text-red-500">ELEANOR NIKOLIC</span>
                  </div>
                  
                  {/* Image */}
                  <div className="p-3 border-b border-gray-700">
                    <Image
                      src="/images/eleanor-nikolic.png"
                      alt="Eleanor Vivienne Moreau Nikolic"
                      width={280}
                      height={320}
                      className="w-full h-auto rounded object-cover"
                    />
                    <p className="text-xs text-gray-500 text-center mt-2">Eleanor Moreau, circa 2005</p>
                  </div>
                  
                  {/* Info Table */}
                  <div className="divide-y divide-gray-800 text-sm">
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nome completo</span>
                      <p className="text-gray-300">Eleanor Vivienne Moreau Nikolic</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nome de nascimento</span>
                      <p className="text-gray-300">Eleanor Vivienne Moreau</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nascimento</span>
                      <p className="text-gray-300">12 de setembro de 1972</p>
                      <p className="text-gray-400 text-xs">Marseille, França</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Falecimento</span>
                      <p className="text-gray-300">17 de novembro de 2009</p>
                      <p className="text-gray-400 text-xs">Night City</p>
                      <p className="text-gray-400 text-xs">(37 anos)</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nacionalidade</span>
                      <p className="text-gray-300">Franco-americana</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Residência</span>
                      <p className="text-gray-300">Westbrook, Night City</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Profissão</span>
                      <p className="text-gray-300">Artista plástica</p>
                      <p className="text-gray-300">Pianista</p>
                      <p className="text-gray-300">Curadora cultural</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Anos de atividade</span>
                      <p className="text-gray-300">1993 — 2007</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Estado civil</span>
                      <p className="text-gray-300">Casada</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Cônjuge</span>
                      <Link href="/" className="text-red-500 hover:underline block">Chidi Aleksandar Nikolic</Link>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Filhos</span>
                      <Link href="#" className="text-red-500 hover:underline block">Daniela Nikolic</Link>
                      <Link href="#" className="text-red-500 hover:underline block">Sophia Nikolic</Link>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Conhecida por</span>
                      <p className="text-gray-300">Preservação cultural analógica</p>
                      <p className="text-gray-300">Arte independente</p>
                      <p className="text-gray-300">Movimentos retrô de Night City</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Movimentos artísticos</span>
                      <p className="text-gray-300">Arte neo-vintage</p>
                      <p className="text-gray-300">Preservacionismo cultural</p>
                      <p className="text-gray-300">Jazz underground independente</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Afiliações</span>
                      <p className="text-gray-300">Círculos artísticos independentes de Night City</p>
                      <p className="text-gray-300">Centros culturais de Heywood e Pacifica</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Status legal</span>
                      <p className="text-green-500">Sem antecedentes criminais registrados</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Causa da morte</span>
                      <p className="text-yellow-500">Explosão em centro de imprensa independente</p>
                      <p className="text-gray-400 text-xs">(causa oficial: acidente estrutural)</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Legado</span>
                      <p className="text-gray-300">Figura simbólica da resistência cultural analógica em Night City</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="prose prose-invert max-w-none flex-1 order-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Eleanor Vivienne Moreau Nikolic</strong> (Marseille, 12 de setembro de 1972 — Night City, 17 de novembro de 2007) foi uma artista plástica, pianista e curadora cultural franco-americana reconhecida dentro dos círculos artísticos independentes de Night City durante o início do século XXI. Tornou-se conhecida por seu trabalho voltado à preservação estética e cultural de mídias físicas antigas em meio ao avanço acelerado da digitalização corporativa e da cultura tecnológica pós-Guerra Corporativa.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Filha de um restaurador cinematográfico e de uma cantora de jazz, Eleanor cresceu em ambientes ligados à música clássica, cinema analógico e artes tradicionais europeias. Desde jovem, demonstrava forte interesse por objetos históricos, decoração vintage e movimentos culturais norte-americanos das décadas de 1950 e 1960, temas que posteriormente definiriam sua identidade artística.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Carreira artística</h2>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Durante o final da década de 1990, mudou-se para Night City em busca de espaço dentro da cena artística alternativa que surgia entre distritos independentes da cidade. Em contraste ao crescimento da arte digital corporativa, Eleanor defendia a preservação de materiais físicos, restauração manual de obras antigas e experiências culturais presenciais.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Seu trabalho tornou-se particularmente conhecido em Heywood, Pacifica e Westbrook, onde organizava apresentações de jazz analógico, exposições de restauração artística, sessões de cinema clássico e encontros culturais independentes sem financiamento corporativo.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Apesar de nunca ter alcançado fama comercial em grande escala, Eleanor desenvolveu forte influência em círculos artísticos underground, sendo frequentemente descrita por críticos independentes como <em className="text-gray-200">&quot;uma mulher deslocada no tempo, tentando preservar humanidade em uma cidade que abandonava memórias.&quot;</em>
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Vida pessoal</h2>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Em 2002, conheceu o jornalista investigativo <Link href="/" className="text-red-500 hover:underline">Chidi Aleksandar Nikolic</Link> durante um evento beneficente ligado à imprensa independente. O relacionamento dos dois tornou-se conhecido entre jornalistas e artistas locais pela forte oposição entre suas personalidades: enquanto Chidi era associado à rigidez investigativa e ao ambiente político de Night City, Eleanor era vista como uma figura calma, melancólica e profundamente ligada à preservação cultural.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Casaram-se em 2005 em uma cerimônia privada realizada em Westbrook. Grande parte da residência da família Nikolic passou a refletir os gostos pessoais de Eleanor, especialmente sua obsessão estética pelos anos 1960. O casal teve duas filhas: <Link href="#" className="text-red-500 hover:underline">Daniela Nikolic</Link> e <Link href="#" className="text-red-500 hover:underline">Sophia Nikolic</Link>.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Morte</h2>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Em 17 de novembro de 2007, Eleanor morreu durante uma explosão ocorrida em um centro de imprensa independente em Heywood. O caso foi oficialmente registrado como acidente estrutural causado por falha energética. Entretanto, jornalistas independentes e antigos colegas de Chidi Nikolic associaram o ocorrido a investigações conduzidas contra subsidiárias da <Link href="#" className="text-red-500 hover:underline">PetroChem</Link> naquele mesmo período.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Legado</h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Após a morte da esposa, Chidi preservou praticamente todos os objetos, móveis e hábitos relacionados à Eleanor, transformando a residência em um memorial permanente. A casa é frequentemente descrita por visitantes como &quot;uma cápsula do tempo em meio ao colapso urbano de Night City&quot;.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Décadas após sua morte, Eleanor continua sendo citada em arquivos culturais independentes de Night City como símbolo da resistência artística analógica durante a ascensão da cultura corporativa digital no pós-guerra.
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

        {/* Side Ad Right */}
        <aside className="hidden lg:block w-48 p-4">
          <div className="sticky top-4 bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
            <span className="text-yellow-500 text-xs font-bold uppercase tracking-wider">Anúncio</span>
            <div className="mt-3 space-y-2">
              <div className="w-full h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">CloudHost</span>
              </div>
              <p className="text-gray-400 text-xs">Hospedagem rápida</p>
              <p className="text-blue-400 text-sm font-semibold">Teste grátis!</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
