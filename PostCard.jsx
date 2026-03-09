import React from 'react';

const PostCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border-b-4 border-equipe-ciano transition-transform duration-300 hover:-translate-y-2">
      
      {/* Cabeçalho do Cartão */}
      <div className="bg-equipe-roxo text-white px-6 py-4 flex justify-between items-center">
        <h2 className="text-lg font-bold m-0">Equipe #21342</h2>
        {/* Badge Ciano com texto escuro para contraste */}
        <span className="bg-equipe-ciano text-teal-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">
          Nacional FTC
        </span>
      </div>

      {/* Corpo do Cartão */}
      <div className="p-6">
        <h3 className="text-equipe-roxo text-2xl font-bold mb-3">
          Lösungsjäger
        </h3>
        
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Nos dias 5, 6, 7 e 8 de março ocorreu a etapa nacional do torneio de robótica da FIRST, onde éramos umas das 3 equipes do Rio Grande do Sul presentes e competindo o torneio de FTC. Obrigado @soufarroupilha por nos proporcionar essa oportunidade!
        </p>

        {/* Botão com efeito Hover Neon */}
        <a
          href="#"
          className="inline-block bg-equipe-ciano text-teal-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-equipe-roxo hover:text-white hover:shadow-[0_0_15px_rgba(50,197,210,0.6)]"
        >
          Ver mais fotos
        </a>
      </div>
      
    </div>
  );
};

export default PostCard;
