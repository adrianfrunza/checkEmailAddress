import { observable } from 'mobx'
import { ApiSDK } from '../../apiSDK/ApiSDK';

export class EmailInputViewController {

    @observable public email: string = '';
    @observable public isValid: string = '';

    private apiSDK: ApiSDK;

    constructor(apiSDK: ApiSDK) {
        this.apiSDK = apiSDK;
    }

    public updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.email = event.target.value.toString();
    }

    public onSubmit = async () => {
        void await this.apiSDK.verifyEmail(this.email);
        this.isValid  = this.apiSDK.response;
    }
}