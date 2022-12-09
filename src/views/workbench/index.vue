<template>
  <AppPage >
    <div flex-1>
      <n-card>
        <div flex items-center>
            工作台
        </div>
      </n-card>
 
    </div>
  </AppPage>
</template>

<script setup>
import { useUserStore } from '@/store'

const userStore = useUserStore()
</script>
