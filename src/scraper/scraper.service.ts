import { Injectable } from "@nestjs/common";
import puppeteer from "puppeteer";
import { Item } from "./Item";
import { categoryMatcher } from "./CategoryMatcher";

@Injectable()
export class ScraperService {
  async getWikiPage() {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://terraria.wiki.gg/wiki/Item_IDs');

    const result = await page.evaluate((categoryMatcher) => {
      let array = [];
      document.querySelectorAll("table:nth-child(2)>tbody>tr").forEach((item) => {
        const id = item.firstElementChild.textContent;
        const name = item.children[1].textContent.toLowerCase();
        const internalName = item.lastElementChild.textContent;
        let category: string;

        let words = name.split(" ");
        category = (categoryMatcher[words[words.length-1]]) ? categoryMatcher[words[words.length-1]] : "";

        // build the object using Item interface
        const itemToPush: Item = {id: id, name: name, internalName: internalName, category: category};
        array.push(itemToPush);
      });
      return array;
    }, categoryMatcher);

    console.log(categoryMatcher);

    await browser.close();

    return result;
  }
}