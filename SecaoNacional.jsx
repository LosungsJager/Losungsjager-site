import React, { useEffect, useRef, useState } from 'react';

const SecaoNacional = () => {
  // Estado para controlar se a seção está visível na tela
  const [isVisible, setIsVisible] = useState(false);
  const secaoRef = useRef(null);

  // Efeito para detectar o scroll da página
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Quando a seção entra na tela, ativamos a visibilidade
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Dispara quando 20% da seção estiver visível
    );

    if (secaoRef.current) {
      observer.observe(secaoRef.current);
    }

    return () => {
      if (secaoRef.current) observer.unobserve(secaoRef.current);
    };
  }, []);

  return (
    // Fundo da seção em um cinza muito claro para destacar do resto do site
    <section className="bg-gray-50 py-20 px-6 min-h-[80vh] flex items-center justify-center overflow-hidden">
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LADO ESQUERDO: TEXTOS (Aqui entra a sua animação de Scroll) */}
        <div 
          ref={secaoRef}
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-equipe-ciano text-teal-950 font-extrabold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider">
              Destaque
            </span>
            <span className="text-equipe-roxo font-bold text-lg">
              Equipe #21342
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            A <span className="text-equipe-roxo">Lösungsjäger</span> na Etapa Nacional FIRST!
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Nos dias 5, 6, 7 e 8 de março ocorreu a etapa nacional do torneio de robótica da FIRST, onde éramos uma das 3 equipes do Rio Grande do Sul presentes e competindo no torneio de FTC. <br/><br/>
            Um agradecimento especial ao <strong>@soufarroupilha</strong> por nos proporcionar essa oportunidade incrível!
          </p>

          <a 
            href="https://www.instagram.com/losungsjager/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-equipe-roxo text-white font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300 hover:bg-equipe-ciano hover:text-teal-950 hover:shadow-[0_0_20px_rgba(50,197,210,0.5)] hover:-translate-y-1"
          >
            Acompanhe nossa jornada
          </a>
        </div>

        {/* LADO DIREITO: IMAGEM/FOTO DA EQUIPE (Também com animação, mas com um pequeno atraso) */}
        <div 
          className={`relative transition-all duration-1000 delay-300 ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          {/* Fundo decorativo para a imagem (opcional, dá um charme tecnológico) */}
          <div className="absolute inset-0 bg-equipe-ciano transform translate-x-4 translate-y-4 rounded-2xl opacity-20"></div>
          
          <img 
            src="https://via.placeholder.com/600x400/662D91/FFFFFF?text=Foto+da+Equipe+no+Nacional" 
            alt="Equipe Lösungsjäger no Nacional" 
            className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>

      </div>
    </section>
  );
};

export default SecaoNacional;
