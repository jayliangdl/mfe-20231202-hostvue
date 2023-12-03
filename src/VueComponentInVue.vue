<template>
  <div class="{{CONTAINER}}">
    <span>Host VUE TS - Vue Component In Vue</span>
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
// declare module "remotevue/MyVueButton.vue";
  import { defineComponent } from 'vue'
  import VanillaMyVueButton from 'remotevue-mf/VanillaMyVueButton';
  export default defineComponent({
    components:{
      VanillaMyVueButton
    },
    mounted(){
      const container = document.getElementById('container');
      VanillaMyVueButton(container!);
    }
  });
</script>
