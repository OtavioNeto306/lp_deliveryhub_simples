import { Check, X } from 'lucide-react';

export default function Comparison() {
  const features = [
    { name: 'WhatsApp Automático', deliveryHub: true, competitors: false },
    { name: 'Painel da Cozinha Dedicado', deliveryHub: true, competitors: 'partial' },
    { name: 'Pagamento Pix Online', deliveryHub: true, competitors: false },
    { name: 'Programa de Fidelidade', deliveryHub: true, competitors: 'partial' },
    { name: 'Sistema de Revenda', deliveryHub: true, competitors: false },
    { name: 'Múltiplos Painéis Integrados', deliveryHub: true, competitors: false },
    { name: 'Entrega por Bairro', deliveryHub: true, competitors: 'partial' },
    { name: 'Impressão de Comandas', deliveryHub: true, competitors: true },
    { name: 'Personalização Completa', deliveryHub: true, competitors: false },
    { name: 'Sem Taxa por Pedido', deliveryHub: true, competitors: false }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1E28] mb-4">
            Por que escolher o Delivery Hub?
          </h2>
          <p className="text-xl text-gray-600">
            Compare e veja como oferecemos mais recursos por um preço justo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-[#F5F7FA] border-b-2 border-gray-200">
              <div className="px-6 py-4">
                <span className="font-bold text-[#1E1E28]">Recurso</span>
              </div>
              <div className="px-6 py-4 text-center border-x border-gray-200">
                <span className="font-bold text-[#2A6CF0]">Delivery Hub</span>
              </div>
              <div className="px-6 py-4 text-center">
                <span className="font-bold text-gray-600">Concorrentes</span>
              </div>
            </div>

            {features.map((feature, index) => (
              <div key={index} className={`grid grid-cols-3 ${index !== features.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="px-6 py-4">
                  <span className="text-gray-700">{feature.name}</span>
                </div>
                <div className="px-6 py-4 flex justify-center items-center border-x border-gray-200 bg-[#F5F7FA]/30">
                  {feature.deliveryHub ? (
                    <Check className="w-6 h-6 text-green-600" />
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <div className="px-6 py-4 flex justify-center items-center">
                  {feature.competitors === true ? (
                    <Check className="w-6 h-6 text-green-600" />
                  ) : feature.competitors === 'partial' ? (
                    <span className="text-sm text-gray-500 font-semibold">Parcial</span>
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              Mais funcionalidades, melhor suporte, sem taxas por pedido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
