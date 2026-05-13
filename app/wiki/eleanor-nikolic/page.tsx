"use client"

import Link from "next/link"
import { CyberLayout } from "@/components/cyber-layout"

export default function EleanorNikolicPage() {
  return (
    <CyberLayout>
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2 text-red-500 tracking-wide" style={{
          textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000'
        }}>Eleanor Vivienne Moreau Nikolic</h1>
        <p className="text-sm text-gray-600 font-mono">Origem: W54 DataNet Archive // Status: FALECIDA</p>
      </div>

      <div className="flex gap-6">
        {/* Infobox */}
        <aside className="hidden md:block w-72 flex-shrink-0 order-2">
          <div className="bg-black border border-red-900/50 rounded">
            <div className="bg-gradient-to-r from-red-950 to-red-900 px-3 py-3 border-b border-red-500/30 text-center">
              <span className="text-lg font-bold text-red-500 uppercase tracking-wider" style={{ textShadow: '0 0 10px #ff0000' }}>ELEANOR MOREAU NIKOLIC</span>
            </div>
            
            <div className="p-3 border-b border-red-900/30">
              <div className="w-full h-48 bg-gray-900 rounded flex items-center justify-center border border-red-900/30">
                <span className="text-gray-700 text-xs font-mono uppercase">[IMAGEM NÃO DISPONÍVEL]</span>
              </div>
            </div>
            
            <div className="divide-y divide-red-900/20 text-sm font-mono">
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Nome completo</span>
                <p className="text-gray-300">Eleanor Vivienne Moreau Nikolic</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Nome de nascimento</span>
                <p className="text-gray-300">Eleanor Vivienne Moreau</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Nascimento</span>
                <p className="text-gray-300">12 de setembro de 1972</p>
                <p className="text-gray-500 text-xs">Marseille, França</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Falecimento</span>
                <p className="text-red-500">17 de novembro de 2007 (35 anos)</p>
                <p className="text-gray-500 text-xs">Night City</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Nacionalidade</span>
                <p className="text-gray-300">Franco-americana</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Residência</span>
                <p className="text-gray-300">Westbrook, Night City</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Profissão</span>
                <p className="text-gray-300">Artista plástica</p>
                <p className="text-gray-300">Pianista</p>
                <p className="text-gray-300">Curadora cultural</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Anos de atividade</span>
                <p className="text-gray-300">1993 — 2007</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Cônjuge</span>
                <Link href="/" className="text-red-400 hover:text-yellow-500 transition-colors block">Chidi Aleksandar Nikolic</Link>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Filhos</span>
                <Link href="/wiki/daniela-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors block">Daniela Nikolic</Link>
                <Link href="/wiki/sophia-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors block">Sophia Nikolic</Link>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Conhecida por</span>
                <p className="text-gray-300">Preservação cultural analógica</p>
                <p className="text-gray-300">Arte independente</p>
                <p className="text-gray-300">Movimentos retrô de Night City</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Movimentos artísticos</span>
                <p className="text-gray-300">Arte neo-vintage</p>
                <p className="text-gray-300">Preservacionismo cultural</p>
                <p className="text-gray-300">Jazz underground independente</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Afiliações</span>
                <p className="text-gray-300">Círculos artísticos independentes de Night City</p>
                <p className="text-gray-300">Centros culturais de Heywood e Pacifica</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Status legal</span>
                <p className="text-green-500">Sem antecedentes criminais registrados</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Causa da morte</span>
                <p className="text-red-400">Explosão em centro de imprensa independente</p>
                <p className="text-gray-500 text-xs">(causa oficial: acidente estrutural)</p>
              </div>
              <div className="px-3 py-2">
                <span className="text-yellow-500 text-xs uppercase">Legado</span>
                <p className="text-gray-300">Figura simbólica da resistência cultural analógica em Night City</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Article Content */}
        <article className="flex-1 order-1 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-red-500">Eleanor Vivienne Moreau Nikolic</strong> (Marseille, 12 de setembro de 1972 — Night City, 17 de novembro de 2007) foi uma artista plástica, pianista e curadora cultural franco-americana reconhecida dentro dos círculos artísticos independentes de Night City durante o início do século XXI. Tornou-se conhecida por seu trabalho voltado à preservação estética e cultural de mídias físicas antigas em meio ao avanço acelerado da digitalização corporativa e da cultura tecnológica pós-Guerra Corporativa.
          </p>

          <h2 className="text-xl font-bold text-yellow-500 mt-8 mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-wider">
            Origem e formação
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Filha de um restaurador cinematográfico e de uma cantora de jazz, Eleanor cresceu em ambientes ligados à música clássica, cinema analógico e artes tradicionais europeias. Desde jovem, demonstrava forte interesse por objetos históricos, decoração vintage e movimentos culturais norte-americanos das décadas de 1950 e 1960, temas que posteriormente definiriam sua identidade artística.
          </p>

          <h2 className="text-xl font-bold text-yellow-500 mt-8 mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-wider">
            Carreira artística em Night City
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Durante o final da década de 1990, mudou-se para Night City em busca de espaço dentro da cena artística alternativa que surgia entre distritos independentes da cidade. Em contraste ao crescimento da arte digital corporativa, Eleanor defendia a preservação de materiais físicos, restauração manual de obras antigas e experiências culturais presenciais.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Seu trabalho tornou-se particularmente conhecido em <span className="text-yellow-500">Heywood</span>, <span className="text-yellow-500">Pacifica</span> e <span className="text-yellow-500">Westbrook</span>, onde organizava:
          </p>

          <ul className="list-none space-y-2 ml-4">
            <li className="text-gray-300 flex items-center gap-2">
              <span className="text-red-500">▸</span> apresentações de jazz analógico
            </li>
            <li className="text-gray-300 flex items-center gap-2">
              <span className="text-red-500">▸</span> exposições de restauração artística
            </li>
            <li className="text-gray-300 flex items-center gap-2">
              <span className="text-red-500">▸</span> sessões de cinema clássico
            </li>
            <li className="text-gray-300 flex items-center gap-2">
              <span className="text-red-500">▸</span> encontros culturais independentes sem financiamento corporativo
            </li>
          </ul>

          <p className="text-gray-300 leading-relaxed">
            Apesar de nunca ter alcançado fama comercial em grande escala, Eleanor desenvolveu forte influência em círculos artísticos underground, sendo frequentemente descrita por críticos independentes como:
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 my-4 italic text-gray-400">
            &quot;Uma mulher deslocada no tempo, tentando preservar humanidade em uma cidade que abandonava memórias.&quot;
          </blockquote>

          <h2 className="text-xl font-bold text-yellow-500 mt-8 mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-wider">
            Casamento com Chidi Nikolic
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Em 2002, conheceu o jornalista investigativo <Link href="/" className="text-red-400 hover:text-yellow-500 transition-colors">Chidi Aleksandar Nikolic</Link> durante um evento beneficente ligado à imprensa independente. O relacionamento dos dois tornou-se conhecido entre jornalistas e artistas locais pela forte oposição entre suas personalidades: enquanto Chidi era associado à rigidez investigativa e ao ambiente político de Night City, Eleanor era vista como uma figura calma, melancólica e profundamente ligada à preservação cultural.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Casaram-se em 2005 em uma cerimônia privada realizada em Westbrook.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Grande parte da residência da família Nikolic passou a refletir os gostos pessoais de Eleanor, especialmente sua obsessão estética pelos anos 1960. Após sua morte, Chidi preservou praticamente todos os objetos, móveis e hábitos relacionados à esposa, transformando a residência em um memorial permanente.
          </p>

          <h2 className="text-xl font-bold text-red-500 mt-8 mb-3 border-b border-red-500/50 pb-2 uppercase tracking-wider">
            Morte e controvérsias
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Em 17 de novembro de 2007, Eleanor morreu durante uma explosão ocorrida em um centro de imprensa independente em <span className="text-yellow-500">Heywood</span>. O caso foi oficialmente registrado como acidente estrutural causado por falha energética. Entretanto, jornalistas independentes e antigos colegas de Chidi Nikolic associaram o ocorrido a investigações conduzidas contra subsidiárias da <span className="text-red-500">PetroChem</span> naquele mesmo período.
          </p>

          <p className="text-gray-300 leading-relaxed">
            A morte de Eleanor deixou impacto profundo em sua família. Suas filhas <Link href="/wiki/daniela-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors">Daniela</Link> (então com 6 anos) e <Link href="/wiki/sophia-nikolic" className="text-red-400 hover:text-yellow-500 transition-colors">Sophia</Link> (ainda bebê, com menos de um ano) cresceram sob a sombra da perda materna, cada uma desenvolvendo formas distintas de lidar com o trauma.
          </p>

          <h2 className="text-xl font-bold text-yellow-500 mt-8 mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-wider">
            Legado
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Décadas após sua morte, Eleanor continua sendo citada em arquivos culturais independentes de Night City como símbolo da resistência artística analógica durante a ascensão da cultura corporativa digital no pós-guerra. Sua influência persiste na residência da família em Westbrook, preservada por Chidi como uma cápsula do tempo dedicada à sua memória.
          </p>

          {/* See Also */}
          <div className="mt-8 p-4 bg-black border border-red-900/50 rounded">
            <h3 className="text-sm font-bold text-yellow-500 uppercase tracking-wider mb-3">Ver também</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-red-400 hover:text-yellow-500 transition-colors text-sm font-mono">
                  &gt; Chidi Aleksandar Nikolic
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
            </ul>
          </div>

          {/* Categories */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs font-mono text-gray-600">Categorias:</span>
            <span className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-mono">Artistas</span>
            <span className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-mono">Músicos</span>
            <span className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-mono">Falecidos</span>
            <span className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-mono">Westbrook</span>
            <span className="px-2 py-1 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-400 font-mono">Preservacionismo Cultural</span>
          </div>
        </article>
      </div>
    </CyberLayout>
  )
}
