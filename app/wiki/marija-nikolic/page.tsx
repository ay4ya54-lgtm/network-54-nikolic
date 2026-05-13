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
                  <span className="text-neon-cyan text-xs uppercase">Filhos</span>
                  <p className="text-gray-300">Martin Nikolic</p>
                  <p className="text-gray-500 text-xs">(sem perfil público)</p>
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
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Presença digital</span>
                  <p className="text-neon-yellow text-xs">Mínima. Dados fragmentados.</p>
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
              <strong className="text-neon-green">Marija Aleksandar Nikolic</strong> (Neo-Iugoslávia, 1968) é uma acadêmica e pesquisadora neo-iugoslava, irmã mais velha do jornalista investigativo <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors">Chidi Aleksandar Nikolic</Link>. Diferentemente de seu irmão, que emigrou para Night City ainda jovem, Marija permaneceu na Neo-Iugoslávia ao longo de toda a sua vida adulta, construindo uma trajetória discreta dentro do meio acadêmico regional.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Poucas informações públicas verificáveis estão disponíveis sobre Marija Nikolic. Seu perfil digital é extremamente fragmentado, consistindo majoritariamente em referências genealógicas associadas ao nome de seu irmão e registros acadêmicos pontuais de difícil confirmação. Em Night City, seu nome é conhecido apenas dentro do círculo próximo da família Nikolic.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Origem familiar
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Marija é filha de uma família tradicional neo-iugoslava com fortes ligações ao meio acadêmico e político regional. Seu pai era professor universitário especializado em história europeia contemporânea, e sua mãe atuava como tradutora oficial em conferências diplomáticas. O ambiente intelectual e politicamente consciente da família influenciou profundamente tanto Marija quanto seu irmão mais novo Chidi, cada um seguindo caminhos diferentes de questionamento e documentação da realidade social.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Enquanto Chidi canalizou essa influência para o jornalismo investigativo em Night City, Marija optou por permanecer na Europa, desenvolvendo trabalho acadêmico dentro de estruturas mais tradicionais e menos expostas.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Carreira acadêmica
            </h2>

            <p className="text-gray-300 leading-relaxed">
              As informações sobre a carreira de Marija são escassas e de difícil verificação independente. Registros fragmentados a associam a atividades de pesquisa em instituições neo-iugoslavas durante as décadas de 1990 e 2000, possivelmente ligadas a estudos de história contemporânea ou ciências sociais. Nenhuma publicação significativa foi localizada em arquivos digitais públicos de Night City com seu nome como autora principal.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Esta escassez de registros pode resultar de vários fatores: a fragmentação de arquivos acadêmicos europeus durante os conflitos corporativos das décadas seguintes, a ausência de digitalização ampla de publicações neo-iugoslavas, ou simplesmente uma trajetória acadêmica de perfil intencionalmente baixo dentro de instituições de alcance regional.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Relação com Chidi
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Apesar da distância geográfica e das diferenças de trajetória, Marija e Chidi mantiveram contato regular ao longo das décadas. Fontes próximas à família descrevem a relação entre os irmãos como marcada por respeito mútuo e afeto discreto, típico da cultura familiar neo-iugoslava de sua geração.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Após a morte de <Link href="/wiki/eleanor-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Eleanor Vivienne Moreau Nikolic</Link> em 2009, Marija teria viajado a Night City para apoiar o irmão e as sobrinhas recém-órfãs de mãe, <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Daniela</Link> e <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Sophia</Link>. Esta visita representa uma das poucas ocasiões documentadas de sua presença em Night City.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Filho: Martin Nikolic
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Marija é mãe de <strong className="text-neon-green">Martin Nikolic</strong>, figura ainda mais obscura do que a própria mãe dentro dos registros disponíveis. Nenhum perfil público existe para Martin, e seu nome aparece apenas em referências genealógicas associadas à família Nikolic. A data de nascimento, residência atual e atividades profissionais de Martin são completamente desconhecidas nos sistemas de informação pública acessíveis em 2045.
            </p>

            <p className="text-gray-300 leading-relaxed">
              A ausência de informações sobre Martin é notável até mesmo pelo padrão já restrito estabelecido por sua mãe. Analistas de dados independentes que ocasionalmente monitoram a família Nikolic descrevem Martin como um caso extremo de invisibilidade social dentro de uma família que, com exceção de Chidi e Daniela, tendeu historicamente a manter baixo perfil público.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Status em 2045
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Em 2045, Marija teria aproximadamente 77 anos. Não existem informações públicas confirmadas sobre seu estado de saúde, localização atual ou atividades. Seu último contato documentado com membros da família em Night City é impreciso, com estimativas variando entre anos recentes e a última visita registrada após a morte de Eleanor.
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
