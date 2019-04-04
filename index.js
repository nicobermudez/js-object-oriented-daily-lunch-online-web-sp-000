// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let mealId = 0
let deliveryId = 0
let customerId = 0
let neighborhoodId = 0

class Meal {
  constructor(name) {
    this.name = name
  }
}

class Delivery {
  constructor(name) {
      this.name = name
  }
}

class Customer {
  constructor(name) {
    this.name = name
  }
}

class Neighborhood {
  constructor(name) {
    this.name = name
  }
}
