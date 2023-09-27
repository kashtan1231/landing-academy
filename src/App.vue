<template>
  <div class="page">
    <HeroComp />
    <TimelapseComp />
    <PricingComp />
  </div>
</template>

<script setup lang="ts">
import HeroComp from '@/components/HeroComp.vue'
import TimelapseComp from './components/TimelapseComp.vue'
import PricingComp from './components/PricingComp.vue'
</script>

<style lang="scss">
.page {
  padding: 64px 0 176px;

  > :not(:last-child) {
    margin-bottom: 104px;
  }
}
</style>
