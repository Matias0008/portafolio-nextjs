import React from "react";

import styled from "styled-components";

export const Layout = ({
  children,
  id = "",
  flex = "",
  direction = "",
  justify = "",
  align = "",
  heading = "",
}) => {
  return (
    <>
      <LayoutSection id={id}>
        {heading && <SectionHeading title={heading}>{heading}</SectionHeading>}
        <LayoutContainer
          flex={flex}
          direction={direction}
          justify={justify}
          align={align}
        >
          {children}
        </LayoutContainer>
      </LayoutSection>
    </>
  );
};

const LayoutSection = styled.section.attrs((props) => ({
  id: props.id ? props.id : "",
}))`
  display: flex;
  align-items: center;
`;

const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  display: ${(props) => (props.flex ? "flex" : "block")};
  ${(props) =>
    props.flex && props.align ? `align-items: ${props.align};` : ""}
  ${(props) => (props.flex && props.gap ? `gap: ${props.gap};` : "")}
  ${(props) =>
    props.flex && props.justify ? `justify-content: ${props.justify};` : ""}
  ${(props) =>
    props.flex ? `flex-direction: ${props.direction ? "column" : "row"}` : ""}
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  display: ${(props) => (props.flex ? "flex" : "block")};
  height: 100%;
  ${(props) =>
    props.flex && props.align ? `align-items: ${props.align};` : ""}
  ${(props) => (props.flex && props.gap ? `gap: ${props.gap};` : "")}
  ${(props) =>
    props.flex && props.justify ? `justify-content: ${props.justify};` : ""}
  ${(props) =>
    props.flex ? `flex-direction: ${props.column ? "column" : "row"}` : ""}
`;

export const SectionHeading = styled.h2.attrs((props) => ({
  title: props.title ? props.title : "",
}))`
  margin-top: 15rem;
  font-size: clamp(2rem, 12vw, 8rem);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  position: relative;
  margin-bottom: 10rem;
  color: var(--secondary-black);

  &::before {
    content: ${(props) => `"${props.title}"`};
    position: absolute;
    left: 2%;
    top: -20%;
    width: max-content;
    text-align: center;
    text-transform: uppercase;

    letter-spacing: 0.2rem;
    color: transparent;
    -webkit-text-stroke: 1.5px #5a24ed2f;
    z-index: -1;
    opacity: 0.6;
  }
`;
