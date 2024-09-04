import React from "react";
import {
  SectionContainer,
  StyledH1,
  StyledParagraph,
  StyledHeader,
} from "../../../common";

const About = () => (
  <SectionContainer>
    <StyledHeader>
      <StyledH1>About Me</StyledH1>
      <StyledParagraph>
        I am an experienced Software Engineer with a focus on Full stack
        development. For more than 6+ years I have worked with brands and
        startups in the EMEA Region.
      </StyledParagraph>
    </StyledHeader>
    {/**update brands later */}
    {/* <StyledBrands>
      <StyledBrandImage height="70" src={cineplexImg} />
      <StyledBrandImage height="70" src={mecImg} />
      <StyledBrandImage height="70" src={waveImg} />
      <StyledBrandImage height="70" src={pentaImg} />
      <StyledBrandImage height="70" src={xtremeImg} />
      <StyledBrandImage height="70" src={pivotalImg} />
      <StyledBrandImage height="70" src={liberateImg} />
      <StyledBrandImage height="70" src={kikImg} />
      <StyledBrandImage height="70" src={sparkgigImg} />
      <StyledBrandImage height="70" src={keyholeImg} />
    </StyledBrands> */}
  </SectionContainer>
);

export default About;
