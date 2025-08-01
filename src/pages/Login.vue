<template>


 <div
    class="h-screen flex flex-col lg:flex-row overflow-hidden"
    style="background-image: url('/images/canvaPaper.png'); background-size: cover; background-position: center;">
    
    <!-- Form section: Takes remaining space on mobile/tablet, half-width on desktop, centers form content -->
    <div class="flex-1 lg:flex-1 flex flex-col items-center justify-center h-full overflow-hidden">
    
      <!-- Form wrapper: Responsive width constraints and padding, progressively wider on larger screens -->
       <div
        class="border-2 border-dark-green rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg 2xl:max-w-xl px-4 sm:px-6 lg:px-6 xl:px-8 py-6 sm:py-8 lg:py-4 xl:py-6">

        <!-- Page title: Large responsive heading (32px-96px) left-aligned above input -->
        <h1
          class=" text-dark-green text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-heading text-center mb-6 sm:mb-8 lg:mb-4 xl:mb-6">
          Draw Sphere
        </h1>
         <h1
          class=" text-dark-green text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-heading text-center mb-6 sm:mb-8 lg:mb-4 xl:mb-6">
          Bon retour parmi nous
        </h1>
        <!-- Login form: Vertical flex layout with responsive spacing between form elements -->
        <form id="login-form" class="flex flex-col space-y-4 sm:space-y-6 lg:space-y-4 xl:space-y-6 2xl:space-y-8">

          <!-- Email input group: Label and input with minimal spacing, tighter on desktop -->
          <div class="space-y-2 sm:space-y-3 lg:space-y-2 xl:space-y-3">

            <!-- Email label: Responsive typography (16px-32px) with body font -->
            <label for="email"
              class="block text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-body text-dark-green">
              Email
            </label>

            <!-- Email input field: Full width with responsive padding, focus ring on interaction -->
            <input id="email" type="email" required
              class="border-1 border-dark-green rounded-md bg-light-orange w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 bg-light-beige-100 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl focus:outline-none" />
          </div>

          <!-- Password input group: Label and input with minimal spacing, tighter on desktop -->
          <div class="space-y-2 sm:space-y-3 lg:space-y-2 xl:space-y-3">

            <!-- Password label: Responsive typography (16px-32px) with body font -->
            <label for="password"
              class="block text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-body text-dark-green">
              Mot de passe
            </label>

            <!-- Password input field: Full width with responsive padding, focus ring on interaction -->
            <input id="password" type="password" required
              class="border-1 border-dark-green rounded-md bg-light-orange w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 bg-light-beige-100 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl focus:outline-none" />
          </div>

          <!-- Error message: Hidden by default, shows when login fails, responsive typography -->
          <p id="login-error-message"
            class="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-body text-red-alert-600 text-center hidden">
            Mot de passe ou adresse mail invalide
          </p>

          <!-- Submit button: Full width with responsive padding, hover and active states -->
          <button id="login-button" type="submit"

            class="border-1 border-dark-green rounded-md bg-dark-green text-light-orange w-full hover:bg-light-orange hover:text-dark-green active:scale-95 px-4 py-3 sm:px-6 sm:py-4 lg:px-4 lg:py-3 xl:px-6 xl:py-4 2xl:px-8 2xl:py-5 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl font-body transition-all duration-200 mt-4 sm:mt-6 lg:mt-3 xl:mt-4 2xl:mt-6 cursor-pointer shadow-lg hover:shadow-xl">
            Connecte-toi

          </button>
        </form>
      </div>
    </div>
 </div>


</template>

<script setup>      
import router from '../router/index.js';
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth.js';

const auth = useAuthStore();

onMounted(() => {
  const loginForm = document.querySelector('#login-form');
  const loginErrorMessage = document.querySelector('#login-error-message');

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    fetch("http://localhost:8000/api/login", {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw data.error;
        }
        auth.setToken(data.access_token, data.user.id);
      
        router.push('/home');
      })
      .catch(error => {
        console.log(error);
        loginErrorMessage.classList.remove('hidden');
        loginErrorMessage.classList.add('block');
      })
  });
});

</script>