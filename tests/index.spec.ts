import { test, expect } from '@playwright/test';

test.describe('navegação para artigos', () => {
  test('direciona para o artigo correto ao clicar no título', async ({ page }) => {
  await page.goto('/');

  const articleItem = page.getByTitle('A história do mascote do Android');
  await articleItem.click();
  
  await expect(page).toHaveURL('/artigo/a-historia-do-bugdroid');
});
})
