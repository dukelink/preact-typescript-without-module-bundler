/// <reference path="../node_modules/preact/dist/preact.d.ts" />

// https://github.com/developit/preact/issues/1036

namespace myapp {
	const Component = preact.Component;
	const h = preact.h;
  const Router = preactRouter;
  
  
  export interface AppProps {
    name: string;
  }

  interface AppState {
    name: string;
  }

  export const xStart = () => ( <App name="cool working" /> )

  export class App extends Component<AppState> { 
    constructor(props: AppProps) {
      super(props);

      this.state = { name: props.name };
    }

    componentDidMount() {
      setTimeout(() => { 
        var state : any = this.state;
        state.name = "Preact's [componentDidMount] worked as expected!";
        this.setState(state);
      }, 2000);
    }

    render(props: AppProps, state: AppState) {
      return <h1>props: {props.name} state: {state.name}</h1>;
    }
  }

}