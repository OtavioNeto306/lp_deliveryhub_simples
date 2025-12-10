import { ShoppingBag, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E1E28] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2A6CF0] rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Delivery Hub</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A plataforma completa para gestão de delivery que transforma seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Produto</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Planos e Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de Sucesso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:suporte@ebytehub.com" className="hover:text-white transition-colors">suporte@ebytehub.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+5571993218281" className="hover:text-white transition-colors">(71) 99321-8281</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Salvador - BA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>2024 Delivery Hub. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
