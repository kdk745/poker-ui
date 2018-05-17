### Setup
* Fork, Clone locally
* yarn install, yarn start in terminal

### Uses local api running on SpringBoot
* http://localhost:8080/cards

### Actions in actions/index.js to retrieve data
* processHand(hand)
    * returns a thunk function
    * makes a fetch call to /cards
    * dispatches text from response to processHandSuccess

### Reducers in reducers/index.js
* returns the appropriate value based on action types

### Containers
* In AppContainer.js
* Imports connect
* Import actions corresponding to appropriate functions and state items
* mapDispatchToProps for functions
* mapStateToProps for state items
* Connects and exports to component

### App
* In App.js
* imports components through container files

### Form Walkthrough
* example input for two pairs result: Ah Ad Jc Js Kh
* formatted as : ranksuit ranksuit ranksuit ranksuit ranksuit
* acceptable ranks: {2,3,4,5,6,7,8,9,T,J,Q,K,A}
* acceptable suits: {h,c,d,s}
