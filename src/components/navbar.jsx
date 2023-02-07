import { Title } from "./title"
import { NavItem } from "./nav-item"
import styled from "styled-components";

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

const NavBarWrapper = styled.div`
  background-color: #000;
  border: 1px red solid;
`;

export const Navbar = (props) => {
  return (
    <>
    <NavBarWrapper>
      <Title />
      {items.map((item) => (
        <NavItem key={item} text={item} />
      ))}
    </NavBarWrapper>
    </>
  )
}