<template>
  <quasar-template-builder v-model:value="properties" @drawerClosed="drawerMode">
    <template #header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </template>
    <template #left-drawer>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </template>
    <template #right-drawer>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </template>
    <template #content>
      <router-view :key="$route.name" />
    </template>
    <template #footer>
      <div class="bg-accent">
        footer
      </div>
    </template>
  </quasar-template-builder>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { QuasarTemplateBuilder } from "../../../../index";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    QuasarTemplateBuilder,
    EssentialLink,
  },

  data () {
    return {
      essentialLinks: linksList,
      leftDrawerOpen: false,
      windowSize: document.documentElement.clientWidth,
      showBtn: false,
      tab: 'home',
      properties: {
        layoutView: 'lHh Lpr lFf',
        layoutHeader: true,
        layoutHeaderVisible: true,
        layoutHeaderReveal: false,
        layoutHeaderElevated: false,
        layoutHeaderBordered: false,
        layoutLeftDrawer: true,
        layoutLeftDrawerVisible: true,
        layoutLeftDrawerOverlay: false,
        layoutLeftDrawerElevated: false,
        layoutLeftDrawerBordered: false,
        leftDrawerWidth: 325,
        layoutPageContainer: true,
        layoutRightDrawer: false,
        layoutFooter: false,
        layoutHeaderCustomClass: 'main-layout-header row',
        layoutLeftDrawerCustomClass: 'main-layout-left-drawer',
        layoutPageContainerCustomClass: 'main-layout-container',
        menuIcon: 'menu'
      }
    }
  },
  methods: {
    drawerMode (value) {
      this.properties.layoutLeftDrawerVisible = false
    },
  }

});
</script>
