import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Termos de Uso</h1>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-300 mb-6">
              Ao usar o Square News Bot, você concorda com estes termos de uso. Se não concordar, não utilize o serviço.
            </p>

            <h2 className="text-2xl font-bold text-gray-300 mb-4">2. Descrição do Serviço</h2>
            <p className="text-gray-300 mb-6">
              O Square News é um bot para Discord que fornece notícias de tecnologia e permite configurações
              personalizadas através dos comandos /doar e /set.
            </p>

            <h2 className="text-2xl font-bold text-gray-300 mb-4">3. Uso Responsável</h2>
            <p className="text-gray-300 mb-6">
              Você se compromete a usar o bot de forma responsável, respeitando as regras do Discord e não utilizando o
              serviço para atividades ilegais ou prejudiciais.
            </p>

            <h2 className="text-2xl font-bold text-gray-300 mb-4">4. Limitações</h2>
            <p className="text-gray-300 mb-6">
              O serviço é fornecido "como está" e pode ter limitações de disponibilidade. Não garantimos funcionamento
              ininterrupto.
            </p>

            <h2 className="text-2xl font-bold text-gray-300 mb-4">5. Modificações</h2>
            <p className="text-gray-300 mb-6">
              Reservamos o direito de modificar estes termos a qualquer momento. Mudanças significativas serão
              comunicadas aos usuários.
            </p>

            <div className="mt-8 p-4 bg-white/10 border border-gray-500/20 rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString("pt-BR")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
