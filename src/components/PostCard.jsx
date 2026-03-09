import React from 'react';

// O componente agora recebe parâmetros (props) para ser preenchido dinamicamente
const PostCard = ({ teamNumber, badgeText, title, content, buttonText, buttonLink, imageUrl }) => {
  return (
    <div className="flex flex-col max-w-md bg-white rounded-xl shadow-lg overflow-hidden border-b-4 border-equipe-ciano transition-transform duration-300 hover:-translate-y-2">
      
      {/* Imagem do Post (Só aparece se você enviar um link de imagem) */}
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}

      {/* Cabeçalho do Cartão */}
      <div className="bg-equipe-roxo text-white px-6 py-4 flex justify-between items-center">
        <h2 className="text-lg font-bold m-0">{teamNumber}</h2>
        <span className="bg-equipe-ciano text-teal-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">
          {badgeText}
        </span>
      </div>

      {/* Corpo do Cartão */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-equipe-roxo text-2xl font-bold mb-3">{title}</h3>
        
        {/* Usamos flex-grow para que os botões fiquem alinhados embaixo se os textos tiverem tamanhos diferentes */}
        <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
          {content}
        </p>

        {/* Botão Dinâmico */}
        <a
          href={buttonLink}
          className="inline-block text-center bg-equipe-ciano text-teal-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-equipe-roxo hover:text-white hover:shadow-[0_0_15px_rgba(50,197,210,0.6)]"
        >
          {buttonText}
        </a>
      </div>
      
    </div>
  );
};

export default PostCard;
