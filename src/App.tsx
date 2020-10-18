import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';
import foto from './assets/org.jpg'
import data from './data';
import zero from './assets/priori.png'
import icons from './assets/icon4.svg'
import plans from './assets/tentaesse.svg'


function App() {
  function handleToggle() {
    const text = '';
    const phone = '11983788956';
    window.location.href = `https://api.whatsapp.com/send?text=${text}&phone=${phone}`;
  }

  return (
    
    <>
      <Section
        variant="blue"
        title={data[0].title}
        description={data[0].description}
        descricao={data[0].descricao}
      />
    <img className="foto" src={foto}/>
      <Section
        variant="beige"
        title={data[1].title}
        description={data[1].description}
        descricao={data[1].descricao}
      />
          <img className="icon" src={icons}/>

      <Section
        variant="blue"
        title={data[2].title}
        description={data[2].description}
        descricao={data[2].descricao}
      />
   <img  className="pri" src={zero}/>
<div className="link">
   <a className="Linkedin" target="_blank" href="https://www.linkedin.com/in/organiza%C3%A7%C3%A3o-pessoal-7336821b9/">Linkedin
   </a>
   <a className="Linkedin"  target="_blank" href="https://www.instagram.com/organizacaopessoal1/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instagram
   </a>
   <a className="Linkedin" target="_blank" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;organizacaopessoal1@gmail.com
   </a>
   </div>

      <Section
        variant="white"
        title={data[3].title}
        description={data[3].description}
        descricao={data[3].descricao}
      />
      <ul className="ul">
        <li style={{fontWeight:"bolder",}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PARA SUA EMPRESA OU ATIVIDADE PROFISSIONAL</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organização pessoal e profissional</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gestão de agendamentos comerciais e meetings</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cotação de compras em geral</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cotação e contratação de serviços</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Controle de planilhas, pagamentos e fluxo de caixa</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Confirmação de compromissos e gestão de agendas compartilhada</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apoio e cotação de eventos e viagens</li>
        
      </ul>
      <ul className="ul2">
        <li style={{fontWeight:"bolder",}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PARA VOCÊ E SUA FAMÍLIA</li>
        
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organização pessoal e profissional</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cotação e Compras em Geral</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cotação e Contratação de Serviços</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Controle de Pagamentos</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marcação de Consultas Médicas</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lembretes e Pagamento de Contas</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Redirecionamento de Chamadas</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Envio de Recados via SMS</li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apoio para recrutamento doméstico</li>
        
      </ul>
      <strong className="querosaber" onClick={handleToggle}>
            Quero saber mais
            <FaWhatsapp style={{marginLeft: 2}}/>
          </strong>
      <Section
        variant="black"
        title={data[4].title}
        description={data[4].description}
        descricao={data[4].descricao}
      />
      <img  className="planb" src={plans}/>

 
     
  

      <GlobalStyles />
    </>
  );
}

export default App;
