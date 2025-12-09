import { Menu, ShoppingBag, Users, Settings, BarChart3 } from 'lucide-react';

export default function AdminPanel() {
  const features = [
    {
      icon: Menu,
      title: 'Gestão de Cardápio',
      description: 'Crie e edite produtos, categorias, variações e complementos em minutos'
    },
    {
      icon: ShoppingBag,
      title: 'Gestão de Pedidos',
      description: 'Visualize, organize e controle todos os pedidos em tempo real'
    },
    {
      icon: Users,
      title: 'Controle de Clientes',
      description: 'Base completa de clientes com histórico de pedidos e preferências'
    },
    {
      icon: Settings,
      title: 'Configurações Avançadas',
      description: 'Personalize horários, formas de pagamento, taxas e muito mais'
    },
    {
      icon: BarChart3,
      title: 'Relatórios e Insights',
      description: 'Acompanhe faturamento, produtos mais vendidos e performance'
    }
  ];

  return (
    <section className="bg-[#F5F7FA] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1E28] mb-4">
            Painel administrativo profissional
          </h2>
          <p className="text-xl text-gray-600">
            Controle total do seu negócio em uma interface intuitiva e poderosa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#2A6CF0] transition-colors">
              <div className="w-12 h-12 bg-[#2A6CF0]/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#2A6CF0]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E28] mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
