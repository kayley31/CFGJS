const genres = ["pop", "rock", "hip-hop", "country", "rnb", "soul", "funk", "reggae", "disco"]
let songs = [{title: 'song1', artist: 'artist1', year: 2008, genre: 'funk'}, {title: 'song2', artist: 'artist2', year: 1997, genre: 'soul'}, {title: 'song3', artist: 'artist3', year: 1976, genre: 'hip-hop'}, {title: 'song4', artist: 'artist4', year: 1976, genre: 'rock'}, {title: 'song5', artist: 'artist5', year: 1970, genre: 'disco'}, {title: 'song6', artist: 'artist6', year: 1980, genre: 'disco'}, {title: 'song7', artist: 'artist7', year: 2007, genre: 'pop'}, {title: 'song8', artist: 'artist8', year: 1985, genre: 'disco'}, {title: 'song9', artist: 'artist9', year: 1992, genre: 'reggae'}, {title: 'song10', artist: 'artist10', year: 1976, genre: 'rnb'}, {title: 'song11', artist: 'artist11', year: 1959, genre: 'soul'}, {title: 'song12', artist: 'artist12', year: 1996, genre: 'hip-hop'}, {title: 'song13', artist: 'artist13', year: 2010, genre: 'reggae'}, {title: 'song14', artist: 'artist14', year: 1978, genre: 'country'}, {title: 'song15', artist: 'artist15', year: 1996, genre: 'pop'}, {title: 'song16', artist: 'artist16', year: 1980, genre: 'soul'}, {title: 'song17', artist: 'artist17', year: 1954, genre: 'disco'}, {title: 'song18', artist: 'artist18', year: 1986, genre: 'country'}, {title: 'song19', artist: 'artist19', year: 2016, genre: 'rock'}, {title: 'song20', artist: 'artist20', year: 2009, genre: 'rock'}, {title: 'song21', artist: 'artist21', year: 1993, genre: 'rnb'}, {title: 'song22', artist: 'artist22', year: 1950, genre: 'funk'}, {title: 'song23', artist: 'artist23', year: 1996, genre: 'country'}, {title: 'song24', artist: 'artist24', year: 1984, genre: 'rock'}, {title: 'song25', artist: 'artist25', year: 1972, genre: 'country'}, {title: 'song26', artist: 'artist26', year: 1981, genre: 'hip-hop'}, {title: 'song27', artist: 'artist27', year: 2017, genre: 'funk'}, {title: 'song28', artist: 'artist28', year: 2019, genre: 'rnb'}, {title: 'song29', artist: 'artist29', year: 2001, genre: 'soul'}, {title: 'song30', artist: 'artist30', year: 2018, genre: 'rnb'}, {title: 'song31', artist: 'artist31', year: 1985, genre: 'hip-hop'}, {title: 'song32', artist: 'artist32', year: 1976, genre: 'pop'}, {title: 'song33', artist: 'artist33', year: 1999, genre: 'reggae'}, {title: 'song34', artist: 'artist34', year: 1957, genre: 'disco'}, {title: 'song35', artist: 'artist35', year: 1966, genre: 'soul'}, {title: 'song36', artist: 'artist36', year: 1973, genre: 'rock'}, {title: 'song37', artist: 'artist37', year: 1950, genre: 'country'}, {title: 'song38', artist: 'artist38', year: 1995, genre: 'funk'}, {title: 'song39', artist: 'artist39', year: 1997, genre: 'country'}, {title: 'song40', artist: 'artist40', year: 1993, genre: 'reggae'}, {title: 'song41', artist: 'artist41', year: 2009, genre: 'rnb'}, {title: 'song42', artist: 'artist42', year: 2006, genre: 'funk'}, {title: 'song43', artist: 'artist43', year: 1958, genre: 'soul'}, {title: 'song44', artist: 'artist44', year: 1985, genre: 'rnb'}, {title: 'song45', artist: 'artist45', year: 1979, genre: 'hip-hop'}, {title: 'song46', artist: 'artist46', year: 1972, genre: 'rnb'}, {title: 'song47', artist: 'artist47', year: 1978, genre: 'hip-hop'}, {title: 'song48', artist: 'artist48', year: 1996, genre: 'funk'}, {title: 'song49', artist: 'artist49', year: 2007, genre: 'hip-hop'}, {title: 'song50', artist: 'artist50', year: 2012, genre: 'pop'}, {title: 'song51', artist: 'artist51', year: 2013, genre: 'disco'}, {title: 'song52', artist: 'artist52', year: 1958, genre: 'rock'}, {title: 'song53', artist: 'artist53', year: 1996, genre: 'country'}, {title: 'song54', artist: 'artist54', year: 2020, genre: 'soul'}, {title: 'song55', artist: 'artist55', year: 2010, genre: 'reggae'}, {title: 'song56', artist: 'artist56', year: 1971, genre: 'country'}, {title: 'song57', artist: 'artist57', year: 1987, genre: 'pop'}, {title: 'song58', artist: 'artist58', year: 1973, genre: 'rock'}, {title: 'song59', artist: 'artist59', year: 2000, genre: 'rock'}, {title: 'song60', artist: 'artist60', year: 1976, genre: 'funk'}, {title: 'song61', artist: 'artist61', year: 1970, genre: 'rock'}, {title: 'song62', artist: 'artist62', year: 1996, genre: 'disco'}, {title: 'song63', artist: 'artist63', year: 2010, genre: 'hip-hop'}, {title: 'song64', artist: 'artist64', year: 2000, genre: 'pop'}, {title: 'song65', artist: 'artist65', year: 2015, genre: 'rnb'}, {title: 'song66', artist: 'artist66', year: 2007, genre: 'funk'}, {title: 'song67', artist: 'artist67', year: 2007, genre: 'disco'}, {title: 'song68', artist: 'artist68', year: 1973, genre: 'disco'}, {title: 'song69', artist: 'artist69', year: 1968, genre: 'disco'}, {title: 'song70', artist: 'artist70', year: 1955, genre: 'rock'}, {title: 'song71', artist: 'artist71', year: 1977, genre: 'soul'}, {title: 'song72', artist: 'artist72', year: 1962, genre: 'rock'}, {title: 'song73', artist: 'artist73', year: 1990, genre: 'country'}, {title: 'song74', artist: 'artist74', year: 2011, genre: 'disco'}, {title: 'song75', artist: 'artist75', year: 2017, genre: 'hip-hop'}, {title: 'song76', artist: 'artist76', year: 1998, genre: 'pop'}, {title: 'song77', artist: 'artist77', year: 1957, genre: 'pop'}, {title: 'song78', artist: 'artist78', year: 1990, genre: 'rnb'}, {title: 'song79', artist: 'artist79', year: 1959, genre: 'funk'}, {title: 'song80', artist: 'artist80', year: 2019, genre: 'soul'}, {title: 'song81', artist: 'artist81', year: 2009, genre: 'hip-hop'}, {title: 'song82', artist: 'artist82', year: 1978, genre: 'pop'}, {title: 'song83', artist: 'artist83', year: 1974, genre: 'rock'}, {title: 'song84', artist: 'artist84', year: 1975, genre: 'pop'}, {title: 'song85', artist: 'artist85', year: 2017, genre: 'rock'}, {title: 'song86', artist: 'artist86', year: 2001, genre: 'reggae'}, {title: 'song87', artist: 'artist87', year: 2013, genre: 'funk'}, {title: 'song88', artist: 'artist88', year: 1978, genre: 'soul'}, {title: 'song89', artist: 'artist89', year: 1951, genre: 'country'}, {title: 'song90', artist: 'artist90', year: 1951, genre: 'disco'}, {title: 'song91', artist: 'artist91', year: 1984, genre: 'hip-hop'}, {title: 'song92', artist: 'artist92', year: 2008, genre: 'rock'}, {title: 'song93', artist: 'artist93', year: 2001, genre: 'rock'}, {title: 'song94', artist: 'artist94', year: 2016, genre: 'soul'}, {title: 'song95', artist: 'artist95', year: 1978, genre: 'pop'}, {title: 'song96', artist: 'artist96', year: 1975, genre: 'soul'}, {title: 'song97', artist: 'artist97', year: 1966, genre: 'rock'}, {title: 'song98', artist: 'artist98', year: 2011, genre: 'reggae'}, {title: 'song99', artist: 'artist99', year: 1966, genre: 'hip-hop'}, {title: 'song100', artist: 'artist100', year: 1980, genre: 'soul'}];



