<template>
<div class="h-screen flex flex-col lg:flex-row overflow-hidden">    

  <div class="flex-1 bg-gray-100 flex items-center justify-center">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <form>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
      </form>
    </div>
  </div>
  <div class="hidden lg:flex flex-col flex-shrink-0 w-full lg:w-auto bg-blue-600 text-white p-8">
    <h1 class="text-xl font-bold mb-4">Welcome Back!</h1>
    <p>Sign in to continue to your account.</p>
  </div>
</div>
</template>


<script setup>      


</script>