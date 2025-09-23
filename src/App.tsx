
import { useEffect, useState } from 'react';
import './App.scss';
import Button from './components/Botao/Botao';
import Image from './components/Image/Image';
import Info from './components/Info/Info';

function App() {
  const personagens:Array<object> = [
      {
      foto: "https://preview.redd.it/handsome-squidward-imp-mask-v0-b4ao0le53c6e1.jpg?width=640&crop=smart&auto=webp&s=8611bb67ef881d782b3a246f5b8d25645ec70dfa",
      alt: "Lula Molusco Bonito posando para a câmera.",
      nome: "Lula Molusco Bonito",
      dataNascimento: '09/10/1967',
      localNascimento: 'Fenda do Bikini',
      profissao: 'Operador de caixa',
      empresa: 'Restaurante Siri Cascudo',
      residencia: 'Moai na Fenda do Bikini'
      }
    ];
  return (
    <div>
      
      {personagens.map((i:any) => (
        <>
        <Image alt={i.alt} url={i.foto} />
        <Info nome={i.nome} dataNascimento={i.dataNascimento} localNascimento={i.localNascimento} profissao={i.profissao} empresa={i.empresa} residencia={i.residencia} />
        </>
        ))}
      
    </div>
  );
}

export default App;
