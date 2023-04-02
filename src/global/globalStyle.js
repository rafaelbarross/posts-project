import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background: #eee;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

`;

// export const Container = styled.section`
//   min-height: 100vh;
//   padding: 30px;
// `;

// export const SearchContainer = styled.header`
//   margin-bottom: 30px;
//   position: sticky;
//   top: 0;
// `;

// // export const Input = styled.input`
// //   padding: 0.5em;
// //   color: ${props => props.inputColor || "palevioletred"};
// //   background: papayawhip;
// //   border: 2px solid palevioletred;
// //   border-radius: 3px;
// //   width: 100%;
// //   height: 3em;
// //   font-size: 1em; 
// //   font-family: 'Impact';
// // `;

// // export const Posts = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
// //   gap: 30px;
// // `;

// export const ButtonContainer = styled.div`
//   min-height: 100px;
//   display: flex;
//   align-items: flex-end;
// `;

// // export const Button = styled.button`
// //   font-family: 'Impact';
// //   color: black;
// //   font-size: 1em;
// //   margin: 2em 0 0;
// //   padding: 15px 30px;
// //   border: 2px solid palevioletred;
// //   border-radius: 3px;
// //   width: 100%;
// //   height: 3em;
// //   background: pink;
 
// //   pointer-events: ${props => props.disabled ? 'none' : 'auto'};
// //   opacity: ${props => props.disabled ? 0.5 : 1};
  
// //   &:hover {
// //     background: palevioletred;
// //     cursor: pointer;
// //   }
// // `
// // export const Post = styled.div`
// //   background: #fff;
// //   box-shadow: 0 0 10px rgba(0, 0 , 0, 0.1);
// //   transition: transform 100ms ease-in-out;

// //   &:hover {
// //     transform: scale(1.05);
// //   }
// // `;

// // export const PostContent = styled.div`
// //   padding: 30px;
// // `
// // export const ImagePost = styled.img`
// //   max-width: 100%;
// // `

// // export const Title = styled.h2`
// //   font-family: 'Bahnschrift';
// //   font-style: normal;
// // `;

// // export const Paragraph = styled.p`  
// //   font-family: 'Calibri';
// //   font-style: normal;
// // `;

// export const NoPosts = styled.h1`
//   color: rebeccapurple;
//   font-family: 'Arial';
//   font-style: normal;
// `