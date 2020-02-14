<template >
  <div class="parent">
    <navber></navber>
    <div class="title">
      <h1 style="padding-top:35px">Contact Me</h1>
      <div class="comment">
        <div style="padding-top:18px">ご質問・ご感想・イベント情報等、どんなことでもお気軽にお寄せください</div>
        <div>[teitterアドレス]でもご連絡お待ちしております</div>
      </div>
    </div>
    <div class="content">
      <span class="item">Name</span>
      <br />
      <input class="inputarea" type="text" />
      <br />
      <span class="item">Email</span>
      <br />
      <input class="inputarea" type="email" />
      <br />
      <span class="item">Message</span>
      <br />
      <textarea cols="30" rows="5" class="inputarea"></textarea>
    </div>
  </div>
</template>

<script>
import Navber from "../components/Navber";
export default {
  name: "Contact",
  components: {
    Navber
  },
  data: () => ({})
};
</script>


<style>
.title {
  text-align: center;
}

.comment {
  font-size: 16px;
  padding: 30px;
}

.content {
  text-align: center;
}

.item {
  font-weight: bold;
  font-size: 160%;
}

.inputarea {
  margin-top: 5px;
  margin-bottom: 20px;
  width: 23%;
  border: 0.1px solid;
}

/* input {
  margin-top: 5px;
  margin-bottom: 20px;
  width: 23%;
} */
</style>
