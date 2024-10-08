import { useContext, useState } from 'react'
import { Perfil } from './components/Perfil'
import { BlogContainer, ListPost, SearchContainer } from './styles'
import { RepositoryContext } from '../../context/RepositoryContext'
import { PostItem } from './components/PostItem'

export function Blog() {
  const { repositories } = useContext(RepositoryContext)
  const [search, setSearch] = useState('')

  const filterRepos = repositories.filter((i) => i.name.includes(search))

  return (
    <BlogContainer>
      <Perfil />

      <SearchContainer>
        <span>
          <h3>Publicações</h3>
          <p>6 publicações</p>
        </span>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </SearchContainer>

      <ListPost>
        {filterRepos.map((item) => (
          <PostItem key={item.id} repository={item} />
        ))}
      </ListPost>
    </BlogContainer>
  )
}
