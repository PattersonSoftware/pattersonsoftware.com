import { render, screen, within } from '@testing-library/react';
import App from './App';

// Renders the real page (no mocks) to check wiring between components.
describe('App integration', () => {
  // The section IDs the main nav links to, in nav order (the logo's "#top" link is excluded).
  function navTargetIds(): string[] {
    const nav = screen.getByRole('navigation', { name: 'Main' });
    return within(nav)
      .getAllByRole('link')
      .map((link) => link.getAttribute('href')!)
      .filter((href) => href !== '#top')
      .map((href) => href.slice(1));
  }

  it('every nav link points at a section that exists', () => {
    render(<App />);
    const ids = navTargetIds();
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) {
      expect(document.getElementById(id), `nav link has no #${id} section`).toBeInstanceOf(
        HTMLElement,
      );
    }
  });

  it('main contains only sections, so the alternating-sections backgrounds stay in step', () => {
    render(<App />);
    const children = Array.from(screen.getByRole('main').children);
    expect(children.length).toBeGreaterThan(1);
    expect(children.map((child) => child.tagName)).toEqual(children.map(() => 'SECTION'));
  });

  it('nav links are in the same order as their sections on the page', () => {
    render(<App />);
    const ids = navTargetIds();
    const sectionIdsInPageOrder = Array.from(document.querySelectorAll('section[id]'))
      .map((section) => section.id)
      .filter((id) => ids.includes(id));
    expect(ids).toEqual(sectionIdsInPageOrder);
  });
});
