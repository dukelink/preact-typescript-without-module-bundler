// Preact imports:
/// <reference path="../node_modules/preact/dist/preact.d.ts" />

/// <reference path="../node_modules/preact-router/index.d.ts" />
declare function preactRouter();

namespace myapp {
	const Component = preact.Component;
	const h = preact.h;
	const Router = preactRouter;

//	declare function Router() : JSX.Element;

	export const xStart2 = () => ( <Main name="cool route working" /> )

	export interface AppProps {
		name: string;
	}
	
	interface AppState {
		name: string;
	}
	
	export class Main extends Component<AppState> { 
		constructor(props: AppProps) {
		super(props);
	
		this.state = { name: props.name };
		}
	
		componentDidMount() {
		setTimeout(() => { 
			var state : any = this.state;
			state.name = "Preact's [componentDidMount] worked as expected!!!!";
			this.setState(state);
		}, 2000);
		}
	
		render(props: AppProps, state: AppState) {
		return (<div>
			<h1>props: {props.name} state: {state.name}</h1>

			<Router>
				
				<App path="/yo" name='WIllie'>hello</App>
			</Router>
		</div>)}
	}

/*
	export const Main = () => (
		<div>
		<Header />
		<Router>
			<div path="/"></div>
			<App path="/test" name="hello123" />
		</Router>
		</div>
	);

	export const Header = () => (
		<header>
			<nav>
				<a href="/">Home</a>
				<a href="/test">Test</a>
			</nav>
		</header>
	);
*/
}