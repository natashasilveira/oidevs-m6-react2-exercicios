import styled from "styled-components"

export const TextWrapper = styled.p`
  color: ${(props) => (props.color || 'blue')};
  font-weight: ${(props) => (props.bold ? '800' : '')};
`;