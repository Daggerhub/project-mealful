import React from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card/Card";
import {
  DatePickerButton,
  DatePickerContainer,
  WeekDayPicked,
  CardHeader,
  CardHeaderContainer,
  ButtonContainer,
  Buttons,
  ProductCardContainer,
  ScheduleMealButton,
  Line,
} from "./ProductScreen.styles";

export default function ProductScreen() {
  return (
    <>
      <Banner />
      <DatePickerContainer>
        <DatePickerButton>
          <WeekDayPicked>MON</WeekDayPicked>
          <DatePickerButton>04</DatePickerButton>
        </DatePickerButton>
        <DatePickerButton
          style={{
            backgroundColor: "black",
            color: "white",
            pointerEvents: "none",
          }}
        >
          <WeekDayPicked>TUE</WeekDayPicked>
          <DatePickerButton>05</DatePickerButton>
        </DatePickerButton>
        <DatePickerButton>
          <WeekDayPicked>WED</WeekDayPicked>
          <DatePickerButton>06</DatePickerButton>
        </DatePickerButton>
        <DatePickerButton>
          <WeekDayPicked>THU</WeekDayPicked>
          <DatePickerButton>07</DatePickerButton>
        </DatePickerButton>
        <DatePickerButton>
          <WeekDayPicked>FRI</WeekDayPicked>
          <DatePickerButton>08</DatePickerButton>
        </DatePickerButton>
        <DatePickerButton>
          <WeekDayPicked>SAT</WeekDayPicked>
          <DatePickerButton>09</DatePickerButton>
        </DatePickerButton>
        <DatePickerButton>
          <WeekDayPicked>SUN</WeekDayPicked>
          <DatePickerButton>10</DatePickerButton>
        </DatePickerButton>
      </DatePickerContainer>
      <Line />
      <CardHeaderContainer>
        <CardHeader>Latest Menu</CardHeader>
        <ButtonContainer>
          <Buttons
            style={{
              backgroundColor: "black",
              color: "white",
              pointerEvents: "none",
            }}
          >
            Lunch
          </Buttons>
          <Buttons>Dinner</Buttons>
        </ButtonContainer>
      </CardHeaderContainer>
      <ProductCardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ProductCardContainer>
      <ScheduleMealButton>Request Menu Items</ScheduleMealButton>
      <Line />
    </>
  );
}
