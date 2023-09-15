const products = [
  { productid: 1, name: "Laptop", cost: 999 },
  { productid: 2, name: "Smartphone", cost: 599 },
  { productid: 3, name: "Headphones", cost: 199 },
];

function getProduct(id) {
  for (let product of products) {
    if (product.productid == id) 
    return product;
  }
  const idNotFound = "This id does not exist"
  return idNotFound;
}

function addProduct(name, cost) {
  let maxId = 0;
  for (let product of products) {
    if (product.productid > maxId) maxId = product.productid;
  }
  const newProduct = { id: maxId + 1, name: name, cost: cost };
  const updatedProduct = [...products, newProduct];
  return updatedProduct;
}

function logProducts() {
  for (let product of products) {
    console.log(product.name + " costs " + product.cost + "€");
  }
}

let myProduct = getProduct(2);
console.log(myProduct);
addProduct("Tablet", 399);
logProducts();
