import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:postId" element={<Post />} />
      </Route>
    </Routes>
  )
}
