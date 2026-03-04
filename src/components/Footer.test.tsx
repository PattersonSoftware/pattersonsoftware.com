import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders copyright with current year', () => {
    const year = new Date().getFullYear()
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(`© ${year} Patterson Software, LLC\\. All rights reserved\\.`)),
    ).toBeInTheDocument()
  })

  it('renders a footer element', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
