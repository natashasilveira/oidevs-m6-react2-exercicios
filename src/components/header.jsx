import { Avatar } from "./avatar"
import { Text } from "../ui/text"
import { Button } from "./button"

export const Header = (props) => {
  return (
    <>
      <Avatar />
      <Text bold>@adatech</Text>
      <Button>
        <Text>Seguindo</Text>
      </Button>
      <Button>
        <Text>Enviar Mensagem</Text>
      </Button>
      <Text>211 publicações</Text>
      <Text>44,2k seguidores</Text>
      <Text>2 seguindo</Text>
    </>
  )
}