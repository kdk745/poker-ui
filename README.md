### Setup
* Fork, Clone, yarn install, yarn start


### Use local api
* http://localhost:4001/products
* http://localhost:4001/contacts
* http://localhost:4001/vehicles
* http://localhost:4001/comments


### Create actions in actions/index.js to retrieve data
* loadContacts
    * return a thunk function
    * make a fetch call to /contacts
    * in the second then, dispatch to contactsLoaded
* contactsLoaded(contacts)
    * return an action
    * type is “CONTACTS_LOADED”
    * value is contacts
* loadVehicles
    * return a thunk function
    * make a fetch call to /vehicles
    * in the second then, dispatch to vehiclesLoaded
* vehiclesLoaded(vehicles)
    * return an action
    * type is “VEHICLES_LOADED”
    * value is vehicles
* loadComments
    * return a thunk function
    * make a fetch call to /comments
    * in the second then, dispatch to commentsLoaded
* commentsLoaded(comments)
    * return an action
    * type is “COMMENTS_LOADED”
    * value is comments
* loadProducts
    * return a thunk function
    * make a fetch call to /products
    * in the second then, dispatch to productsLoaded
* productsLoaded(products)
    * return an action
    * type is “PRODUCTS_LOADED”
    * value is products

### Create actions in actions/index.js to create data
* createProduct(product)
   * return a thunk function
   * make a fetch call to /products as a POST
   * include the product in the body 
   * in the first then, dispatch to loadProducts

* createContact(contact)
   * return a thunk function
   * make a fetch call to /contacts as a POST
   * include the contact in the body 
   * in the first then, dispatch to loadContacts

* createComment(comment)
   * return a thunk function
   * make a fetch call to /comments as a POST
   * include the comment in the body 
   * in the first then, dispatch to loadComments

* createVehicle(vehicle)
   * return a thunk function
   * make a fetch call to /vehicles as a POST
   * include the vehicle in the body 
   * in the first then, dispatch to loadVehicles

### Create reducers in reducers/index.js
* Create reducers based on the state in state.js
* Determine which action the reducers should care about 
* return the appropriate value

### AppContainer
* In AppContainer.js
* Import connect
* Import actions loadContacts, loadVehicles, loadComments, loadProducts
* mapDispatchToProps for these actions to props of the same name
* Connect and export
* Remember how to use connect when there is no mapStateToProps

### App
* In App.js
* call loadContacts, loadVehicles,loadComments,loadProducts in componentDidMount

### Points
* Base points - 20
* Contacts appear in list - 10
* Vehicles appear in list - 10
* Comments appear in list - 10
* Products appear in list - 10
* Create new contact shows up in list - 10
* Create new vehicle shows up in list - 10
* Create new comment shows up in list - 10
* Create new product shows up in list - 10



