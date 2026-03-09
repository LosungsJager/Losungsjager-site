import React, { useState } from 'react';

// Se você tiver o componente de posts, importe ele aqui:
// import PostFeed from './components/PostFeed';

function App() {
  const [pagina, setPagina] = useState('inicio');

  // Função para renderizar o conteúdo dinamicamente
  const RenderConteudo = () => {
    switch(pagina) {
      case 'quem-somos':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black text-equipe-roxo mb-6">Quem Somos</h2>
            <p className="text-lg leading-relaxed">
              O nome da equipe, <strong className="text-equipe-roxo">Lösungsjäger</strong>, é em alemão e significa "caçadores de soluções". 
              A escolha desse termo alinha-se com a filosofia da equipe, na qual sempre visamos encontrar soluções inteligentes e criativas para os problemas que surgem. 
              Como o Colégio Farroupilha tem sua história entrelaçada com a imigração alemã, optamos por honrar essa herança.
            </p>
            {/* Aqui você pode colocar o carrossel de fotos depois */}
            <div className="mt-8 p-4 bg-gray-100 rounded-2xl text-center italic">Carrossel de fotos da equipe em breve...</div>
          </div>
        );
      case 'robo':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black text-equipe-roxo mb-6">Nosso Robô</h2>
            <p className="text-lg">Conheça a evolução técnica do nosso projeto para a temporada.</p>
            <div className="mt-8 p-4 bg-gray-100 rounded-2xl text-center italic">Carrossel de fotos do robô em breve...</div>
          </div>
        );
      case 'equipe':
        return (
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-black text-equipe-roxo mb-6">A Equipe</h2>
              <ul className="space-y-4 text-lg">
                <li><strong className="text-equipe-ciano">Leader & Vice-Leader:</strong> Gestão e estratégia.</li>
                <li><strong className="text-equipe-ciano">Hardware:</strong> Construção e mecânica.</li>
                <li><strong className="text-equipe-ciano">Software:</strong> Programação e lógica.</li>
                <li><strong className="text-equipe-ciano">Outreach:</strong> Social e marketing.</li>
              </ul>
            </div>
          </div>
        );
      case 'patrocinador':
        return (
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl font-black text-equipe-roxo mb-6">Seja um Patrocinador!</h2>
            <p className="text-xl mb-8">Ajude a Lösungsjäger a alcançar novos horizontes na robótica nacional.</p>
            <a href="mailto:losungsjager@gmail.com" className="bg-equipe-roxo text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block">Fale Conosco</a>
          </div>
        );
      default:
        return (
          <div className="animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-black mb-6">Por que <span className="text-equipe-roxo">Lösungsjäger?</span></h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Buscamos soluções inteligentes para desafios complexos. Nossa essência está na inovação e na tradição do Colégio Farroupilha.
                </p>
                <div className="mt-10 p-6 bg-equipe-ciano/10 rounded-2xl border-l-4 border-equipe-ciano">
                  <h3 className="font-bold text-teal-900 mb-2">Valores FIRST</h3>
                  <p className="text-sm text-teal-800 italic">Gracious Professionalism® e Coopertition®. Inspiração, impacto e trabalho em equipe acima de tudo.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img src="/equipe.jpg" className="rounded-[2rem] shadow-2xl" onError={(e) => e.target.src="https://via.placeholder.com/600x400?text=Foto+Equipe"} />
              </div>
            </div>
            {/* Seus PostCards aqui embaixo */}
            <div className="mt-20">
               <h3 className="text-2xl font-bold mb-8 text-center">Diário de Bordo</h3>
               {/* <PostFeed /> */}
               <div className="text-center text-gray-400">Posts carregando...</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-equipe-ciano selection:text-teal-950">
      
      {/* 1. NAVBAR (Com a Logo G e Redirecionamento) */}
      <nav className="bg-equipe-ciano sticky top-0 z-50 px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-md">
        <button onClick={() => setPagina('inicio')} className="flex items-center gap-3 group">
          <img src="/logo-g.png" alt="G" className="h-10 w-10 object-contain group-hover:rotate-12 transition-transform" onError={(e) => e.target.style.display='none'} />
          <span className="font-black text-teal-950 text-xl">Lösungsjäger #21342</span>
        </button>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-teal-900 font-bold text-xs md:text-sm uppercase tracking-widest mt-4 md:mt-0">
          <button onClick={() => setPagina('inicio')} className="hover:text-white transition-colors">Início</button>
          <button onClick={() => setPagina('quem-somos')} className="hover:text-white transition-colors">Quem Somos</button>
          <button onClick={() => setPagina('robo')} className="hover:text-white transition-colors">Robô</button>
          <button onClick={() => setPagina('equipe')} className="hover:text-white transition-colors">Equipe</button>
          <button onClick={() => setPagina('patrocinador')} className="text-white bg-equipe-roxo/20 px-3 py-1 rounded-lg hover:bg-equipe-roxo hover:text-white transition-all">Seja um patrocinador!</button>
        </div>
      </nav>

      {/* 2. BANNER INICIAL (Com a logo centralizada) */}
      <header className="bg-equipe-roxo py-20 md:py-32 flex justify-center items-center shadow-inner relative overflow-hidden">
        <img 
          src="/logo-central.jpeg" 
          alt="Lösungsjäger" 
          className="relative z-10 max-w-[90%] md:max-w-2xl drop-shadow-2xl" 
          onError={(e) => e.target.src="https://via.placeholder.com/800x200/662d91/ffffff?text=LOGO+CENTRAL"}
        />
      </header>

      {/* 3. CONTEÚDO PRINCIPAL (Cartão moderno sobreposto) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pb-24 relative -mt-16 z-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-gray-100 min-h-[400px]">
          {RenderConteudo()}
        </div>
      </main>

      {/* 4. FOOTER E CONTATO */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <img src="/logo-rodape.png" alt="Lösungsjäger Logo" className="h-16 mb-8 opacity-80 hover:opacity-100 transition-opacity" />
          
          <div className="grid md:grid-cols-2 gap-12 w-full border-t border-white/10 pt-10">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-equipe-ciano mb-4 uppercase tracking-widest">Siga-nos</h4>
              <a href="https://instagram.com/losungsjager" target="_blank" className="text-2xl font-black hover:text-equipe-ciano transition-colors">@losungsjager</a>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-bold text-equipe-roxo mb-4 uppercase tracking-widest">Contato</h4>
              <a href="mailto:losungsjager@gmail.com" className="text-lg hover:underline">losungsjager@gmail.com</a>
            </div>
          </div>
          
          <p className="mt-16 text-gray-500 text-xs uppercase tracking-widest">© 2026 - Lösungsjäger #21342 | Porto Alegre, RS</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
