<template>
  <q-layout :view="layoutView">

    <q-header
        v-if="layoutHeader"
        :reveal="layoutHeaderReveal"
        :elevated="layoutHeaderElevated"
        :bordered="layoutHeaderBordered"
        :class="[layoutHeaderCustomClass, headerVisibility ? 'hidden': '']"
    >
      <slot name="header">
        <q-toolbar class="full-width" style="width: 100%">
          <q-btn
              v-if="!layoutLeftDrawerVisible"
              icon="menu"
              side="left"
              @click="toggleLeftDrawer"
          />
          <q-btn
              v-if="!layoutRightDrawerVisible "
              icon="menu"
              side="right"
              @click="toggleRightDrawer"
          />
        </q-toolbar>
      </slot>
    </q-header>

    <q-drawer
        v-if="layoutLeftDrawer"
        show-if-above
        v-model="defaultProperties.layoutLeftDrawerVisible"
        :overlay="layoutLeftDrawerOverlay"
        :elevated="layoutLeftDrawerElevated"
        :bordered="layoutLeftDrawerBordered"
        :class=" layoutLeftDrawerCustomClass"
        :behavior="layoutLeftDrawerBehavior"
        :width="layoutLeftDrawerWidth"
        side="left"
        @hide="onHideLeft"
        @show=""
    >
      <slot name="left-drawer"></slot>
    </q-drawer>

    <q-drawer
        v-if="layoutRightDrawer"
        show-if-above
        v-model="defaultProperties.layoutRightDrawerVisible"
        :overlay="layoutRightDrawerOverlay"
        :elevated="layoutRightDrawerElevated"
        :bordered="layoutRightDrawerBordered"
        :class="layoutRightDrawerCustomClass"
        :behavior="layoutRightDrawerBehavior"
        :width="layoutRightDrawerWidth"
        side="right"
        @hide="onHideRight"
    >
      <slot name="right-drawer"></slot>
    </q-drawer>

    <q-page-container>
      <slot name="content"></slot>
    </q-page-container>

    <q-footer
        v-if="layoutFooter"
        :reveal="layoutFooterReveal"
        :elevated="layoutFooterElevated"
        :bordered="layoutFooterBordered"
        :class="[layoutFooterCustomClass, footerVisibility ? 'hidden': '']"
    >
      <slot name="footer">
        <q-toolbar>
        </q-toolbar>
      </slot>
    </q-footer>

  </q-layout>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {QuasarTemplateBuilderAppLayout} from "../index";
import * as getters from "./test-quasar-template-builder/src/store/AppLayout/getters";

export default {
  name: 'QuasarTemplateBuilder',
  props: {
    value: {
      default: () => {
      },
      type: Object
    }
  },
  created() {
    const options = Object.assign(this.defaultProperties, this.value)
    this.updateStore(options)
  },
  data() {
    return {
      defaultProperties: {
        layoutView: 'lHh Lpr lFf',
        layoutHeader: true,
        layoutHeaderVisible: true,
        layoutHeaderReveal: false,
        layoutHeaderElevated: false,
        layoutHeaderBordered: false,
        layoutLeftDrawer: false,
        layoutLeftDrawerVisible: true,
        layoutLeftDrawerBehavior: 'desktop',
        layoutLeftDrawerBtn: false,
        layoutLeftDrawerOverlay: false,
        layoutLeftDrawerElevated: false,
        layoutLeftDrawerBordered: false,
        layoutRightDrawer: false,
        layoutRightDrawerVisible: true,
        layoutRightDrawerBtn: false,
        layoutRightDrawerOverlay: false,
        layoutRightDrawerBehavior: 'desktop',
        layoutRightDrawerElevated: false,
        layoutRightDrawerBordered: false,
        layoutPageContainer: true,
        layoutFooter: false,
        layoutFooterVisible: true,
        layoutFooterReveal: false,
        layoutFooterElevated: false,
        layoutFooterBordered: false,
        layoutHeaderCustomClass: '',
        layoutLeftDrawerCustomClass: '',
        layoutRightDrawerCustomClass: '',
        layoutPageContainerCustomClass: '',
        layoutFooterCustomClass: '',
        layoutLeftDrawerWidth: 300,
        layoutRightDrawerWidth: 300,
      }
    }
  },
  computed: {
    ...mapGetters('AppLayout', [
      'layoutView',
      'layoutHeader',
      'layoutHeaderVisible',
      'layoutHeaderReveal',
      'layoutHeaderElevated',
      'layoutHeaderBordered',
      'layoutLeftDrawer',
      'layoutLeftDrawerVisible',
      'layoutLeftDrawerBehavior',
      'layoutLeftDrawerOverlay',
      'layoutLeftDrawerElevated',
      'layoutLeftDrawerBordered',
      'layoutRightDrawer',
      'layoutRightDrawerVisible',
      'layoutRightDrawerBehavior',
      'layoutRightDrawerOverlay',
      'layoutRightDrawerElevated',
      'layoutRightDrawerBordered',
      'layoutFooter',
      'layoutFooterVisible',
      'layoutFooterReveal',
      'layoutFooterElevated',
      'layoutFooterBordered',
      'layoutFooterCustomClass',
      'layoutHeaderCustomClass',
      'layoutFooterBordered',
      'layoutLeftDrawerCustomClass',
      'layoutRightDrawerCustomClass',
      'layoutPageContainerCustomClass',
      'layoutLeftDrawerWidth',
      'layoutRightDrawerWidth'
    ]),
    headerVisibility() {
      return !this.layoutHeaderVisible
    },
    rightVisibility() {
      return !this.layoutRightDrawerVisible
    },
    footerVisibility() {
      return !this.layoutFooterVisible
    }
  },
  watch: {
    'defaultProperties.layoutLeftDrawerVisible': function (){
      this.updateLayoutLeftDrawerVisible(this.defaultProperties.layoutLeftDrawerVisible)
    },
    'defaultProperties.layoutRightDrawerVisible': function (){
      this.updateLayoutRightDrawerVisible(this.defaultProperties.layoutRightDrawerVisible)
    },
    layoutLeftDrawerVisible (newValue) {
      this.defaultProperties.layoutLeftDrawerVisible = newValue
    },
    layoutRightDrawerVisible (newValue) {
      this.defaultProperties.layoutRightDrawerVisible = newValue
    },
  },
  methods: {
    ...mapMutations('AppLayout', [
      'updateLayoutLeftDrawerVisible',
      'updateLayoutRightDrawerVisible',

    ]),
    ...mapActions('AppLayout',[
        'updateStore'
    ]),
    onHideLeft() {
      this.updateLayoutLeftDrawerVisible(false)
    },
    onHideRight() {
      this.updateLayoutLeftDrawerVisible(false)
    },
    toggleLeftDrawer() {
      this.updateLayoutLeftDrawerVisible(!this.layoutLeftDrawerVisible)
    },
    toggleRightDrawer() {
      this.updateLayoutRightDrawerVisible(!this.layoutRightDrawerVisible)
    }
  }
}
</script>
<style>
.hidden {
  display: none;
}
</style>
