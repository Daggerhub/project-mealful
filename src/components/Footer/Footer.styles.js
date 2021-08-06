import styled from "styled-components";

export const Box = styled.div`
  padding: 60px 0px;
  bottom: 0;
  width: 100%;
`;

export const ImgContainer = styled.img`
  margin-top: 15px;
  height: 2.8rem;
  @media (max-width: 750px) {
    width: 8rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  @media (max-width: 750px) {
    margin-left: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const FooterLink = styled.a`
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  color: black;
  font-weight: 300;
  transition: 300ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Link = styled.hr`
  max-width: 1300px;
  margin: auto;
  color: black;
`;
export const SocialMediaContainer = styled.div`
  width: 200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3em;
  color: #343538;
`;

export const CompanyCopyright = styled.p`
  font-size: 15px;
  margin: 0 auto;
`;
