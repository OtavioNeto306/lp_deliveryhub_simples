import { Star, TrendingUp } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      role: 'Dono da Pizzaria Bella Napoli',
      content: 'Antes do Delivery Hub, perdíamos pelo menos 5 pedidos por semana no WhatsApp. Hoje está tudo organizado e nosso faturamento aumentou 40% em 3 meses.',
      rating: 5
    },
    {
      name: 'Marina Silva',
      role: 'Gerente do Restaurante Sabor & Arte',
      content: 'A automação das mensagens no WhatsApp foi um divisor de águas. Os clientes adoram saber exatamente o status do pedido e reclamações caíram praticamente a zero.',
      rating: 5
    },
    {
      name: 'Roberto Alves',
      role: 'Proprietário da Lanchonete Express',
      content: 'O painel da cozinha eliminou completamente os erros de pedidos. A equipe adora a organização visual e conseguimos atender muito mais rápido agora.',
      rating: 5
    }
  ];

  return (
    <section id="casos" className="bg-white py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1E28] mb-4">
            Empresas que transformaram seus deliveries
          </h2>
          <p className="text-xl text-gray-600">
            Mais de 1.200 estabelecimentos já confiam no Delivery Hub
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F5F7FA] p-8 rounded-xl border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2A6CF0] text-[#2A6CF0]" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-bold text-[#1E1E28]">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#2A6CF0] to-[#1E5CD8] rounded-2xl p-12 text-white">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8" />
            <h3 className="text-3xl font-bold">Caso de Sucesso</h3>
          </div>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-xl leading-relaxed">
              A Hamburgueria Premium aumentou seu faturamento em <span className="font-bold text-2xl">R$ 18.000/mês</span> após implementar o Delivery Hub.
            </p>
            <p className="text-lg opacity-90">
              Redução de 80% no tempo de gestão de pedidos, eliminação completa de erros operacionais e aumento de 45% na satisfação dos clientes em apenas 60 dias.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-[#2A6CF0] mb-2">1.200+</div>
            <div className="text-gray-600">Estabelecimentos ativos</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#2A6CF0] mb-2">50k+</div>
            <div className="text-gray-600">Pedidos por dia</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#2A6CF0] mb-2">4.9/5</div>
            <div className="text-gray-600">Avaliação média</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#2A6CF0] mb-2">99.9%</div>
            <div className="text-gray-600">Uptime garantido</div>
          </div>
        </div>
      </div>
    </section>
  );
}
