import {test, expect} from '@playwright/test';
import * as testData from './test_data/test_data.json'

test('Redirect to reference on wiki page', async({page}) => {
    await page.goto(testData.url);
    
    const placeholder = await page.getByPlaceholder(testData.SearchTexts.SearchPlaceholderText);
    await placeholder.fill(testData.SearchTexts.SearchInput2Text);
    
    await page.click('#searchform button');

    await page.getByText('[1]').click();

    const reference = await page.locator('#CITEREFCwiek2014');

    await expect(reference).toHaveText(testData.SearchTexts.ReferenceText);
})