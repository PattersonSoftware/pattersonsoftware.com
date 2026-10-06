import { render, screen, within } from '@testing-library/react';
import App from './App';

// Renders the real page (no mocks) to check wiring between components.
describe('App integration', () => {
  it('every nav link points at a section that exists', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    const links = within(nav).getAllByRole('link');
    const sectionLinks = links.filter((link) => link.getAttribute('href') !== '#top');
    expect(sectionLinks.length).toBeGreaterThan(0);
    for (const link of sectionLinks) {
      const id = link.getAttribute('href')!.slice(1);
      expect(document.getElementById(id), `missing #${id}`).toBeInstanceOf(HTMLElement);
    }
  });
});
