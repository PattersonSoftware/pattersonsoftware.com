import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'

describe('Contact', () => {
  it('renders trigger button with default text', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /contact me/i })).toBeInTheDocument()
  })

  it('renders trigger button with custom text', () => {
    render(<Contact buttonText="Hire Me" />)
    expect(screen.getByRole('button', { name: /hire me/i })).toBeInTheDocument()
  })

  it('dialog is not visible initially', () => {
    render(<Contact />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens dialog when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(<Contact dialogTitle="Get In Touch" />)
    await user.click(screen.getByRole('button', { name: /contact me/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('shows dialog description text', async () => {
    const user = userEvent.setup()
    render(<Contact dialogText="Let's work together." />)
    await user.click(screen.getByRole('button', { name: /contact me/i }))
    expect(screen.getByText("Let's work together.")).toBeInTheDocument()
  })

  it('shows email link with correct mailto href', async () => {
    const user = userEvent.setup()
    render(<Contact contactEmail="test@example.com" />)
    await user.click(screen.getByRole('button', { name: /contact me/i }))
    const link = screen.getByRole('link', { name: /test@example.com/i })
    expect(link).toHaveAttribute('href', 'mailto:test@example.com')
  })

  it('closes dialog when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /contact me/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close/i }))
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('uses default props when none are provided', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /contact me/i }))
    // Dialog title is the h2 inside the dialog
    expect(screen.getByRole('heading', { name: 'Contact Me' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /inquiries@pattersonsoftware\.com/i }),
    ).toHaveAttribute('href', 'mailto:inquiries@pattersonsoftware.com')
  })
})
