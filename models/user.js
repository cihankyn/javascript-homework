export default class User {
  constructor(id, firstName, lastName, city) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
  }

  toString() {
    return `id:${this.id}, Name:${this.firstName + " " + this.lastName}, city:${
      this.city
    }`;
  }
}
