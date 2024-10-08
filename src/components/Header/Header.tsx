import { useLocation } from 'react-router-dom'
import './Header-styles.css'

type HeaderLink = {
  link: string
  name: string
}

const headerLinks: HeaderLink[] = [
  { link: '/', name: 'Home' },
  { link: '/contact', name: 'Contato' },
  { link: '/about', name: 'Sobre' },
  { link: '/create-quiz', name: 'Criar seu Quiz' },
]

export function Header() {
  const { pathname } = useLocation()

  return (
    <header className="Header-container">
      <h1>Quiz Friends</h1>
      {headerLinks.map((headerLink, index) => (
        <a
          key={index}
          href={headerLink.link}
          className={pathname === headerLink.link ? 'active' : ''}
        >
          {headerLink.name}
        </a>
      ))}
    </header>
  )
}
