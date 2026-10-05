// Single source of truth for business facts that appear in more than one place.
export const site = {
  name: 'Patterson Software',
  legalName: 'Patterson Software, LLC',
  foundedYear: 2022,
  // Used to compute years of experience so the About copy never goes stale.
  careerStartYear: 2009,
  contactEmail: 'inquiries@pattersonsoftware.com',
} as const;

export function yearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - site.careerStartYear;
}
