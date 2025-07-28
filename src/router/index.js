// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import Profile from '../pages/Profile.vue';
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import NewPost from "../pages/NewPost.vue";
import PostForm from "../pages/PostForm.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
  { path: "/newPost", component: NewPost },
  { path: "/profile", component: Profile },
  { path: "/postForm", component: PostForm },
];

const router = createRouter({
  history: createWebHistory(), // mode historique (url propres)
  routes,
});

export default router;
