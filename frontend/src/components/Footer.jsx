import { Mail, MapPin, Phone } from 'lucide-react';

/**
 * Footer canônico da ONG+.
 *
 * Props:
 *  - onNavigate (func): função de navegação recebida do App (opcional).
 *    Quando fornecida, os links de navegação chamam onNavigate(id) em vez
 *    de abrir um href "#".
 */
export default function Footer({ onNavigate }) {
  const nav = (id) => (onNavigate ? onNavigate(id) : undefined);
  const href = (id) => (onNavigate ? undefined : '#');

  const LinkItem = ({ id, children }) =>
    onNavigate ? (
      <li>
        <button
          onClick={() => nav(id)}
          className="text-gray-600 hover:text-teal-700 text-xs transition text-left"
        >
          {children}
        </button>
      </li>
    ) : (
      <li>
        <a href="#" className="text-gray-600 hover:text-teal-700 text-xs transition">
          {children}
        </a>
      </li>
    );

  return (
    <footer className="bg-[#EBE9E4] pt-16 pb-8 px-8 md:px-16">
      <div className="max-w-[1000px] mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-1">
            <button
              onClick={() => nav('landing')}
              className="text-xl font-bold text-teal-800 tracking-tight mb-4 block"
            >
              ONG<span className="text-teal-600">+</span>
            </button>
            <p className="text-gray-600 text-xs leading-relaxed max-w-[200px]">
              Transformando a cultura de doação no país. Conectando pessoas e ONGs com transparência absoluta.
            </p>
          </div>

          {/* Explorar */}
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-4">Explorar</h4>
            <ul className="space-y-3">
              <LinkItem id="landing">Projetos Ativos</LinkItem>
              <LinkItem id="landing">Como Funciona</LinkItem>
              <LinkItem id="transparency">Blog de Impacto</LinkItem>
            </ul>
          </div>

          {/* Transparência */}
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-4">Transparência</h4>
            <ul className="space-y-3">
              <LinkItem id="transparency">Relatórios Anuais</LinkItem>
              <LinkItem id="transparency">Dados Abertos</LinkItem>
              <LinkItem id="transparency">Termos de Uso</LinkItem>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-600 text-xs">
              <li className="flex items-center space-x-2">
                <Mail className="w-3 h-3 shrink-0" />
                <span>contato@ongmais.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3 h-3 shrink-0" />
                <span>+55 (11) 4002-8922</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                <span>São Paulo, SP — Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-[0.65rem] text-gray-500">
          <p>© {new Date().getFullYear()} ONG+. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-800 transition">Privacidade</a>
            <a href="#" className="hover:text-gray-800 transition">Cookies</a>
            <a href="#" className="hover:text-gray-800 transition">LGPD</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
