<template>
  <div
    class="min-h-100 flex flex-col"
    style="
      background-image: url('/images/canvaPaper.png');
      background-size: cover;
      background-position: center;
    "
  >
    <header>
      <!-- Logo and account  -->
      <div
        class="flex items-center justify-between space-x-2 ml-4 mr-4 sm:space-x-4"
      >
        <img
          src="/public/DrawSphere.png"
          alt="Brand logo"
          class="h-24 sm:h-24 lg:h-32"
        />
        <RouterLink to="/postForm">
          <input
            class="border-1 border-dark-green rounded-md bg-light-orange w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 bg-light-beige-100 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl focus:outline-none"
            placeholder="Que veux-tu partager?"
          />
        </RouterLink>
        <RouterLink to="/profile"> Profile </RouterLink>
      </div>
    </header>

    <div>
     <!-- affichage dynamique
     <post
     v-for="post in PostList" 
     :id="user_id" 
     :title="post.text"
     :img_url="post.img_url"
     :alt="furniture.alt"
     :technic="post.technic_id"
     :date="post.created_at"
     /> -->
     
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
            class="object-scale-down max-h-full drop-shadow-md rounded-md m-auto flex item-center justify-center"
          />
        </div>
      </div>
    </div>
    <div>
      <!-- CORRESPONDANCE AVEC LE POST SEEDER -->
      <!-- <'user_id' => $moose->id,>
        <'text' => 'Bro portrait',>
        <'img_url' => '/public/assets/images/moose_art/moose_1.jpg', >
        <'technic_id' => 10, //ballpoint pen>
        <'created_at' => now(),> -->
      <div
        class="h-screen overflow-hidden outline-solid outline-dark-green rounded-md bg-light-orange mx-8 md:mx-32 my-4"
      >
        <div class="flex item-baseline">
          <img
            src="/public/DrawSphere.png"
            alt="Brand logo"
            class="h-12 sm:h-12 lg:h-16 my-2"
          />
          <h2 class="font-heading text-dark-green text-xl my-2">Moose</h2>
        </div>
        <div class="h-screen">
          <p class="text-body">Portraits du Bro</p>
          <img
            src="/src/assets/images/moose_art/moose_1.jpg"
            alt="Portraits de mon petit frères, réalisés avec un stylo bille"
            class="object-scale-down max-h-full drop-shadow-md rounded-md m-auto flex item-center justify-center"
          />
        </div>
      </div>
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

    <footer>
      <p>FOOTER</p>
    </footer>
  </div>
</template>

<script setup>
import router from "../router/index.js";
</script>
