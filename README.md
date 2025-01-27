_### 🧠 Core Concepts of Redux_
1. _Store:_
- _The store is a central ***container*** that holds the entire application state. It is like a single source of truth for your app._

2. _State:_
- _The state is the **data** your application needs at any given time. For example, user information, UI settings, or a list of products._

3. _Action:_
- _An action is a plain JavaScript **object** that describes what happened in the app. It must have a type property (e.g., { type: "INCREMENT" }). Think of it as a message saying, "Hey, I want to do this!"_

4. _Reducer:_
- _A reducer is a pure function that determines how the state should change based on an action. Reducers take the current state and an action as inputs and return the new state._

5. _Dispatch:_
- _The dispatch is how you send an action to the store. It triggers the reducer to calculate the new state._

6. _Selector:_
- _A selector is a function used to retrieve a specific part of the state from the store._

---  

## How It Works
##### _Store: Holds the app's state (count starts at 0)._
##### _Action: Defines what happens (INCREMENT or DECREMENT)._
##### _Reducer: Updates the state based on the action._
##### _Provider: Makes the store accessible to your components._
##### _useSelector: Reads the state from the store._
##### _useDispatch: Dispatches actions to update the state._
--- # Redux-lib
