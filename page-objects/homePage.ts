import { Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async navigateToArticle(title:string) {
        const articleItem = this.page.getByTitle(title);
        await articleItem.click();
    }
}