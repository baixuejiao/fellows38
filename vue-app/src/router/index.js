import Vue from 'vue'
import VueRouter from 'vue-router'

import Movie from '../views/Movie.vue'
import MovieDetilas from '../views/MovieDetails.vue'
import Music from '../views/Music.vue'
import MusicDetails from '../views/MusicDetails.vue'
import Book from '../views/Book.vue'
import Photo from '../views/Photo.vue'
import PhotoDetails from '../views/PhotoDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/moviedetails/:id',
    name: 'MovieDetilas',
    component: MovieDetilas
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/musicdetails',
    name: 'MusicDetails',
    component: MusicDetails
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/photodetails/:index',
    name: 'PhotoDetails',
    component: PhotoDetails
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
