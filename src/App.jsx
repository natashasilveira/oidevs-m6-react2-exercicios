// import './App.css'
import { NavItem } from './components/nav-item'
import { Navbar } from './components/navbar'
import { Title } from './components/title'
import { Header } from './components/header'
import { Avatar } from './components/avatar'
import { Text } from './components/text'
import { Button } from './components/button'
import { TextSecond } from './components/text/text-second'

const items = [
  'Página Inicial',
  'Pesquisa',
  'Explorar',
  'REels',
  'Mensagens',
  'Notificações',
  'Criar',
  'Perfil',
  'Mais '
]

function App() {

  return (
    <>
    <Text bold>Texto</Text>
    <TextSecond>Segundo Texto</TextSecond>
      {/* <Navbar>
        <Title />
        {items.map((item) => (
          <NavItem key={item} text={item} />
        ))}
      </Navbar>
      <Header>
        <Avatar />
        <Text bold>@adatech</Text>
        <Button>Seguindo</Button>
        <Button>Enviar Mensagem</Button>
        <Text>211 publicações</Text>
        <Text>44,2k seguidores</Text>
        <Text>2 seguindo</Text>
      </Header> */}
    </>
  )
}

export default App
