import 'expect-webdriverio';

import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight, Check, Note, See } from '@serenity-js/core';
import { Click, isVisible, Navigate, Text } from '@serenity-js/webdriverio';
import { SearchOnGoogle } from '../../screenplay/tasks/cart/SearchOnGoogle';
import { OpenTheSecondResult } from '../../screenplay/tasks/cart/OpenTheSecondResult';
import { Ensure, equals } from '@serenity-js/assertions';
import { ResultOpenedUI } from '../../screenplay/ui/ResultOpenedUI';



Given('that {actor} access Google', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('https://www.google.com/'),
    )
);

When(/s?he performs a search for (.*) on the platform/, {timeout: 4 * 5000}, async (googleSearchValue: string) =>
    actorInTheSpotlight().attemptsTo(
        SearchOnGoogle.theInformationNamed(googleSearchValue)
    )
);

When(/s?he opens the second result on list/, {timeout: 4 * 5000}, async () =>
    actorInTheSpotlight().attemptsTo(
        OpenTheSecondResult.ofGoogleSearchList()
    )
);

Then(/s?he should see that valid results were returned with all information correct/, async () =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(ResultOpenedUI.seleniumResultLogo(), isVisible()),
        Ensure.that(Text.of(ResultOpenedUI.seleniumResultTitle()), equals("Selenium automates browsers. That's it!"))
    )
);

