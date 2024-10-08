import { useLocation } from 'react-router-dom'
import './Header-styles.css'
import { Button } from '../Button'

type HeaderLink = {
  link: string
  name: string
  type: 'link' | 'button'
}

const headerLinks: HeaderLink[] = [
  { link: '/', name: 'Home', type: 'link' },
  { link: '/contact', name: 'Contato', type: 'link' },
  { link: '/about', name: 'Sobre', type: 'link' },
  { link: '/create-quiz', name: 'Criar seu Quiz', type: 'button' },
]

export function Header() {
  const { pathname } = useLocation()

  return (
    <header className="Header-container">
      <h1>Quiz Friends</h1>
      {headerLinks.map((headerLink, index) => {
        if (headerLink.type == 'button') {
          return (
            <a key={index} href={headerLink.link}>
              <Button
                text={headerLink.name}
                variant={pathname == headerLink.link ? 'secondary' : 'primary'}
                action={() => console.log('Clicou no botão')}
              />
            </a>
          )
        }
        return (
          <a
            key={index}
            href={headerLink.link}
            className={pathname === headerLink.link ? 'active' : ''}
          >
            {headerLink.name}
          </a>
        )
      })}
    </header>
  )
}
