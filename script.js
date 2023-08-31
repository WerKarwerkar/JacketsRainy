const url = "https://api.noroff.dev/api/v1/rainy-days";
const detailContainer = document.getElementsByClassName('.details');


async function fetchJackets (){
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);  

    const jackets = result;
    detailContainer.innerHTML = "";


    for (let i = 0; i < jackets.length; i++) {
    
        const jacketsId = jackets[i].id;
        const jacketsDescription = teams[i].description;
        const jacketsTitle = teams[i].title;
        const jacketsGender = teams[i].gender;


        detailContainer.innerHTM += `<div class="card">
                                    <h1>${jacketsTitle}</h1>
                                    <h2>${jacketsId}</h2>
                                    <h3>${jacketsGender}</h3>
                                    <p>${jacketsDescription}</p>
                                    </div>`;


  } catch (error){
    console.log(error);
  }}

  fetchJackets();


   

  
 
