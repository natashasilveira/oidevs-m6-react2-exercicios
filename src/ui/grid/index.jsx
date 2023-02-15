
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.templateColumns};
  grid-column: ${(props) => props.gridColumn};
  position: relative;
`;

export const GridItem = styled.div`
  display: ${(props) => props.display};
  grid-template-columns: ${(props) => props.templateColumns};;
  height: fit-content;
  position: relative;
`;