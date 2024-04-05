import {test, expect} from '@playwright/test';
import * as testData from './test_data/test_data.json'

test.describe('Search from main wiki page', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(testData.url);
    })

    test('Search functionality with click', async({page}) => {
        const placeholder = await page.getByPlaceholder(testData.SearchTexts.SearchPlaceholderText);
        await placeholder.fill(testData.SearchTexts.SearchInput1Text);

        await page.click('#searchform button');

        const heading = await page.locator('#firstHeading');

        await expect(heading).toHaveText(testData.SearchTexts.SearchInput1Text);
    })

    test('Search functionality with Enter', async({page}) => {
        const placeholder = await page.getByPlaceholder(testData.SearchTexts.SearchPlaceholderText);
        await placeholder.fill(testData.SearchTexts.SearchInput1Text);
        
        await placeholder.press('Enter');
        

        const heading = await page.locator('#firstHeading');

        await expect(heading).toHaveText(testData.SearchTexts.SearchInput1Text);
    })
})