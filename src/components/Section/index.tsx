import React from 'react';
import { Linking } from 'react-native';
import {
  Container,
  HeaderWrapper,
  Header,
  Analytics,
  Content,
  Whats
} from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
  descricao: string;
}

const Section: React.FC<Props> = ({ variant, title, description , descricao}) => {
  const buttonVariant = Math.round(Math.random());

  
    function handleToggle() {
      const text = '';
      const phone = '5511983788956';
      window.location.href = `https://api.whatsapp.com/send?text=${text}&phone=${phone}`;
    }
  

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <Analytics />
          
            <span>Organização Pessoal</span>
          </h1>
          <button  onClick={handleToggle}>
            
            {buttonVariant === 0 ? 'Quero contratar' : 'Quero contratar' }
          </button>
          <Whats/>

         
        


    

        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
        <h1>{descricao}</h1>
      </Content>
    </Container>
  );
};

export default Section;
