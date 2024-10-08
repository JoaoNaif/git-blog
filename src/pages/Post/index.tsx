import { useContext } from 'react'
import { Description } from './components/Description'
import { Summary } from './components/Summary'
import { PostContainer } from './styles'
import { useParams } from 'react-router-dom'
import { RepositoryContext } from '../../context/RepositoryContext'

export function Post() {
  const { postId } = useParams()

  const post = Number(postId)

  const { repositories } = useContext(RepositoryContext)

  const repository = repositories.find((i) => i.id === post)

  return (
    <PostContainer>
      {repository ? (
        <>
          <Summary repository={repository} />
          <Description repository={repository} />
        </>
      ) : (
        <p>Sem Registro</p>
      )}
    </PostContainer>
  )
}
