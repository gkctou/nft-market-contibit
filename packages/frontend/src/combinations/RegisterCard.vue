<template>
  <q-card square class="shadow-16" style="width:400px;height:auto;">
    <q-card-section class="bg-primary text-white">
      <h5 class="text-h5 q-my-md">Registration</h5>
      <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
                <q-btn fab icon="close" color="purple-4" />
            </div> -->
    </q-card-section>
    <q-card-section>
      <q-form class="q-px-sm q-py-sm">
        <q-input square clearable v-model="email" type="email" label="Email" dense>
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <InputCountDown icon-name="mail_lock" :sendable="true" :next-on="Date.now() + 60000" dense />
        <q-input square clearable v-model="email" type="email" label="Email" dense>
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <InputCountDown :sendable="true" :next-on="Date.now() + 60000" dense/>
        <q-input bottom-slots v-model="text" label="Label" counter dense>
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>

          <template v-slot:hint>
            Field hint
          </template>
        </q-input>
        <q-input square clearable v-model="password" type="password" label="Password" dense>
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-lg">
      <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="Get Started" />
    </q-card-actions>
    <q-card-section class="text-center q-pa-sm">
      <!-- <p class="text-grey-6">Return to login</p> -->
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import InputCountDown from '../components/InputCountDown.vue';
// import { ref } from 'vue';
import { $ref } from 'vue/macros';
let dense = $ref(false);
let text = $ref('');
let email = $ref('');
let username = $ref('');
let password = $ref('');
</script>
