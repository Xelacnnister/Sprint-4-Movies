//to run the tests:
//npm run test:watch

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map( obj => {return obj["director"]});
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(obj => { return obj["director"] === director});
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter(obj => { return obj["director"] === director});
  let result = moviesFromDirector.map( obj => {return obj["score"]}).reduce((pre, curr) => pre + curr) / moviesFromDirector.length;
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map( obj => {return obj["title"]}).sort((a, b) => (a > b) ? 1 : -1).slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let result =  movies.map( obj => obj );
  result.sort((a, b) =>  a.year - b.year ||  a.title.localeCompare(b.title));
  console.log("EXERCICE 5 ->", result);
  return result;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let scoreList = []
  let genreFiltered = movies.filter(obj => obj.genre == genre);
  genreFiltered.map( obj => { if(obj["score"] !== '') {scoreList.push(obj["score"])}})
  let result = scoreList.reduce((pre, curr) => pre + curr) / scoreList.length;
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const newMovies =JSON.parse(JSON.stringify( movies));

  const hourSplitter = (elemToSplit) => elemToSplit.toString().split("h", 1);
  const minuteSplitter = (elemToSplit) => elemToSplit .toString().split(" ").pop().split("min", 1);
  newMovies.map( elem => {
                  if(elem["duration"].includes("min")){
                    elem["duration"] = 
                    parseInt(hourSplitter(elem["duration"])) * 60 + 
                    parseInt(minuteSplitter(elem["duration"]));
                  }
                  else{
                    elem["duration"] = parseInt(hourSplitter(elem["duration"])) * 60;
                  }
                });

  let result = newMovies;
  console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
