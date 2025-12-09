import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-[#2A6CF0] to-[#1E5CD8] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-5xl font-bold mb-6">
          Comece agora e transforme seu delivery em minutos
        </h2>
        <p className="text-xl mb-12 opacity-90 leading-relaxed">
          Junte-se a mais de 1.200 estabelecimentos que já automatizaram suas operações e aumentaram suas vendas com o Delivery Hub.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white hover:bg-gray-100 text-[#2A6CF0] px-10 py-5 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-xl">
            Criar Conta Grátis
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white hover:bg-white/10 text-white px-10 py-5 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Falar com Especialista
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm opacity-90">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Teste grátis por 7 dias
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Sem cartão de crédito
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Suporte completo
          </div>
        </div>
      </div>
    </section>
  );
}
