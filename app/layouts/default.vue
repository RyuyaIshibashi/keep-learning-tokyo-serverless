<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <v-row>
          <v-col
            id="content"
            ref="content"
          >
            <router-view />
          </v-col>
          <v-col
            id="side-bar"
            ref="sideBar"
            v-scroll="onScroll"
            class="d-none d-lg-block"
          >
            <aside>
              <SideMenu
                :is-fixed="isFixed"
              />
            </aside>
          </v-col>
        </v-row>
        <v-row>
          <ScrollButton />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/organisms/Header';
import SideMenu from '@/components/organisms/SideMenu';
import ScrollButton from '@/components/molecules/ScrollButton';

export default {
  name: 'App',
  components: {
    Header, SideMenu, ScrollButton,
  },
  middleware: 'getAllTags',
  data: () => ({
    isFixed: false,
    sideBarTop: 0,
  }),
  mounted () {
    this.sideBarTop = document.getElementById('catalog').getBoundingClientRect().top;
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') { return; }
      const windowScrollTop = window.pageYOffset || e.target.scrollTop || 0;
      const sidebarTop = this.sideBarTop;
      const contentHeight = this.$refs.content.clientHeight;

      if (windowScrollTop >= contentHeight || windowScrollTop <= sidebarTop) {
        this.isFixed = false;
      } else if (windowScrollTop >= sidebarTop) {
        if (!this.isFixed) {
          this.isFixed = true;
        }
      }
    },
  },
};
</script>
<style lang="scss">
$color-pack: false;

@import '~vuetify/src/styles/main.sass';

.v-application {
  .text-h1,
  .text-h2,
  .text-h3,
  .text-h4,
  .text-h5,
  .text-h6,
  .text-subtitle-1,
  .text-subtitle-2,
  .text-body-1,
  .text-body-2,
  .text-button,
  .text-caption,
  .text-overline {
    font-family: $body-font-family !important;
    color: $color-grey-01;
  }

    .text-body-2 {
    font-size: 1rem !important;
  }
  p {
    margin-bottom: 0;
  }
}

.theme--light.v-application,
.theme--light.v-chip {
  font-family: $body-font-family !important;
  color: $color-grey-01 !important;
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.5em;
  }
}

.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
    padding: 0px;
}

#app {
  font-family: $body-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.row {
  margin: 0;
}

#content, #side-bar {
  padding-top: 16px;
}

.v-application code {
    all: unset;
    color: #333333
}

@media (min-width: 1264px) {
  .container {
      max-width: 960px;
  }
}

@media (min-width: 1904px) {
  .container {
      max-width: 1140px;
  }
}

// side-bar
#side-bar {
  max-width: 300px;
  width: 300px;
  margin-left: 24px;
}

.link-hover {
  &:hover {
    cursor: pointer;
    color: #00796B;
  }
}
</style>
