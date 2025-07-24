"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bot, Gift, Settings, Plus, FileText, Shield, ArrowRight, Zap, Users, Bell } from "lucide-react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-500/10 animate-pulse"></div>

        <div
          className={`max-w-4xl mx-auto text-center z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl shadow-2xl">
            <Bot className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Square News</h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            O bot de notícias mais avançado para Discord. Mantenha sua comunidade sempre informada sobre tecnologia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1387780583257673798&scope=bot&permissions=277025410048"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Adicionar ao Discord
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-32 right-16 w-6 h-6 bg-gray-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 right-8 w-3 h-3 bg-gray-300 rounded-full animate-ping opacity-50"></div>
      </section>

      {/* Commands Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Comandos Principais</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Dois comandos poderosos para transformar seu servidor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-white/50 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-300">/doar</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Permita que sua comunidade apoie o desenvolvimento do bot com doações no valor que desejarem. Sistema
                seguro e transparente para contribuições.
              </p>
            </div>

            <div
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-gray-400/50 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-300">/set</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Configure onde as notícias de tecnologia serão enviadas. Comando restrito aos administradores para total
                controle do servidor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Por que Square News?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`text-center p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-300">Rápido & Confiável</h3>
              <p className="text-gray-400">Notícias em tempo real com performance otimizada para seu servidor.</p>
            </div>

            <div
              className={`text-center p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-300">Fácil de Usar</h3>
              <p className="text-gray-400">Interface intuitiva desenvolvida pensando na experiência do usuário.</p>
            </div>

            <div
              className={`text-center p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-300">Sempre Atualizado</h3>
              <p className="text-gray-400">Desenvolvido por um indie dev dedicado, sempre evoluindo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/CTA Section */}
      <footer className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`mb-8 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">Pronto para começar?</h3>
            <p className="text-gray-400 text-lg mb-8">Desenvolvido com ❤️ por um indie developer</p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="https://discord.com/oauth2/authorize?client_id=1387780583257673798&scope=bot&permissions=277025410048"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Adicionar ao Discord
            </a>

            <Link
              href="/termos"
              className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-gray-500 flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Termos de Uso
            </Link>

            <Link
              href="/politica"
              className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-gray-500 flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              Política de Privacidade
            </Link>
          </div>

          <div
            className={`text-gray-500 text-sm transition-all duration-1000 delay-1100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p>© {currentYear} Square News Bot. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
