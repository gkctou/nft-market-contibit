<template>
  <q-input square clearable bottom-slots v-model="modelValue" :label="inputLabel" @input='$emit("update:modelValue", modelValue)' :error="error" :error-message="errorMessage" :dense="dense">
    <template v-slot:prepend>
      <q-icon :name="iconName" />
    </template>

    <template v-slot:hint v-if="hint">
      {{ hint }}
    </template>

    <template v-slot:after>
      <q-btn no-caps class="q-px-sm" :color="buttonDisable ? 'grey-6' : 'secondary'" :disable="buttonDisable" dense @input="$emit('send')">
        <q-icon left size="xs" :name="countdown > 0 ? 'timer' : 'send'" />
        <div style="width: 2.3em;">{{ countdown > 0 ? countdown : send }}</div>
      </q-btn>
      <!-- <q-btn round dense flat>
                <q-icon left size="3em" name="send" />
                <div>Send</div>
            </q-btn> -->
    </template>
  </q-input>
</template>
<script setup lang="ts">
import { watch, onUnmounted } from 'vue';
import { $ref, $computed } from 'vue/macros';

const emit = defineEmits<{
  (e: 'send'): void
  (e: 'update:modelValue', value: string): void
}>();

// const {
//   iconName = 'screen_lock_portrait',
//   inputLabel = 'Mobile SMS Verify',
//   send = 'Send',
//   sendable = false,
//   hint = 'Receive verify code from your mobile.',
//   error = false,
//   errorMessage = '',
//   nextOn = 0,
//   modelValue = ''
// } = defineProps<{
//   iconName?: string;
//   inputLabel?: string;
//   send?: string;
//   sendable?: boolean;
//   hint?: string;
//   error?: boolean;
//   errorMessage?: string;
//   nextOn?: number;
//   modelValue?: string;
// }>();

const props = withDefaults(defineProps<{
  iconName?: string;
  inputLabel?: string;
  send?: string;
  sendable?: boolean;
  hint?: string;
  error?: boolean;
  errorMessage?: string;
  nextOn?: number;
  modelValue?: string;
  dense?: boolean
}>(), {
  iconName: 'screen_lock_portrait',
  inputLabel: 'Mobile SMS Verify',
  send: 'Send',
  sendable: false,
  hint: 'Receive verify code from your mobile.',
  error: false,
  errorMessage: '',
  nextOn: 0,
  modelValue: '',
  dense: false
});

let countdown = $ref(0);
const buttonDisable = $computed(() => !props.sendable || countdown > 0);
function watchNextOn() {
  const left = props.nextOn - Date.now();
  countdown = left < 0 ? 0 : Math.floor(left / 1000);
  if (left > 0) setTimeout(() => watchNextOn(), 1000);
}
watch(() => props.nextOn, () => watchNextOn());

</script>

