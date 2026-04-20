import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/homePage';

test.describe('Navegação para artigos', () => {
  test('Deve redirecionar para o artigo correto', async ({ page }) => {
    await page.goto('/');

    const data = {
      title: 'A história do mascote do Android',
      endpoint: '/artigo/a-historia-do-bugdroid'
    }

    const onHomePage = new HomePage(page);

    await onHomePage.navigateToArticle(data.title);

    await expect(page).toHaveURL(data.endpoint);
    await expect(page.locator('article h2')).toHaveText(data.title);
  });
})
