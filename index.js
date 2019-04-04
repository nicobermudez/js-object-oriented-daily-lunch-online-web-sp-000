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
    store.meal.push(this)
  }
}

class Delivery {
  constructor(name) {
    this.name = name
    this.id = deliveryId++
    store.delivery.push(this)
  }
}

class Customer {
  constructor(name) {
    this.name = name
    this.id = customerId++
    store.customer.push(this)
  }
}

class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = neighborhoodId++
    store.neighborhood.push(this)
  }
}
