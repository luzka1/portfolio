import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{}>`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

  :root {
  --pink: #FF0099;
  --purple: #BD00FF;
  --footer-white: #ffffffb3;
  --background-color: #0E0014;
  --second-background: #1C0027;
  --header-background: #20062ce6;
  --background-trasparent: #0e001480;
}
  *{
    margin:0;
    padding:0;
    border:0,
    box-sizing: border-box;
    list-style:none;
    font-family: 'Space Grotesk', sans-serif;
    color:white;
  }
  body{
    background-color: var(--background-color);  
  }
  p{
    font-size:24px;
    letter-spacing:-1px;
  }
  .section-container{
    min-height:800px;
    background-color: var(--second-background);  
  }

  h1{
    text-transform: uppercase;
    font-size: 92px;
    letter-spacing: -5px;
}
    h2{
    font-size: 64px;
    letter-spacing: -2px;
}

  .principalButton{
    display:flex;
    align-items:center;
    justify-content:center;
    width: 225px;
    height: 60px;
    background: linear-gradient(0deg, rgba(189,0,255,1) -50%, rgba(255,0,153,1) 150%);
    border: none;
    border-radius: 50px;
    font-size: 24px;
    box-shadow: 0 0 4px black;
    position: relative;
    padding: 3px;
    overflow: hidden;
    font-weight:400;
  }

  .outlinedButton {
    display:flex;
    align-items:center;
    justify-content:center;
    min-width: 225px;
    height: 60px;
    background: linear-gradient(0deg, rgba(189,0,255,1) -50%, rgba(255,0,153,1) 150%);
    border: none;
    border-radius: 50px;
    font-size: 24px;
    box-shadow: 0 0 4px black;
    position: relative;
    overflow: hidden;
    font-weight:400;
  }
  
  .outlinedButton::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--background-color); 
    border-radius: 50px;
    margin: 2px;
  }
  
  .outlinedButton span {
    position: relative;
    z-index: 1;
    display: block;
    background: transparent; 
    border-radius: 50px; 
  }
`;
