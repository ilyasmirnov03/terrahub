export interface Item {
  id: string;
  name: string;
  internalName: string;
  category: {
    group: string,
    name: string
  };
  link: string;
}
