// Anchor IDs for page sections and their nav labels. Sections take their `id` from here and the
// Header builds its links from `navSections`, so the two can't drift apart.
export const pageSections = {
  services: { id: 'services', navLabel: 'Services' },
  products: { id: 'products', navLabel: 'Products' },
  about: { id: 'about', navLabel: 'About' },
  contact: { id: 'contact', navLabel: 'Contact' },
} as const;

// Nav order matches page order.
export const navSections = [
  pageSections.services,
  pageSections.products,
  pageSections.about,
  pageSections.contact,
];
