import { Injectable } from "@nestjs/common";
import puppeteer from "puppeteer";
import { Item } from "./interfaces/Item";
import { categoryMatcher } from "./CategoryMatcher";
import { Npc } from "./interfaces/NPC";

@Injectable()
export class ScraperService {
  async getItemsFromWiki() {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto("https://terraria.wiki.gg/wiki/Item_IDs");

    const result = await page.evaluate((categoryMatcher) => {
      const array = [];
      document.querySelectorAll("table:nth-child(2)>tbody>tr").forEach((item) => {
        const id = item.firstElementChild.textContent;
        const name = item.children[1].textContent.toLowerCase();
        const internalName = item.lastElementChild.textContent;
        const link = "https://terraria.wiki.gg" + item.children[1].firstElementChild.getAttribute("href");
        let category: { group: string, name: string };

        let words = name.split(" ");
        category = (categoryMatcher[words[words.length - 1]]) ? categoryMatcher[words[words.length - 1]] : "";

        // build the object using Item interface
        const itemToPush: Item = { id: id, name: name, internalName: internalName, category: category, link: link };
        array.push(itemToPush);
      });
      return array;
    }, categoryMatcher);

    await browser.close();

    return result;
  }

  async getNPCsFromWiki() {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto("https://terraria.wiki.gg/wiki/NPC_IDs");

    const result = await page.evaluate(() => {
      const array = [];
      document.querySelectorAll(".terraria>tbody>tr").forEach((npc) => {
        const id = npc.firstElementChild?.textContent.trim() || 'undefined';
        const name = npc.children[1].firstElementChild.firstElementChild.firstElementChild?.textContent.toLowerCase() || 'undefined';
        const internalName = npc.lastElementChild.firstElementChild?.textContent || 'undefined';
        const image = `https://terraria.wiki.gg${npc.children[2].firstElementChild.firstElementChild.getAttribute("src")}`;
        const link = `https://terraria.wiki.gg${npc.children[1].firstElementChild.firstElementChild.firstElementChild.getAttribute("href")}`;

        // build the object using Npc interface
        const npcToPush: Npc = { id: id, name: name, internalName: internalName, image: image, link: link };
        array.push(npcToPush);
      });
      return array;
    });

    await browser.close();

    return result;
  }
}