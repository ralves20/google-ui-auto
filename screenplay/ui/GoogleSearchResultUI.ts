import { by, Target } from '@serenity-js/webdriverio';

export const GoogleSearchResultUI = {

    secondResultOnList: () =>
    Target.the('Title of First Item on Inventory Item').located(by.xpath(`(//div[@id='search']/descendant::div[@class='yuRUbf']/descendant::h3/parent::a)[1]`)),

}
