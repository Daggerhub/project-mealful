import React from "react";
import {
  BannerContainer,
  BannerContentContainer,
  BannerContent,
} from "./Banner.styles";
export default function Banner() {
  return (
    <BannerContainer>
      <BannerContentContainer>
        <BannerContent>
          <strong> Note:</strong> Slot time for lunch is from 12:30pm to 3:00pm
          and slot time for dinner is from 6:00pm to 8:30pm. You can schedule or
          modify your orders 4 hours prior
          <br /> to the slot time.
        </BannerContent>
      </BannerContentContainer>
    </BannerContainer>
  );
}
