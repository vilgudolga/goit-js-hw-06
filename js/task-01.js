const nameCategory = document.querySelectorAll("li.item");
console.log("Number of categories: " + nameCategory.length);

for(let i=0;i < nameCategory.length;i++){
console.log("Category: " + nameCategory[i].querySelector("h2").innerHTML);
console.log("Number of coś tam :D : " + nameCategory[i].querySelectorAll("li").length);
}