import { Injectable } from "@nestjs/common";
import { GroupedItems } from "../interfaces/GroupedItems";
@Injectable()
export class CategoriesService {
  constructor() {
  }

  public getGroupedItems(result: any) {
    result.splice(result.indexOf(""), 1);

    const groupedItems: GroupedItems[] = [];

    for (const item of result) {
      const group = item.group;
      const name = item.name;

      // find index of group, -1 if no group
      const i = groupedItems.findIndex((items) => items.group === group);

      // if the group exists, push new name to it
      if (i !== -1) {
        groupedItems[i].names.push(name);
      } else {
        // else, create a new group object
        groupedItems.push({ group: group, names: [name] });
      }
    }

    return groupedItems;
  }

}
