import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona a integração com WhatsApp?',
      answer: 'O Delivery Hub se conecta diretamente à API oficial do WhatsApp Business. Todas as mensagens de confirmação, preparo e saída do pedido são enviadas automaticamente para o número do cliente, mantendo-o sempre informado sobre o status do pedido.'
    },
    {
      question: 'Preciso pagar taxas extras por pedido?',
      answer: 'Não. O Delivery Hub cobra apenas uma mensalidade fixa. Não há taxa por pedido, taxa por transação ou custos escondidos. Você paga o mesmo valor independente do volume de vendas.'
    },
    {
      question: 'Como funciona a entrega por bairro?',
      answer: 'Você pode cadastrar diferentes regiões de entrega e definir uma taxa específica para cada uma. O sistema calcula automaticamente o valor correto baseado no endereço do cliente, eliminando erros e garantindo rentabilidade.'
    },
    {
      question: 'O sistema é 100% online?',
      answer: 'Sim. O Delivery Hub é uma plataforma em nuvem que funciona em qualquer dispositivo com internet. Você pode acessar de computador, tablet ou celular, de qualquer lugar, a qualquer momento.'
    },
    {
      question: 'Posso personalizar as mensagens automáticas?',
      answer: 'Completamente. Você tem controle total sobre o texto das mensagens enviadas aos clientes. Personalize cada etapa (confirmação, preparo, saída para entrega) com a linguagem da sua marca.'
    },
    {
      question: 'Quanto tempo leva para começar a usar?',
      answer: 'Em menos de 30 minutos você configura seu cardápio, formas de pagamento e já está pronto para receber pedidos. Nossa equipe oferece suporte completo durante a implementação.'
    },
    {
      question: 'O sistema funciona com impressoras térmicas?',
      answer: 'Sim. O Delivery Hub é compatível com as principais impressoras térmicas do mercado. Você pode imprimir comandas automaticamente assim que o pedido chega.'
    },
    {
      question: 'Existe limite de produtos no cardápio?',
      answer: 'Não há limite. Você pode cadastrar quantos produtos, categorias, variações e complementos precisar. O sistema foi desenvolvido para escalar junto com seu negócio.'
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1E28] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tudo que você precisa saber sobre o Delivery Hub
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F5F7FA] transition-colors"
              >
                <span className="font-semibold text-lg text-[#1E1E28] pr-4">{faq.question}</span>
                <Plus
                  className={`w-6 h-6 text-[#2A6CF0] flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-45' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
