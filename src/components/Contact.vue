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
            <v-form class="text--primary" v-model="valid">
              <v-text-field v-model="name" :rules="nameRules" :counter="20" label="お名前(必須)" required></v-text-field>
              <v-text-field label="会社名"></v-text-field>
              <v-text-field v-model="email" :rules="emailRules" label="E-mail(必須)" required></v-text-field>
              <v-textarea v-model="content" :rules="contentRules" :counter="500" rows="5" label="お問い合わせ内容(必須)" required> </v-textarea>
              <v-btn large>&emsp;&emsp;Send&emsp;&emsp;</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Navber from "../components/Navber";
export default {
  name: "Contact",
  components: {
    Navber
  },
  data: () => ({
    valid: false,

    // 名前の入力チェック
    name: "",
    nameRules: [(v) => !!v || "お名前は必須です", (v) => v.length <= 20 || "お名前は20文字以内にしてください"],

    // メールアドレスの入力チェック
    email: "",
    emailRules: [(v) => !!v || "E-mailは必須です", (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "E-mail の形式が間違っています"],

    // 問い合わせ内容の入力チェック
    content: "",
    contentRules: [(v) => !!v || "問い合わせ内容は必須です", (v) => v.length <= 500 || "問い合わせ内容は20文字以内にしてください"]
  })
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
