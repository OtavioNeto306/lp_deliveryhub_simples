import { Columns3, MessageCircle, CreditCard, Clock, MapPin, Store, Award, Star, Printer, RefreshCw, DollarSign, Sparkles } from 'lucide-react';

export default function Features() {
  const featureGroups = [
    {
      title: 'Operação',
      features: [
        { icon: Columns3, name: 'Painel Kanban', description: 'Visualização clara de todos os pedidos por status' },
        { icon: RefreshCw, name: 'Pedidos em Tempo Real', description: 'Atualização instantânea sem necessidade de recarregar' },
        { icon: Printer, name: 'Impressão de Comandas', description: 'Integração com impressoras térmicas' },
        { icon: Clock, name: 'Status Automatizado', description: 'Atualizações automáticas do progresso do pedido' }
      ]
    },
    {
      title: 'Marketing e Relacionamento',
      features: [
        { icon: Award, name: 'Programa de Fidelidade', description: 'Acumule pontos e recompense clientes fiéis' },
        { icon: Star, name: 'Avaliações', description: 'Colete feedback dos clientes automaticamente' },
        { icon: MessageCircle, name: 'WhatsApp Automático', description: 'Mensagens de status enviadas automaticamente' },
        { icon: Sparkles, name: 'Validação de Primeiro Pedido', description: 'Confirmação ativa para novos clientes' }
      ]
    },
    {
      title: 'Pagamentos',
      features: [
        { icon: DollarSign, name: 'Pix Online Automático', description: 'QR Code gerado automaticamente para cada pedido' },
        { icon: CreditCard, name: 'Mercado Pago Integrado', description: 'Aceite cartão de crédito e débito online' },
        { icon: CreditCard, name: 'Formas Personalizadas', description: 'Configure dinheiro, cartão na entrega e vouchers' }
      ]
    },
    {
      title: 'Configurações',
      features: [
        { icon: Clock, name: 'Horários Automáticos', description: 'Abra e feche automaticamente por dia da semana' },
        { icon: MapPin, name: 'Entrega por Bairro', description: 'Taxas diferentes para cada região de entrega' },
        { icon: Store, name: 'Retirada na Loja', description: 'Permita que clientes busquem no local' },
        { icon: Sparkles, name: 'Branding Completo', description: 'Personalize cores, logo e identidade visual' }
      ]
    }
  ];

  return (
    <section id="funcionalidades" className="bg-white py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1E28] mb-4">
            Funcionalidades completas para seu delivery
          </h2>
          <p className="text-xl text-gray-600">
            Tudo que você precisa para gerenciar e crescer seu negócio de delivery
          </p>
        </div>

        <div className="space-y-16">
          {featureGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-2xl font-bold text-[#1E1E28] mb-8 text-center">{group.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-[#F5F7FA] p-6 rounded-lg border border-gray-200">
                    <feature.icon className="w-8 h-8 text-[#2A6CF0] mb-3" />
                    <h4 className="font-bold text-[#1E1E28] mb-2">{feature.name}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
