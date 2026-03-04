import { render, screen } from '@testing-library/react'
import HeroSection from './HeroSection'

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading')).toHaveTextContent('Custom Solutions For Your Needs!')
  })

  it('renders the description paragraph', () => {
    render(<HeroSection />)
    expect(screen.getByRole('paragraph')).toBeInTheDocument()
  })

  it('renders the contact trigger button', () => {
    render(<HeroSection />)
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument()
  })
})
