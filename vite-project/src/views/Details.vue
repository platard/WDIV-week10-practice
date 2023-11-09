<template>
    <div>
        <h1>Here the details... id: <span @click="updateItem">{{ id }} </span> </h1>
        <form @submit.prevent="updateItem">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="movie.name">
        </form>
        <p>{{ status }}</p>
        <p>Movie: {{ movie.name }}</p>
    </div>
</template>

<script>

export default {
    props: ['id'],
    data(){
        return{
            status:'',
            movie: '',
            movies: ''
        }
    },
    created(){
        this.movies = JSON.parse(localStorage.getItem('items'))
        if (this.movies){
            this.movie = this.movies.find( item => item.id == this.id)
        }
    },
    methods: {
            updateItem: function() {
                localStorage.setItem('items', JSON.stringify( this.movies.map(movie => movie.id == this.id ? {...this.movie} : movie) ) )
                this.status = "Movie updated..."
                this.$router.push('/')
            }
        },
}
</script>