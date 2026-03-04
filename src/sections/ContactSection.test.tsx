import { render, screen } from '@testing-library/react'
import ContactSection from './ContactSection'

describe('ContactSection', () => {
  it("renders the Let's Work Together heading", () => {
    render(<ContactSection />)
    expect(screen.getByRole('heading')).toHaveTextContent("Let's Work Together")
  })

  it('has section id of contact', () => {
    const { container } = render(<ContactSection />)
    expect(container.querySelector('section#contact')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<ContactSection />)
    expect(screen.getByRole('paragraph')).toBeInTheDocument()
  })

  it('renders the contact trigger button', () => {
    render(<ContactSection />)
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument()
  })
})
