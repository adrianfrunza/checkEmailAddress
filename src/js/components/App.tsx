import * as React from "react";
import { Title } from "../components/Views/Title";
import { EmailInput } from "../components/Views/EmailInput";
import {
  Controllers,
  controllerNames
} from "../components/Controllers/Controllers";
import { observer } from "mobx-react";
import styled from 'styled-components';


const AppContainer = styled.div`
  background-color: #66c2ff;
  width: 100%;

  height: 100%;
  margin: 0;
  padding: 0;
`;

const StyledTitle = styled(Title)`
  margin: 0 auto;
`;

@observer
class App extends React.Component {
  private controllers: Controllers;

  constructor(props) {
    super(props);
    this.controllers = new Controllers();
  }

  render() {
    return (
      <AppContainer>
        <StyledTitle />
        <EmailInput
          emailInputViewController={this.controllers.getViewController(
            controllerNames.EMAIL_INPUT_VIEW_CONTROLLER
          )}
          apiSDK={this.controllers.getViewController(controllerNames.API_SDK)}
        />
      </AppContainer>
    );
  }
}
export default App;
