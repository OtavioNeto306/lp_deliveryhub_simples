import { XCircle } from 'lucide-react';

export default function PainPoints() {
  const problems = [
    'Pedidos perdidos ou esquecidos no WhatsApp pessoal',
    'Erros constantes na cozinha por falta de organização',
    'Clientes reclamando de atrasos e falta de comunicação',
    'Dificuldade em calcular taxa de entrega por bairro',
    'Perda de tempo copiando pedidos manualmente',
    'Falta de controle sobre pagamentos e faturamento'
  ];

  return (
    <section className="bg-[#F5F7FA] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E1E28] mb-4">
            Os desafios do delivery tradicional
          </h2>
          <p className="text-xl text-gray-600">
            Gerenciar um delivery sem a ferramenta certa gera custos invisíveis que prejudicam seu crescimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 flex gap-4">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
