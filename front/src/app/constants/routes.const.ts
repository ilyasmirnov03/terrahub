/**
 * Array of paths that are accessible in the application.
 * Used to render landing menu.
 */
export const routes = [
  {
    path: '/items',
    name: 'Items'
  },
  {
    path: '/items/collection',
    name: 'Collection'
  },
  {
    path: '/npcs',
    name: 'NPCs'
  },
  {
    path: '/about',
    name: 'About'
  },
] as const;
