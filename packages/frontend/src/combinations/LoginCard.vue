<template>
    <q-card square class="shadow-16" style="width:400px;height:500px">
        <q-card-section class="bg-primary text-white">
            <h5 class="text-h5 q-my-md">Login</h5>
            <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
                <q-btn fab icon="add" color="purple-4" />
            </div> -->
        </q-card-section>
        <q-card-section>
            <q-form class="q-px-sm q-py-sm">
                <q-input square clearable v-model="email" type="email" label="Email">
                    <template v-slot:prepend>
                        <q-icon name="email" />
                    </template>
                </q-input>

                <!-- <InputCountDown :dense="true" /> -->

                <q-input square clearable v-model="password" type="password" label="Password">
                    <template v-slot:prepend>
                        <q-icon name="lock" />
                    </template>
                </q-input>
            </q-form>
        </q-card-section>
        <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
                <q-btn round color="indigo-7">
                    <q-icon name="fab fa-facebook-f" size="1.2rem" />
                </q-btn>
                <q-btn round color="red-8">
                    <q-icon name="fab fa-google-plus-g" size="1.2rem" />
                </q-btn>
                <q-btn round color="light-blue-5">
                    <q-icon name="fab fa-twitter" size="1.2rem" />
                </q-btn>
            </div>
        </q-card-section>
        <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="Sign In" />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Forgot your password?{{$q.screen.gt.xs?'gt':'xs'}}</p>
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import InputCountDown from '../components/InputCountDown.vue';

const props = withDefaults(defineProps<{
  email?: string
  password?: string
  disable?: boolean
}>(), {
  email: '123',
  password: '456'
});

const emit = defineEmits<{
    (e: 'success', token: string): void
    (e: 'fail', message: string): void
}>();
</script>
