import React from 'react';
// import PostFeed from './components/PostFeed';

function App() {
  return (
    // Fundo cinza bem clarinho (gray-50) destaca as caixas brancas
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-equipe-ciano selection:text-teal-950 overflow-x-hidden">
      
      {/* 1. NAVEGAÇÃO SUPERIOR (Fixa no topo, com desfoque/blur) */}
      <nav className="bg-equipe-ciano/95 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-sm">
        <div className="flex items-center gap-3 font-extrabold text-teal-950 text-xl tracking-tight mb-4 md:mb-0">
          <span className="bg-teal-950 text-equipe-ciano rounded-xl w-10 h-10 flex items-center justify-center text-xl shadow-inner">
            G
          </span>
          Lösungsjäger #21342
        </div>
        
        <div className="hidden md:flex gap-8 text-teal-900 font-bold text-sm tracking-widest uppercase">
          <a href="#" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5">Início</a>
          <a href="#" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5">Quem Somos</a>
          <a href="#" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5">Robô</a>
          <a href="#" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5">Equipe</a>
          <a href="#" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5">Patrocinador</a>
        </div>
      </nav>

      {/* 2. BANNER ROXO MODERNO (Arredondado, flutuante e com gradiente) */}
      <div className="px-4 sm:px-8 pt-10 pb-16">
        <header className="relative bg-gradient-to-br from-equipe-roxo via-[#56227c] to-indigo-950 max-w-7xl mx-auto rounded-[2.5rem] py-28 md:py-40 shadow-[0_20px_50px_rgba(102,45,145,0.3)] overflow-hidden flex justify-center items-center group">
          
          {/* Elementos decorativos de fundo para quebrar o "quadradão" */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-equipe-ciano opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 transition-transform duration-1000 group-hover:scale-110"></div>

          {/* O texto gigante (Ou coloque a tag <img> da sua logo aqui) */}
          <h1 className="relative z-10 text-5xl md:text-8xl md:text-[7rem] font-black text-white tracking-tighter drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105">
            LÖSUNGSJÄGER
          </h1>
        </header>
      </div>

      {/* 3. SEÇÃO "SOBRE" (Cartão flutuante quebrando a linha do banner) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pb-24 relative -mt-24 z-20">
        <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-16 border border-gray-100">
          
          {/* Lado Esquerdo: Imagem com moldura suave */}
          <div className="w-full md:w-1/2 flex flex-col items-center relative">
            {/* Bloco ciano decorativo atrás da imagem */}
            <div className="absolute inset-0 bg-equipe-ciano rounded-3xl transform rotate-3 scale-105 opacity-20 transition-transform duration-500 hover:rotate-6"></div>
            
            <img 
              src="/equipe.jpg" 
              alt="Equipe Lösungsjäger no Sesi" 
              className="relative z-10 w-full rounded-3xl shadow-lg object-cover aspect-video"
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x500/f3f4f6/662d91?text=Sua+Foto+Aqui" }}
            />
            
            {/* Indicadores estilo Carrossel */}
            <div className="flex gap-3 mt-8 relative z-10
