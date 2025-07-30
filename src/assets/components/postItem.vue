<template>
  <div
    class="h-screen overflow-hidden outline-solid outline-dark-green rounded-md bg-light-orange mx-8 md:mx-32 my-4"
  >
    <div class="flex item-baseline">
      <img
        src="/public/DrawSphere.png"
        alt="Profile Pic"
        class="h-12 sm:h-12 lg:h-16 my-2"
      />
      <h2 class="font-heading text-dark-green text-xl my-2">
        {{ props.name }}
      </h2>
      <!-- à verifier -->
    </div>
    <div class="h-screen">
      <p class="text-body text-dark-green my-1 md:my-2">{{ props.text }}</p>
      <img
        :src="props.img_url"
        class="object-scale-down max-h-full drop-shadow-md rounded-md m-auto flex item-center justify-center"
      />
      <p class="text-body text-dark-green my-1 md:my-2">
        {{ technic_id.name }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: [String, Number],
  user_id: [String, Number],
  name: String,
  technic_id: [Object, String, Number],
  text: String,
  img_url: String,
});
</script>
