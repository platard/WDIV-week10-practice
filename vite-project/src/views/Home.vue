<template>
    <h1>Movies</h1>
    <ol>
      <li v-for="movie in movies" :key="movie.id"> {{ movie.name }}:{{ movie.genre }}</li>
    </ol>
  <hr>
    <h2>Action</h2>
    <ol>
      <li v-for="movie in actionMovies" :key="movie.id"><router-link :to="`/details/${movie.id}`">{{ movie.name }}</router-link></li>
    </ol>
    <h2>Crime</h2>
    <ol>
      <li v-for="movie in crimeMovies" :key="movie.id">{{ movie.name }}</li>
    </ol>
  </template>
  
  <script>
  
  export default{
    data: function(){
      return {
        movies: [
            { id: 1, name: "Inception", genre: "Science Fiction" },
            { id: 2, name: "The Dark Knight", genre: "Action" },
            { id: 3, name: "Pulp Fiction", genre: "Crime" },
            { id: 4, name: "Redemption", genre: "Drama" },
            { id: 5, name: "The Godfather", genre: "Crime" },
            { id: 6, name: "Fight Club", genre: "Drama" },
            { id: 7, name: "The Matrix", genre: "Science Fiction" },
            { id: 8, name: "Goodfellas", genre: "Crime" },
            { id: 9, name: "Interstellar", genre: "Science Fiction" },
            { id: 10, name: "The Avengers", genre: "Action" }
        ]
      }
    },
    computed: {
      actionMovies: function(){
        return this.movies.filter( movie => movie.genre === "Action")
      },
      crimeMovies(){
        return this.movies.filter(movie => movie.genre === "Crime")
      }
      
    },
    created(){
        const storeItems = localStorage.getItem('items')
        if (storeItems){
            this.movies = JSON.parse(storeItems)
        } else {
            localStorage.setItem('items', JSON.stringify(this.movies))
        }
    }
  
  }
  </script>