// ADDING THE GENRES FROM THE GENRES ARRAY TO A DROP DOWN LIST FOR USER SELECTION

// The selection html element for genre 
const genreSelection = document.getElementById("genre_select");
// When clicked
genreSelection.addEventListener("click", function() {
    // This function adds all the genres from the genres array as options
    addGenreOptions();
});

function addGenreOptions() {
    // for each genre in the genres array
    for(let j=0; j<genres.length;j++){
        // Save the item into a variable
        let genreItem = genres[j];
        // Create an option element 
        let optionItem = document.createElement("option");
        //optionItem.setAttribute("value",genreItem) - dont need this
        // Add the genre to the inner html of the option item
        optionItem.innerHTML = genreItem;
        // Append the element as a child to the select element
        genreSelection.appendChild(optionItem);

    }
}


// USER SELECTS GENRE AND/OR DECADE AND CLICKS SUBMIT
// CREATE PLAYLIST BASED ON USER SELECTIONS

// Declared variables outside the event listener

let genreChosen = null;
let decadeChosen = null;

const submit = document.getElementById("submit_selection");
submit.addEventListener("click", function(event) {
    selectGenre();   
    selectDecade();  
    const digitChosen = decadeToDigit(decadeChosen); 
    createPlayList(genreChosen,digitChosen);   
    //event.preventDefault();
    });

