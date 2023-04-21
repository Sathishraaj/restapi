var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
var rest= fetch("https://restcountries.com/v3.1/all")
rest.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1){
    for(var i=1;i<data1.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card border-primary mb-3 " style="width: 18rem;">
        <img src="${data1[i].flags.svg}" class="card-img-top" alt="country flags">
          <div class="card-body">
          <h5 class="card-title">${data1[i].name.common}</h5>
          
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>

        `;
        document.body.append(container);
    }
}


