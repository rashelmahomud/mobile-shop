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
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `

        <div class="card">
        <img src="${phone.image}" class="card-img-top w-25 mx-auto my-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">Brand: ${phone.brand}</h5>
          <h3>Name: ${phone.phone_name}</h3>
          <p class="card-text fw-bold">${phone.slug}</p>
          <button id="detailsBtn" onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-outline-success px-3 fw-bold ">Details</button>
        </div>
      </div>
        
        `;
        searchReasult.appendChild(div);

    })
    
}


const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))
    
};

const displayPhoneDetails = details => {
    console.log(details);

  const phoneDetails = document.getElementById('single-phone-detains');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  
  <div class="card">
  <div class="row g-0 my-5">
    
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text"></p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="col-md-5">
      <img src="${details.image}" class="img-fluid rounded-start w-50" alt="...">
    </div>
  </div>
</div>


  `;
  phoneDetails.appendChild(div);

}




