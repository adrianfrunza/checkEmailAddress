import * as React from "react";
import { Title } from "../components/Views/Title";
import { EmailInput } from "../components/Views/EmailInput";
import {
  Controllers,
  controllerNames
} from "../components/Controllers/Controllers";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  private controllers: Controllers;

  constructor(props) {
    super(props);
    this.controllers = new Controllers();
  }

  render() {
    return (
      <div>
        <Title />
        <EmailInput
          emailInputViewController={this.controllers.getViewController(
            controllerNames.EMAIL_INPUT_VIEW_CONTROLLER
          )}
          apiSDK={this.controllers.getViewController(controllerNames.API_SDK)}
        />
      </div>
    );
  }
}
export default App;
