import {routes} from "./routes.const";

/**
 * Header navigation routes, extends routes constant.
 * Used in the header.
 */
export const headerNavigation = [
  {
    path: '/',
    name: 'Main'
  },
  ...routes
] as const;
