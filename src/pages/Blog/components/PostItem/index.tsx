import { Repos } from '../../../../@types/repos'
import { PostContainer } from './styles'

interface PostItemProps {
  repository: Repos
}

export function PostItem({ repository }: PostItemProps) {
  return (
    <PostContainer to={`/post/${repository.id}`}>
      <div>
        <h1>{repository.name}</h1>
        <span>Há 1 dia</span>
      </div>
      <p>
        {repository.description === null
          ? 'Sem descrição'
          : repository.description}
      </p>
    </PostContainer>
  )
}
