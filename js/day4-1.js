let price = +prompt('price');
let quantity = +prompt('quantity');
let address = prompt('address');

document.write(`
  <table>
    <tr>
      <th>good name</th>
      <th>quantity</th>
      <th>price</th>
      <th>total price</th>
      <th>address</th>
    </tr>
    <tr>
      <td>iphone</td>
      <td>${quantity}</td>
      <td>$${price}</td>
      <td>$${price * quantity}</td>
      <td>${address}</td>
    </tr>
  </table>
`)