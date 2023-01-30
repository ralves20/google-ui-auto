import { by, Target } from '@serenity-js/webdriverio';

export const ResultOpenedUI = {
    seleniumResultLogo: () =>
        Target.the('selenium logo').located(by.id("selenium_logo")),

    seleniumResultTitle: () =>
        Target.the('selenium Titile').located(by.xpath("//section[contains(@id, 'td-cover')]/descendant::h1")),

}
