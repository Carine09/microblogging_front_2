<template>
 <div
    class="h-screen flex flex-col"
    style="
      background-image: url('/images/canvaPaper.png');
      background-size: cover;
      background-position: center;
    ">
    
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
        <p>Retour au feed</p>
      </RouterLink>
      
      
      </div>
    </header>

    <div class="flex-1 lg:flex-1 flex flex-col  justify-center h-full overflow-hidden m-8 lg:m-12">
         
         <form @submit.prevent="sendData"
             class="flex flex-col space-y-4 sm:space-y-6 lg:space-y-4 xl:space-y-6 2xl:space-y-8">
    
             <div class="space-y-2 sm:space-y-3 lg:space-y-2 xl:space-y-3">
    
                 <label for="text"
                     class="block text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-body text-dark-green">
                    Que veux-tu partager?
                    </label>
    
                 <input id="text" type="text" v-model="text" required
                     class="border-1 border-dark-green rounded-md bg-light-orange w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 bg-light-beige-100 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl focus:outline-none"
                     placeholder="" />
             </div>
    
             <div class="space-y-2 sm:space-y-3 lg:space-y-2 xl:space-y-3">
    
                 <label for="img-url"
                     class="block text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-body text-dark-green">
                     Entre l'url de ton image
                 </label>
    
                 <input id="img-url" type="url" v-model="imageUrl"
                     class="border-1 border-dark-green rounded-md bg-light-orange w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 bg-light-beige-100 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl focus:outline-none" />
             </div>
    
             <div id="technics-list" class="w-60">
                 <p>{{ selectedTechnic }}</p>
                 <label for="technic"
                     class="block text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-body text-dark-green">
                     Quelle est la technique que tu as utilisée?
                 </label>
                 <select v-model="selectedTechnic" required>
                     <option value="oil painting">Oil painting</option>
                     <option value="watercolor">Watercolor</option>
                     <option value="acrylic painting">Acrylic painting</option>
                     <option value="gouache">Gouache</option>
                     <option value="digital art">Digital art</option>
                     <option value="calligraphy">Calligraphy</option>
                     <option value="sketching">Sketching</option>
                     <option value="charcoal drawing">Charcoal drawing</option>
                     <option value="pastel art">Pastel art</option>
                     <option value="ballpoint pen">Ballpoint pen</option>
                     <option value="pencil">Pencil</option>
                     <option value="mixed media">Mixed media</option>
                 </select>
             </div>
    
             <button id="publish-button" type="submit"
                 class="border-1 border-dark-green rounded-md bg-dark-green text-light-orange w-full hover:bg-light-orange hover:text-dark-green active:scale-95 px-4 py-3 sm:px-6 sm:py-4 lg:px-4 lg:py-3 xl:px-6 xl:py-4 2xl:px-8 2xl:py-5 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl font-body transition-all duration-200 mt-4 sm:mt-6 lg:mt-3 xl:mt-4 2xl:mt-6 cursor-pointer shadow-lg hover:shadow-xl">
                 Publish
             </button>
    
         </form>
     </div>
 </div>

</template>


<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const text = ref('');
const imageUrl = ref('');
const selectedTechnic = ref('');


// function createPost() {
//     console.log(`text: ${text.value}, img-url: ${imageUrl.value}, technic used: ${selectedTechnic.value}`) // fonction pour tester si les valeurs du formulaires sont récupérées à sa soumission
// }

async function sendData() {

    const technics = {
    "oil painting": 1,
    "watercolor": 2,
    "acrylic painting": 3,
    "gouache": 4,
    "digital art": 5,
    "calligraphy": 6,
    "sketching": 7,
    "charcoal drawing": 8,
    "pastel art": 9,
    "ballpoint pen": 10,
    "pencil": 11,
    "mixed media": 12
  };

    const dataForm = {
        user_id: authStore.userId,
        text: text.value,
        img_url: imageUrl.value,
        technic_id: technics[selectedTechnic.value] || null,

    }
    try {
        const response = await fetch(`http://localhost:8000/api/post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 
            Authorization: `Bearer ${authStore.token}`,'Accept' : 'application/json'},
            body: JSON.stringify(dataForm)
        });

        const result = await response.json();
        console.log("Le post à été publié:", result);
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}

</script>