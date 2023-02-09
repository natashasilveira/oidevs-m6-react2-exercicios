import styled, { css } from "styled-components"

// export const Text = (props) => {
//   return <S.TextWrapper {...props}>{props.children}</S.TextWrapper>
// }

const textCss = css`  
  color: ${(props) => (props.color || '#fff')};
  font-weight: ${(props) => (props.bold ? '900' : '')};
  ${(props) => (props.size === 'small' ? 'font-size: 12px' : '')}
`;

export const Text = styled.div`
  ${textCss}
`;

export const TextLink = styled.a`
  ${textCss};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;