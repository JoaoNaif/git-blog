import { FaBuilding, FaGithub } from 'react-icons/fa'
import { InfoContainer, ListInfoContainer, PerfilContainer } from './styles'
import { FaArrowUpRightFromSquare, FaUserGroup } from 'react-icons/fa6'

export function Perfil() {
  return (
    <PerfilContainer>
      <img
        src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/MEMPHIS-DEPAY-CORINTHIANS-e1726255870182.jpeg?w=1200&h=1200&crop=1"
        alt=""
      />
      <InfoContainer>
        <div>
          <h1>Memphis Depay</h1>
          <a href="#" target="_blank">
            <span>GITHUB</span>
            <FaArrowUpRightFromSquare />
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          cupiditate voluptatibus eius atque nulla, iure sapiente eum, et cumque
          dolore aperiam temporibus libero blanditiis aliquam dolor ea. Eius,
          totam pariatur.
        </p>
        <ListInfoContainer>
          <li>
            <FaGithub size={18} />
            <span>JoaoNaif</span>
          </li>
          <li>
            <FaBuilding size={18} />
            <span>Full Stack</span>
          </li>
          <li>
            <FaUserGroup size={18} />
            <span>
              <p>32</p>
              <p>seguidores</p>
            </span>
          </li>
        </ListInfoContainer>
      </InfoContainer>
    </PerfilContainer>
  )
}
