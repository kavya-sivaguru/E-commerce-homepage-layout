var data = [
    {
        id: "1",
        product_name: "Tasty Granite Towels",
        product_price: "$143.00",
        product_description: "Pants",
        rating: 4,
        img: "http://placehold.it/700x400&text=product 1",
      },
      {
        id: "2",
        product_name: "Licensed Steel Chicken",
        product_price: "$716.00",
        product_description: "Bacon",
        rating: 5,
        img: "http://placehold.it/700x400&text=product 2",
      },
      {
        id: "3",
        product_name: "Generic Steel Hat",
        product_price: "$449.00",
        product_description: "Computer",
        rating: 3,
        img: "http://placehold.it/700x400&text=product 3",
      },
      {
        id: "4",
        product_name: "Handmade Fresh Mouse",
        product_price: "$426.00",
        product_description: "Soap",
        rating: 2,
        img: "http://placehold.it/700x400&text=product 4",
      },
      {
        id: "5",
        product_name: "Licensed Granite Chips",
        product_price: "$512.00",
        product_description: "Chair",
        rating: 4,
        img: "http://placehold.it/700x400&text=product 5",
      },
      {
        id: "6",
        product_name: "Intelligent Wooden Keyboard",
        product_price: "$731.00",
        product_description: "Table",
        rating: 4,
        img: "http://placehold.it/700x400&text=product 6",
      },
]

var row = document.querySelector('#row')

data.forEach(obj =>{
    var col = bootstrapCard('div', 'col-4 my-3');

    var card = bootstrapCard('div', 'card h-100 my-3');

    var cardbody = bootstrapCard('div', 'card-body');

    var img = bootstrapCard('img', 'card-img-top');
    img.setAttribute('src', obj.img)

    var h4 = bootstrapCard('h4', 'card-title')
    h4.innerHTML = obj.product_name;

    var h5 = bootstrapCard('h5');
    h5.innerHTML = obj.product_price;

    var pTag = bootstrapCard('p', 'card-text');
    pTag.innerHTML = obj.product_description;

    cardbody.append( h4, h5, pTag);
    
    var cardFooter = bootstrapCard('div', 'card-footer');
    cardFooter.innerHTML = obj.rating;


    card.append(img, cardbody, cardFooter);

    col.append(card);

    row.append(col)
});

function bootstrapCard(elemName, elemClass="", elemId=""){
    var element = document.createElement(elemName);
    element.setAttribute("class", elemClass);
    element.setAttribute("id", elemId);
    return element;

}
// row < colummn < card (img, price, description, foorter <(rating))