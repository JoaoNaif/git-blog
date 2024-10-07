import { FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { InfoContainer, ListInfoContainer, PerfilContainer } from './styles'
import { FaArrowUpRightFromSquare, FaUserGroup } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { User } from '../../../../@types/user'
import { api } from '../../../../lib/axios'

export function Perfil() {
  const [user, setUser] = useState<User>()

  async function fetchUser() {
    const response = await api.get('')

    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <PerfilContainer>
      <img src={user?.avatar_url} alt="" />
      <InfoContainer>
        <div>
          <h1>{user?.name}</h1>
          <a href={user?.html_url} target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <FaArrowUpRightFromSquare />
          </a>
        </div>
        <p>{user?.bio}</p>
        <ListInfoContainer>
          <li>
            <FaGithub size={18} />
            <span>{user?.login}</span>
          </li>
          <li>
            <FaMapMarkerAlt size={18} />
            <span>{user?.location}</span>
          </li>
          <li>
            <FaUserGroup size={18} />
            <span>
              <p>{user?.followers}</p>
              <p>seguidores</p>
            </span>
          </li>
        </ListInfoContainer>
      </InfoContainer>
    </PerfilContainer>
  )
}
