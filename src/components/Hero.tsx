import { ArrowRight, Star, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white pt-20 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1E1E28] leading-tight">
                Transforme seu delivery com tecnologia profissional
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Automatize pedidos, elimine erros operacionais e ofereça uma experiência premium para seus clientes. Tudo em uma única plataforma.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/5571993218281?text=${encodeURIComponent('Olá, vi o sistema, gostaria de experimentar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A6CF0] hover:bg-[#1E5CD8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                Experimentar Grátis
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/5571993218281?text=${encodeURIComponent('Olá, vi o sistema, gostaria de agendar uma demonstração.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Agendar Demonstração
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#2A6CF0]" />
                <span className="text-gray-600">
                  <span className="font-bold text-gray-900">1.200+</span> empresas ativas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#2A6CF0] text-[#2A6CF0]" />
                  ))}
                </div>
                <span className="text-gray-600">
                  <span className="font-bold text-gray-900">4.9</span>/5.0
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#2A6CF0] px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">Painel de Controle</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#F5F7FA] p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Pedidos Hoje</div>
                      <div className="text-2xl font-bold text-[#1E1E28]">142</div>
                    </div>
                    <div className="bg-[#F5F7FA] p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Faturamento</div>
                      <div className="text-2xl font-bold text-[#2A6CF0]">R$ 8.4k</div>
                    </div>
                    <div className="bg-[#F5F7FA] p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Ticket Médio</div>
                      <div className="text-2xl font-bold text-[#1E1E28]">R$ 59</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-[#F5F7FA] p-4 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#2A6CF0] rounded-lg"></div>
                          <div>
                            <div className="font-semibold text-sm text-[#1E1E28]">Pedido #{1000 + item}</div>
                            <div className="text-xs text-gray-600">Há {item * 5} minutos</div>
                          </div>
                        </div>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Confirmado
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
