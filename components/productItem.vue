<template>
  <a-card hoverable>
    <template #cover>
      <outlined-button class="button" icon-color="#faad14">
        <heart-outlined />
      </outlined-button>
      <div class="img_wrap">
        <img alt="example" src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg" />
      </div>
    </template>
    <a-card-meta title="Europe Street beat">
      <template
          #description>www.instagram.com
          #description>www.instagram.com
          #description>www.instagram.com
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
import OutlinedButton from "./outlinedButton";
export default {
  name: "productItem",
  components: {OutlinedButton}
}
</script>

<style lang="less" scoped>
@import "../assets/style/_variables";

.img_wrap {
  height: 256px;
}
.img_wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 0;
}

.button {
  position: absolute;
  right: 0;
}
</style>