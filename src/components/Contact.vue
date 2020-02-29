<template>
  <div class="parent">
    <navber></navber>
    <div class="title">
      <h1 style="padding-top:35px; padding-bottom:12px;">Contact Me</h1>
      <div class="comment">
        ご質問・ご感想・イベント情報等、どんなことでもお気軽にお寄せください
      </div>
    </div>
    <v-layout align-center justify-center>
      <v-flex text-center xs5 mt-5>
        <v-card>
          <v-card-text class="text--primary">
            <v-form class="text--primary" ref="form" v-model="contactFormValidation.valid">
              <v-text-field v-model="contactForm.name" :rules="contactFormValidation.nameRules" :counter="20" label="お名前(必須)" required></v-text-field>
              <v-text-field v-model="contactForm.email" :rules="contactFormValidation.emailRules" label="E-mail(必須)" required></v-text-field>
              <v-textarea v-model="contactForm.contents" :rules="contactFormValidation.contentRules" :counter="500" rows="5" label="お問い合わせ内容(必須)" required> </v-textarea>
              <v-btn :loading="contactForm.loading" :disabled="!contactFormValidation.valid" @click="sendMail()" large>&emsp;&emsp;Send&emsp;&emsp;</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="snackBar.show" :color="snackBar.color" bottom :timeout="6000" class="font-weight-bold">
      {{ snackBar.message }}
    </v-snackbar>
  </div>
</template>

<script>
import Navber from "../components/Navber";
import { functions } from "@/plugins/firebase";

export default {
  name: "Contact",
  components: {
    Navber
  },
  data: () => ({
    contactForm: {
      name: "",
      contents: "",
      email: "",
      loading: false
    },
    contactFormValidation: {
      valid: false,
      nameRules: [(v) => !!v || "お名前は必須です"],
      emailRules: [(v) => !!v || "E-mailは必須です", (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "E-mail の形式が間違っています"],
      contentRules: [(v) => !!v || "問い合わせ内容は必須です", (v) => v.length <= 500 || "問い合わせ内容は500文字以内にしてください"]
    },
    snackBar: {
      show: false,
      color: "",
      message: ""
    }
  }),
  methods: {
    sendMail: function() {
      if (this.$refs.form.validate()) {
        this.contactForm.loading = true;
        const mailer = functions.httpsCallable("sendMail");

        mailer(this.contactForm)
          .then(() => {
            this.formReset();
            this.showSnackBar("success", "お問い合わせありがとうございます。送信完了しました");
          })
          .catch((err) => {
            this.showSnackBar("error", "送信に失敗しました。時間をおいて再度お試しください");
            console.log(err);
          })
          .finally(() => {
            this.contactForm.loading = false;
          });
      }
    },
    showSnackBar: function(color, message) {
      this.snackBar.message = message;
      this.snackBar.color = color;
      this.snackBar.show = true;
    },
    formReset: function() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
.title {
  text-align: center;
}

.comment {
  font-size: 16px;
  padding-top: 12px;
}
</style>
