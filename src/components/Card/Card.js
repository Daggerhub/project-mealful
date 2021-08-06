import React from "react";
import {
  CardAuthor,
  CardButton,
  CardContainer,
  CardDescription,
  CardDescriptionContainer,
  CardGenere,
  CardImageContainer,
  CardTitle,
} from "./Card.styles";

export default function Card() {
  return (
    <CardContainer>
      <CardImageContainer
        src="https://www.mealful.ca/img/60f2540094c13.jpg"
        alt="Avatar"
      />
      <CardDescriptionContainer class="container">
        <CardTitle>
          <b>Spicy Chicken with side</b>
        </CardTitle>
        <CardAuthor>Country Kitchen</CardAuthor>
        <CardDescription>
          2 chicken pieces glazed in spicy sauce served with a side of your
          choice.
        </CardDescription>
        <CardGenere>American</CardGenere>
        <CardButton>Schedule Meal</CardButton>
      </CardDescriptionContainer>
    </CardContainer>
  );
}
