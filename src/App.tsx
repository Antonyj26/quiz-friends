import './App.css'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <div>Sobre</div>
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: <div>Contato</div>,
  },
  {
    path: '/quiz',
    element: <div>Quiz</div>,
  },
  {
    path: '/create-quiz',
    element: <div>Cria Quiz</div>,
  },
])

function App() {
  return (
    <div className="root-container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
