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

const notFoundResult = displayStyle => {
  document.getElementById('notFound').style.display = displayStyle;
}


const displayPhoneResult = phones => {

  const searchReasult = document.getElementById('search-result');

  //not found result show
  notFoundResult('block');
  // everty sercing updated code 
  searchReasult.innerHTML = '';
  phones.forEach(phone => {
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

    // not found result hidden
    notFoundResult('none');
  });

};

const loadPhoneDetail = phoneId => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;

  fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))

};

// phone details code started here 

const displayPhoneDetails = details => {
  console.log(details);

  const phoneDetails = document.getElementById('single-phone-detains');
  phoneDetails.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  
  <div class="card">
  <div class="row g-0 my-5">
    
    <div class="col-md-7">
      <div class="card-body">
        <h4>Brand Name: ${details.brand}</h4>
        <h5 class="card-title">Model : ${details.name}</h5>
        <p class="card-text">${details.releaseDate}</p>
        <p>Storage: ${details.mainFeatures.storage}</p>
        <span>ChipSet: ${details.mainFeatures.chipSet}</span></br>
        <span>${details.others.Bluetooth}</span>
        <span>usb: ${details.others.USB}</span></br>
        <span>Wlan: ${details.others.WLAN}</span></br>
        <span>Gps: ${details.others.GPS}</span></br>
        <span>Disply Size: ${details.mainFeatures.displaySize}</span></br>

        <li>${details.mainFeatures.sensors[0]}</li>
        <li>${details.mainFeatures.sensors[1]}</li>
        <li>${details.mainFeatures.sensors[2]}</li>
        <li>${details.mainFeatures.sensors[3]}</li>
        <li>${details.mainFeatures.sensors[4]}</li>
        <li>${details.mainFeatures.sensors[5]}</li>

        <span>Memory : ${details.mainFeatures.memory}</span>

        <p class="card-text"><small class="text-muted">Date: ${details.releaseDate}</small></p>
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




