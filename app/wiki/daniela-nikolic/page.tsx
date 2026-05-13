"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function DanielaPage() {
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
              Implantes corporativos de última geração - <span className="text-red-500 font-semibold">Kiroshi Optics</span> - Promoção limitada!
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
          <h1 className="text-4xl font-serif font-medium mb-2 text-red-600">Daniela Nikolic</h1>
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
                    <span className="text-lg font-serif font-semibold text-red-500">DANIELA NIKOLIC</span>
                  </div>
                  
                  {/* Image */}
                  <div className="p-3 border-b border-gray-700">
                    <Image
                      src="/images/daniela-nikolic.png"
                      alt="Daniela Nikolic"
                      width={280}
                      height={320}
                      className="w-full h-auto rounded object-cover"
                    />
                    <p className="text-xs text-gray-500 text-center mt-2">Daniela Nikolic, 2044</p>
                  </div>
                  
                  {/* Info Table */}
                  <div className="divide-y divide-gray-800 text-sm">
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nome completo</span>
                      <p className="text-gray-300">Daniela Aleksandar Nikolic</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nascimento</span>
                      <p className="text-gray-300">14 de julho de 2006</p>
                      <p className="text-gray-400 text-xs">Night City</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Idade em 2045</span>
                      <p className="text-gray-300">38 anos</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Nacionalidade</span>
                      <p className="text-gray-300">Norte-americana</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Residência</span>
                      <p className="text-gray-300">Corpo Plaza, Downtown</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Profissão</span>
                      <p className="text-gray-300">Médica de trauma</p>
                      <p className="text-gray-300">Cirurgiã especialista</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Empregadora</span>
                      <p className="text-red-500 hover:underline cursor-pointer">Trauma Team International</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Anos de atividade</span>
                      <p className="text-gray-300">2025 — Presente</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Pais</span>
                      <Link href="/" className="text-red-500 hover:underline block">Chidi Aleksandar Nikolic</Link>
                      <Link href="/wiki/eleanor-nikolic" className="text-red-500 hover:underline block">Eleanor Vivienne Moreau Nikolic</Link>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Irmã</span>
                      <Link href="/wiki/sophia-nikolic" className="text-red-500 hover:underline block">Sophia Nikolic</Link>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Conhecido por</span>
                      <p className="text-gray-300">Medicina de trauma</p>
                      <p className="text-gray-300">Cirurgias de emergência</p>
                      <p className="text-gray-300">Protocolos médicos inovadores</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Especializações</span>
                      <p className="text-gray-300">Traumas de combate corporativo</p>
                      <p className="text-gray-300">Implantes e cyber-modificações</p>
                      <p className="text-gray-300">Cirurgia de precisão</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Status legal</span>
                      <p className="text-green-500">Sem antecedentes criminais registrados</p>
                    </div>
                    <div className="px-3 py-2">
                      <span className="text-gray-500">Reputação pública</span>
                      <p className="text-gray-300">Profissional dedicada</p>
                      <p className="text-gray-300">Ética médica impecável</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="prose prose-invert max-w-none flex-1 order-1">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">Daniela Aleksandar Nikolic</strong> (Night City, 14 de julho de 2006) é uma cirurgiã e médica de trauma de renome internacional, atualmente trabalhando como paramedic especialista na <Link href="#" className="text-red-500 hover:underline">Trauma Team International</Link>. Conhecida por sua precisão cirúrgica e dedicação ao salvamento de vidas em situações de emergência crítica, Daniela desenvolveu reputação como uma das mais competentes profissionais de medicina traumatológica em Night City.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Filha de <Link href="/" className="text-red-500 hover:underline">Chidi Aleksandar Nikolic</Link>, jornalista investigativo renomado, e da artista <Link href="/wiki/eleanor-nikolic" className="text-red-500 hover:underline">Eleanor Vivienne Moreau Nikolic</Link>, Daniela cresceu em ambientes que combinavam rigor investigativo e sensibilidade cultural. Apesar de criada em Westbrook, distrito conhecido pela preservação estética analógica, Daniela seguiu uma trajetória profissional direcionada à medicina de alta tecnologia corporativa.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Formação e carreira médica</h2>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Formou-se como médica generalista pela Universidade de Night City em 2027, completando sua especialização em medicina de trauma pela Academy of Trauma Medicine em 2031. Durante seus anos de residência, Daniela trabalhou em setores de emergência em Corpo Plaza, ganhando experiência prática com ferimentos resultantes de conflitos corporativos, modificações cibernéticas e procedimentos de emergência de alta complexidade.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Em 2033, foi recrutada pela Trauma Team International, onde rapidamente se destacou por suas habilidades em cirurgia de precisão e tomada de decisão em tempo real sob pressão. Seu histórico de salvamento de vidas críticas e seu desenvolvimento de novos protocolos de estabilização a estabeleceram como referência entre profissionais de medicina de trauma.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Particularmente conhecida por sua capacidade de lidar com ferimentos relacionados a modificações corporais extremas e implantes cibernéticos, Daniela desenvolveu especialização única em compatibilidade cirúrgica entre sistemas biológicos e tecnológicos. Sua reputação se estende além de Night City, sendo consultada em casos críticos internacionais.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Vida pessoal</h2>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  Daniela compartilha pouca informação sobre sua vida privada publicamente. Sabe-se que mantém residência em Corpo Plaza, próxima às instalações principais da Trauma Team, refletindo sua dedicação profissional. Possui forte relacionamento com sua irmã <Link href="/wiki/sophia-nikolic" className="text-red-500 hover:underline">Sophia Nikolic</Link>, apesar de suas trajetórias profissionais distintas.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  A morte de sua mãe em 2009 deixou impacto significativo em Daniela durante seus anos de formação universitária. Posteriormente, dedica parte de seus ganhos a projetos de preservação cultural independentes em homenagem ao legado artístico de Eleanor.
                </p>

                <h2 className="text-xl font-serif font-semibold text-red-600 mt-6 mb-3 border-b border-gray-700 pb-2">Legado e reconhecimento</h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Daniela Nikolic representa a geração pós-corporativa de profissionais de elite que navegam sistemas corporativos enquanto mantêm valores individuais. Seus artigos sobre protocolos de trauma corporativo foram publicados em periódicos internacionais especializados. Sua abordagem equilibrada entre tecnologia corporativa e ética médica a diferencia em um setor frequentemente marcado por compromissos morais.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Em 2045, continua como figura proeminente da medicina traumatológica de Night City, reconhecida por suas contribuições inovadoras e dedicação inabalável ao salvamento de vidas.
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
                <div className="w-full h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CloudHost</span>
                </div>
                <p className="text-gray-400 text-xs">Hospedagem segura em nuvem</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
