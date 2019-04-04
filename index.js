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
  }
}

class Delivery {
  constructor(name) {
      this.name = name
      this.id = deliveryId++
  }
}

class Customer {
  constructor(name) {
    this.name = name
    this.id = customerId++
  }
}

class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = neighborhoodId++
  }
}
