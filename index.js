// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let mealId = 0
let deliveryId = 0
let customerId = 0
let neighborhoodId = 0

class Meal {
  constructor(name) {
    this.name = name
    this.id = mealId++
    store.meals.push(this)
  }
}

class Customer {
  constructor(name) {
    this.name = name
    this.id = customerId++
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
  meal() {
    
  }

}
