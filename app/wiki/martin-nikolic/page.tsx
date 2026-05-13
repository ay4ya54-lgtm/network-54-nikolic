"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CyberLayout } from "@/components/cyber-layout"
import { AlertTriangle } from "lucide-react"

export default function MartinNikolicPage() {
  const [activeTab, setActiveTab] = useState<"artigo" | "discussao">("artigo")

  return (
    <CyberLayout>
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2 text-neon-green tracking-wide" style={{
          textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41'
        }}>Martin Nikolic</h1>
        <p className="text-sm text-gray-500 font-mono">Origem: W54 DataNet Archive // Status: DADOS INSUFICIENTES</p>
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
                <span className="text-lg font-bold text-neon-green uppercase tracking-wider" style={{ textShadow: '0 0 10px #00ff41' }}>MARTIN NIKOLIC</span>
              </div>

              <div className="p-3 border-b border-neon-green/20">
                <div className="w-full h-48 bg-cyber-gray rounded flex items-center justify-center border border-neon-green/20">
                  <div className="text-center space-y-2">
                    <AlertTriangle className="h-8 w-8 text-neon-yellow mx-auto" />
                    <span className="text-gray-600 text-xs font-mono uppercase block">[IMAGEM INDISPONÍVEL]</span>
                    <span className="text-gray-700 text-xs font-mono block">Sem registro fotográfico</span>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-neon-green/10 text-sm font-mono">
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nome completo</span>
                  <p className="text-gray-300">Martin Nikolic</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nascimento</span>
                  <p className="text-neon-yellow italic">Dados limitados</p>
                  <p className="text-gray-500 text-xs">Estimado: Neo-Iugoslávia</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Nacionalidade</span>
                  <p className="text-neon-yellow italic">Não documentado</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Residência</span>
                  <p className="text-neon-yellow italic">Desconhecida</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Profissão</span>
                  <p className="text-neon-yellow italic">Desconhecida</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Mãe</span>
                  <Link href="/wiki/marija-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Marija Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Tio</span>
                  <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Chidi Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Primas</span>
                  <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Daniela Nikolic</Link>
                  <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors block">Sophia Nikolic</Link>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Presença digital</span>
                  <p className="text-neon-red font-bold">Praticamente inexistente</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Informações públicas</span>
                  <p className="text-neon-red text-xs">Arquivos praticamente vazios</p>
                  <p className="text-gray-500 text-xs">Nenhum registro significativo</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Status legal</span>
                  <p className="text-neon-green">Sem antecedentes conhecidos</p>
                </div>
                <div className="px-3 py-2">
                  <span className="text-neon-cyan text-xs uppercase">Visibilidade pública</span>
                  <p className="text-neon-yellow">Apagamento completo</p>
                </div>
              </div>
            </div>

            {/* Warning Ad */}
            <div className="mt-4 cyber-card rounded overflow-hidden border-neon-yellow/50">
              <div className="bg-gradient-to-br from-yellow-950 to-gray-900 p-4 text-center">
                <AlertTriangle className="h-8 w-8 text-neon-yellow mx-auto mb-2 animate-pulse" />
                <span className="text-lg font-bold text-neon-yellow block">DATA RECOVERY</span>
                <p className="text-gray-400 text-xs mt-2 font-mono">Encontramos quem foi apagado</p>
                <p className="text-neon-cyan text-xs mt-2 font-bold">Discreto. Seguro. Eficiente.</p>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="flex-1 order-1 space-y-4">

            {/* Data Warning */}
            <div className="p-4 cyber-card rounded border-neon-yellow/50 bg-yellow-950/20 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-neon-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-neon-yellow font-bold text-sm uppercase tracking-wider">Aviso de dados insuficientes</span>
                  <p className="text-gray-400 text-xs font-mono mt-1">
                    Este perfil contém informações extremamente limitadas. Dados especulativos estão marcados. 
                    Nenhuma fonte independente verificou a existência atual deste indivíduo.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              <strong className="text-neon-green">Martin Nikolic</strong> é uma figura praticamente desconhecida até mesmo dentro de registros públicos e arquivos genealógicos disponíveis. Conhecido unicamente como filho da enigmática <Link href="/wiki/marija-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Marija Nikolic</Link> e sobrinho do jornalista <Link href="/" className="text-neon-cyan hover:text-neon-magenta transition-colors">Chidi Aleksandar Nikolic</Link>, Martin representa o grau máximo de obscuridade entre membros da família Nikolic, existindo nos sistemas de informação pública como pouco mais que um nome associado a uma referência genealógica.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Nenhuma informação significativa está disponível sobre sua vida, carreira, residência ou atividades. Seu nome aparece raramente em documentação oficial apenas como referência genética relacionada à sua mãe, sem qualquer descrição de história pessoal, profissional ou social. Em Night City, analistas que acompanham registros da família Nikolic descrevem Martin como o membro mais opaco do grupo, superando até mesmo a escassez de dados de sua própria mãe.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Ausência de registros
            </h2>

            <p className="text-gray-300 leading-relaxed">
              A ausência quase total de informações sobre Martin Nikolic é notável mesmo dentro do contexto de uma família historicamente discreta. Enquanto seu tio Chidi construiu décadas de registros jornalísticos públicos, sua prima <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Daniela</Link> possui extensa documentação profissional na Trauma Team, e até mesmo <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Sophia</Link>, notoriamente reclusa, possui referências verificáveis, Martin existe nos sistemas como uma lacuna quase perfeita.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Pesquisas em bancos de dados de registros civis, acadêmicos e corporativos acessíveis ao público retornam resultados consistentemente negativos ou ambíguos para qualquer combinação de nome e dados familiares associados a Martin Nikolic. Arquivos de imprensa independente de Night City que cobriram extensivamente a carreira de Chidi em nenhum momento mencionam o sobrinho por nome ou por referência.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Hipóteses sobre o apagamento
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Especialistas em análise de registros digitais que estudam padrões de ausência documental em Night City e regiões europeias identificam três categorias principais de explicação para casos como o de Martin Nikolic.
            </p>

            <p className="text-gray-300 leading-relaxed">
              A primeira é o <strong className="text-neon-cyan">isolamento geográfico voluntário</strong>: indivíduos que optam por residir em regiões de conectividade limitada, fora do alcance de sistemas de registro digital abrangentes. A Neo-Iugoslávia possui bolsões de conectividade mínima onde registros públicos são mantidos apenas em papel físico, frequentemente não digitalizados.
            </p>

            <p className="text-gray-300 leading-relaxed">
              A segunda categoria é o <strong className="text-neon-cyan">apagamento deliberado ativo</strong>: uso de serviços especializados, legais ou não, para remover rastros de sistemas públicos e corporativos. Esta prática, cada vez mais comum em Night City e na Europa corporativa, é frequentemente motivada por razões de segurança pessoal, disputas legais ou simplesmente pela escolha de viver fora dos sistemas de vigilância.
            </p>

            <p className="text-gray-300 leading-relaxed">
              A terceira, mais especulativa, envolve <strong className="text-neon-yellow">perda documental por conflito</strong>: destruição de registros durante os períodos de instabilidade política e corporativa que afetaram regiões europeias entre 2020 e 2035. Guerras corporativas e reestruturações políticas da época resultaram em destruição massiva de arquivos regionais, criando lacunas documentais permanentes para milhões de pessoas.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Conexão com a família em Night City
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Não há registros de Martin Nikolic tendo visitado Night City em qualquer momento documentado. Seu tio Chidi raramente menciona o sobrinho em entrevistas ou escritos pessoais. As primas <Link href="/wiki/daniela-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Daniela</Link> e <Link href="/wiki/sophia-nikolic" className="text-neon-cyan hover:text-neon-magenta transition-colors">Sophia</Link>, igualmente, não possuem referências públicas ao primo.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Esta ausência de conexão documentada pode indicar distanciamento familiar real, ou simplesmente refletir o padrão geral de discrição que caracteriza os membros da família Nikolic em suas comunicações públicas. A família historicamente preservou sua privacidade com relação a assuntos pessoais e conexões familiares estendidas.
            </p>

            <h2 className="text-xl font-bold text-neon-cyan mt-8 mb-3 border-b border-neon-cyan/30 pb-2 uppercase tracking-wider">
              Representatividade simbólica
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Martin Nikolic tornou-se, para analistas de dados independentes em Night City, um caso de estudo sobre os limites da documentação digital em 2045. Em uma cidade onde câmeras de vigilância corporativa cobrem virtualmente cada esquina, onde biométricos e registros de movimentação são coletados continuamente, e onde a ausência de rastro digital é em si uma forma de presença suspeita nos sistemas de monitoramento, a existência de alguém com o perfil de Martin Nikolic é considerada estatisticamente improvável.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Seja por escolha, por circunstância ou por fatores completamente desconhecidos, Martin Nikolic representa limite extremo de invisibilidade social possível na era da hiperconectividade: um indivíduo cuja existência é verificável apenas através de conexão genealógica com outro ser humano igualmente obscuro, sem nenhuma documentação independente capaz de confirmar sua vida, sua localização ou mesmo sua continuidade de existência em 2045.
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
