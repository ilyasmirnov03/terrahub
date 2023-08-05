export interface Item {
  id: string;
  name: string;
  internalName: string;
  category: {
    group: string,
    name: string
  };
  link: string | null;
  version: string | null;
  image: string | null;
}
