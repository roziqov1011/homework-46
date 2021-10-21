const elLoader = document.querySelector(".js-loader")
const elUl = document.querySelector(".list-films")
const elPrev = document.querySelector(".js-prev");
const elNext = document.querySelector(".js-next");

const elInput = document.querySelector(".js-input")
const elForm = document.querySelector(".js-form")

elForm.addEventListener("submit",function (){
  const inputValue = elInput.value.trim()
  elUl.innerHTML = ""


let page = 1;

function getData(page) {
  fetch(`https://www.omdbapi.com/?apikey=9fcd4d84&s=${inputValue}&page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      elLoader.style.display = "none";
      working(data.Search);
    });

  function working(array) {
    array.forEach((element) => {
      renderFilms(element);
    });
  }
}


function renderFilms(object) {
  const newLi = document.createElement("li")
  const newH = document.createElement("h3");
  const newSpan = document.createElement("span");
  const newImg = document.createElement("img");

  newImg.src = object.Poster
  newH.textContent = object.Title
  newSpan.textContent = object.Year

  newLi.classList = "card"

  
  newLi.appendChild(newImg)
  newLi.appendChild(newH)
  newLi.appendChild(newSpan)
  elUl.appendChild(newLi)
}


elNext.addEventListener("click", ()=>{
  elUl.innerHTML = "";
  page = page + 1;
  getData(page);
})

elPrev.addEventListener("click", ()=>{
 if (page > 1){
  elUl.innerHTML = "";
  page = page - 1;
  getData(page);
 } else if (page = 1){
  alert("bu birinchi page")
 }
})



getData(page);
})