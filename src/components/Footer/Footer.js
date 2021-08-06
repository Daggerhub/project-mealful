import React from "react";
import {
  FaFacebookF as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaLinkedinIn as LinkedinIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  ImgContainer,
  Link,
  SocialMediaContainer,
  CompanyCopyright,
} from "./Footer.styles";

import Logo from "../../assets/mealful-logo.png";

export default function Footer() {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <ImgContainer src={Logo} />
          </Column>
          <Column>
            <Heading>Get to know us</Heading>
            <FooterLink href="#">Why choose us?</FooterLink>
            <FooterLink href="#">FAQs?</FooterLink>
          </Column>
          <Column>
            <Heading>Let us help you</Heading>
            <FooterLink href="#">Account details</FooterLink>
            <FooterLink href="#">Order history</FooterLink>
            <FooterLink href="#">Contact us</FooterLink>
            <FooterLink href="#">Help</FooterLink>
          </Column>
          <Column>
            <Heading>Let's do business</Heading>
            <FooterLink href="#">Cook with us</FooterLink>
            <FooterLink href="#">Become a hub partner</FooterLink>
            <FooterLink href="#">General inquiries</FooterLink>
          </Column>
        </Row>
      </Container>
      <Link />
      <Container>
        <SocialMediaContainer>
          <FacebookIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <TwitterIcon />
        </SocialMediaContainer>
        <SocialMediaContainer>
          <CompanyCopyright>2021 @Mealful Inc</CompanyCopyright>
        </SocialMediaContainer>
        <SocialMediaContainer>
          <FooterLink
            style={{
              fontSize: "12px",
            }}
          >
            Terms Of Services
          </FooterLink>
          <FooterLink
            style={{
              fontSize: "12px",
            }}
          >
            Privacy Policy
          </FooterLink>
        </SocialMediaContainer>
      </Container>
    </Box>
  );
}
