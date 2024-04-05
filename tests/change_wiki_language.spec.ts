import {test, expect} from '@playwright/test';
import * as testData from './test_data/test_data.json'

test('Change language to Polski for wikipedia', async({page}) => {
    await page.goto(testData.url);
    
    await page.getByRole('link', { name: testData.ChangeLanguageTexts.LanguageText }).click();
    
    const heading = await page.locator('#main-page-welcome');

    await expect(heading).toHaveText(testData.ChangeLanguageTexts.WelcomeMessageText);
})