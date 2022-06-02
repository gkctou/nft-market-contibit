<template>
    <div class="column q-pa-lg">
        <div class="row">
            <LoginCard email="" password="" />
        </div>
    </div>
    <div class="column q-pa-lg">
        <div class="row">
            <register-card />
        </div>
    </div>
</template>
<script setup lang="ts">
import LoginCard from '../combinations/LoginCard.vue';
import RegisterCard from '../combinations/RegisterCard.vue';
</script>