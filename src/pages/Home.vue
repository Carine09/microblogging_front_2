<template>
  <div
    class="min-h-100 "
    style="
      background-image: url('/images/canvaPaper.png');
      background-size: cover;
      background-position: center;
    "
  >
    <header>
      <!-- Logo and account  -->
      <div
        class="bg-light-orange border-1 border-dark-green flex items-center justify-between"
      >
      <RouterLink to="/home">
         <img
          src="/public/DrawSphere.png"
          alt="Brand logo"
          class="h-24 sm:h-24 lg:h-32"
        />
      </RouterLink>
       
      <RouterLink to="/postForm">
          <input
            class="border-1 border-dark-green rounded-md bg-light-orange w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 bg-light-beige-100 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl focus:outline-none"
            placeholder="Que veux-tu partager?"
          />
      </RouterLink>

      <RouterLink to="/profile">
          <img
          src="/src/assets/images/flaya_art/Flaya_5_fresque_acrylique.JPG"
          alt="Photo de profil allant sur le profil"
          class="w-24 h-24 rounded-full object-cover m-4"
        /> 
      </RouterLink>
      
      </div>
    </header>

    <div class="m-5">
      <div
        class="h-screen overflow-hidden outline-solid outline-dark-green rounded-md bg-light-orange mx-8 md:mx-32"
      >
        <div class="flex item-baseline">
          <img
            src="/public/DrawSphere.png"
            alt="Brand logo"
            class="h-12 sm:h-12 lg:h-16 my-2"
          />
          <h2 class="font-heading text-dark-green text-xl my-2">Flaya</h2>
        </div>
        <div class="h-screen">
          <p class="text-body">Modèles Vivantes arc-en-ciel</p>
          <img
            src="/src/assets/images/flaya_art/Flaya_1.jpg"
            alt="Modèles vivantes réalisées en aquarelle, aux couleurs de l'arc en ciel"
            class="object-scale-down max-h-full max-w-full drop-shadow-md rounded-md m-auto flex item-center justify-center"
          />
        </div>
      </div>
    </div>
    <div>
      <!-- <pre>  est un bloc debug visuel qui ffiche tout ce que chaque post dynamique rempli -->
      <!-- <pre class="text-white bg-black p-4">{{ postList }}</pre> -->
      <postItem
        v-for="post in postList"
        :id="post.id"
        :user_id="post.user_id"
        :text="post.text"
        :img_url="post.img_url"
        :technic_id="post.technic_id"
      />

      <div
        class="h-screen overflow-hidden outline-solid outline-dark-green rounded-md bg-light-orange mx-8 md:mx-32"
      >
        <div class="flex item-baseline">
          <img
            src="/public/DrawSphere.png"
            alt="Brand logo"
            class="h-12 sm:h-12 lg:h-16 my-2"
          />
          <h2 class="font-heading text-dark-green text-xl my-2">RBF</h2>
        </div>
        <div class="h-screen">
          <p class="text-body">Lamentations</p>
          <img
            src="/src/assets/images/rbf_art/rbf_1.jpg"
            alt="Acrylique sur toiles"
            class="object-scale-down max-h-full drop-shadow-md rounded-md m-auto flex item-center justify-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "../router/index.js";
import { ref } from "vue";
import postItem from "../assets/components/postItem.vue";
import { onMounted } from "vue";

const postList = ref([]);

function getAllPosts() {
  fetch("http://localhost:8000/api/post", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      postList.value = data;
    })
    .catch((error) => {
      console.error(error);
    });
}

onMounted(() => {
  getAllPosts();
});

</script>
