document.body.innerHTML = `<div class="heading-container">
<h1>COVID-19 COUNTRY LIST</h1>
<img src="https://www.who.int/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1024v.jpg?Culture=en&sfvrsn=4dba955c_6" alt="brew" class="icon" width="150px" height="100px" />
</div>
<div id="mainContainer" class="main-container"></div>`;

const getData = async () => {
  try {
    const data = await fetch("https://api.covid19api.com/countries");
    const covidcountries = await data.json();
    mainContainer.innerHTML = "";
    covidcountries.forEach((covidcountries) => {
      displayData(covidcountries);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();
const displayData = (obj) => {
  mainContainer.innerHTML += `
  <div class="container">
  <h3 class="blue">Country Name:<span>${obj.Country}</span></h3>
  <h5 class="para blue">Slug is:<span>${obj.Slug}</span></h5>
  <h5 class="para blue">ISO2 Is:<span>${obj.ISO2}</span></h5>
  </div>
  `;
};
