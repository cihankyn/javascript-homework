export class Product {
  id;
  productName;
  unitPrice;

  toString() {
    return `id : ${this.id} - Name : ${this.productName} - Price : ${this.unitPrice}`;
  }
}
