import { ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2A6CF0] rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-[#1E1E28]">Delivery Hub</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#funcionalidades" className="text-gray-600 hover:text-[#2A6CF0] transition-colors font-medium">
            Funcionalidades
          </a>
          <a href="#planos" className="text-gray-600 hover:text-[#2A6CF0] transition-colors font-medium">
            Planos
          </a>
          <a href="#casos" className="text-gray-600 hover:text-[#2A6CF0] transition-colors font-medium">
            Casos de Sucesso
          </a>
          <a href="#faq" className="text-gray-600 hover:text-[#2A6CF0] transition-colors font-medium">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-[#2A6CF0] font-medium transition-colors">
            Entrar
          </button>
          <button className="bg-[#2A6CF0] hover:bg-[#1E5CD8] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors">
            Começar Grátis
          </button>
        </div>
      </div>
    </header>
  );
}
