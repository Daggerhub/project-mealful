import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  width: 25em;
  border-radius: 0.6em;
  margin: 1em;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25);
  transition: all ease 200ms;

  &:hover {
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }
  @media (max-width: 560px) {
    width: 300px;
  }
`;

export const CardImageContainer = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CardDescriptionContainer = styled.div`
  padding: 1.2em;
`;
export const CardTitle = styled.h2`
  color: #222;
  margin-top: -0.2em;
  line-height: 1.4;
  font-size: 1.3em;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  transition: all ease-in 100ms;
`;
export const CardAuthor = styled.h3`
  color: #222;
  margin-top: -0.2em;
  line-height: 1.4;
  font-size: 1.1em;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  transition: all ease-in 100ms;
`;

export const CardDescription = styled.p`
  color: #777;
`;
export const CardGenere = styled.p`
  font-size: 0.8rem;
  color: red;
`;

export const CardButton = styled.button`
  width: 100%;
  font-size: 20px;
  background-color: #272727;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 10px 0;
`;
