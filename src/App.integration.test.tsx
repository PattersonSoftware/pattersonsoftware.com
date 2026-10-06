import { render, screen, within } from '@testing-library/react';
import App from './App';

// Renders the real page (no mocks) to check wiring between components.
describe('App integration', () => {
  function navTargets(): HTMLElement[] {
    const nav = screen.getByRole('navigation', { name: 'Main' });
    const sectionLinks = within(nav)
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href') !== '#top');
    expect(sectionLinks.length).toBeGreaterThan(0);
    return sectionLinks.map((link) => {
      const id = link.getAttribute('href')!.slice(1);
      const target = document.getElementById(id);
      expect(target, `nav link has no #${id} section`).toBeInstanceOf(HTMLElement);
      return target!;
    });
  }

  it('every nav link points at a section that exists', () => {
    render(<App />);
    navTargets();
  });

  it('nav links are in the same order as their sections on the page', () => {
    render(<App />);
    const targets = navTargets();
    for (let i = 1; i < targets.length; i++) {
      const follows =
        targets[i - 1].compareDocumentPosition(targets[i]) & Node.DOCUMENT_POSITION_FOLLOWING;
      expect(follows, `#${targets[i].id} should come after #${targets[i - 1].id}`).toBeTruthy();
    }
  });
});
