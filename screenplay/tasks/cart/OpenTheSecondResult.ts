import { equals } from "@serenity-js/assertions";
import { Ensure } from "@serenity-js/assertions/lib/Ensure";
import { Duration } from "@serenity-js/core";
import { Note } from "@serenity-js/core/lib/screenplay/questions/Note";
import { Task } from "@serenity-js/core/lib/screenplay/Task";
import { Click, Enter, Text, Wait } from "@serenity-js/webdriverio";
import { GoogleSearchResultUI } from "../../ui/GoogleSearchResultUI";
import { JSClick } from "./JSClick";


export class OpenTheSecondResult {


    static ofGoogleSearchList = () =>
        Task.where(`#actor opens the second result item on google search list`,
            Click.on(GoogleSearchResultUI.secondResultOnList())
        )

}