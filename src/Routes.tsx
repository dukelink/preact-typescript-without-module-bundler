// Preact imports:
/// <reference path="../node_modules/preact/dist/preact.d.ts" />

/// <reference path="../node_modules/preact-router/index.d.ts" />
declare function preactRouter();

namespace myapp {
	const Component = preact.Component;
	const h = preact.h;
	const Router = preactRouter;

//	declare function Router() : JSX.Element;

	export const xStart = () => ( <Main /> )
	export const xStart2 = () => ( <MainRoutes /> )

	export class MainRoutes extends Component<{}> 
	{ render = () => (
		<Router>
			<App path="/Component1" name='Component 1' />
			<App path="/Component2" name='Component 2' />
		</Router>
	)}

	export class Main extends Component<{}> 
	{ render = () => (
		<header>
			<a class='logo' href='/'>PREACT-DEMOS</a>
			<a class='button' href='/Component1'>Component 1</a>
			<a class='button' href='/Component2'>Component 2</a>
		</header>
	)}

}
