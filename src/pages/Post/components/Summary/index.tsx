import { FaAngleLeft, FaCalendar, FaComment, FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { ListInfoContainer, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <header>
        <span>
          <FaAngleLeft size={18} />
          <p>VOLTAR</p>
        </span>
        <span>
          <p>VER NO GITHUB</p>
          <FaArrowUpRightFromSquare size={18} />
        </span>
      </header>
      <h1>JavaScript data types and data structures</h1>
      <ListInfoContainer>
        <li>
          <FaGithub size={18} />
          <span>JoaoNaif</span>
        </li>
        <li>
          <FaCalendar size={18} />
          <span>Há 1 dia</span>
        </li>
        <li>
          <FaComment size={18} />
          <span>5 Comentários</span>
        </li>
      </ListInfoContainer>
    </SummaryContainer>
  )
}
