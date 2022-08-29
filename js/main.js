var busObject = {
    vehicle: 'Car',
    imageUrl:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=8',
    farePerKilo: 3,
    capacity: 4,
    description:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?"
};
var bikeObject = {
    vehicle: 'Car',
    imageUrl:'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 3,
    capacity: 4,
    description:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?"
};
var carObject = {
    vehicle: 'Car',
    imageUrl:'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 3,
    capacity: 4,
    description:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?"
};

const servicesArray=[bikeObject, carObject,busObject];

function displayService(service) {
const mainSection = document.getElementById("main-section");
const stringifiedObj = JSON.stringify(service);
const div = document.createElement('div');

div.innerHTML = `
<div class="card mt-3  mx-auto" style="max-width: 800px;">
     <div class="row g-0">
       <div class="col-md-4">
         <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
           <p class="card-text">${service.description}</p>
           <p class="card-text"><small class="text-muted">Fare per kilo ${service.farePerKilo}</small> <small class="text-muted">Capacity ${service.capacity}</small></p>
           <!-- Button trigger modal -->
     <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${stringifiedObj})' data-bs-target="#exampleModal">
           see details
     </button>
         </div>
       </div>
     </div>
</div>

`
mainSection.appendChild(div);
;

}
for (let i = 0; i < servicesArray.length; i++) {
  const element = servicesArray[i];
  displayService(element);
}


// handle booking info
function handleBooking(obj) {

  const modalBody = document.getElementById("modal-body");

  const stringifiedObj = JSON.stringify(obj);

  modalBody.innerHTML = `
    
    <div class="card mx-auto" style="width: 18rem;">
  <img src=${obj.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood : ${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>

    <p class="card-text"><small class="text-muted">Fare per kilo ${obj.farePerKilo}</small> <small class="text-muted">Capacity ${obj.capacity}</small></p>
    <div class="d-flex flex-column" role="search">
     <p>Fare: <small class="text-muted" id="fare"></small > </p>
     <p>tax: <small class="text-muted" id="tax"></small > </p>
     <p>Total-cost: <small class="text-muted" id="total-cost"></small > </p>

    <input class="form-control m-2" id= "distance-input"  type="number" placeholder="Koto kilo jaba?" aria-label="Search"/>
    <input class="form-control m-2" type="number" id= "quantity-input" placeholder="koita gari lagbe?" aria-label="Search"/>
    <button class="btn btn-outline-success" id="search-btn" aria-label="type="submit" onclick='calculateCost(${stringifiedObj})'>submit</button>
  </div>
  </div>
</div>
    
    `;
}
