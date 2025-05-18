import Link from "next/link"

export default function AboutPage() {
  return (
    <div>
      <h1>About BetDrip</h1>
      <p>Your trusted resource for free daily sweepcoins.</p>

      <p>
        BetDrip was founded with a simple mission: to help online gamblers maximize their gaming experience by providing
        a comprehensive resource for collecting free daily sweepcoins from various online gambling platforms.
      </p>

      <h2>Our Values</h2>
      <ul>
        <li>
          <strong>Accuracy:</strong> We verify all sweepcoins offers before listing them.
        </li>
        <li>
          <strong>Transparency:</strong> We clearly disclose how to claim each offer.
        </li>
        <li>
          <strong>Community:</strong> We value user feedback to improve our service.
        </li>
        <li>
          <strong>Responsibility:</strong> We promote responsible gambling practices.
        </li>
      </ul>

      <Link href="/sites">Explore Sites</Link>
    </div>
  )
}
