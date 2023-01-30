import { by, Target } from '@serenity-js/webdriverio';

export const GoogleSearchUI = {
    searchField: () =>
        Target.the('search input').located(by.xpath("//input[@type='text' and @name='q']")),

    performSearchElement: () =>
        Target.the('perform search element').located(by.xpath("(//input[@name='btnK'])[last()]")),

}
