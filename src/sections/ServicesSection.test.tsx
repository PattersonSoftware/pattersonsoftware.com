import { render, screen } from '@testing-library/react'
import ServicesSection from './ServicesSection'

const SERVICE_TITLES = [
  'Architecture',
  'Leadership',
  'Mentoring',
  'Strategy & Modernization',
  'AI Acceleration',
  'Knowledge Transfer',
]

describe('ServicesSection', () => {
  it('renders the Services heading', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('heading', { name: /^services$/i })).toBeInTheDocument()
  })

  it('renders all 6 service titles', () => {
    render(<ServicesSection />)
    for (const title of SERVICE_TITLES) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('does not render the old Strategy or Technology Leaps cards', () => {
    render(<ServicesSection />)
    expect(screen.queryByText(/^Strategy$/)).not.toBeInTheDocument()
    expect(screen.queryByText('Technology Leaps')).not.toBeInTheDocument()
  })

  it('describes AI agents in the AI Acceleration card', () => {
    render(<ServicesSection />)
    expect(screen.getByText(/AI coding agents/i)).toBeInTheDocument()
  })

  it('renders the services grid container', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('has section id of services', () => {
    const { container } = render(<ServicesSection />)
    expect(container.querySelector('section#services')).toBeInTheDocument()
  })
})
