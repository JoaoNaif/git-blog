import { FaAngleLeft, FaCalendar, FaComment, FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { ListInfoContainer, MainContainer, SummaryContainer } from './styles'
import { Repos } from '../../../../@types/repos'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'

interface SummaryProps {
  repository: Repos
}

export function Summary({ repository }: SummaryProps) {
  return (
    <SummaryContainer>
      <header>
        <NavLink to="/">
          <FaAngleLeft size={18} />
          <p>VOLTAR</p>
        </NavLink>
        <a href={repository.html_url} target="_blank" rel="noreferrer">
          <p>VER NO GITHUB</p>
          <FaArrowUpRightFromSquare size={18} />
        </a>
      </header>

      <MainContainer>
        <h1>{repository?.name}</h1>
        <p>{repository.description}</p>
      </MainContainer>

      <ListInfoContainer>
        <li>
          <FaGithub size={18} />
          <span>{repository.owner.login}</span>
        </li>
        <li>
          <FaCalendar size={18} />
          <span>
            {formatDistanceToNow(new Date(repository.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </li>
        <li>
          <FaComment size={18} />
          <span>{repository.watchers} Visualização</span>
        </li>
      </ListInfoContainer>
    </SummaryContainer>
  )
}
