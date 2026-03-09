import React from 'react';
import SecaoNacional from './SecaoNacional';
import PostFeed from './PostFeed';

function App() {
  return (
    // Removido o 'flex items-center justify-center min-h-screen'
    // Agora o site respeita o fluxo natural de cima para baixo
    <div className="bg-white">
      
      {/* Exemplo de um Header simples */}
      <nav className="p-6 bg-equipe-roxo text-white text-center font-bold text-xl">
        Lösungsjäger #21342 - Diário de Bordo
      </nav>

      <main>
        {/* Sua seção principal que você quer que apareça primeiro */}
        <SecaoNacional />

        {/* Espaçamento para o conteúdo não ficar colado */}
        <div className="py-12">
          <h2 className="text-center text-3xl font-bold text-equipe-roxo mb-8">
            Outras Notícias
          </h2>
          
          {/* Aqui entram os cards em formato de galeria */}
          <PostFeed />
        </div>
      </main>

      {/* Rodapé do site */}
      <footer className="p-10 bg-gray-900 text-white text-center">
        <p>© 2026 - Equipe Lösungsjäger</p>
      </footer>
      
    </div>
  );
}

export default App;
