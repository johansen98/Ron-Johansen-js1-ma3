// Question 2
// Make a call to the Rawg API.
function toggleLoadingIcon() {
    const loadingIcon = document.getElementById("loadingIcon");
    var state = loadingIcon.style.display;
    if(state === "block"){
        loadingIcon.style.display = "none";
    }else{
        loadingIcon.style.display = "block";
    }

}

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=27ee92531f1c41e7a6885e0fedf0ecba";

const getGames = async () => {
try{
    
    const response = await fetch(url);

    const result = await response.json();
    toggleLoadingIcon()
    return result.results;
}catch{
    console.log("Error occurred")
    toggleLoadingIcon()
    return null;
}

}

 getGames().then((result)=>{
     if(result != null){
         const games = result.slice(0,8);
         displayGames(games);
 }
})

const displayGames = (games) =>{
    const containerDiv = document.getElementById("container");

    games.forEach(game => {
        const div = document.createElement("div");
        const heading = document.createElement("h2");
        const rating = document.createElement("p");
        const tags = document.createElement("p");

        heading.innerHTML = game.name;
        rating.innerHTML = "Rating: " + game.rating;
        tags.innerHTML = "Number Of Tags: " + game.tags.length;

        div.appendChild(heading);
        div.appendChild(rating);
        div.appendChild(tags);
        containerDiv.appendChild(div);
       
    });

}
