const root = document.getElementById("root");

function getData() {
  fetch("https://jsonplaceholder.typicode.com/photos/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < 5; i++) {
        root.innerHTML += `
        
            <div class="card col-3 m-1 mx-auto" style="width: 18rem;">
                <img src="${data[i].thumbnailUrl}" class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${data[i].title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        `;
        i++;
      }
    })
    .catch((err) => console.log(err));
}

getData();
