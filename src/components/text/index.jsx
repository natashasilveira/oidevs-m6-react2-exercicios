// import { styles } from './styles'

import * as S from './styles'
// export const Text = (props) => {
//   return (
//     <div style={styles.title}>
//       {props.children}
//     </div>
//   )
// } 



export const Text = (props) => {
  return <S.TextWrapper {...props}>{props.children} || 😁</S.TextWrapper>
}