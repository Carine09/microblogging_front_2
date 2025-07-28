
<template>

<div class="h-screen flex flex-col lg:flex-row overflow-hidden">
    <!-- Form section: Takes remaining space on mobile/tablet, half-width on desktop, centers form content -->
    <div class="flex-1 lg:flex-1 bg-medium-beige-300 flex flex-col items-center justify-center h-full overflow-hidden">

      <!-- Form wrapper: Responsive width constraints and padding, progressively wider on larger screens -->
       <div class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg 2xl:max-w-xl px-4 sm:px-6 lg:px-6 xl:px-8 py-6 sm:py-8 lg:py-4 xl:py-6">

        <!-- Page title: Large responsive heading (32px-96px) left-aligned above form -->
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading text-dark-aubergine-800 text-left mb-6 sm:mb-8 lg:mb-4 xl:mb-6">
          Login
        </h1>

        <!-- Login form: Vertical flex layout with responsive spacing between form elements -->
        <form id="login-form" class="flex flex-col space-y-4 sm:space-y-6 lg:space-y-4 xl:space-y-6 2xl:space-y-8">

          <!-- Email input group: Label and input with minimal spacing, tighter on desktop -->
          <div class="space-y-2 sm:space-y-3 lg:space-y-2 xl:space-y-3">

            <!-- Email label: Responsive typography (16px-32px) with body font -->
            <label for="email"
              class="block text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-body text-dark-aubergine-800">
              BONJOUR
            </label>

            <!-- Email input field: Full width with responsive padding, focus ring on interaction -->
            <input id="email" type="email" required
              class="w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 bg-light-beige-100 border-0 text-dark-aubergine-800 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl focus:outline-none focus:ring-2 focus:ring-dark-aubergine-800 transition-all duration-200" />
          </div>

          <!-- Password input group: Label and input with minimal spacing, tighter on desktop -->
          <div class="space-y-2 sm:space-y-3 lg:space-y-2 xl:space-y-3">

            <!-- Password label: Responsive typography (16px-32px) with body font -->
            <label for="password"
              class="block text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-body text-dark-aubergine-800">
              Password
            </label>

            <!-- Password input field: Full width with responsive padding, focus ring on interaction -->
            <input id="password" type="password" required
              class="w-full px-3 py-2 sm:px-4 sm:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 2xl:px-5 2xl:py-4 bg-light-beige-100 border-0 text-dark-aubergine-800 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl focus:outline-none focus:ring-2 focus:ring-dark-aubergine-800 transition-all duration-200" />
          </div>

          <!-- Error message: Hidden by default, shows when login fails, responsive typography -->
          <p id="login-error-message"
            class="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-body text-red-alert-600 text-center hidden">
            Invalid email or password, please try again!
          </p>

          <!-- Submit button: Full width with responsive padding, hover and active states -->
          <button id="login-button" type="submit"
            class="w-full bg-dark-aubergine-800 hover:bg-dark-brown-800 active:scale-95 px-4 py-3 sm:px-6 sm:py-4 lg:px-4 lg:py-3 xl:px-6 xl:py-4 2xl:px-8 2xl:py-5 text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl font-body text-light-beige-100 transition-all duration-200 mt-4 sm:mt-6 lg:mt-3 xl:mt-4 2xl:mt-6 cursor-pointer shadow-lg hover:shadow-xl">
            Sign in
          </button>
        </form>
      </div>
    </div>
  </div>

</template>


<script setup>      
import router from '../router/index.js';
import { onMounted } from 'vue';

</script>