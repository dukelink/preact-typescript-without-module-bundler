/// <reference path="../node_modules/preact/dist/preact.d.ts" />
/// <reference path="../node_modules/preact-router/index.d.ts" />
namespace myapp {
	// Imports:
	declare function preactRouter();
	const Component=preact.Component,h=preact.h, Router=preactRouter;

	export class MainRoutes extends Component<{}> 
	{ render = () => (
		<Router>
			<TestComponent path="/Component1" name='Component 1' />
			<TestComponent path="/Component2" name='Component 2' />
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
