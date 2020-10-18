import styled from 'styled-components';
import { FaHandshake } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 40px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }
  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-primary);
    --logo-color: var(--color-primary);
  }
  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-primary);
    --logo-color: var(--color-primary);
  }
  &.black {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }
  #quero{
  margin-left:600px;
}

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 60px;

    @media (min-width: 1024px) {
      --heading-font-size: 55px;
      --content-width: 50%;
    }
  }
  @media screen and (max-width:768px){
   
    &:first-child {
      --padding-top: 115px;
    --heading-font-size: 30px;
      
       
      }
    }



  background: var(--bg-color);
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: var(--bg-color);
  clip: rect(auto, auto, auto, auto);
`;


export const Header = styled.header`
  z-index: 3;
  background: var(--bg-color);

  display: flex;
  justify-content: space-between;

  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
    }
    @media screen and (max-width:768px){
span{
  margin-top: 0px;
    font-size: 20px;
    margin-left:10px;
    color: var(--text-color);
    max-width: var(--content-width);
    font-weight:'regular'
     
      
     }
   }
  }
  
  

  > button {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    
 
    cursor: pointer;
    margin-right: 40px;
   
  

    &:hover,
    &:focus {
      text-decoration: underline;
    }


   
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;


export const Analytics = styled(FaHandshake)`
  width: 36px;
  height: 32px;
  fill: var(--logo-color);
`;

export const Whats = styled(FaWhatsapp)`


  width: 30px;
  height: 28px;
  margin-top:3px;
  margin-left: 1249px;
  z-index: 3;
  display: flex;
  position: absolute;
  fill: var(--logo-color);
`;


export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }
  > p {
    margin-top: 20px;
    font-size: 23px;
    color: var(--text-color);
    max-width: var(--content-width);
  }
  @media screen and (max-width:768px){
p{
  margin-top: 3px;
    font-size: 18px;
    color: var(--text-color);
    max-width: var(--content-width);
    font-weight:'regular'
     
      
     }
   }
   @media screen and (max-width:768px){
h2{
  margin-top: -40px;
    font-size: 30px;
    color: var(--text-color);
    max-width: var(--content-width);
    font-weight:'regular'
     
      
     }
    
   }
  h1 {
    margin-top: 5px;
    font-size: 23px;
    color: var(--text-color);
    max-width: var(--content-width);
    font-weight:'regular'
  }
  
.wats{
  margin-left:600px;
}


  padding: var(--padding-top) 32px var(--padding-bottom);
`;
