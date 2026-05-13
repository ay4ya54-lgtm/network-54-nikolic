"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function MartinPage() {
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
                  Nível de risco: <span className="text-green-500 font-semibold">Muito Baixo</span>
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
          <h1 className="text-4xl font-serif font-medium mb-2 text-red-600">Martin Nikolic</h1>
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
                    <span className="text-lg font-serif font-semibold text-red-500">MARTIN NIKOLIC</span>
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
                      <p className="text-gray-300">Martin Nikolic</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nascimento</span>
                      <p className="text-gray-400 text-sm italic">Dados limitados</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nacionalidade</span>
                      <p className="text-gray-400 text-sm italic">Não documentado</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Residência</span>
                      <p className="text-gray-400 text-sm italic">Dados limitados</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Mãe</span>
                      <Link href="/wiki/marija-nikolic" className="text-red-500 hover:underline block">Marija Nikolic</Link>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Presença digital</span>
                      <p className="text-red-500">Praticamente inexistente</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Profissão</span>
                      <p className="text-gray-400 text-sm italic">Desconhecida</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Informações públicas</span>
                      <p className="text-red-500">Arquivos praticamente vazios</p>
                      <p className="text-gray-400 text-xs">Nenhum registro significativo</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Status legal</span>
                      <p className="text-green-500">Sem antecedentes conhecidos</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Visibilidade pública</span>
                      <p className="text-yellow-500">Completo apagamento</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="prose prose-invert max-w-none flex-1 order-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Martin Nikolic</strong> é uma figura praticamente desconhecida até mesmo dentro de registros públicos e arquivos genealógicos disponíveis. Conhecido unicamente como filho da enigmática <Link href="/wiki/marija-nikolic" className="text-red-500 hover:underline">Marija Nikolic</Link>, Martin representa o grau máximo de obscuridade entre membros da família Nikolic, existindo nos sistemas de informação pública como pouco mais que um nome.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Nenhuma informação significativa está disponível sobre sua vida, carreira, residência ou atividades. Seu nome aparece raramente em documentação oficial apenas como referência genealógica relacionada à sua mãe, sem qualquer descrição de sua história pessoal, profissional ou social.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Apagamento de registros</h2>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  A ausência quase total de informações sobre Martin Nikolic sugere existência deliberadamente desconectada de sistemas públicos, corporativos ou governamentais. Semelhante ao padrão estabelecido por sua mãe, Martin optou por ou foi forçado a permanecer completamente fora de estruturas de documentação social e digital.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Em uma era de vigilância onipresente e rastros digitais inevitáveis, a existência de indivíduos como Martin representa anomalia rara: pessoas cujas vidas não deixam quase nenhum rastro documentável em bancos de dados públicos ou corporativos. Este apagamento pode resultar de opção deliberada, isolamento geográfico extremo, ou circunstâncias que permanecerão provavelmente desconhecidas.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Status especulativo</h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Toda a informação sobre Martin Nikolic deve ser considerada especulativa ou baseada em conexão genealógica com sua mãe. Nenhuma fonte independente verifica sua existência atual, atividades presentes ou paradeiro em 2045. É possível que simplesmente nunca tenha existido em sistemas documentáveis, ou que tenha falecido sem deixar qualquer registro oficial da morte.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Martin Nikolic representa limite extremo de invisibilidade social possível em Night City moderna: um indivíduo cuja existência é verificável apenas através de conexão genealógica com outro ser humano igualmente obscuro, sem nenhuma documentação independente capaz de confirmar sua vida pessoal.
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
                <div className="w-full h-24 bg-gradient-to-br from-gray-800 to-gray-700 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-bold text-sm">Data Recovery</span>
                </div>
                <p className="text-gray-400 text-xs">Recupere seus arquivos perdidos</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
