// Question 2
// Make a call to the Rawg API.

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=27ee92531f1c41e7a6885e0fedf0ecba";

const getGames = async () => {

    const response = await fetch(url);

    const result = await response.json();
    
    return result.results;

}

 getGames().then((result)=>{
    const games = result.slice(0,8);
     displayGames(games);
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
