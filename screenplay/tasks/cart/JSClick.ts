import { equals } from "@serenity-js/assertions";
import { Ensure } from "@serenity-js/assertions/lib/Ensure";
import { Note } from "@serenity-js/core/lib/screenplay/questions/Note";
import { Task } from "@serenity-js/core/lib/screenplay/Task";
import { Click, ExecuteScript, Target, Text } from "@serenity-js/webdriverio";

export class JSClick {

    static onElement = (element: Target) =>
        Task.where(`#actor performs a JS click on a element`,
            ExecuteScript.async("arguments[0].click();").withArguments(element)
        )

}