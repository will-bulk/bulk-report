export interface Author {
  id: string
  name: string
  title: string
  bio: string
  avatar: string
}

export const authors: Record<string, Author> = {
  'sarah-mitchell': {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    title: 'Senior Trucking Reporter',
    bio: 'Sarah Mitchell has covered the bulk freight industry for over 12 years. Previously at Transport Topics and Overdrive, she specializes in fleet operations, driver workforce issues, and the evolving regulatory landscape affecting bulk haulers across North America.',
    avatar: '/avatars/sm.jpg',
  },
  'james-kowalski': {
    id: 'james-kowalski',
    name: 'James Kowalski',
    title: 'Markets & Commodities Editor',
    bio: 'James Kowalski brings 15 years of commodity markets experience to Bulk Report. A former grain trader turned journalist, he provides deep analysis on freight rates, agricultural commodities, and the economic forces shaping bulk transportation.',
    avatar: '/avatars/jk.jpg',
  },
  'maria-gonzalez': {
    id: 'maria-gonzalez',
    name: 'Maria Gonzalez',
    title: 'Technology Correspondent',
    bio: 'Maria Gonzalez covers the intersection of technology and logistics. With a background in software engineering and a passion for supply chain innovation, she reports on TMS platforms, AI applications, and the digital transformation of freight.',
    avatar: '/avatars/mg.jpg',
  },
  'david-chen': {
    id: 'david-chen',
    name: 'David Chen',
    title: 'Regulatory Affairs Reporter',
    bio: 'David Chen has tracked federal and state transportation policy for a decade. Based in Washington, D.C., he covers FMCSA rulemaking, DOT enforcement trends, and the compliance challenges facing the bulk hauling sector.',
    avatar: '/avatars/dc.jpg',
  },
  'rachel-turner': {
    id: 'rachel-turner',
    name: 'Rachel Turner',
    title: 'Editor-in-Chief',
    bio: 'Rachel Turner is the founding editor of Bulk Report. With 20 years in trade journalism and a deep network across the bulk freight ecosystem, she sets the editorial direction and contributes opinion pieces on the industry\'s biggest challenges.',
    avatar: '/avatars/rt.jpg',
  },
}

export const authorList = Object.values(authors)
