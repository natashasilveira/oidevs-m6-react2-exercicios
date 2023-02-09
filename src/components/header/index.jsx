import { Avatar } from "../avatar"
import { Text, TextLink } from "../../ui/text"
import { Button } from "../../ui/button"
import * as S from "./styles"

export const Header = (props) => {
  return (
    <S.HeaderWrapper>
      <S.AvatarWrapper>
        <Avatar imagePath='https://via.placeholder.com/150' />
      </S.AvatarWrapper>

      <S.Content>
        <S.Data>
          <Text bold>@adatech</Text>
          <Button>
            <Text>Seguindo</Text>
          </Button>
          <Button>
            <Text>Enviar Mensagem</Text>
          </Button>
        </S.Data>
        <S.Data>
          <Text>211 publicações</Text>
          <Text>44,2k seguidores</Text>
          <Text>2 seguindo</Text>
        </S.Data>
        <S.Infos>
          <Text>Ada Tech</Text>
          <Text color='#a8a8a8' bold>Educação</Text>
          <TextLink href='https://google.com.br' target='_blank'>
            Ada. A Nova Educação
          </TextLink>
          <S.Followers>
            <Text size='small'>Seguido(a) por lorem, ipsum, dolorsitamet</Text>
          </S.Followers>
        </S.Infos>
      </S.Content>
    </S.HeaderWrapper>
  )
}