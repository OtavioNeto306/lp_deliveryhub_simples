import { CheckCircle2 } from 'lucide-react';

export default function Solution() {
  const benefits = [
    {
      title: 'Automação Completa',
      description: 'Pedidos chegam automaticamente no sistema e são distribuídos para cozinha e entrega'
    },
    {
      title: 'Organização Total',
      description: 'Painel visual tipo Kanban para gerenciar todos os pedidos em tempo real'
    },
    {
      title: 'Centralização Inteligente',
      description: 'Todos os canais de venda em um único lugar, sem confusão'
    },
    {
      title: 'Comunicação Automática',
      description: 'Mensagens de confirmação, preparo e saída enviadas automaticamente via WhatsApp'
    },
    {
      title: 'Zero Erros',
      description: 'Sistema de comandas digitais elimina erros de interpretação na cozinha'
    },
    {
      title: 'Economia de Tempo',
      description: 'Reduza até 70% do tempo gasto gerenciando pedidos manualmente'
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1E28] mb-4">
            Como o Delivery Hub resolve isso
          </h2>
          <p className="text-xl text-gray-600">
            Uma plataforma profissional que automatiza cada etapa do seu delivery, da entrada do pedido até a entrega
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#2A6CF0]" />
              <h3 className="text-xl font-bold text-[#1E1E28]">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
