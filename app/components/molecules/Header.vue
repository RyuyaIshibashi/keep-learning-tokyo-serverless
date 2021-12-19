<template>
  <div>
    <header>
      <v-toolbar
        color="white"
      >
        <v-container class="d-flex align-center">
          <v-toolbar-title
            class="d-flex align-center link-hover"
            @click="gotoIndex()"
          >
            <v-img
              alt="Vuetify Logo"
              class="shrink"
              contain
              src="/assets/img/logo.png"
              transition="scale-transition"
              width="30"
            />
            <span class="text-subtitle-1 font-weight-bold ml-2">
              Keep-Learning.Tokyo
            </span>
          </v-toolbar-title>
          <v-spacer />
          <v-app-bar-nav-icon
            class="d-lg-none"
            @click="openDrawer"
          />
        </v-container>
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawer"
        right
        fixed
        temporary
        :width="300"
        class="px-3 py-3"
      >
        <SideMenu
          :is-drawer="true"
          @close-drawer="closeDrawer"
        />
      </v-navigation-drawer>
    </header>
  </div>
</template>

<script>
import SideMenu from '@/components/molecules/SideMenu';

export default {
  name: 'Header',
  components: {
    SideMenu
  },
  data () {
    return {
      drawer: false
    };
  },
  methods: {
    gotoIndex () {
      this.$router.push('/');
    },
    openDrawer () {
      this.$set(this, 'drawer', true);
    },
    closeDrawer () {
      this.$set(this, 'drawer', false);
    }
  }
};
</script>
