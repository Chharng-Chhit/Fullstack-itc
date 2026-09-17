import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section>
      <p className="eyebrow">Route not found</p>
      <h1>That page does not exist.</h1>
      <Link className="primary-link" to="/">Go home</Link>
    </section>
  )
}

export default NotFoundPage
