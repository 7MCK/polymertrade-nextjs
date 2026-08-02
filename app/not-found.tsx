import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="notfound-wrap">
      <div>
        <h1>404</h1>
        <h2>This grade isn&apos;t listed</h2>
        <p>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn-primary">Back to PolymerTrade</Link>
      </div>
    </div>
  )
}
