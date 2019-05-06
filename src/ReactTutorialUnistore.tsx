/// <reference path="../node_modules/preact/dist/preact.d.ts" />
/// <reference path="unistore0.d.ts" />
/// <reference path="unistore1.d.ts" />

//import createStore from "unistore";

namespace reactTutorialUnistore {
	// Imports:
    const Component=preact.Component,h=preact.h;

    const createStore = unistore.createStore;
    const connect = unistore.connect;
    const Provider = unistore.Provider;

    let store = createStore({ count: 0 })

    // If actions is a function, it gets passed the store:
    let actions = store => ({
      // Actions can just return a state update:
      increment(state) {
        return { count: state.count+1 }
      },
    
      // The above example as an Arrow Function:
      increment2: ({ count }) => ({ count: count+1 }),
    
      //Actions receive current state as first parameter and any other params next
      //check this function as <button onClick={incrementAndLog}>
      incrementAndLog: ({ count }, event) => {
        console.info(event)
        return { count: count+1 }
      },
    
      // Async actions can be pure async/promise functions:
      async getStuff(state) {
        let res = await fetch('/foo.json')
        return { stuff: await res.json() }
      },
    
      // ... or just actions that call store.setState() later:
      incrementAsync(state) {
        setTimeout( () => {
          store.setState({ count: state.count+1 })
        }, 100)
      }
    })
    
    const App1 = connect<any,any,any,any>('count', actions)(   // TODO: too many anys???????
        ({ count, increment }) => (
          <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
          </div>
        )
      )
    

    export class App extends Component {
        render() {
            return <DefaultApp/>
        }
    }

    const DefaultApp = () => (
      <Provider store={store}>
        <App1 />
      </Provider>
    )    

}


// ADDITIONAL STUDY:
// Checkout React form validation with TS:
// https://www.carlrippon.com/building-a-react-form-component-with-typescript-validation/
// And see responses of upgraded versions such as:
// https://react-hook-form.now.sh/ and code at: https://github.com/bluebill1049/react-hook-form
// https://stackblitz.com/edit/react-ts-at7b9k