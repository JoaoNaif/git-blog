import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Repos } from '../@types/repos'
import { api } from '../lib/axios'

interface RepositoryContextType {
  repositories: Repos[]
  fetchRepository: (query?: string) => Promise<void>
}

interface RepositoryProviderProps {
  children: ReactNode
}

export const RepositoryContext = createContext({} as RepositoryContextType)

export function RepositoryProvider({ children }: RepositoryProviderProps) {
  const [repositories, setRepositories] = useState<Repos[]>([])

  const fetchRepository = useCallback(async (query?: string) => {
    const response = await api.get('/repos', {
      params: {
        q: query,
      },
    })

    setRepositories(response.data)
  }, [])

  useEffect(() => {
    fetchRepository()
  }, [fetchRepository])

  return (
    <RepositoryContext.Provider value={{ repositories, fetchRepository }}>
      {children}
    </RepositoryContext.Provider>
  )
}
