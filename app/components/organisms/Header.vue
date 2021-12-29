<template>
  <div>
    <header>
      <v-toolbar
        color="white"
      >
        <v-container class="d-flex align-center">
          <a
            class="link-no-decoration"
            href="/"
          >
            <v-toolbar-title class="d-flex align-center">
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
          </a>
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
import SideMenu from '@/components/organisms/SideMenu';

export default {
  name: 'Header',
  components: {
    SideMenu,
  },
  data () {
    return {
      drawer: false,
    };
  },
  methods: {
    openDrawer () {
      this.$set(this, 'drawer', true);
    },
    closeDrawer () {
      this.$set(this, 'drawer', false);
    },
  },
};
</script>
