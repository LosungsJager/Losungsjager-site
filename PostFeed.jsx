import React from 'react';
import PostCard from './PostCard'; // Importamos o cartão que criamos acima

// Aqui você cadastra todos os seus posts (isso pode vir de um Banco de Dados ou API no futuro)
const postsData = [
  {
    id: 1,
    teamNumber: "Equipe #21342",
    badgeText: "Nacional FTC",
    title: "Lösungsjäger no Nacional!",
    content: "Nos dias 5, 6, 7 e 8 de março ocorreu a etapa nacional do torneio de robótica da FIRST, onde éramos umas das 3 equipes do RS. Obrigado @soufarroupilha por essa oportunidade!",
    buttonText: "Ver mais fotos",
    buttonLink: "https://seu-instagram.com/post1",
    imageUrl: "https://via.placeholder.com/400x200/662D91/FFFFFF?text=Foto+da+Equipe" // Troque pelo link da sua foto
  },
  {
    id: 2,
    teamNumber: "Equipe #21342",
    badgeText: "Bastidores",
    title: "Ajustes no Robô",
    content: "Passamos a madrugada ajustando a garra do nosso robô para os desafios da arena. A engenharia não para!",
    buttonText: "Ver o Projeto",
    buttonLink: "#",
    imageUrl: null // Se não tiver imagem, o cartão se adapta sozinho!
  },
  {
    id: 3,
    teamNumber: "Equipe #21342",
    badgeText: "Regional RS",
    title: "Classificados!",
    content: "O momento em que descobrimos que iríamos representar o Rio Grande do Sul no torneio nacional. Emoção pura!",
    buttonText: "Assistir Vídeo",
    buttonLink: "#",
    imageUrl: "https://via.placeholder.com/400x200/32C5D2/000000?text=Comemoracao"
  }
];

const PostFeed = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-equipe-roxo text-center mb-10">Diário de Bordo</h1>
      
      {/* Grid Responsivo: 1 coluna no celular, 2 no tablet, 3 no PC */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* O React passa por cada item da lista e cria um PostCard */}
        {postsData.map((post) => (
          <PostCard
            key={post.id} // Sempre necessário no React ao usar .map()
            teamNumber={post.teamNumber}
            badgeText={post.badgeText}
            title={post.title}
            content={post.content}
            buttonText={post.buttonText}
            buttonLink={post.buttonLink}
            imageUrl={post.imageUrl}
          />
        ))}

      </div>
    </div>
  );
};

export default PostFeed;
