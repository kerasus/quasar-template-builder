<template>
  <q-layout :view="layoutView">
    <q-header
      v-if="layoutHeader"
      :reveal="layoutHeaderReveal"
      :elevated="layoutHeaderElevated"
      :bordered="layoutHeaderBordered"
      :class="[layoutHeaderCustomClass, !layoutHeaderVisible ? 'hidden': '']"
    >
      <slot name="header">
        <q-toolbar
          class="full-width"
          style="width: 100%; justify-content: space-between"
        >
          <q-btn
            v-if="layoutLeftDrawer"
            icon="menu"
            side="left"
            @click="toggleLeftDrawer"
          />
          <q-btn
            v-if="layoutRightDrawer"
            icon="menu"
            side="right"
            @click="toggleRightDrawer"
          />
        </q-toolbar>
      </slot>
    </q-header>
    <q-drawer
      v-if="layoutLeftDrawer"
      v-model="layoutLeftDrawerVisible"
      show-if-above
      :overlay="layoutLeftDrawerOverlay"
      :elevated="layoutLeftDrawerElevated"
      :bordered="layoutLeftDrawerBordered"
      :class=" layoutLeftDrawerCustomClass"
      :behavior="layoutLeftDrawerBehavior"
      :width="layoutLeftDrawerWidth"
      side="left"
    >
      <slot name="left-drawer" />
    </q-drawer>

    <q-drawer
      v-if="layoutRightDrawer"
      v-model="layoutRightDrawerVisible"
      show-if-above
      :overlay="layoutRightDrawerOverlay"
      :elevated="layoutRightDrawerElevated"
      :bordered="layoutRightDrawerBordered"
      :class="layoutRightDrawerCustomClass"
      :behavior="layoutRightDrawerBehavior"
      :width="layoutRightDrawerWidth"
      side="right"
    >
      <slot name="right-drawer" />
    </q-drawer>

    <q-page-container>
      <slot name="content" />
    </q-page-container>

    <q-footer
      v-if="layoutFooter"
      :reveal="layoutFooterReveal"
      :elevated="layoutFooterElevated"
      :bordered="layoutFooterBordered"
      :class="[layoutFooterCustomClass, !layoutFooterVisible ? 'hidden': '']"
    >
      <slot name="footer">
        <q-toolbar />
      </slot>
    </q-footer>
    <q-resize-observer @resize="onResize" />
  </q-layout>
</template>

<script>
import { mapMutations } from 'vuex'

function getComputed (state) {
  let mutation = 'update' + state.substring(0, 1).toUpperCase() + state.substring(1)
  return {
    set (newValue) {
      this[mutation](newValue)
    },
    get () {
      return this.$store.getters['AppLayout/' + state]
    }
  }
}

function getComputeds (keys) {
  const computeds = {}
  keys.forEach(key => {
    computeds[key] = getComputed(key)
  })

  return computeds
}

export default {
  name: 'QuasarTemplateBuilder',
  props: {
    value: {
      default: () => {
      },
      type: Object
    }
  },
  data () {
    return {
      defaultProperties: {
        layoutView: 'lHh Lpr lFf',
        layoutHeader: true,
        layoutHeaderVisible: true,
        layoutHeaderReveal: false,
        layoutHeaderElevated: false,
        layoutHeaderBordered: false,
        layoutLeftDrawer: false,
        layoutLeftDrawerVisible: false,
        layoutLeftDrawerBehavior: 'desktop',
        layoutLeftDrawerBtn: false,
        layoutLeftDrawerOverlay: false,
        layoutLeftDrawerElevated: false,
        layoutLeftDrawerBordered: false,
        layoutRightDrawer: false,
        layoutRightDrawerVisible: false,
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
  computed: getComputeds([
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
  methods: {
    ...mapMutations('AppLayout', [
      'updateLayoutLeftDrawerVisible',
      'updateLayoutRightDrawerVisible',
      'updateLayoutLeftDrawerBehavior',
      'updateLayoutRightDrawerBehavior'
    ]),
    toggleLeftDrawer () {
      this.layoutLeftDrawerVisible = !this.layoutLeftDrawerVisible
    },
    toggleRightDrawer () {
      this.layoutRightDrawerVisible = !this.layoutRightDrawerVisible
    },
    onResize (size) {
      this.$emit('onResize', size)
    }
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
