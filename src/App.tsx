import { Component } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressKey);
  }

  handlePressKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressedKey
              ? `The last pressed key is [${pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}