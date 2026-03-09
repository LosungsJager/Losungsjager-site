import React from 'react';
// Importe seus componentes aqui (ex: import Navbar from './components/Navbar')

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* 1. NAVBAR COM A LOGO NOVA */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <img src="/03_LÖSUNGSJÄGER-03.png" alt="Logo" className="h-10" />
          <span className="font-bold text-lg">Lösungsjäger #21342</span>
        </a>
        
        {/* Links de navegação */}
        <div className="flex gap-6 font-semibold text-sm">
          <a href="/quem-somos" className="hover:text-purple-700">Quem Somos</a>
          <a href="/robo" className="hover:text-purple-700">Robô</a>
          <a href="/equipe" className="hover:text-purple-700">Equipe</a>
          <a href="/seja-patrocinador" className="text-purple-700 font-bold">Seja um patrocinador!</a>
        </div>
      </nav>

      {/* 2. LOGO CENTRAL DA TELA INICIAL */}
      <header className="py-20 flex justify-center">
        <img src="/12E226E9-6D7C-46BF-9CA1-16F41E076D5B.jpeg" alt="Logo Lösungsjäger" className="w-full max-w-2xl px-4" />
      </header>

      {/* 3. SEÇÃO FIRST (Resumo) */}
      <section className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-md my-10">
        <h2 className="text-2xl font-bold mb-4">O que é a FIRST?</h2>
        <p className="text-slate-600">A FIRST é uma organização global que inspira jovens à ciência e tecnologia através de competições de robótica baseadas nos valores de Gracious Professionalism® (Profissionalismo Gracioso) e Coopertition® (Competição Cooperativa).</p>
      </section>

      {/* 4. POSTCARDS ABAIXO */}
      <div className="py-10">
        {/* Aqui entra seu componente PostFeed */}
      </div>

      {/* 5. RODAPÉ COM A LOGO ALONGADA */}
      <footer className="bg-slate-900 text-white py-12 text-center">
        <img src="/03_LÖSUNGSJÄGER-02.png" alt="Logo Rodapé" className="h-12 mx-auto mb-6" />
        <div className="flex justify-center gap-6 mb-4">
          <a href="mailto:losungsjager@gmail.com">Email</a>
          <a href="https://instagram.com/losungsjager">Instagram</a>
        </div>
        <p className="text-slate-500">© 2026 - Equipe Lösungsjäger</p>
      </footer>
    </div>
  );
}

export default App;
