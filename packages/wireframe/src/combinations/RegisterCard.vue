<template>
    <q-card square class="shadow-24" style="width:400px;height:auto;">
        <q-card-section class="bg-deep-purple-6">
            <h5 class="text-h5 text-white q-my-md">Registration</h5>
            <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
                <q-btn fab icon="close" color="purple-4" />
            </div> -->
        </q-card-section>
        <q-card-section>
            <q-form class="q-px-sm q-py-sm">
                <q-input square clearable v-model="email" type="email" label="Email">
                    <template v-slot:prepend>
                        <q-icon name="email" />
                    </template>
                </q-input>
                <InputCountDown />
                <q-input square clearable v-model="username" type="username" label="Username">
                    <template v-slot:prepend>
                        <q-icon name="person" />
                    </template>
                </q-input>
                <q-input square clearable v-model="password" type="password" label="Password">
                    <template v-slot:prepend>
                        <q-icon name="lock" />
                    </template>
                </q-input>
            </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Get Started" />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Return to login</p>
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import InputCountDown from '../components/InputCountDown.vue';
import { ref } from 'vue';
let email = ref('');
let username = ref('');
let password = ref('');
</script>