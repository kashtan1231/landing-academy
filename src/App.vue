<template>
  <div class="page">
    <HeroComp />
    <TimelapseComp />
    <PricingComp />
    <RegistrationComp />
  </div>
</template>

<script setup lang="ts">
import HeroComp from '@/components/HeroComp.vue'
import TimelapseComp from './components/TimelapseComp.vue'
import PricingComp from './components/PricingComp.vue'
import RegistrationComp from './components/RegistrationComp.vue'
</script>

<style lang="scss">
.page {
  padding: 64px 0 176px;

  > :not(:last-child) {
    margin-bottom: 104px;
  }
}
</style>
