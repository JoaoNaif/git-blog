import { Perfil } from './components/Perfil'
import { PostItem } from './components/PostItem'
import { BlogContainer, ListPost, SearchContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Perfil />

      <SearchContainer>
        <span>
          <h3>Publicações</h3>
          <p>6 publicações</p>
        </span>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>

      <ListPost>
        <PostItem />
        <PostItem />
        <PostItem />
      </ListPost>
    </BlogContainer>
  )
}
