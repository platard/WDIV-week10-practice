# Computed properties
## Create vite project
```
npm create vue@latest
```

## Define your reactive data and use computed properties to filter that data
1. Use an array of objects
```
[
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
```
2. define 2 computed properties to obtain a filtered version of the previous array
```
computed: {
    
}
```

3. Use a the v-for to display the values from the data and computed properties.
```
<li> Inception </li>
```

# Vue Router    

## set-up vue router
1. Use the terminal to install vue router
```
npm install vue-router@4
```
2. In main.js, import createRouter and createWebHashHistory functions from vue-router library
```
import {createRouter, createWebHashHistory} from 'vue-router'
```

3. Create a vue router instance and use it with the createApp method
```
const router = createRouter({
        history: createWebHashHistory(),
        routes:[]
})

createApp(App).use(router).mount('#app')
```
4. Inside the main component App.vue, call the `<router-view />` component
```
<template>
  <router-view /> 
</template>
```

5. Inside the views folder, create the Home.vue SFC. Use the template and script from the App.vue

6. Inside the main.js, import the Home component
```
import Home from './views/Home.vue'
```

7. Inside the routes property create the array of objects that map a URL to the corresponding components
```
const routes = [
    { path: '/', component: Home },
]
```



## Router Link
1. In the views folder, create the Details.vue component view
```
<template>
    <div>
        <h1>Here the details</h1>
    </div>
</template>
```
2. In the Home.vue, create links using `<router-link>` built-in component
```
<router-link >
    {{ movie.name }}
</router-link>
```
3. In the main.js import the Details.vue component and add a new path in the routes array
```
import ...
```
```
const routes = [
    { path: '/', component: Home },
    { ... }
]
```

continue here....
## Dynamic routing

1. In the main.js > routes array, allow the use of route parameters and define the prop
```
{ 
    path: '/details/:id', 
    component: Details, 
    props: true
},

```
2. In the Home.vue, create a dynamic path
```
<router-link to="/details/...">
            {{ movie.name }} : {{ movie.genre }}
</router-link>
``` 

3. In the Details.vue, access the route parameters using the props option 
```
<script>
    export default {
        props: ['id'],
    }
</script>

```

## Programatic navigation
1. Use the $router object and its push method to add a new route path to the router history
```
methods: {
            updateItem: function() {
                this.status = "Movie updated..."
                this.$router.push('/')
            }
        },
```


