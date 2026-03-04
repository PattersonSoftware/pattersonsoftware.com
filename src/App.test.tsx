import { render, screen } from '@testing-library/react'
import App from './App'

vi.mock('./components/Header', () => ({
  default: () => <div data-testid="mock-header" />,
}))
vi.mock('./components/Footer', () => ({
  default: () => <div data-testid="mock-footer" />,
}))
vi.mock('./sections/HeroSection', () => ({
  default: () => <div data-testid="mock-hero" />,
}))
vi.mock('./sections/ServicesSection', () => ({
  default: () => <div data-testid="mock-services" />,
}))
vi.mock('./sections/AboutSection', () => ({
  default: () => <div data-testid="mock-about" />,
}))
vi.mock('./sections/ContactSection', () => ({
  default: () => <div data-testid="mock-contact" />,
}))

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByTestId('mock-header')).toBeInTheDocument()
    expect(screen.getByTestId('mock-hero')).toBeInTheDocument()
    expect(screen.getByTestId('mock-services')).toBeInTheDocument()
    expect(screen.getByTestId('mock-about')).toBeInTheDocument()
    expect(screen.getByTestId('mock-contact')).toBeInTheDocument()
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument()
  })

  it('renders header before footer in document order', () => {
    render(<App />)
    const header = screen.getByTestId('mock-header')
    const footer = screen.getByTestId('mock-footer')
    expect(
      header.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })
})
