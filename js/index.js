const allPhones = () => {
    
    const searchFeilds = document.getElementById('input-Feild');
    const searchText = searchFeilds.value;
    // console.log(searchText);

    searchFeilds.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneResult(data.data))

}
// allPhones();

const displayPhoneResult = phones => {
    
    const searchReasult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `

        <div class="card">
        <img src="${phone.image}" class="card-img-top w-25 mx-auto my-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.brand}</h5>
          <h3>${phone.phone_name}</h3>
          <p class="card-text fw-bold">${phone.slug}</p>
        </div>
      </div>
        
        `;
        searchReasult.appendChild(div);

    })
    
}




