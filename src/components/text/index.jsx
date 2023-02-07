// import { styles } from './styles'

import styled from "styled-components"

// export const Text = (props) => {
//   return (
//     <div style={styles.title}>
//       {props.children}
//     </div>
//   )
// } 

export const Text = styled.p`
  color: ${(props) => (props.color || 'blue')};
  font-weight: ${(props) => (props.bold ? '800' : '')};
`;