// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let mealId = 0
let deliveryId = 0
let customerId = 0
let neighborhoodId = 0

class Meal {
  constructor(title, price) {
    this.title = title
    this.price = price
    this.id = mealId++
    store.meals.push(this)
  }
  static byPrice() {
    return store.meals.sort((function(a, b)) {
      return a.price - b.price
    })
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name
    this.id = customerId++
    this.neighborhoodId = neighborhoodId
    store.customers.push(this)
  }
}

class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = neighborhoodId++
    store.neighborhoods.push(this)
  }
}

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.id = deliveryId++
    this.mealId = mealId
    this.neighborhoodId = neighborhoodId
    this.customerId = customerId
    store.deliveries.push(this)
  }
  // meal() {
  //   return store.meals.find(function(meal) {
  //     return meal.id === this.mealId
  //   }.bind(this))
  // }
  // neighborhood() {
  //   return store.neighborhood.find(function(neighborhood) {
  //     return neighborhood.id ==== this.neighborhoodId
  //   }.bind(this))
  // }
  // customer() {
  //   return store.customer.find(function(customer) {
  //     return customer.id === this.customerId
  //   }.bind(this))
  // }

}
