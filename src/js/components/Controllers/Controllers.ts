import { EmailInputViewController } from "./EmailInputViewController";
import { ApiSDK } from "./../../apiSDK/ApiSDK";
import { config } from "../../config/config";

const controllerNames = {
    EMAIL_INPUT_VIEW_CONTROLLER: "emailInputViewController",
    API_SDK: "apiSDK"
};

export interface IControllers {
    EMAIL_INPUT_VIEW_CONTROLLER: EmailInputViewController;
    apiSDK: ApiSDK;
}

class Controllers {
    private controllers: any = {};

    constructor() {
        this.init();
    }

    public init() {
        const apiSDK = new ApiSDK(config.BASE_URL);

        this.controllers = {
            [controllerNames.API_SDK]: new ApiSDK(config.BASE_URL),
            [controllerNames.EMAIL_INPUT_VIEW_CONTROLLER]: new EmailInputViewController(
                apiSDK
            )
        };
    }

    public getViewController = (controllerName: string) => {
        return this.controllers[controllerName];
    };
}

export { Controllers, controllerNames };
