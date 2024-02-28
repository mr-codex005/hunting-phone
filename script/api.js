const loadData = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  displayPhone(data.data);
};
const loader = document.querySelector(".loader-container");
const buttonContainer = document.querySelector(".button-container");
const displayPhone = (phones) => {
  if (phones.length > 15) {
    buttonContainer.classList.remove("hidden");
  }else{
    buttonContainer.classList.add("hidden")
  }
  const phonesContainer = document.querySelector(".phones");
  phonesContainer.innerHTML = "";
  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("phone");
    div.innerHTML = `
     <img src="${phone.image}" alt="">
     <div class="detail"><h3>${phone.brand}</h3>
     <h5>${phone.phone_name}</h5></div>
     `;
    phonesContainer.appendChild(div);
  });
  loader.classList.add("hidden");
};

const clickOnSearchHandler = () => {
  const searchText = document.querySelector("#search-box").value;
  loader.classList.remove("hidden");
  console.log(searchText);
  loadData(searchText);
};
