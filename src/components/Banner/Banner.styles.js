import styled from "styled-components";

export const BannerContainer = styled.div`
  margin-top: 0;
  background-color: #ffdb76;
  width: 100%;
  height: 90px;
`;
export const BannerContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  @media (max-width: 855px) {
    font-size: 14px;
  }
`;

export const BannerContent = styled.p`
  font-weight: 300;
  text-align: center;
`;
