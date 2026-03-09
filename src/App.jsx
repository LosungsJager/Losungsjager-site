import React from 'react';
import SecaoNacional from './components/SecaoNacional';
import PostFeed from './components/PostFeed';

function App() {
  return (
    <div className="bg-white">
      <nav className="p-6 bg-equipe-roxo text-white text-center font-bold text-xl">
        Lösungsjäger #21342 - Diário de Bordo
      </nav>
      <main>
        <SecaoNacional />
        <div className="py-12">
          <h2 className="text-center text-3xl font-bold text-equipe-roxo mb-8">
            Mais Notícias
          </h2>
          <PostFeed />
        </div>
      </main>
      <footer className="p-10 bg-gray-900 text-white text-center">
        <p>© 2026 - Equipe Lösungsjäger</p>
      </footer>
    </div>
  );
}
export default App;
