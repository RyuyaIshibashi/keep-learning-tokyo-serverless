<template>
  <div
    class="mb-3"
  >
    <v-row>
      <v-col>
        <h3>
          About
        </h3>
      </v-col>
      <v-col
        cols="2"
        class="d-lg-none btn-width"
      >
        <v-btn
          icon
          small
          text
          @click="closeDrawer"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <div class="text-body-2">
        都内在住エンジニアによる技術ブログ。<br>
        VueやJavascript、AWSに関する技術メモを発信しています。
      </div>
    </v-row>
    <v-row>
      <div class="text-body-2">
        都内在住エンジニアによる技術ブログ。<br>
        VueやJavascript、AWSに関する技術メモを発信しています。
      </div>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    isDrawer: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeDrawer () {
      this.$emit('close-drawer');
    }
  }
};
</script>
