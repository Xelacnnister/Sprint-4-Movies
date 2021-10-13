//to run the tests:
//npm run test:watch

// Exercise 1: Get the array of all directors.
  //Function recives the array "movies"("movies")
function getAllDirectors(movies) { 
  //Makes a copy of "movies"("movies") with a .map(), gets the property "director" from every object to create a new array of objects with only "director" property and assigns it to "result"
  let result =  movies.map( obj => {return obj["director"]});
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
  //Function recives the array "movies"("movies") & the string "director"
function getMoviesFromDirector(movies, director) {
  //Filters the "array" with .filter(), gets every object with the property "director" === to the string "director" recived & assigns it to "result"
  let result = movies.filter(obj => { return obj["director"] === director});
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
  //Function recives the array "movies"("movies") & the string "director"
function moviesAverageOfDirector(movies, director) {
  //Filters the "movies" with .filter(), gets every object with the property "director" === to the string "director" recived & assigns it to "moviesFromDirector"
  let moviesFromDirector = movies.filter(obj => { return obj["director"] === director});
  //Gets all the property values of "score" from "moviesFromDirector" with .map() ("obj["score"]")
  //Calcs average "score" with the sum of all the scores useing .reduce() (".reduce((pre, curr) => pre + curr)") & divides the sum between the length of the array "moviesFromDirector" ("/ moviesFromDirector.length;")
  //The result is assigned to "result"
  let result = moviesFromDirector.map( obj => {return obj["score"]}).reduce((pre, curr) => pre + curr) / moviesFromDirector.length;
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
  //Function recives the array "movies"("movies")
function orderAlphabetically(movies) {
  //Create new array with .map() ordered by title with a .sort(), 
  //.sort() compares 2 elements ("a", "b") with a ternary: if("?") condition "a" > "b" is true = returns 1 (puts "b" element before "a" element)
  //else (":") returns 1 (puts "a" before "b"), we return only the first 20 results with .slice() (".slice(0, 20)")
  //The result is assigned to "result"
  let result = movies.map( obj => {return obj["title"]}).sort((a, b) => (a > b) ? 1 : -1).slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
  //Function recives the array "movies"("movies")
function orderByYear(movies) {
  //Create new array with .map() to avoid changing the original array and assigns it to result
  let result =  movies.map( obj => obj );
  //sorts the objects array by "year" property value (".sort((a, b) =>  a.year - b.year") 
  //or ("||") locally "title" property if "year" property is the same to both compared elements ("a.title.localeCompare(b.title));")
  result.sort((a, b) =>  a.year - b.year ||  a.title.localeCompare(b.title));
  console.log("EXERCICE 5 ->", result);
  return result;

}

// Exercise 6: Calculate the average of the movies in a category
  //Function recives the array "movies"("movies") and array "genre"
function moviesAverageByCategory(movies, genre) {
  //Creates new void array variable "scoreList"
  let scoreList = []
  //Filters array "movies" creating new array with those object which property "genre" ("(obj => obj.genre") matches the "genre" recived ("obj.genre == genre)") & assign it to "genreFiltered"
  let genreFiltered = movies.filter(obj => obj.genre == genre);
  //Update "scoreList" array ("{ scoreList.push(obj["score"]) }") with those score objects diferent than '' ("if(obj["score"] !== '')") using .map on "genreFiltered"
  genreFiltered.map( obj => { if(obj["score"] !== '') { scoreList.push(obj["score"]) } });
  //Use the .reduce to sum al values on the "scoreList" arr ("scoreList.reduce( (pre, curr) => pre + curr )"), 
  //then divide by the "scoreList" arr length to get the average score ("/ scoreList.length;") & assign it to "result"
  let result = scoreList.reduce( (pre, curr) => pre + curr ) / scoreList.length;
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
  //Function recives the array "movies"("movies")
function hoursToMinutes(movies) {
  //Create new array with JSON.stringify() & JSON.parse() to avoid changing the original array while being a deep clone & assigns it to newMovies
  const newMovies = JSON.parse(JSON.stringify( movies));
  //Create the method which will allow us to get the number of hours from the string value the "duration" property
  //the element recived ("elemToSplit") will be converted into string to then use .split() to get the number
  const hourSplitter = (elemToSplit) => elemToSplit.toString().split("h", 1);
  //Create the method which will allow us to get the number of minutes from the string value the "duration" property
  //the element recived ("elemToSplit") will be converted into string to then use .split() to separate the string in two arr elem
  //use .pop() to get the last element (the one with the minutes) & then use .split() again to get the number
  const minuteSplitter = (elemToSplit) => elemToSplit.toString().split(" ").pop().split("min", 1);
  //Use .map() to apply the different methods and calc the value in minutes
  newMovies.map( elem => {
                  //if the "duration" property of the checked movie contains "min" 
                  if(elem["duration"].includes("min")){
                    //Assign to the the value calc to the movie "duration" property value
                    elem["duration"] = 
                    //To calc the value we use the method to get the hours number, multiply it by 60 & sum the minutes abtained of applying the minutes method
                    parseInt(hourSplitter(elem["duration"])) * 60 + parseInt(minuteSplitter(elem["duration"]));
                  }
                  //if the "duration" property of the checked movie does not contain "min" 
                  else{
                    //Assign to the the value calc to the movie "duration" property value
                    //To calc the value we use the method to get the hours number, multiply it by 60
                    elem["duration"] = parseInt(hourSplitter(elem["duration"])) * 60;
                  }
                });
  //Assign "newMovies" to the created "result"
  let result = newMovies;
  console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
  //Function recives the array "movies"("movies") and number "year"
function bestFilmOfYear(movies, year) {
  //Create clone of "movies" with .map() named "arrayByYear"
  let arrayByYear =  movies.map( obj => obj );
  //apply .filter() to get only the objects that match their  property value "year" with the "year" recived
  arrayByYear = arrayByYear.filter(elem => elem["year"] === year);
  //Create new valiable "maxScore" to store the highest score value
  let maxScore = 0;
  //Use .map() to iterate "arrayByYear" arr if the iterated property value "score" is equal or higher than "maxScore", 
  //assign that value to "maxScore" ( arr["score"] >= maxScore) ? maxScore = arr["score"],
  //Else return "maxScore" value
  arrayByYear.map( arr => ( arr["score"] >= maxScore) ? maxScore = arr["score"] : maxScore ); 
  //Find the movie/s which "score" property value matches the "maxScore" value and assigns it/them to "bestFilm"
  let bestFilm = arrayByYear.filter(elem => elem["score"] === maxScore) ;

  
  console.log("EXERCICE 8 ->", bestFilm);
  return bestFilm;
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
