import { TreeDeciduous, GraduationCap, ShieldPlus, Users, Mail } from 'lucide-react';
import imagemGenerica from '../assets/imagem_generica.jpg';

export default function RegisterPage() {
  return (
    <div className="flex-grow bg-[#FCFBF9] font-sans flex items-center justify-center p-6 md:p-12">
      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Column */}
        <div className="flex flex-col">
          <div className="mb-10">
            <p className="text-[#147B72] font-bold text-sm tracking-widest uppercase mb-4">ONG+</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Crie sua conta<br />de impacto
            </h1>
            <p className="text-gray-600 mt-6 text-lg max-w-[400px] leading-relaxed">
              Junte-se a uma comunidade focada em transformar empatia em ação. Cadastre-se para acompanhar e apoiar causas que realmente importam para você.
            </p>
          </div>

          <img
            src={imagemGenerica}
            alt="Pessoas plantando"
            className="w-full max-w-[400px] aspect-square object-cover rounded-[2rem] shadow-sm"
          />
        </div>

        {/* Right Column (Form) */}
        <div className="bg-white p-8 md:p-10 lg:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
          <form className="space-y-6">

            {/* Nome Completo */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-800">Nome Completo</label>
              <input
                type="text"
                placeholder="Seu nome completo"
                className="w-full bg-[#EAE8E3] text-gray-800 placeholder-gray-500 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#147B72] transition"
              />
            </div>

            {/* E-mail */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-800">E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-[#EAE8E3] text-gray-800 placeholder-gray-500 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#147B72] transition"
              />
            </div>

            {/* Senhas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">Senha</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-[#EAE8E3] text-gray-800 placeholder-gray-500 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#147B72] transition"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">Confirmação de Senha</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-[#EAE8E3] text-gray-800 placeholder-gray-500 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#147B72] transition"
                />
              </div>
            </div>

            {/* Causas */}
            <div className="space-y-3 pt-2">
              <label className="block text-sm font-bold text-gray-800">Causas de Interesse (Selecione)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button type="button" className="flex items-center space-x-3 bg-[#F5F3F0] hover:bg-[#EAE8E3] transition px-4 py-3.5 rounded-xl border border-transparent focus:border-[#147B72] focus:outline-none">
                  <TreeDeciduous className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-800 font-medium text-sm">Meio Ambiente</span>
                </button>
                <button type="button" className="flex items-center space-x-3 bg-[#F5F3F0] hover:bg-[#EAE8E3] transition px-4 py-3.5 rounded-xl border border-transparent focus:border-[#147B72] focus:outline-none">
                  <GraduationCap className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-800 font-medium text-sm">Educação</span>
                </button>
                <button type="button" className="flex items-center space-x-3 bg-[#F5F3F0] hover:bg-[#EAE8E3] transition px-4 py-3.5 rounded-xl border border-transparent focus:border-[#147B72] focus:outline-none">
                  <ShieldPlus className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-800 font-medium text-sm">Saúde</span>
                </button>
                <button type="button" className="flex items-center space-x-3 bg-[#F5F3F0] hover:bg-[#EAE8E3] transition px-4 py-3.5 rounded-xl border border-transparent focus:border-[#147B72] focus:outline-none">
                  <Users className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-800 font-medium text-sm">Direitos Humanos</span>
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-6 space-y-4">
              <button type="button" className="w-full bg-[#147B72] hover:bg-teal-800 text-white font-bold py-4 rounded-full transition shadow-md">
                Finalizar Cadastro
              </button>

              <button type="button" className="w-full bg-[#F5F3F0] hover:bg-[#EAE8E3] text-gray-800 font-bold py-4 rounded-full transition flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>Google</span>
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-6 pt-2">
              Já tem uma conta? <a href="#" className="text-[#147B72] font-bold hover:underline">Faça login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
