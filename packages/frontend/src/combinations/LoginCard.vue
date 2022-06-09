<template>
  <q-card square class="shadow-16" style="width:400px;height:auto">
    <q-card-section class="bg-primary text-white">
      <h5 class="text-h5 q-my-md">Login</h5>
      <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
                <q-btn fab icon="add" color="purple-4" />
            </div> -->
    </q-card-section>
    <q-card-section>
      <q-form class="q-px-sm q-py-sm">
        <q-input square clearable v-model="email.val" :error="email.err" :error-message="email.msg" type="email" label="Email">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>

        <q-input square clearable v-model="password.val" :error="password.err" :error-message="password.msg" :type="isPwd ? 'password' : 'text'" label="Password">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
      </q-form>
    </q-card-section>
    <!-- <q-card-section>
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
    </q-card-section> -->
    <q-card-actions class="q-px-lg">
      <div style="height: 155px;"></div>
    </q-card-actions>
    <q-card-actions class="q-px-lg">
      <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="Sign In" @click="btnLogin" />
    </q-card-actions>
    <q-card-section class="text-center q-pa-sm">
      <p class="text-grey-6">Forgot your password?{{ $q.screen.gt.xs ? '' : '' }}</p>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { $ref } from 'vue/macros';
import { useMemberStore } from 'stores/member';
import { useRouter } from 'vue-router';
let memberStore = useMemberStore();
let router = useRouter();

let isPwd = $ref(true);
// const props = withDefaults(defineProps<{
//   email?: string
//   password?: string
//   disable?: boolean
// }>(), {
//   email: '123@abc.com',
//   password: '12345678'
// });
let email = $ref({ val: '123@abc.com', err: false, msg: '' });
let password = $ref({ val: '12345678', err: false, msg: '' });
let values = { email, password };

const emit = defineEmits<{
  (e: 'success', token: string): void
  (e: 'fail', message: string): void
}>();

async function btnLogin() {
  for (const key in values) {
    values[key].err = false;
    values[key].msg = '';
  }
  try {
    let info = await memberStore.login({ email: email.val, password: password.val });
    if (info.userId)
      router.push('/');
  } catch (error: any) {
    console.error('memberStore.login', error);
    if (error.data)
      for (const key in error.data) {
        if (error.data[key] && values[key]) {
          values[key].err = true;
          values[key].msg = error.data[key];
        }
      }
  }
}
</script>
