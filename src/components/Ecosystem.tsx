import { Monitor, ChefHat, Truck } from 'lucide-react';

export default function Ecosystem() {
  const panels = [
    {
      icon: Monitor,
      title: 'Painel Administrador',
      description: 'Controle completo do negócio. Gerencie cardápio, pedidos, clientes, configurações e acompanhe relatórios em tempo real.',
      color: 'bg-[#2A6CF0]'
    },
    {
      icon: ChefHat,
      title: 'Painel da Cozinha',
      description: 'Interface dedicada para a produção. Visualize pedidos novos, em preparo e finalizados. Imprima comandas e organize a operação.',
      color: 'bg-[#1E1E28]'
    },
    {
      icon: Truck,
      title: 'Painel do Entregador',
      description: 'Aplicativo exclusivo para motoboys. Lista de entregas, endereços, status de coleta e confirmação de entrega em um só lugar.',
      color: 'bg-[#2A6CF0]'
    }
  ];

  return (
    <section className="bg-[#F5F7FA] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1E28] mb-4">
            Ecossistema completo e integrado
          </h2>
          <p className="text-xl text-gray-600">
            Três painéis especializados que trabalham juntos para otimizar cada etapa do seu delivery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {panels.map((panel, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
              <div className={`w-16 h-16 ${panel.color} rounded-xl flex items-center justify-center mb-6`}>
                <panel.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E1E28] mb-3">{panel.title}</h3>
              <p className="text-gray-600 leading-relaxed">{panel.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada painel foi projetado especificamente para seu usuário, garantindo eficiência máxima em todas as operações do seu delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
