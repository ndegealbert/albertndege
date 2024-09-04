/* eslint-disable jsx-a11y/anchor-is-valid */
import _ from "lodash";
import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  SectionContainer,
  StyledH1,
  StyledParagraph,
  StyledHeader,
} from "../../../common";
import {
  StyledImage,
  StyledColumn,
  StyledCaption,
  StyledH2,
  StyledP,
  StyledPContainer,
} from "./styles";
import data from "../../../../store/portfolio/data";

const Portfolio = () => (
  <div>
    <SectionContainer>
      <StyledHeader>
        <StyledH1>Portfolio</StyledH1>
        <StyledParagraph>
          I played a significant role in advancing the future of fintech,
          agri-tech, iGaming, entertainment,accounting, and many other
          industries.Because the people who believe they can change the world
          are often the ones who succeed in doing so.
        </StyledParagraph>
      </StyledHeader>
    </SectionContainer>
    
    {/* <Grid columns={2} stackable>
      {_.map(data, (item) => (
        <StyledColumn key={item.name}>
          <Link to={item.link}>
            <StyledImage src={item.image1} alt={item.name} />
            <StyledCaption>
              <StyledH2>{item.name}</StyledH2>
              {item.caption.map((text) => (
                <StyledPContainer key={text}>
                  <StyledP>{text}</StyledP>
                </StyledPContainer>
              ))}
            </StyledCaption>
          </Link>
        </StyledColumn>
      ))}
    </Grid> */}
  </div>
);

export default Portfolio;
