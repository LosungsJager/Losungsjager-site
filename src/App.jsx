import React, { useState } from 'react';

function App() {
  const [pagina, setPagina] = useState('inicio');

  const RenderConteudo = () => {
    switch(pagina) {
      case 'quem-somos':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black text-equipe-roxo mb-6">Quem Somos</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              O nome da equipe, <strong className="text-equipe-roxo">Lösungsjäger</strong>, é em alemão e significa "caçadores de soluções". 
              A escolha desse termo alinha-se com a filosofia da equipe, na qual sempre visamos encontrar soluções inteligentes e criativas para os problemas que surgem durante os encontros. 
              Como o Colégio Farroupilha tem sua história entrelaçada com a imigração alemã para o Sul do Brasil, optamos por honrar essa herança no idioma.
            </p>
            <div className="mt-8 p-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-center text-gray-400 font-medium">
              📸 Carrossel de fotos da equipe em breve...
            </div>
          </div>
        );
      case 'robo':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black text-equipe-roxo mb-6">Nosso Robô</h2>
            <p className="text-lg text-gray-700 mb-6">Acompanhe a evolução técnica e os ajustes de engenharia que transformaram nosso projeto em realidade.</p>
            <div className="mt-8 p-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-center text-gray-400 font-medium">
              🤖 Galeria de evolução do robô em breve...
            </div>
          </div>
        );
      case 'equipe':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black text-equipe-roxo mb-10 text-center">Estrutura da Equipe</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { cargo: "Leader & Vice-Leader", desc: "Gestão, estratégia e liderança da equipe." },
                { cargo: "Hardware", desc: "Construção, mecânica e design físico do robô." },
                { cargo: "Software", desc: "Lógica, programação e automação." },
                { cargo: "Outreach", desc: "Marketing, social e impacto na comunidade." }
              ].map((membro, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-equipe-roxo mb-2">{membro.cargo}</h4>
                  <p className="text-sm text-gray-600">{membro.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'patrocinador':
        return (
          <div className="text-center animate-fade-in py-10">
            <h2 className="text-5xl font-black text-equipe-roxo mb-6">Seja um Patrocinador!</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Sua marca pode impulsionar a inovação tecnológica da nossa equipe. Entre em contato para conhecer nossas cotas de patrocínio.</p>
            <a href="mailto:losungsjager@gmail.com" className="bg-equipe-roxo text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl">Entrar em Contato</a>
          </div>
        );
      default:
        return (
          <div className="animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <h2 className="text-5xl font-black text-gray-900 mb-8 leading-tight">
                  Caçadores de <span className="text-transparent bg-clip-text bg-gradient-to-r from-equipe-roxo to-indigo-600">Soluções</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
                  Atuamos na intersecção entre tecnologia e criatividade, resolvendo problemas complexos com o espírito de equipe da FIRST.
                </p>
                <div className="p-8 bg-gradient-to-br from-equipe-ciano/20 to-transparent rounded-[2rem] border-l-8 border-equipe-ciano shadow-sm">
                  <h3 className="font-black text-teal-950 mb-3 text-xl uppercase tracking-tighter">O Coração da FIRST</h3>
                  <p className="text-teal-900 leading-relaxed">
                    A FIRST inspira jovens através da robótica, promovendo o <strong>Gracious Professionalism®</strong> e a <strong>Coopertition®</strong> — onde competir e ajudar o próximo caminham juntos.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -inset-4 bg-equipe-roxo/10 blur-2xl rounded-full"></div>
                <img 
                  src="/equipe.jpg" 
                  alt="Equipe" 
                  className="relative z-10 rounded-[2.5rem] shadow-2xl border-8 border-white object-cover aspect-[4/3]" 
                  onError={(e) => e.target.src="https://via.placeholder.com/600x450?text=Foto+Equipe"}
                />
              </div>
            </div>
            {/* Espaço para os Posts */}
            <div className="mt-32 pt-16 border-t border-gray-100">
               <h3 className="text-3xl font-black mb-12 text-center text-gray-900">Diário de Bordo</h3>
               <div className="grid md:grid-cols-3 gap-8">
                 <div className="h-64 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">Post 1</div>
                 <div className="h-64 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">Post 2</div>
                 <div className="h-64 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">Post 3</div>
               </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans selection:bg-equipe-ciano selection:text-teal-950 overflow-x-hidden">
      
      {/* 1. BARRA SUPERIOR AUMENTADA E BRANCA (Para a logo aparecer) */}
      <nav className="bg-white sticky top-0 z-50 px-8 py-6 flex flex-col md:flex-row justify-between items-center shadow-md">
        <button onClick={() => setPagina('inicio')} className="flex items-center gap-4 group">
          {/* Use o nome do arquivo que você enviou: 03_LÖSUNGSJÄGER-03 (1).png */}
          <img 
            src="/03_LÖSUNGSJÄGER-03 (1).png" 
            alt="Logo" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-110" 
            onError={(e) => { e.target.src = "https://via.placeholder.com/50x50?text=G"; }}
          />
          <span className="font-black text-gray-900 text-2xl tracking-tighter">Lösungsjäger <span className="text-equipe-roxo">#21342</span></span>
        </button>
        
        <div className="flex flex-wrap justify-center gap-8 text-gray-500 font-bold text-sm uppercase tracking-widest mt-6 md:mt-0">
          <button onClick={() => setPagina('inicio')} className="hover:text-equipe-roxo transition-colors">Início</button>
          <button onClick={() => setPagina('quem-somos')} className="hover:text-equipe-roxo transition-colors">Quem Somos</button>
          <button onClick={() => setPagina('robo')} className="hover:text-equipe-roxo transition-colors">Robô</button>
          <button onClick={() => setPagina('equipe')} className="hover:text-equipe-roxo transition-colors">Equipe</button>
          <button onClick={() => setPagina('patrocinador')} className="bg-equipe-ciano text-teal-950 px-5 py-2 rounded-full hover:bg-teal-400 transition-all shadow-sm">Seja um patrocinador!</button>
        </div>
      </nav>

      {/* 2. BANNER QUE COBRE TUDO (Substituindo o roxo pela imagem) */}
      <header className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center bg-equipe-roxo">
        {/* Use o nome do arquivo que você enviou: 12E226E9-6D7C-46BF-9CA1-16F41E076D5B.jpeg */}
        <img 
          src="/12E226E9-6D7C-46BF-9CA1-16F41E076D5B.jpeg" 
          alt="Lösungsjäger Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        {/* Overlay caso a imagem seja muito clara para manter o estilo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </header>

      {/* 3. CONTEÚDO PRINCIPAL (Cartão moderno) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pb-32 relative -mt-32 z-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-50 min-h-[500px]">
          {RenderConteudo()}
        </div>
      </main>

      {/* 4. FOOTER COM LOGO ALONGADA */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Use o nome do arquivo que você enviou: 03_LÖSUNGSJÄGER-02.png */}
          <img 
            src="/03_LÖSUNGSJÄGER-02.png" 
            alt="Logo Rodapé" 
            className="h-20 mb-12 opacity-90 hover:opacity-100 transition-opacity" 
            onError={(e) => e.target.style.display='none'}
          />
          
          <div className="grid md:grid-cols-2 gap-16 w-full border-t border-white/10 pt-16">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-equipe-ciano mb-6 uppercase tracking-widest text-sm">Siga nossa jornada</h4>
              <a href="https://instagram.com/losungsjager" target="_blank" className="text-3xl font-black hover:text-equipe-ciano transition-all">@losungsjager</a>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-bold text-equipe-roxo mb-6 uppercase tracking-widest text-sm">Fale com os caçadores</h4>
              <a href="mailto:losungsjager@gmail.com" className="text-xl font-medium hover:underline text-gray-300">losungsjager@gmail.com</a>
            </div>
          </div>
          
          <div className="mt-24 text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold">
            © 2026 Lösungsjäger #21342 • Criatividade em Movimento
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
