import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider, useApp } from './context/AppContext'
import AppShell from './components/AppShell'
import Landing from './pages/Landing'
import Login from './pages/Login'
import ClientHome from './pages/client/Home'
import Book from './pages/client/Book'
import Membership from './pages/client/Membership'
import Alerts from './pages/client/Alerts'
import TherapistHome from './pages/therapist/Home'
import Clients from './pages/therapist/Clients'
import Availability from './pages/therapist/Availability'
import TherapistAppts from './pages/therapist/Appointments'
import AdminHome from './pages/admin/Home'
import People from './pages/admin/People'
import Matching from './pages/admin/Matching'
import AdminAppts from './pages/admin/Appointments'
import Payments from './pages/admin/Payments'
import Reports from './pages/admin/Reports'
import Sessions from './pages/shared/Sessions'

function PrivateRoute({ children, roles }) {
  const { user } = useApp()
  if (!user) return <Navigate to="/login" replace />
  if (roles && !roles.includes(user.role)) return <Navigate to="/app" replace />
  return children
}

function RoleHome() {
  const { user } = useApp()
  if (user.role === 'therapist') return <TherapistHome />
  if (user.role === 'admin') return <AdminHome />
  return <ClientHome />
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/app"
            element={(
              <PrivateRoute>
                <AppShell />
              </PrivateRoute>
            )}
          >
            <Route index element={<RoleHome />} />
            <Route path="book" element={<PrivateRoute roles={['client']}><Book /></PrivateRoute>} />
            <Route path="membership" element={<PrivateRoute roles={['client']}><Membership /></PrivateRoute>} />
            <Route path="alerts" element={<PrivateRoute roles={['client']}><Alerts /></PrivateRoute>} />
            <Route path="clients" element={<PrivateRoute roles={['therapist']}><Clients /></PrivateRoute>} />
            <Route path="availability" element={<PrivateRoute roles={['therapist']}><Availability /></PrivateRoute>} />
            <Route path="appointments" element={<AppointmentsRouter />} />
            <Route path="sessions" element={<PrivateRoute roles={['client', 'therapist']}><Sessions /></PrivateRoute>} />
            <Route path="people" element={<PrivateRoute roles={['admin']}><People /></PrivateRoute>} />
            <Route path="matching" element={<PrivateRoute roles={['admin']}><Matching /></PrivateRoute>} />
            <Route path="payments" element={<PrivateRoute roles={['admin']}><Payments /></PrivateRoute>} />
            <Route path="reports" element={<PrivateRoute roles={['admin']}><Reports /></PrivateRoute>} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

function AppointmentsRouter() {
  const { user } = useApp()
  if (user.role === 'admin') return <AdminAppts />
  if (user.role === 'therapist') return <TherapistAppts />
  return <Navigate to="/app" replace />
}
