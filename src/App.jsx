import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* NAVBAR */}
      <nav className="bg-white px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          {/* Certifique-se de que o nome do arquivo seja exatamente este */}
          <img src="/03_LÖSUNGSJÄGER-03 (1).png" alt="Logo" className="h-8" />
          <span className="font-bold text-lg tracking-tight">Lösungsjäger</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#" className="hover:text-purple-700">Quem Somos</a>
          <a href="#" className="hover:text-purple-700">Equipe</a>
          <a href="#" className="hover:text-purple-700">Robô</a>
          <a href="#" className="bg-cyan-400 text-white px-4 py-2 rounded-full hover:bg-cyan-500 transition">Seja um Patrocinador!</a>
        </div>
      </nav>

      {/* BANNER + CARTÃO (Estrutura de container unificada) */}
      <div className="flex flex-col items-center">
        {/* Banner Roxo */}
        <div className="w-full bg-purple-900 pt-16 pb-32 flex justify-center">
          <img src="/12E226E9-6D7C-46BF-9CA1-16F41E076D5B.jpeg" alt="Logo Central" className="h-20" />
        </div>

        {/* Cartão Cinza - Puxado para cima */}
        <div className="w-full max-w-4xl -mt-20 px-4">
          <div className="bg-slate-200 p-10 rounded-3xl shadow-xl border border-slate-300">
            <h2 className="text-3xl font-bold text-center mb-6">Por que Lösungsjäger?</h2>
            <p className="text-slate-700 leading-relaxed text-lg text-center">
              O nome da equipe, Lösungsjäger, é em alemão e significa "caçadores de soluções". 
              A escolha desse termo alinha-se com a filosofia da equipe, na qual sempre visamos 
              encontrar soluções inteligentes e criativas para os problemas que surgem durante os 
              encontros. Além disso, como o Colégio Farroupilha tem sua história entrelaçada com a 
              imigração alemã para o Sul do Brasil, optamos pelo termo nesse idioma.
            </p>
          </div>
        </div>
      </div>

      {/* RODAPÉ */}
      <footer className="mt-16 py-10 flex justify-center">
        <img src="/03_LÖSUNGSJÄGER-02.png" alt="Logo Rodapé" className="h-16" />
      </footer>
    </div>
  );
}

export default App;
