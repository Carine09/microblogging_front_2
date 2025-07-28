<template>
    <div id="app">
        <form @submit.prevent="submit" class="w-60 place-content-center">
            <div>
                <p style="white-space: pre-line;" class="w-60">{{ text }}</p>
                <textarea placeholder="Write your post" class="w-60"></textarea>
                <div class="w-60">
                    <select>
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
                <button @click="submit" class="w-60 bg-amber-300">Publier</button>
            </div>
        </form>
    </div>
</template>


<script setup>
import { ref } from 'vue'

// const form = ref({
//   email: '',
//   description: '',
//   city: '',
//   subscribe: false,
//   interval: ''
// })
// const emit = defineEmits(['submit'])

// const submit = () => {
//   emit('submit', { ...form.value })
// }
</script>