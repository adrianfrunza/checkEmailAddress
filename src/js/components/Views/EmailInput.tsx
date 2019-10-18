import * as React from "react";
import { EmailInputViewController } from "../Controllers/EmailInputViewController";
import { observer } from "mobx-react";
import { ApiSDK } from "../../apiSDK/ApiSDK";

export const EmailInput = observer(
    (props: { emailInputViewController: EmailInputViewController, apiSDK: ApiSDK }) => (
        <div id="emailInput">
            <input
                type="email"
                value={props.emailInputViewController.email}
                onChange={props.emailInputViewController.updateEmail}
            />
            <div>{`${props.emailInputViewController.isValid}`}</div>
            <button onClick={props.emailInputViewController.onSubmit}>Check email address</button>
        </div>
    )
);
