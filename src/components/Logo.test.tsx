import { render, screen } from '@testing-library/react'
import Logo from './Logo'

describe('Logo', () => {
  it('renders with correct alt text', () => {
    render(<Logo />)
    expect(screen.getByAltText('Patterson Software, LLC')).toBeInTheDocument()
  })

  it('uses default width and height', () => {
    render(<Logo />)
    const img = screen.getByAltText('Patterson Software, LLC')
    expect(img).toHaveAttribute('width', '225')
    expect(img).toHaveAttribute('height', '100')
  })

  it('accepts custom width and height', () => {
    render(<Logo width={150} height={50} />)
    const img = screen.getByAltText('Patterson Software, LLC')
    expect(img).toHaveAttribute('width', '150')
    expect(img).toHaveAttribute('height', '50')
  })

  it('accepts custom className', () => {
    render(<Logo className="my-logo" />)
    expect(screen.getByAltText('Patterson Software, LLC')).toHaveClass('my-logo')
  })

  it('renders an img element with a src', () => {
    render(<Logo />)
    const img = screen.getByAltText('Patterson Software, LLC')
    expect(img.getAttribute('src')).toBeTruthy()
  })
})
