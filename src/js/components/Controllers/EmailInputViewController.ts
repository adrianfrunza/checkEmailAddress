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
        this.email = event.target.value.toString().toLowerCase();
    }

    public onSubmit = async () => {
        this.isValid = '';
        void await this.apiSDK.verifyEmail(this.email);
        this.isValid  = this.apiSDK.response;
    }

    public onKeySubmit = async (key: React.KeyboardEvent<HTMLInputElement>) => {
        if(key.charCode == 13) {
            this.onSubmit();
        }
    }

}