function selectGenre() {              
    const genreOptions = genreSelection.getElementsByTagName("option");
    let genreSelected = false;
    while(!genreSelected) {
        for(let k=0;k<genres.length;k++) {
            let genreOption = genreOptions[k];
            if (genreOption.selected==true) {
                genreChosen = genreOption.innerHTML;
                genreSelected = true;
            } // end of if
        } // end of for loop
    } // end of while loop
} // end of function defined


function selectDecade() {
    const decadeSelection = document.getElementById("decade_select");
    const decadeOptions = decadeSelection.getElementsByTagName("option");
    let decadeSelected = false;
    while(!decadeSelected) {
        for(let k=0;k<decadeOptions.length;k++) {
            let decadeOption = decadeOptions[k];
            if(decadeOption.selected==true) {
                decadeChosen = decadeOption.innerHTML;
                decadeSelected = true;
            }  // end of if
        } //end of for loop
    } // end of while loop
    }  // end of function defined


// Function that takes the user input for decade and changes it into a number e.g. if decade was 1970s, the number is 7
// However data type remains a string.
function decadeToDigit(decade) {
    let digit = decade[2];
    console.log(digit);
    return digit;
}


// ADD SONGS TO PLAYLIST BASED ON USER SELECTIONS

let playList = [];
let playListGenre = [];
let playListDecade = [];
let playListComplete = [];
function createPlayList(genre, number) {
    // filters the songs array and creates new array with just the songs with the chosen genre
    playListGenre = filterByGenre(genre);
    playListComplete = filterByDecade(playListGenre,number);
    outputResults(playListComplete);
} // end of function defined

function filterByGenre(genre) {
    for(i=0;i<songs.length;i++) {
        if(songs[i].genre == genre) {
        playList.push(songs[i]);
        } // end if
    } // end for loop
    return playList;
}

function filterByDecade(playList, number) {
    for(i=playList.length-1;i>=0;i--) {
        let yearToString = playList[i].year.toString();
        yearToString3rd = yearToString[2];
        if(yearToString3rd != number) {
            // This object is removed from the array
            playList.splice(i,1);
        } // end of if
    } // end of for loop
    return playList;
}

function outputResults(playListComplete) {
    const outputArea = document.getElementById("Playlist_output");
    outputArea.innerHTML = "";
    const message = document.createElement("p");
  // If playlist is empty output message "There are no songs in the database that match these selections"
  // else output the following message:
    message.innerHTML = "Here is your playlist:";
    outputArea.appendChild(message);
    const list = document.createElement("ol");
    outputArea.appendChild(list);
    // for each item in the playlist
  // it would be good to add a delay on this so they appear one by one
  for (let j = 0; j < playListComplete.length; j++) {
  // Save the item into a variable
  let item = playListComplete[j];
  // Create a HTML list item
  let listItem = document.createElement('li');

    listItem.innerHTML = `Song: ${item.title}, Artist: ${item.artist}, Year: ${item.year}, Genre: ${item.genre}`;
    // Append the element as a child to the select element
    setTimeout(() => {
    list.appendChild(listItem);
  }, 3000); // 3 second delay
}
}
