export interface Item {
  id: string;
  name: string;
  internalName: string;
  category: {
    group: string,
    name: string
  } | null;
  link: string | null;
  version: string | null;
}
