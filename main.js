const root = document.getElementById("root");

function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //   for (let i = 0; i < 9; i++) {
      //     root.innerHTML += `
      //     <div class="container">
      //             <div class="card" style="width: 15rem;">
      //                 <div class="card-body">
      //                     <h5 class="card-title">${data[i].name}</h5>
      //                     <p class="card-text">${data[i].email}</p>
      //                     <p class="card-text">${data[i].address.city}</p>
      //                     <p class="card-text">${data[i].phone}</p>
      //                     <p class="card-text">${data[i].website}</p>
      //                 </div>
      //             </div>
      //     </div>
      //         `;
      //     i++;
      //   }

      let output = '<div class="card-columns">';
      data.forEach((user) => {
        output += `
            <div class="card" style="width: 15rem;">
                    <div class="card-body">
                         <h5 class="card-title">${user.name}</h5>
                         <p class="card-text">${user.email}</p>
                         <p class="card-text">${user.address.city}</p>
                         <p class="card-text">${user.phone}</p>
                         <p class="card-text">${user.website}</p>
                     </div>
                 </div>
            `;
      });
      output += "</div>";
      root.innerHTML = output;
    })
    .catch((err) => console.log(err));
}

getData();
