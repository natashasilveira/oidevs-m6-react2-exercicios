import * as S from './styles';
import { Text } from '../text';

export const Button = (props) => {
  return (
    <S.Wrapper {...props}>
      <Text>{props.text || props.children}</Text>
    </S.Wrapper>
  );
}