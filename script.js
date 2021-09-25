function newbreed(i){
const output = document.getElementById('output')
let req = new XMLHttpRequest();
req.open("get", "https://api.thedogapi.com/v1/breeds")
req.send();

let y=i+10;
console.log(y);
req.addEventListener("load", function (event) {
  var data = JSON.parse(event.target.responseText)
  console.log(i)
  $("#output").html("");
  data.forEach(function (val) {

    if (i < y) {
      let new_div = document.createElement("div")
      new_div.id="div1";

      let ulist = document.createElement("ul")
      ulist.id="ullist"
      new_div.appendChild(ulist)
      let image = document.createElement("img")
      image.setAttribute("src", data[i].image["url"])
      image.setAttribute("height", "200px")
      image.setAttribute("width", "200px")
      new_div.appendChild(image)
      let item = document.createElement("li")
      item.innerText = data[i].name;
      new_div.appendChild(item)
      let item2 = document.createElement("li")
        item2.innerText = "Life span: " + data[i].life_span;
        new_div.appendChild(item2)
      
       let item4 = document.createElement("li")

        if(data[i].breed_group === "Working")
        item4.setAttribute("style", "color: red");
      else if (data[i].breed_group === "Hound") 
      item4.setAttribute("style", "color: blue");
        else if (data[i].breed_group === "Toy") 
        item4.setAttribute("style", "color: purple");
        else if (data[i].breed_group === "Non-Sporting") 
        item4.setAttribute("style", "color: yellow");
        else if (data[i].breed_group === "Mixed") 
        item4.setAttribute("style", "color: brown");
        else if (data[i].breed_group === "Terrier") 
        item4.setAttribute("style", "color: cyan");
        else if (data[i].breed_group === "Sporting") 
        item4.setAttribute("style", "color: green");
        else if (data[i].breed_group === "Herding") 
        item4.setAttribute("style", "color: pink");

        item4.innerText ="Breed Group:" + data[i].breed_group
        new_div.appendChild(item4)

        let item3 = document.createElement("li")
        item3.innerText = data[i].temperament;
        new_div.appendChild(item3)
      output.appendChild(new_div)
      i++;
    }
  })


})
}

let i=0;
let button = document.querySelector(".butt");
button.addEventListener("click",function(e){


  newbreed(i);

  i=i+10;
  console.log("success");
});