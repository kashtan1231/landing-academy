<template>
  <div class="page">
    <HeroComp />
    <TimelapseComp />
  </div>
</template>

<script setup lang="ts">
import HeroComp from '@/components/HeroComp.vue'
import TimelapseComp from './components/TimelapseComp.vue'
</script>

<style lang="scss">
.page {
  padding: 64px 0 176px;

  > :not(:last-child) {
    margin-bottom: 104px;
  }
}
</style>
