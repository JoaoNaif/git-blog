import { Repos } from '../../../../@types/repos'
import { DescriptionContainer } from './styles'

interface DescriptionProps {
  repository: Repos
}

export function Description({ repository }: DescriptionProps) {
  return (
    <DescriptionContainer>
      <article>
        <h3>Tecnologia:</h3>
        <span>{repository.language}</span>
      </article>
      <article>
        <h3>Privacidade:</h3>
        <span>{repository.visibility}</span>
      </article>
    </DescriptionContainer>
  )
}
