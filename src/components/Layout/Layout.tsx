import { Footer } from '../Footer'
import type { LayoutProps } from './Layout.types'
import './Layout-styles.css'

export function Layout({ children }: LayoutProps) {
  return (
    <div className="Layout-container">
      <h1>Header</h1>
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
