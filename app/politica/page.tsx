import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"

export default function PoliticaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Política de Privacidade</h1>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-300 mb-4">1. Informações Coletadas</h2>
            <p className="text-gray-300 mb-6">
              O Square News coleta apenas as informações necessárias para seu funcionamento:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>ID do servidor Discord</li>
              <li>ID do canal configurado para notícias</li>
              <li>Comandos utilizados (para estatísticas básicas)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-300 mb-4">2. Como Usamos os Dados</h2>
            <p className="text-gray-300 mb-6">Os dados coletados são utilizados exclusivamente para:</p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Entregar notícias no canal configurado</li>
              <li>Processar doações quando solicitado</li>
              <li>Melhorar o funcionamento do bot</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-300 mb-4">3. Compartilhamento de Dados</h2>
            <p className="text-gray-300 mb-6">
              Não compartilhamos, vendemos ou transferimos seus dados para terceiros. Seus dados permanecem seguros e
              privados.
            </p>

            <h2 className="text-2xl font-bold text-gray-300 mb-4">4. Segurança</h2>
            <p className="text-gray-300 mb-6">
              Implementamos medidas de segurança adequadas para proteger seus dados contra acesso não autorizado,
              alteração ou destruição.
            </p>

            <h2 className="text-2xl font-bold text-gray-300 mb-4">5. Seus Direitos</h2>
            <p className="text-gray-300 mb-6">
              Você pode solicitar a remoção de seus dados a qualquer momento removendo o bot do seu servidor Discord.
            </p>

            <h2 className="text-2xl font-bold text-gray-300 mb-4">6. Contato</h2>
            <p className="text-gray-300 mb-6">
              Para questões sobre privacidade, entre em contato através do Discord ou remova o bot do seu servidor.
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
