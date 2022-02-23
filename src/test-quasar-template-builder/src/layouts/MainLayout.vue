<template>
  <quasar-template-builder v-model:value="properties">
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
    <template #content>
      <router-view :key="$route.name" />
    </template>
    <template #footer>
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

import { defineComponent } from "vue";

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
        layoutHeader: true,
        layoutHeaderVisible: false,
        layoutHeaderReveal: false,
        layoutHeaderElevated: false,
        layoutHeaderBordered: false,
        layoutLeftDrawer: false,
        layoutLeftDrawerVisible: false,
        layoutLeftDrawerOverlay: false,
        layoutLeftDrawerElevated: false,
        layoutLeftDrawerBordered: false,
        layoutLeftDrawerWidth: 325,
        layoutPageContainer: false,
        layoutRightDrawer: true,
        layoutFooter: false,
        layoutHeaderCustomClass: '',
        layoutRightDrawerCustomClass: 'bg-red',
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
