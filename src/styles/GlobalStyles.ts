import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, button, input {
    font-family: Roboto, sans-serif;
  }
  .foto{
    margin-top:-600px;
    margin-left: 674px;
    width:50%;
    height:80%;
    z-index:2;
    position: absolute
  }
  @media screen and (max-width:768px){
   
   .foto {
       
        margin-top:-250px;
        width:70%;
       height:30%;
       z-index:2;
  
        margin-left: 25px;
      
       
      }
    }
.icon{
      margin-top:-370px;
    margin-left: 335px;
    width:50%;
    height:70%;
    z-index:2;
    position: absolute
}
@media screen and (max-width:768px){
   
   .icon {
       
        margin-top:-100px;
        width:70%;
       height:30%;
       opacity:0;

  
        margin-left: 25px;
      
       
      }
    }

  .pri{
   
    margin-top:-390px;
    margin-left: 35px;
    width:29%;
    height:59%;
    z-index:2;
    position: absolute
  
  }
  @media screen and (max-width:768px){
   
.pri {
    
     margin-top:-290px;
     width:60%;
    height:40%;
    z-index:2;
    position: absolute;
     margin-left: 25px;
   
    
   }
 }
  .p{
    font-family:'Roboto';
    position: absolute;
    z-index:2;
   font-size: 20px;
   margin-top:-350px;
   margin-left: 350px;
   background-color:#111344;
   color: #fff;
   max-width: var(--content-width);
  }
  .ul{
    background-color:#111344;
    color: #fff;
    font-family:'Roboto';
list-style: "✔";
    display: flex;
    flex-direction: column;
margin-top:-450px;
line-height: 40px;
margin-left: 60px;
font-size:18px;
z-index: 3;
position: absolute;

   
    width:50%;
  }
  @media screen and (max-width:768px){
   
   .ul {
       
    background-color:#111344;
    color: #fff;
    font-family:'Roboto';
    list-style: "✔";
    display: flex;
    flex-direction: column;
margin-top:-430px;
line-height: 16px;
margin-left: 28px;
font-size:11.5px;
z-index: 3;
position: absolute;

   
    width:93%;
      
       
      }
    }
  .ul2{
    background-color:#111344;
    color: #fff;
    margin-left: 670px;
    font-family:'Roboto';
    list-style: "✔";
    display: flex;
    flex-direction: column;
margin-top:-450px;
line-height: 40px;
font-size:18px;
z-index: 3;
position: absolute;

   
    width:50%;
  }
  @media screen and (max-width:768px){
   
   .ul2 {
       
    background-color:#111344;
    color: #fff;
    font-family:'Roboto';
    list-style: "✔";
    display: flex;
    flex-direction: column;
margin-top:-250px;
line-height: 16px;
margin-left: 28px;
font-size:11.5px;
z-index: 3;
position: absolute;

   
    width:93%;
      
       
      }
    }
    .querosaber{
      z-index: 3;
position: absolute;
width: 148px;
height: 45px;
margin-top:-90px;
margin-left: 50px;
border-radius: 5px;
background-color: #fff;
cursor: pointer;
font-size: 15px;
font-family: 'Roboto';
display: flex;
justify-content:center;
align-items: center;

    }
    @media screen and (max-width:768px){
   
   .querosaber {
       
    z-index: 3;
position: absolute;
width: 148px;
height: 45px;
margin-top:-70px;
margin-left: 50px;
border-radius: 5px;
background-color: #fff;
cursor: pointer;
font-size: 15px;
font-family: 'Roboto';
display: flex;
justify-content:center;
align-items: center;
      
       
      }
    }
    .querosaber:hover {
  background:  #5590ff;
  transition: 0.9s
  
  
}

.planb{
  background-color: #EDF2F4;
  width: 50%;
  height: 75%;
  margin-top: -480px;
  margin-left: 10px;
  display: flex;
  position: absolute;
}
@media screen and (max-width:768px){
   
   .planb {
       

  width: 100%;
  height: 80%;
  margin-top: -410px;
  margin-left: 0;
  display: flex;
  position: absolute;
  z-index:3;
      
       
      }
    }
    .planb2{

  width: 50%;
  height: 75%;
  margin-top: -480px;
  margin-left: 340px;
  display: flex;
  position: absolute;
  z-index:3;

}
@media screen and (max-width:768px){
   
   .planb2 {
    background-color: #EDF2F4;
 
  width: 100%;
  height: 80%;
  margin-top: 60px;
  margin-left: 0px;
  display: flex;
  position: absolute;
  
      
       
      }
    }
        .planb3{

  width: 50%;
  height: 75%;
  margin-top: -480px;
  margin-left: 670px;
  display: flex;
  position: absolute;
  z-index:3;
}
@media screen and (max-width:768px){
   
   .planb3 {
       
    background-color: #EDF2F4;
  width: 100%;
  height: 80%;
  margin-top: 530px;
  margin-left: 0px;
  display: flex;
  position: absolute;
      
       
      }
    }
    .Linkedin{
      font-size: 20px;
      font-family: 'Roboto';
      font-weight: 600;
      background-color: #EDF2F4;
      color: #111344;
      display: flex;
      position: relative;
      margin-bottom: 15px;
    text-decoration: none;
    }
    .link{
      background-color: #EDF2F4;
      display: flex;
  padding-left: 35px;
  padding-top: 20px;
      
    }
    @media screen and (max-width:768px){
   
   .Linkedin {
       
    font-size: 14px;
      font-family: 'Roboto';
      font-weight: 600;
      background-color: #EDF2F4;
      color: #111344;
      display: flex;
      position: relative;
    text-decoration: none;
    
       
      }
      .link{
      background-color: #EDF2F4;
      display: flex;
  padding-left: 20px;
      
    }
    }
 
  :root {
    --color-primary: #EDF2F4;
    --color-secondary: #111344;
    --color-tertiary: #111344;
    --color-quaternary: #000;

    --color-blue: #0061ff;
    --color-border: #bdc4c9;
  }
`;
