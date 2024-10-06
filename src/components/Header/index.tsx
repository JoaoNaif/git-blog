import { HeaderContainer } from './styles'

import img from '../../assets/Cover.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={img} alt="" />
    </HeaderContainer>
  )
}
