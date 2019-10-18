import { config } from "../config/config";

export class ApiSDK {
    private baseURL: string = "";
    public response: string = "";

    constructor(baseURL: string) {
        this.baseURL = baseURL;
        this.response = "";
    }

    public verifyEmail = async (email: string) => {
        try {
            let response = await fetch(`${this.baseURL}${email}`, {
                headers: config.headers
            });

            this.handleStatusCode(response.status);

            const JSONResponse = await response.json();
            this.response = JSONResponse.isValid;
        } catch (error) {
            this.handleError();
        }
    };

    private handleError = () => {
        this.response = config.ERROR_MESSAGE;
    };

    private handleStatusCode = (statusCode: number) => {
        if (statusCode !== config.OK_STATUS) {
            this.handleError();
        }
    };
}
