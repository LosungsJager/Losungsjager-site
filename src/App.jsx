import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* NAVBAR */}
      <nav className="w-full bg-white px-8 py-4 flex justify-between items-center shadow-sm border-b border-slate-100">
        <div className="flex items-center gap-2">
          {/* DICA: Certifique-se que o nome do arquivo na pasta 'public' é identico */}
          <img src="/logo-g.png" alt="Logo" className="h-8 w-8 object-contain" />
          <span className="font-bold text-lg tracking-tight">Lösungsjäger</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#" className="hover:text-purple-700 transition">Quem Somos</a>
          <a href="#" className="hover:text-purple-700 transition">Equipe</a>
          <a href="#" className="hover:text-purple-700 transition">Robô</a>
          <a href="#" className="bg-cyan-400 text-white px-5 py-2 rounded-full hover:bg-cyan-500 transition shadow-md">Seja um Patrocinador!</a>
        </div>
      </nav>

      {/* CONTAINER PRINCIPAL */}
      <div className="flex flex-col items-center">
        
        {/* BANNER ROXO (Fundo principal) */}
        <div className="w-full bg-purple-900 h-64 flex justify-center items-center">
           <img src="/logo-central.png" alt="Logo Principal" className="h-24 object-contain" />
        </div>

        {/* CARTÃO DE CONTEÚDO (Sobreposto) */}
        <div className="w-full max-w-3xl -mt-16 px-4">
          <div className="bg-slate-100 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-200">
            <h2 className="text-3xl font-extrabold text-center text-purple-900 mb-6">Por que Lösungsjäger?</h2>
            <p className="text-slate-700 leading-relaxed text-lg text-center font-medium">
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
      <footer className="mt-20 py-10 flex justify-center">
        <img src="/logo-rodape.png" alt="Rodapé" className="h-16" />
      </footer>
    </div>
  );
}

export default App;
