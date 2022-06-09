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
        <q-input square clearable v-model="email.val" :error="email.err" :error-message="email.msg" type="email" label="Email Address" dense>
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <InputCountDown v-model:modelValue="emailVerify.val" :error="emailVerify.err" :error-message="emailVerify.msg" icon-name="mail_lock" :sendable="!!email.val" :next-on="emailNextOn" dense hint="Receive verify code from your email box." label="Email Verify Code" @send="emailSend" />
        <q-input square clearable v-model="mobile.val" :error="mobile.err" :error-message="mobile.msg" label="Mobile Phone Number" dense>
          <template v-slot:prepend>
            <q-icon name="phone_iphone" />
          </template>
        </q-input>
        <InputCountDown v-model:modelValue="mobileVerify.val" :error="mobileVerify.err" :error-message="mobileVerify.msg" :sendable="!!mobile.val" :next-on="mobileNexton" dense @send="mobileSend" label="Mobile SMS Verify Code" />
        <q-input square clearable bottom-slots v-model="password.val" :error="password.err" :error-message="password.msg" type="password" label="Password" hint="Minimum length of 8 characters" dense>
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
        <q-input square clearable v-model="rePassword.val" :error="rePassword.err" :error-message="rePassword.msg" :type="isPwd ? 'password' : 'text'" label="Retype Password" dense>
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-lg q-pb-lg">
      <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="Submit" @click="btnRegister" />
    </q-card-actions>
    <!-- <q-card-section class="text-center q-pa-sm">
      <p class="text-grey-6">&nbsp;</p>
    </q-card-section> -->
  </q-card>
</template>

<script setup lang="ts">
import InputCountDown from '../components/InputCountDown.vue';
import { $ref } from 'vue/macros';
import { useMemberStore } from 'stores/member';
import { useRouter } from 'vue-router';
const memberStore = useMemberStore();
const router = useRouter();

const email = $ref({ val: '123@abc.com', err: false, msg: '' });
const emailVerify = $ref({ val: '123456', err: false, msg: '' });
const mobile = $ref({ val: '+886987654321', err: false, msg: '' });
const mobileVerify = $ref({ val: '123456', err: false, msg: '' });
const password = $ref({ val: '12345678', err: false, msg: '' });
const rePassword = $ref({ val: '12345678', err: false, msg: '' });
const values = { email, emailVerify, mobile, mobileVerify, password, rePassword };

let isPwd = $ref(true);
let emailNextOn = $ref(0);
async function emailSend() {
  emailNextOn = await memberStore.registerEmailVerifySend({ email: email.val });
}
let mobileNexton = $ref(0);
async function mobileSend() {
  mobileNexton = await memberStore.registerMobileVerifySend({ mobile: mobile.val });
}
async function btnRegister() {
  for (const key in values) {
    values[key].err = false;
    values[key].msg = '';
  }
  try {
    if (!rePassword.val) {
      rePassword.err = true;
      rePassword.msg = `Retype password is required.`
      return;
    }
    if (password.val !== rePassword.val) {
      rePassword.err = true;
      rePassword.msg = `Retype password not sync.`
      return;
    }
    console.log(values);
    let info = await memberStore.register({
      email: email.val,
      emailVerify: emailVerify.val,
      mobile: mobile.val,
      mobileVerify: mobileVerify.val,
      password: password.val
    });
    if (info.userId)
      router.push('/');
  } catch (error: any) {
    console.error('memberStore.register', error);
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
