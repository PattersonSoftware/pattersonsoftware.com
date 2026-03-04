import { render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'

describe('AboutSection', () => {
  it('renders the About heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading')).toHaveTextContent('About')
  })

  it('has section id of about', () => {
    const { container } = render(<AboutSection />)
    expect(container.querySelector('section#about')).toBeInTheDocument()
  })

  it('renders the article element', () => {
    render(<AboutSection />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })

  it('contains company experience text', () => {
    render(<AboutSection />)
    expect(screen.getByText(/16 years/i)).toBeInTheDocument()
  })

  it('mentions Patterson Software', () => {
    render(<AboutSection />)
    expect(screen.getByText(/Patterson Software/i)).toBeInTheDocument()
  })
})
