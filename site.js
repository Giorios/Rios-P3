/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
         title: "IMDB + Gio's Top 8 Movies",
         owner: 'Giovanni',
         github: 'https://github.com/Giorios/Rios-P3'
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
           getMonthText(dateArray) {
                  switch(dateArray[1]){
                        case 1:
                        text = "January"
                        break;
                        case 2:
                        text = "February"
                        break;
                        case 3:
                        text = "March"
                        break;
                        case 4:
                        text = "April"
                        break;
                        case 5:
                        text = "May"
                        break;
                        case 6:
                        text = "June"
                        break;
                        case 7:
                        text = "July"
                        break;
                        case 8:
                        text = "August"
                        break;
                        case 9:
                        text = "September"
                        break;
                        case 10:
                        text = "October"
                        break;
                        case 11:
                        text = "November"
                        break;
                        case 12:
                        text = "December"
                        break;

                  }

                  date = text + " " + dateArray[2] + ", " + dateArray[0];
                  return date;
            },
            posterClick(index){
                  const movie = this.movies[index];
                  const posterindex = movie.posters.length;
                  movie.posterindex = (movie.posterindex + 1) % numPosters;
            },
      } 
})


vue_app.mount("#vue_app")