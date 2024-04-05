import {test, expect} from '@playwright/test';
import * as testData from './test_data/test_data.json'

test('Redirect to other wiki page', async({page}) => {
    await page.goto(testData.url);
    
    const placeholder = await page.getByPlaceholder(testData.SearchTexts.SearchPlaceholderText);
    await placeholder.fill(testData.SearchTexts.SearchInput1Text);
    
    await page.click('#searchform button');

    await page.click(`a[title="${testData.SearchTexts.SearchInput2Text}"]`);

    const heading = await page.locator('#firstHeading');

    await expect(heading).toHaveText(testData.SearchTexts.SearchInput2Text);
})