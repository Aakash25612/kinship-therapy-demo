import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Users, Video } from 'lucide-react'

export default function Landing() {
  return (
    <div className="landing">
      <section className="landing-hero">
        <div className="landing-sky" aria-hidden="true" />
        <header className="landing-top">
          <span className="brand"><span className="brand-dot"><Users size={16} /></span> Kinship</span>
          <Link to="/login" className="btn btn-outline btn-sm">Sign in</Link>
        </header>
        <div className="landing-copy">
          <h1>Kinship</h1>
          <p>
            Culturally connected virtual therapy — membership care that matches clients with therapists who understand their world.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn btn-primary">
              Open app demo <ArrowRight size={16} />
            </Link>
            <a href="#roles" className="btn btn-outline">See roles</a>
          </div>
        </div>
      </section>

      <section className="landing-body" id="roles">
        <div className="page-head">
          <div className="eyebrow">Three roles</div>
          <h2 style={{ fontSize: 32 }}>One product, three experiences</h2>
          <p>Resize your browser — mobile uses an app shell with tab bar; desktop uses a full console layout.</p>
        </div>
        <div className="role-grid">
          <article className="role-card">
            <Users size={20} color="var(--accent)" />
            <h3>Client</h3>
            <p>Membership, matching questions, booking, virtual sessions, payments, and alerts.</p>
          </article>
          <article className="role-card">
            <Video size={20} color="var(--accent)" />
            <h3>Therapist</h3>
            <p>Profile & credentials, availability, accept/decline appointments, and join sessions.</p>
          </article>
          <article className="role-card">
            <Shield size={20} color="var(--accent)" />
            <h3>Admin</h3>
            <p>People, matching queue, appointments, Stripe-style payments, refunds, and reports.</p>
          </article>
        </div>
      </section>
    </div>
  )
}
