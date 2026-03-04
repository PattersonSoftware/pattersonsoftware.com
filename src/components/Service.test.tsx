import { render, screen } from '@testing-library/react'
import Service from './Service'

describe('Service', () => {
  it('renders title and description', () => {
    render(<Service icon={<span />} title="Architecture" description="Build scalable systems." />)
    expect(screen.getByRole('heading')).toHaveTextContent('Architecture')
    expect(screen.getByRole('paragraph')).toHaveTextContent('Build scalable systems.')
  })

  it('renders the icon node', () => {
    const icon = <span data-testid="test-icon">Icon</span>
    render(<Service icon={icon} title="Leadership" description="Lead your team." />)
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
  })

  it('renders different titles and descriptions for different instances', () => {
    const { rerender } = render(
      <Service icon={<span />} title="Strategy" description="Plan for success." />,
    )
    expect(screen.getByRole('heading')).toHaveTextContent('Strategy')

    rerender(<Service icon={<span />} title="Mentoring" description="Grow your team." />)
    expect(screen.getByRole('heading')).toHaveTextContent('Mentoring')
  })
})
