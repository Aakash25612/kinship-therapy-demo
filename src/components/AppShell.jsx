import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  Bell,
  Calendar,
  CreditCard,
  Home,
  LayoutDashboard,
  LogOut,
  Users,
  Video,
  ClipboardList,
  UserRound,
  Shield,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const navByRole = {
  client: [
    { to: '/app', label: 'Home', icon: Home, end: true },
    { to: '/app/book', label: 'Book', icon: Calendar },
    { to: '/app/sessions', label: 'Sessions', icon: Video },
    { to: '/app/membership', label: 'Plan', icon: CreditCard },
    { to: '/app/alerts', label: 'Alerts', icon: Bell },
  ],
  therapist: [
    { to: '/app', label: 'Home', icon: Home, end: true },
    { to: '/app/clients', label: 'Clients', icon: Users },
    { to: '/app/availability', label: 'Hours', icon: Calendar },
    { to: '/app/appointments', label: 'Appts', icon: ClipboardList },
    { to: '/app/sessions', label: 'Sessions', icon: Video },
  ],
  admin: [
    { to: '/app', label: 'Overview', icon: LayoutDashboard, end: true },
    { to: '/app/people', label: 'People', icon: Users },
    { to: '/app/matching', label: 'Match', icon: UserRound },
    { to: '/app/appointments', label: 'Appts', icon: ClipboardList },
    { to: '/app/payments', label: 'Pay', icon: CreditCard },
    { to: '/app/reports', label: 'Reports', icon: Shield },
  ],
}

const titles = {
  client: 'Kinship',
  therapist: 'Therapist',
  admin: 'Admin',
}

export default function AppShell() {
  const { user, logout } = useApp()
  const navigate = useNavigate()
  const links = navByRole[user.role] || []

  function signOut() {
    logout()
    navigate('/')
  }

  return (
    <div className="app-root">
      <aside className="desktop-sidebar">
        <div className="desktop-brand">
          <span className="brand-dot"><UserRound size={16} /></span>
          Kinship
        </div>
        <nav className="desktop-nav">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'desk-link active' : 'desk-link')}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="desk-user">
          <div>
            <strong>{user.name}</strong>
            <span>{user.role}</span>
          </div>
          <button type="button" className="btn btn-sm btn-secondary" onClick={signOut} aria-label="Sign out">
            <LogOut size={14} />
          </button>
        </div>
      </aside>

      <div className="app-stage">
        <header className="mobile-topbar">
          <div>
            <div className="status-pills" aria-hidden="true"><i /><i /><i /></div>
            <h1>{titles[user.role]}</h1>
          </div>
          <button type="button" className="btn btn-sm btn-secondary" onClick={signOut} aria-label="Sign out">
            <LogOut size={14} />
          </button>
        </header>

        <div className="workspace">
          <Outlet />
        </div>

        <nav className="mobile-tabbar">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'tab-link active' : 'tab-link')}>
              <Icon />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
