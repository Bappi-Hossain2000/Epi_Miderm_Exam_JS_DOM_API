const loadAllDatat = () =>{
    fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a
    .then((res) => res.json())
    .then ((data) => displayAllData(data.drinks))
    .catch((error) => console.log(error));
}
loadAllDatat()

const displayAllData = (data) =>{
    // console.log(data);
    const catagoriesAllContainer = document.getElementById("All_card");
    catagoriesAllContainer.innerHTML = "";
    // data.forEach((item) => {

    data.forEach((item)=>{
        // console.log(item);

        const card = document.createElement("div");
        card.classList = "shadow-xl border rounded-3xl p-5";
        card.innerHTML = `
        <figure>
                        <img class="rounded-xl" src="${item.strDrinkThumb}" alt="Shoes" />
                    </figure>
                    <div class="mt-3">
                        <h2 class="card-title">${item.strIngredient2}</h2>
                        <p class="my-3"> Category : ${item.strCategory} </p>
                        <hr class="my-3">
                        <div class="">
                            <button onclick="modalSectionId('${item.idDrink}')" class="btn w-full ">Details</button>
                        </div>
                    </div>
        
        `;
        catagoriesAllContainer.append(card)
    })

}



const SearchClick = (data) =>{
    const searchValue = document.getElementById("SearchValue").value;
    searchValue.innerHTML = "";
    console.log(searchValue);

    fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a
    .then((res) => res.json())
    .then ((data) => displayAllData(data.drinks))
    .catch((error) => console.log(error));
}




// modal section


const modalSectionId = (id) => {
    console.log(id);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => modalSectiondata(data.drinks[0]))
        .catch((error) => console.log(error));
}
const modalSectiondata =(data) => {
    console.log(data);
    const modalDetails = document.getElementById("modal_content");
    modalDetails.innerHTML = `
    <figure>
                        <img class="rounded-xl" src="${data.strDrinkThumb}" alt="Shoes" />
                    </figure>
                    <div class="mt-3">
                        <h2 class="card-title">${data.strIngredient2}</h2>
                        <br>
                        <h2 class="card-title">Category : ${data.strCategory}</h2>
                         <br>
                        <h2 class="card-title">Details Information</h2>
                         <br>

                        <p><li>${data.strInstructions}</li></p>
                        <p><li>${data.strInstructionsDE}</li></p>
                        <p><li>${data.strInstructionsES}</li></p>
                    </div>
    `;

    document.getElementById("showModalData").click();
}


