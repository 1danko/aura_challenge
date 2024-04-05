import {test, expect} from '@playwright/test';
import * as testData from './test_data/test_data.json'

test('Validate sections on main wiki page', async({page}) => {
    await page.goto(testData.url);
    
    const fromTodaysFeaturedArticleSectionLocator = await page.locator("#From_today\\'s_featured_article");
    const inTheNewsSectionLocator = await page.locator('#In_the_news');
    const didYouKnowSectionLocator = await page.locator('#Did_you_know_\\.\\.\\.');
    const onThisDaySectionLocator = await page.locator('#On_this_day');
    const fromTodaysFeaturedListSectionLocator = await page.locator("#From_today\\'s_featured_list");
    const todaysFeaturedPictureSectionLocator = await page.locator("#Today\\'s_featured_picture");
    
    await expect(fromTodaysFeaturedArticleSectionLocator).toHaveText(testData.MainPageSectionsTexts.FromTodaysFeaturedArticleText);
    await expect(inTheNewsSectionLocator).toHaveText(testData.MainPageSectionsTexts.InTheNewsText);
    await expect(didYouKnowSectionLocator).toHaveText(testData.MainPageSectionsTexts.DidYouKnowText);
    await expect(onThisDaySectionLocator).toHaveText(testData.MainPageSectionsTexts.OnThisDayText);
    await expect(fromTodaysFeaturedListSectionLocator).toHaveText(testData.MainPageSectionsTexts.FromTodaysFeaturedListText);
    await expect(todaysFeaturedPictureSectionLocator).toHaveText(testData.MainPageSectionsTexts.TodaysFeaturedPictureText);
})