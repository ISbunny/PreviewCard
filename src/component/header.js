import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as colors from "../colors";


const GridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
max-width: 64.1875rem;
margin: 8rem auto;
background-color: ${colors.cardBackground};

`;

const HeaderCntent = styled.div`
max-width: 23.625rem;
margin: auto;
padding: 4rem;
`;

const HeaderTitle = styled.div`
font-size: 2rem;
`;



const HeaderText = styled.div`
line-height: 1.5rem;
color: ${colors.mainParagraph};
margin-bottom: 3rem;

`;

const StatsNumber = styled.div`
font-family: "Lexend Deca", sans-serif;
flex: 1;
display: block;
`;

const StatsName =styled.div`
color: ${colors.mainParagraph};
padding-top: 0.5rem;
text-transform: uppercase;
font-size: 0.6rem;
letter-spacing: 0.1rem;
`;

const HeaderStyled = styled.div`
color: ${colors.accent};
`;
const HeaderImg = styled.div`
background: url("https://source.unsplash.com/random");
background-repeat: no-repeat;
background-size:cover;
position: relative;
&::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${colors.accent};
    opacity: 0.5;
    z-index: 2;
}
`;
const Stats = styled.div`
font-size: 1.2rem;
max-width: 20rem;
display: flex;
justify-content: space-between;
`;


export default function Header () {
    return (
        <GridContainer>
            <HeaderCntent>
                <HeaderTitle>Get<HeaderStyled>Insights</HeaderStyled>that help your business grow.</HeaderTitle>
                <HeaderText>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
          experience, and overall efficiency.</HeaderText>
          <Stats>
              <statsItem>
                  <StatsNumber>10k+</StatsNumber>
                  <StatsName>Companies</StatsName>
              </statsItem>
              <statsItem>
                  <StatsNumber>314+</StatsNumber>
                  <StatsName>Template</StatsName>
              </statsItem>
              <statsItem>
                  <StatsNumber>12m+</StatsNumber>
                  <StatsName>Queries</StatsName>
              </statsItem>
          </Stats>
            </HeaderCntent>
            <HeaderImg></HeaderImg>
        </GridContainer>
    );
}