"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function HomePage() {
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
          <div className="flex items-center gap-3">
            <span className="text-4xl font-serif font-bold text-red-600">W54</span>
            <div className="flex flex-col">
              <span className="text-lg font-serif text-red-600">Wikipédia</span>
              <span className="text-xs text-red-600">A enciclopédia livre</span>
            </div>
          </div>
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
                  <Link href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-red-500 transition-colors">
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
          <h1 className="text-4xl font-serif font-medium mb-2 text-red-600">Chidi Nikolic</h1>
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
                    <span className="text-lg font-serif font-semibold text-red-500">CHIDI NIKOLIC</span>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="p-3 border-b border-gray-700">
                    <div className="w-full h-48 bg-gray-800 rounded flex items-center justify-center">
                      <span className="text-gray-600 text-sm">Imagem indisponível</span>
                    </div>
                  </div>
                  
                  {/* Info Table */}
                  <div className="divide-y divide-gray-800 text-sm">
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nome completo</span>
                      <p className="text-gray-300">Chidi Aleksandar Nikolic</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nascimento</span>
                      <p className="text-gray-300">17 de fevereiro de 1970</p>
                      <p className="text-gray-400 text-xs">Neo-Iugoslávia</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Idade em 2045</span>
                      <p className="text-gray-300">75 anos</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nacionalidade</span>
                      <p className="text-gray-300">Neo-iugoslavo naturalizado norte-americano</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Residência</span>
                      <p className="text-gray-300">Westbrook, Night City</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Profissão</span>
                      <p className="text-gray-300">Jornalista investigativo</p>
                      <p className="text-gray-300">Escritor</p>
                      <p className="text-gray-300">Comentarista político</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Anos de atividade</span>
                      <p className="text-gray-300">1990 — 2038</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Estado civil</span>
                      <p className="text-gray-300">Viúvo</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Cônjuge</span>
                      <Link href="/wiki/eleanor-nikolic" className="text-red-500 hover:underline block">Eleanor Vivienne Moreau Nikolic</Link>
                      <p className="text-gray-400 text-xs">(1972 — 2007)</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Filhos</span>
                      <p className="text-red-500 hover:underline cursor-pointer">Daniela Nikolic</p>
                      <p className="text-red-500 hover:underline cursor-pointer">Sophia Nikolic</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Netos</span>
                      <p className="text-red-500 hover:underline cursor-pointer">Penelope Nikolic</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Parentes conhecidos</span>
                      <p className="text-red-500 hover:underline cursor-pointer">Marija Nikolic (irmã)</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Afiliações</span>
                      <p className="text-gray-300">Imprensa Independente de Night City</p>
                      <p className="text-gray-300">Free Press Archive</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Conhecido por</span>
                      <p className="text-gray-300">Investigações corporativas</p>
                      <p className="text-gray-300">Cobertura pós-guerra corporativa</p>
                      <p className="text-gray-300">Ética jornalística</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Obras notáveis</span>
                      <p className="text-gray-300 italic">Cinzas Sobre Corpo Plaza (2023)</p>
                      <p className="text-gray-300 italic">O Preço da Reconstrução (2031)</p>
                      <p className="text-gray-300 italic">Quem Controla a Guerra? (2036)</p>
                      <p className="text-gray-300 italic">Filhos do Concreto (2040)</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Status legal</span>
                      <p className="text-green-500">Sem antecedentes criminais registrados</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Status público em 2045</span>
                      <p className="text-gray-300">Aposentado / Figura histórica da mídia independente</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="prose prose-invert max-w-none flex-1 order-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Chidi Aleksandr Nikolic</strong> (Neo-Iugoslávia, 17 de fevereiro de 1970) é um jornalista investigativo aposentado, escritor e comentarista político reconhecido por sua atuação durante os períodos de instabilidade corporativa em Night City ao longo das décadas de 1990, 2000 e 2030. É considerado uma das figuras mais influentes da imprensa independente da era pós-Guerra Corporativa, conhecido principalmente por reportagens relacionadas à corrupção institucional, megacorporações militares privadas e manipulação de informação pública.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Ao longo de mais de cinquenta anos de carreira, Nikolic desenvolveu reputação pública marcada por neutralidade política aparente, ética jornalística rígida e ausência completa de envolvimento criminal ou corporativo direto. Seu nome tornou-se referência recorrente em universidades, arquivos históricos e estudos sobre mídia independente na reconstrução de Night City após os eventos do início do século XXI.
              </p>

              <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Início da carreira</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Filho de uma tradicional família neo-iugoslava ligada ao meio acadêmico e político, Chidi iniciou sua carreira jornalística ainda durante o final dos conflitos econômicos internacionais da década de 1990. Sua ascensão profissional ocorreu após a publicação de séries investigativas relacionadas à atuação clandestina de corporações privadas em zonas civis urbanas. Entre seus trabalhos mais conhecidos estão <em className="text-gray-200">Cinzas Sobre Corpo Plaza</em> (2023), <em className="text-gray-200">O Preço da Reconstrução</em> (2031) e <em className="text-gray-200">Quem Controla a Guerra?</em> (2036), materiais frequentemente citados em cursos de ética jornalística e história contemporânea de Night City.
              </p>

              <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Vida pessoal</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Em 2005, casou-se com <Link href="/wiki/eleanor-nikolic" className="text-red-500 hover:underline">Eleanor Vivienne Moreau Nikolic</Link>, artista franco-americana ligada ao movimento cultural retrô independente da cidade. Eleanor faleceu em 17 de novembro de 2007 durante uma explosão em um centro de imprensa independente localizado em Heywood, caso oficialmente tratado como acidente estrutural, embora jornalistas independentes e antigos colegas de Nikolic associem o ocorrido a investigações conduzidas contra subsidiárias da <Link href="#" className="text-red-500 hover:underline">Arasaka</Link>.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Após a morte da esposa, Chidi passou a viver de maneira reclusa em <Link href="#" className="text-red-500 hover:underline">Westbrook</Link>. Sua residência tornou-se conhecida pela preservação integral da estética cultural norte-americana dos anos 1960, incluindo decoração, aparelhos eletrônicos analógicos, discos físicos e objetos pertencentes à esposa falecida. O imóvel é frequentemente descrito por visitantes como &quot;uma cápsula do tempo em meio ao colapso urbano de Night City&quot;.
              </p>

              <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Família</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Nikolic possui duas filhas: <Link href="#" className="text-red-500 hover:underline">Daniela Nikolic</Link>, médica renomada da <Link href="#" className="text-red-500 hover:underline">Trauma Team</Link>, e <Link href="#" className="text-red-500 hover:underline">Sophia Nikolic</Link>, figura de baixa exposição pública com presença digital extremamente limitada. Também é avô de <Link href="#" className="text-red-500 hover:underline">Penelope Nikolic</Link>, estudante universitária que atualmente reside com ele.
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
