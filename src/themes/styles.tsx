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
  --footer-background: #050007;
}
  *{
    margin:0;
    padding:0;
    border:0,
    box-sizing: border-box;
    list-style:none;
    font-family: 'Space Grotesk', sans-serif;
    color:white;
    scroll-behavior: smooth;
  }
  body{
    background-color: var(--background-color);  
  }
    footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--footer-background);
    padding: 5rem 0;
    gap:20px;
  }
  .section-container{
    min-height:800px;
    background-color: var(--second-background);  
  }
  
  .background-modal{
    position: fixed;
    width:100%;
    height:100vh;
    background-color: rgba(0, 0, 0, 0.5); ;
    z-index:10;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  
  a{
    text-decoration:none;
  }
  p{
    font-size:1.5rem;
    letter-spacing:-1px;
  }

  h1{
    text-transform: uppercase;
    font-size: 6rem;
    letter-spacing: -5px;
  }
  h2{
    font-size: 4rem;
    letter-spacing: -2px;
  }
  h3{
    font-size: 3rem;
    letter-spacing: -2px;
  }

  .principalButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 225px;
    height: 60px;
    background: linear-gradient(0deg, rgba(189,0,255,1) -50%, rgba(255,0,153,1) 150%);
    border: none;
    border-radius: 50px;
    font-size: 1.5rem;
    box-shadow: 0 0 4px black;
    position: relative;
    padding: 3px;
    overflow: hidden;
    font-weight: 400;
    cursor: pointer;
    background-position: 0%;
    transition: all 200ms ease;
}

.principalButton:hover, .outlinedButton:hover {
    transform:scale(110%);
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
    font-size: 1.5rem;
    box-shadow: 0 0 4px black;
    position: relative;
    overflow: hidden;
    font-weight:400;
    cursor: pointer;
    transition: all 200ms ease;
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

    @keyframes color {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}
`;
