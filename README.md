# MOVIE SEARCH ENGINE

The application allows you to search for movies by title and to sort the searched movies into categories "watched" and "to watch".\
Each of the films can be viewed in a separate tab, in which we can find details of the selected film.\
The application uses the API provided by http://www.omdbapi.com/.

![homePage](https://user-images.githubusercontent.com/59224048/104773466-66a7df80-5775-11eb-9c82-d7ee2d30e6c7.png)

![movieDetails](https://user-images.githubusercontent.com/59224048/104773501-70c9de00-5775-11eb-89f2-5d25f6ba4e18.png)

## Technologies 

- NodeJS
- ReactJS

## Run the application

First, download the unique API key from http://www.omdbapi.com/apikey.aspx, which we will get after free registration.
Then create an .env file in the root directory and put the REACT_APP_OMDb_API_KEY in it:

```
.env

REACT_APP_OMDb_API_KEY=[your API key]
```

### `npm i`

Will install the needed dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contact 
zofiawasilonek@gmail.com<br>
<a href="https://www.linkedin.com/in/zofia-wasilonek/">Linkedin</a>