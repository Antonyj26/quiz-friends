import './Contact-styles.css'

export function Contact() {
  return (
    <div className="Contact-container">
      <h1>Contato</h1>
      <form>
        <fieldset>
          <label className="subject-wrapper">
            Assunto
            <input
              type="text"
              placeholder="Digite aqui o assunto da sua mensagem"
            />
          </label>
          <label className="text-wrapper">
            Texto
            <textarea placeholder="Digite aqui sua mensagem" />
          </label>
        </fieldset>
      </form>
    </div>
  )
}
