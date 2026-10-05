import { site, yearsOfExperience } from './siteConfig';

describe('yearsOfExperience', () => {
  it('counts whole years since the career start year', () => {
    expect(yearsOfExperience(new Date(2026, 0, 1))).toBe(2026 - site.careerStartYear);
  });

  it('increases as time passes', () => {
    expect(yearsOfExperience(new Date(2030, 5, 1))).toBe(
      yearsOfExperience(new Date(2029, 5, 1)) + 1,
    );
  });
});
