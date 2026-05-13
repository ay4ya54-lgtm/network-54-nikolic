"use client"

import { useState } from "react"
import { X, AlertTriangle, Zap, Shield, Eye, Cpu, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdPopupProps {
  isOpen: boolean
  onClose: () => void
  ad: {
    title: string
    subtitle: string
    description: string
    features?: string[]
    warning?: string
    color: "red" | "yellow" | "orange"
  }
}

export function AdPopup({ isOpen, onClose, ad }: AdPopupProps) {
  if (!isOpen) return null

  const colorClasses = {
    red: {
      border: "border-red-500",
      title: "text-red-500",
      bg: "from-red-950 to-black",
      button: "bg-red-600 hover:bg-red-700",
      glow: "shadow-red-500/50"
    },
    yellow: {
      border: "border-yellow-500",
      title: "text-yellow-500",
      bg: "from-yellow-950 to-black",
      button: "bg-yellow-600 hover:bg-yellow-700",
      glow: "shadow-yellow-500/50"
    },
    orange: {
      border: "border-orange-500",
      title: "text-orange-500",
      bg: "from-orange-950 to-black",
      button: "bg-orange-600 hover:bg-orange-700",
      glow: "shadow-orange-500/50"
    }
  }

  const colors = colorClasses[ad.color]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className={`relative w-full max-w-md mx-4 bg-gradient-to-b ${colors.bg} ${colors.border} border-2 rounded-lg shadow-2xl ${colors.glow}`}>
        {/* Header */}
        <div className={`flex items-center justify-between px-4 py-3 border-b ${colors.border}`}>
          <div className="flex items-center gap-2">
            <AlertTriangle className={`h-5 w-5 ${colors.title} animate-pulse`} />
            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">CONTEÚDO PATROCINADO</span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="text-center">
            <h2 className={`text-2xl font-bold ${colors.title} tracking-wider uppercase`} style={{ textShadow: `0 0 20px currentColor` }}>
              {ad.title}
            </h2>
            <p className="text-gray-400 text-sm font-mono mt-1">{ad.subtitle}</p>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed text-center">
            {ad.description}
          </p>

          {ad.features && (
            <ul className="space-y-2 text-sm">
              {ad.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-400 font-mono">
                  <Zap className={`h-4 w-4 ${colors.title}`} />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {ad.warning && (
            <div className="bg-black/50 border border-yellow-500/30 rounded p-3 mt-4">
              <p className="text-yellow-500 text-xs font-mono flex items-center gap-2">
                <Shield className="h-4 w-4" />
                {ad.warning}
              </p>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button 
              onClick={onClose}
              className={`flex-1 ${colors.button} text-white font-bold uppercase tracking-wider`}
            >
              Saiba Mais
            </Button>
            <Button 
              onClick={onClose}
              variant="outline"
              className="flex-1 border-gray-700 text-gray-400 hover:bg-gray-900 uppercase tracking-wider"
            >
              Fechar
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className={`px-4 py-2 border-t ${colors.border} bg-black/30`}>
          <p className="text-xs text-gray-600 font-mono text-center">
            Night City Advertising Network // 2045
          </p>
        </div>
      </div>
    </div>
  )
}

// Pre-defined ads data
export const cyberAds = {
  traumaTeam: {
    title: "TRAUMA TEAM",
    subtitle: "Serviço Médico de Emergência Premium",
    description: "Quando cada segundo conta, a Trauma Team está lá. Resposta média de 3 minutos em qualquer distrito de Night City. Assinantes Platinum recebem prioridade absoluta.",
    features: [
      "Equipe médica militar de elite",
      "Transporte aéreo blindado AV-4",
      "Cobertura 24/7 em toda Night City",
      "Cirurgia de campo avançada"
    ],
    warning: "Assinatura sujeita a análise de crédito. Taxa de cancelamento de 50.000 eddies.",
    color: "red" as const
  },
  arasaka: {
    title: "ARASAKA",
    subtitle: "Seu futuro. Nossa visão.",
    description: "A Arasaka Corporation oferece as soluções mais avançadas em segurança corporativa, tecnologia de ponta e serviços financeiros. Protegendo o que importa desde 1915.",
    features: [
      "Segurança corporativa classe mundial",
      "Implantes cibernéticos exclusivos",
      "Serviços bancários internacionais",
      "Proteção de dados Soulkiller®"
    ],
    warning: "Arasaka não se responsabiliza por efeitos colaterais de implantes experimentais.",
    color: "red" as const
  },
  militech: {
    title: "MILITECH",
    subtitle: "Proteção através do poder",
    description: "Líder mundial em armamentos, veículos militares e segurança privada. Quando você precisa de força, a Militech entrega resultados.",
    features: [
      "Arsenal completo de armas táticas",
      "Veículos blindados de combate",
      "Treinamento paramilitar",
      "Contratos de segurança privada"
    ],
    warning: "Licença de porte obrigatória. Verificação de antecedentes em 48h.",
    color: "orange" as const
  },
  netwatch: {
    title: "NETWATCH",
    subtitle: "Sua segurança, nosso controle",
    description: "A NetWatch monitora a NET para proteger cidadãos de ameaças cibernéticas, hackers e IAs rogue. Navegue com segurança sob nossa vigilância.",
    features: [
      "Monitoramento 24/7 da NET",
      "Proteção contra netrunners hostis",
      "Rastreamento de ameaças digitais",
      "Blackwall maintenance"
    ],
    warning: "Todas as atividades na NET são registradas para sua proteção.",
    color: "yellow" as const
  },
  ripperdoc: {
    title: "VIK'S RIPPERDOC",
    subtitle: "Cyberware Premium em Watson",
    description: "Dr. Viktor Vektor oferece instalação e manutenção de cyberware de qualidade. Discreto, profissional e sem perguntas. Financiamento disponível.",
    features: [
      "Instalação profissional certificada",
      "Cyberware de última geração",
      "Manutenção e upgrades",
      "Preços justos, sem surpresas"
    ],
    warning: "Cirurgias realizadas sem anestesia geral a pedido do cliente.",
    color: "yellow" as const
  },
  afterlife: {
    title: "AFTERLIFE",
    subtitle: "Onde lendas são feitas",
    description: "O bar mais exclusivo de Night City. Aqui os melhores fixers encontram os melhores mercenários. Se você quer trabalho de verdade, é aqui que começa.",
    features: [
      "Conexões com os melhores fixers",
      "Ambiente exclusivo e discreto",
      "Drinks nomeados em homenagem a lendas",
      "Oportunidades que mudam vidas"
    ],
    warning: "Entrada sujeita a reputação. Armas devem ser declaradas.",
    color: "orange" as const
  }
}
