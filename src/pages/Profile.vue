<template>
  <div
    class="min-h-100"
    style="
      background-image: url('/images/canvaPaper.png');
      background-size: cover;
      background-position: center;
    "
  >
    <header
      class="border-1 border-dark-green bg-light-orange w-full flex items-center justify-between"
    >
      <!-- Logo and account  -->
      <div>
        <RouterLink to="/home">
          <img
            src="/public/DrawSphere.png"
            alt="Brand logo"
            class="h-24 sm:h-24 lg:h-32"
          />
          <p>Retour au feed</p>
        </RouterLink>
      </div>
    </header>

    <div class="flex items-center m-4">
      <!-- Logo and account  -->
      <div class="flex items-center space-x-2 ml-4 mr-4 sm:space-x-4">
        <img
          src="/src/assets/images/flaya_art/Flaya_5_fresque_acrylique.JPG"
          alt="Photo de profil allant sur le profil"
          class="border-1 border-dark-green w-32 h-32 md:w-38 md:h-38 rounded-full object-cover"
        />
        <div
          class="border-1 border-dark-green bg-light-pink h-auto w-full rounded-lg"
        >
          <p class="text-dark-green font-heading text-xl md:text-2xl">FLaya</p>
          <p class="text-dark-green font-body">
            Artiste visuelle passionnée par les couleurs. J'ai une
            spécialisation dans les fresques. <br />Je fais également beaucoup
            d'acrylique et d'aquarelle sur mon temps libre.
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
      <div
        class="border-1 border-dark-green h-auto max-w-full rounded-lg text-center text-dark-green font-body text-xl bg-light-orange"
      >
        <img
          class="h-auto max-w-full rounded-lg"
          src="\src\assets\images\flaya_art\Flaya_2.jpg"
          alt=""
        />
        <p
          class="text-center text-dark-green bg-light-orange font-body text-xl"
        >
          Colibris expressifs
        </p>
      </div>

      <div
        class="border-1 border-dark-green h-auto max-w-full rounded-lg text-center text-dark-green font-body text-xl bg-light-orange"
      >
        <p class="pt-8 text-center">
          " C'est la JAVA ici, on fait la fête avec des dresseurs de PYTHON.
          Parfois ils C# un peu mais C++ pour passer le temps. JS'aye de les
          calmer mais C peine perdu. CSSuyer leur bagare derrère eux. Elles
          iront HT elles meme leurs gâteaux"
        </p>
      </div>

      <div
        class="border-1 border-dark-green h-auto max-w-full rounded-lg text-center text-dark-green font-body text-xl bg-light-orange"
      >
        <img
          class="h-auto max-w-full rounded-lg"
          src="/src/assets/images/flaya_art/Flaya_1.jpg"
          alt=""
        />
        <p class="text-center text-dark-green font-body text-xl">
          Modèles vivantes arc-en-ciel
        </p>
      </div>

      <div
        class="border-1 border-dark-green h-auto max-w-full rounded-lg text-center text-dark-green font-body text-xl bg-light-orange"
      >
        <img
          class="h-auto max-w-full rounded-lg"
          src="/src/assets/images/flaya_art/Flaya_3_1.jpg"
          alt=""
        />
        <p class="text-center text-dark-green font-body text-xl">
          La fée des dragons
        </p>
      </div>

      <div
        class="border-1 border-dark-green h-auto max-w-full rounded-lg text-center text-dark-green font-body text-xl bg-light-orange"
      >
        <img
          class="h-auto max-w-full rounded-lg"
          src="/src/assets/images/flaya_art/Flaya_5_fresque_acrylique.JPG"
          alt=""
        />
        <p class="text-center text-dark-green font-body text-xl">
          Fresque acrylique façon aquarelle
        </p>
      </div>

      <div
        class="border-1 border-dark-green h-auto max-w-full rounded-lg text-center text-dark-green font-body text-xl bg-light-orange"
      >
        <p class="pt-8 text-center">
          Poesie : 'Fly me to hell, the endless Madness ; Everything I kept
          buried inside, must be released in your eyes"
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
