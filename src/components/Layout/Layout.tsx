import { Footer } from '../Footer'
import type { LayoutProps } from './Layout.types'
import './Layout-styles.css'
import { Header } from '../Header'

export function Layout({ children }: LayoutProps) {
  return (
    <div className="Layout-container">
      <Header />
      <main>
        <section>
          <div className="content-container">{children}</div>
          <div className="side-content"></div>
        </section>
        <div className="bottom-content"></div>
      </main>
      <Footer />
    </div>
  )
}
