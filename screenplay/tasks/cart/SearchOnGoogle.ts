import { Ensure, includes } from '@serenity-js/assertions';
import { Duration, TakeNote, Task } from '@serenity-js/core';
import { Click, Enter, isVisible, Key, Press, Text, Wait } from '@serenity-js/webdriverio';
import { GoogleSearchUI } from '../../ui/GoogleSearchUI';


export class SearchOnGoogle {

    static theInformationNamed = (googleSearchValue: string) =>
        Task.where(`#actor searches for value on Google`,
            Enter.theValue(googleSearchValue).into(GoogleSearchUI.searchField()),
            Wait.for(Duration.ofSeconds(2)),
            Press.the(Key.Enter).in(GoogleSearchUI.searchField()),
            Wait.for(Duration.ofSeconds(4)),
        )

}
