<template>
    <q-input outlined bottom-slots v-model="text" label="手機簡訊驗證碼" counter maxlength="12" :dense="dense">
        <template v-slot:before>
            <!-- <q-icon name="flight_takeoff" /> -->
            <!-- <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar> -->
        </template>

        <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"></q-icon>
            <!-- <q-icon name="schedule"></q-icon> -->
        </template>

        <template v-slot:hint>
            點擊發送取得驗證碼
        </template>

        <template v-slot:after>
            <q-btn color="secondary" :disable="true">
                <q-icon left size="sm" name="timer" />
                <!-- <q-icon left size="sm" name="send" /> -->
                <div>發送</div>
            </q-btn>
            <!-- <q-btn round dense flat>
                <q-icon left size="3em" name="send" />
                <div>Send</div>
            </q-btn> -->
        </template>
    </q-input>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const text = ref('TEXT');
const dense = ref(true);

const props = defineProps<{
    email?: string
    password?: string
    disable?: boolean
}>();

const emit = defineEmits<{
    (e: 'success', token: string): void
    (e: 'fail', message: string): void
}>();

// let val = $ref(Boolean);
// defineExpose({
//     text,
//     dense
// })
</script>