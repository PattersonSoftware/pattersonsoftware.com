import { render, screen } from '@testing-library/react';
import App from './App';

vi.mock('./components/Header', () => ({
  default: () => <header data-testid="mock-header" />,
}));
vi.mock('./components/Footer', () => ({
  default: () => <footer data-testid="mock-footer" />,
}));
vi.mock('./sections/HeroSection', () => ({
  default: () => <div data-testid="mock-hero" />,
}));
vi.mock('./sections/ServicesSection', () => ({
  default: () => <div data-testid="mock-services" />,
}));
vi.mock('./sections/AboutSection', () => ({
  default: () => <div data-testid="mock-about" />,
}));
vi.mock('./sections/ContactSection', () => ({
  default: () => <div data-testid="mock-contact" />,
}));

describe('App', () => {
  it('places every content section inside the main landmark, in order', () => {
    render(<App />);
    const main = screen.getByRole('main');
    const sections = ['mock-hero', 'mock-services', 'mock-about', 'mock-contact'].map((id) =>
      screen.getByTestId(id),
    );
    for (const section of sections) expect(main).toContainElement(section);
    for (let i = 1; i < sections.length; i++) {
      expect(
        sections[i - 1].compareDocumentPosition(sections[i]) & Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    }
  });

  it('renders the header and footer outside main', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).not.toContainElement(screen.getByTestId('mock-header'));
    expect(main).not.toContainElement(screen.getByTestId('mock-footer'));
  });

  it('provides a skip link to the main content', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main',
    );
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main');
  });
});
