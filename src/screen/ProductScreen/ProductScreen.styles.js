import styled from "styled-components";

export const DatePickerContainer = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  cursor: pointer;
`;

export const DatePickerButton = styled.div`
  padding: 12px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  font-size: 20px;
  &:hover {
    background-color: #d3d3d3;
    color: white;
  }
  @media (max-width: 1600px) {
    padding: 10px 40px;
    font-size: 15px;
  }
  @media (max-width: 968px) {
    padding: 10px 20px;
    font-size: 15px;
  }
  @media (max-width: 560px) {
    padding: 10px 8px;
    font-size: 12px;
    border-radius: 10px;
  }
`;
export const DatePicked = styled.p`
  font-weight: 1000;
`;

export const WeekDayPicked = styled.span`
  font-weight: 300;
`;

export const CardHeaderContainer = styled.div`
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const CardHeader = styled.h1`
  font-size: 35px;
  font-weight: 500;
  @media (max-width: 786px) {
    font-size: 20px;
    font-weight: 800;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  @media (max-width: 786px) {
    justify-content: space-around;
  }`;

export const Buttons = styled.div`
  padding: 12px 40px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #d3d3d3;
    color: white;
  }
  @media (max-width: 786px) {
    padding: 10px 15px;
    font-size: 12px;
  }
`;
export const ProductCardContainer = styled.div`
  max-width: 1300px;
  margin: 20px auto;
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: auto;

  gap: 0px 0px;

  @media (max-width: 560px) {
    margin: 20px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 1298px) {
    margin: 20px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ScheduleMealButton = styled.button`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  margin: 30px auto;
  padding: 12px 75px;
  border-radius: 10px;
  border: none;
  background-color: orange;
  color: white;
  font-weight: 400;
  font-size: 20px;
`;

export const Line = styled.hr`
  max-width: 1250px;
  margin: auto;
  color: black;
`;
