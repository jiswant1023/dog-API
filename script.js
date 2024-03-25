// fetch("https://dog.ceo/api/breeds/image/random")
// .then((data)=>{
// console.log(data);
// return data;
// })

// .then((data)=>{
//     console.log(data.json());
// })

document.getElementById("featch").addEventListener("click",featchData);
 let dogImage=document.getElementById("dog_image");

async function featchData(){
    //dogImage.innerHTML="";
    let response= await fetch("https://dog.ceo/api/breeds/image/random");
    let data=await response.json();

    let image=document.createElement("img");
    image.style.height="300px";
    image.style.width="300px";
    image.src=data.message;

    dogImage.appendChild(image);

    console.log(image.src);
}



