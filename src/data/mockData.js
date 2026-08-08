export const users = [
  {
    id: 'c1',
    role: 'client',
    name: 'Amira Hassan',
    email: 'client@kinship.demo',
    password: 'demo123',
    membership: 'Monthly Care',
    membershipStatus: 'active',
    matchStatus: 'matched',
    therapistId: 't1',
    cultureTags: ['Middle Eastern', 'Arabic-speaking', 'Muslim-aware'],
  },
  {
    id: 'th1',
    role: 'therapist',
    name: 'Dr. Laila Rahman',
    email: 'therapist@kinship.demo',
    password: 'demo123',
    credentials: ['Licensed LPC', 'Trauma-informed', 'Cultural humility training'],
    specialties: ['Anxiety', 'Identity', 'Family stress'],
    verified: true,
  },
  {
    id: 'a1',
    role: 'admin',
    name: 'Jordan Blake',
    email: 'admin@kinship.demo',
    password: 'demo123',
  },
]

export const therapists = [
  {
    id: 't1',
    name: 'Dr. Laila Rahman',
    specialties: ['Anxiety', 'Identity', 'Family stress'],
    cultures: ['South Asian', 'Muslim-aware', 'Immigrant families'],
    languages: ['EN', 'UR'],
    rating: 4.9,
    clients: 18,
  },
  {
    id: 't2',
    name: 'Marcus Okonkwo',
    specialties: ['Burnout', 'Depression', 'Men’s groups'],
    cultures: ['West African', 'Black diaspora'],
    languages: ['EN', 'YO'],
    rating: 4.8,
    clients: 14,
  },
  {
    id: 't3',
    name: 'Sofia Alvarez',
    specialties: ['Trauma', 'Relationships', 'Acculturation'],
    cultures: ['Latinx', 'Bilingual ES/EN'],
    languages: ['EN', 'ES'],
    rating: 4.9,
    clients: 22,
  },
]

export const appointments = [
  { id: 'ap1', client: 'Amira Hassan', therapist: 'Dr. Laila Rahman', when: '2026-08-10 10:00', status: 'confirmed', type: 'Video' },
  { id: 'ap2', client: 'Kenji Sato', therapist: 'Marcus Okonkwo', when: '2026-08-10 14:30', status: 'pending', type: 'Video' },
  { id: 'ap3', client: 'Maya Ortiz', therapist: 'Sofia Alvarez', when: '2026-08-11 09:00', status: 'confirmed', type: 'Video' },
  { id: 'ap4', client: 'Amira Hassan', therapist: 'Dr. Laila Rahman', when: '2026-08-17 10:00', status: 'requested', type: 'Video' },
]

export const payments = [
  { id: 'p1', member: 'Amira Hassan', type: 'Subscription', amount: 89, status: 'paid', date: '2026-08-01' },
  { id: 'p2', member: 'Kenji Sato', type: 'Intro fee', amount: 49, status: 'paid', date: '2026-08-04' },
  { id: 'p3', member: 'Maya Ortiz', type: 'Subscription', amount: 89, status: 'refunded', date: '2026-07-28' },
  { id: 'p4', member: 'Daniel Cho', type: 'Subscription', amount: 89, status: 'failed', date: '2026-08-06' },
]

export const matchingQueue = [
  { id: 'm1', client: 'Priya Nair', preferences: 'South Asian · Hindi · Women therapist', status: 'awaiting match' },
  { id: 'm2', client: 'Omar Farouk', preferences: 'Arabic · Faith-aware · Anxiety', status: 'in review' },
  { id: 'm3', client: 'Amira Hassan', preferences: 'Arabic · Muslim-aware · Identity', status: 'matched' },
]

export const notifications = [
  { id: 'n1', text: 'Your session with Dr. Laila is tomorrow at 10:00', time: '2h ago', unread: true },
  { id: 'n2', text: 'Membership renewed for August', time: '1d ago', unread: true },
  { id: 'n3', text: 'Matching complete — meet your therapist', time: '3d ago', unread: false },
]

export const availability = [
  { day: 'Mon', slots: ['10:00', '11:00', '15:00'] },
  { day: 'Tue', slots: ['09:30', '13:00'] },
  { day: 'Wed', slots: ['10:00', '16:00', '17:00'] },
  { day: 'Thu', slots: ['11:00'] },
  { day: 'Fri', slots: ['09:00', '10:00', '14:00'] },
]

export const matchQuestions = [
  'Which cultural communities feel most important in your care?',
  'Preferred therapist languages?',
  'What are you hoping to work on first?',
  'Faith or worldview considerations?',
]
