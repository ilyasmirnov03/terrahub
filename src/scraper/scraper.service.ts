import { Injectable } from "@nestjs/common";
import puppeteer from "puppeteer";
import { Item } from "../interfaces/Item";
import { categoryMatcher } from "./CategoryMatcher";
import { Npc } from "../interfaces/NPC";

@Injectable()
export class ScraperService {
  private async getCategory(page, link): Promise<{
    version: string | null,
    category: any
  }> {
    try {
      await page.goto(link);
    } catch (err) {
      console.log(err);
      console.log(link);
      return {
        version: null,
        category: null
      };
    }
    return page.evaluate(() => {
      const versionName = Array.from(document.querySelectorAll("a[title^=\"Desktop\"].mw-redirect")).pop()?.textContent || null;
      const version = versionName === "Desktop-Release" ? "1.0" : versionName?.split(" ")[1] || null;
      return {
        version: version,
        category: document.querySelectorAll(".tag")[0]?.firstElementChild?.textContent ||
          document.querySelectorAll(".tag")[0]?.textContent || null
      };
    });
  }

  public async getItemsFromWiki() {
    const browser = await puppeteer.launch({ headless: "new" });

    const page = await browser.newPage();

    await page.goto("https://terraria.wiki.gg/wiki/Item_IDs");

    const result = await page.evaluate((categoryMatcher) => {
      const array = [];
      document.querySelectorAll("table:nth-child(2)>tbody>tr").forEach(async (item) => {
        const id = item.firstElementChild.textContent;
        const name = item.children[1].textContent.toLowerCase();
        const internalName = item.lastElementChild.textContent;
        const link = item.children[1].firstElementChild.getAttribute("href");
        const completeLink = link ? `https://terraria.wiki.gg${link}` : null;

        const words = name.split(" ");
        const category: {
          group: string,
          name: string
        } = categoryMatcher[words[words.length - 1]] ? categoryMatcher[words[words.length - 1]] : {group: '', name: ''};

        // build the object using Item interface
        const itemToPush: Item = {
          id: id,
          name: name,
          internalName: internalName,
          category,
          version: "",
          link: completeLink
        };
        array.push(itemToPush);
      });
      return array;
    }, categoryMatcher);

    for (const item of result) {
      if (item.link !== null) {
        const result = await this.getCategory(page, item.link);
        if (item.category.name == '') {
          item.category = {
            group: "",
            name: result.category
          };
        }
        item.version = result.version;
      }
    }

    await browser.close();

    return result;
  }

  public async getNPCsFromWiki() {
    const browser = await puppeteer.launch({ headless: "new" });

    const page = await browser.newPage();

    await page.goto("https://terraria.wiki.gg/wiki/NPC_IDs");

    const result = await page.evaluate(() => {
      const array = [];
      document.querySelectorAll(".terraria>tbody>tr").forEach((npc) => {
        const id = npc.firstElementChild?.textContent.trim() || "undefined";
        const name = npc.children[1].firstElementChild.firstElementChild.firstElementChild?.textContent.toLowerCase() || "undefined";
        const internalName = npc.lastElementChild.firstElementChild?.textContent || "undefined";
        const image = `https://terraria.wiki.gg${npc.children[2].firstElementChild.firstElementChild.getAttribute("src")}`;
        const link = `https://terraria.wiki.gg${npc.children[1].firstElementChild.firstElementChild.firstElementChild.getAttribute("href")}`;

        // build the object using Npc interface
        const npcToPush: Npc = {
          id,
          name,
          internalName,
          image,
          link,
          version: "",
          category: {
            group: "",
            name: ""
          }
        };
        array.push(npcToPush);
      });
      return array;
    });

    for (const npc of result) {
      if (npc.link !== null) {
        const result = await this.getCategory(page, npc.link);
        npc.category = {
          group: "",
          name: result.category
        };
        npc.version = result.version;
      }
    }

    await browser.close();

    return result;
  }
}