<template>
  <div class="home">
    <section id="intro">
      <h1>Spectacle</h1>
      <p>A PoC based on the idea of capturing and displaying SLIs, SLOs, SLAs and bringing them closer to understanding the business value.</p>
    </section>
    <div v-for="count in serviceCount">
      <component :is="service"></component>
    </div>
    <div class="crud-bar">
      <input type="button" @click="removeService" value="Remove">
      <input type="button" @click="addService" value="Add">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'services' : () => import('@/components/Services.vue')
  },
  data () {
    return {
      serviceCount: 1,
      service: 'services'
    }
  },
  methods: {
  	addService: function(){
    	this.serviceCount ++;
    },
    removeService: function(){
    	this.serviceCount --;
    }
  },
};
</script>
