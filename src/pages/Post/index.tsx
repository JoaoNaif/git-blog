import { Description } from './components/Description'
import { Summary } from './components/Summary'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <Summary />
      <Description />
    </PostContainer>
  )
}
