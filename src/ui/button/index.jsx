import * as S from './styles';
import { Text } from '../text';

export const Button = (props) => {
  return (
    <S.Wrapper>
      <Text>{props.children}</Text>
    </S.Wrapper>
  );
}