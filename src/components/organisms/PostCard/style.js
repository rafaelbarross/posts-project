import styled from "styled-components";

export const Post = styled.div`
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0 , 0, 0.1);
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PostContent = styled.div`
  padding: 30px;
`
export const ImagePost = styled.img`
  max-width: 100%;
`

export const Title = styled.h2`
  font-family: 'Bahnschrift';
  font-style: normal;
`;

export const Paragraph = styled.p`  
  font-family: 'Calibri';
  font-style: normal;
`;
