import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const whatsappLink = (text: string) => `https://wa.me/5571993218281?text=${encodeURIComponent(text)}`;
  const plans = [
    {
      name: 'Plano Mensal',
      price: '147',
      period: 'mês',
      description: 'Experimente sem compromisso de longo prazo',
      features: [
        'Todos os recursos incluídos',
        'Cardápio digital ilimitado',
        'Pedidos ilimitados',
        'WhatsApp automático',
        'Painel da cozinha',
        'Painel do entregador',
        'Programa de fidelidade',
        'Pix online integrado',
        'Suporte prioritário',
        'Atualizações gratuitas'
      ],
      highlighted: false
    },
    {
      name: 'Plano Anual',
      price: '97',
      period: 'mês',
      originalPrice: '147',
      savings: 'Economize R$ 600/ano',
      description: 'Melhor custo-benefício para seu negócio',
      features: [
        'Todos os recursos incluídos',
        'Cardápio digital ilimitado',
        'Pedidos ilimitados',
        'WhatsApp automático',
        'Painel da cozinha',
        'Painel do entregador',
        'Programa de fidelidade',
        'Pix online integrado',
        'Suporte prioritário',
        'Atualizações gratuitas',
        'Treinamento personalizado',
        'Gerente de conta dedicado'
      ],
      highlighted: true
    }
  ];

  return (
    <section id="planos" className="bg-[#F5F7FA] py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1E28] mb-4">
            Planos transparentes e sem surpresas
          </h2>
          <p className="text-xl text-gray-600">
            Sem taxa por pedido. Sem custos escondidos. Apenas um valor fixo mensal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 ${plan.highlighted ? 'border-4 border-[#2A6CF0] shadow-xl relative' : 'border-2 border-gray-200'}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2A6CF0] text-white px-6 py-2 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#1E1E28] mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  {plan.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">R$ {plan.originalPrice}</span>
                  )}
                  <span className="text-5xl font-bold text-[#1E1E28]">R$ {plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                {plan.savings && (
                  <div className="mt-2 text-green-600 font-semibold">{plan.savings}</div>
                )}
              </div>

              <a
                href={whatsappLink(`Olá, vi o sistema, gostaria de começar no ${plan.name} (${plan.savings ? 'Anual' : 'Mensal'}) por R$ ${plan.price}/${plan.period}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 mb-6 ${
                  plan.highlighted
                    ? 'bg-[#2A6CF0] hover:bg-[#1E5CD8] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2A6CF0] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 max-w-3xl mx-auto text-center border border-green-200">
          <div className="text-2xl font-bold text-[#1E1E28] mb-2">
            Teste Grátis por 7 Dias
          </div>
          <p className="text-gray-700 text-lg">
            Sem cartão de crédito. Sem compromisso. Comece hoje e veja a diferença.
          </p>
        </div>
      </div>
    </section>
  );
}
