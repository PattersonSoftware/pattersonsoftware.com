// Stacking order for layered UI, lowest to highest. Keep every z-index class here so new layers
// are placed deliberately: the sticky header sits below modal overlays, and the skip link sits
// above everything so it is visible when focused.
// Values must be complete class names (Tailwind only generates classes it finds written out), so
// apply them as-is rather than adding variant prefixes like `focus:` at runtime.
export const zIndex = {
  header: 'z-40',
  modal: 'z-50',
  skipLink: 'z-60',
} as const;
