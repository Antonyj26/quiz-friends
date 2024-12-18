import './App.css'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { QuizPage } from './components/QuizPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QuestionsForm } from './components/QuestionsForm'
import { Toaster } from 'react-hot-toast'

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
        <About />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: '/quiz',
    element: (
      <Layout>
        <QuizPage />
      </Layout>
    ),
  },
  {
    path: '/create-quiz',
    element: (
      <Layout>
        <QuestionsForm />
      </Layout>
    ),
  },
])

function App() {
  return (
    <div className="root-container">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  )
}

export default App
