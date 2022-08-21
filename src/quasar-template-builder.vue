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

<script setup>
import { defineEmits, computed } from 'vue'
import { useStore } from 'vuex'
const emit = defineEmits(['onResize'])
// export const name = 'QuasarTemplateBuilder'

const store = useStore()
function getWritableComputed (state) {
  let mutation = 'update' + state.substring(0, 1).toUpperCase() + state.substring(1)
  return {
    set (newValue) {
      console.log('set', newValue)
      store.commit('AppLayout/' + mutation, newValue)
    },
    get () {
      const dd = store.getters['AppLayout/' + state]
      console.log('state: ', state, dd)
      return dd
    }
  }
}

let layoutView = computed(getWritableComputed('layoutView'))
let layoutHeader = computed(getWritableComputed('layoutHeader'))
let layoutHeaderVisible = computed(getWritableComputed('layoutHeaderVisible'))
let layoutHeaderReveal = computed(getWritableComputed('layoutHeaderReveal'))
let layoutHeaderElevated = computed(getWritableComputed('layoutHeaderElevated'))

let layoutHeaderBordered = computed(getWritableComputed('layoutHeaderBordered'))
let layoutLeftDrawer = computed(getWritableComputed('layoutLeftDrawer'))
let layoutLeftDrawerVisible = computed(getWritableComputed('layoutLeftDrawerVisible'))
let layoutLeftDrawerBehavior = computed(getWritableComputed('layoutLeftDrawerBehavior'))
let layoutLeftDrawerOverlay = computed(getWritableComputed('layoutLeftDrawerOverlay'))

let layoutLeftDrawerElevated = computed(getWritableComputed('layoutLeftDrawerElevated'))
let layoutLeftDrawerBordered = computed(getWritableComputed('layoutLeftDrawerBordered'))
let layoutRightDrawer = computed(getWritableComputed('layoutRightDrawer'))
let layoutRightDrawerVisible = computed(getWritableComputed('layoutRightDrawerVisible'))
let layoutRightDrawerBehavior = computed(getWritableComputed('layoutRightDrawerBehavior'))

let layoutRightDrawerOverlay = computed(getWritableComputed('layoutRightDrawerOverlay'))
let layoutRightDrawerElevated = computed(getWritableComputed('layoutRightDrawerElevated'))
let layoutRightDrawerBordered = computed(getWritableComputed('layoutRightDrawerBordered'))
let layoutFooter = computed(getWritableComputed('layoutFooter'))
let layoutFooterVisible = computed(getWritableComputed('layoutFooterVisible'))

let layoutFooterReveal = computed(getWritableComputed('layoutFooterReveal'))
let layoutFooterElevated = computed(getWritableComputed('layoutFooterElevated'))
let layoutFooterBordered = computed(getWritableComputed('layoutFooterBordered'))
let layoutFooterCustomClass = computed(getWritableComputed('layoutFooterCustomClass'))
let layoutHeaderCustomClass = computed(getWritableComputed('layoutHeaderCustomClass'))

let layoutLeftDrawerCustomClass = computed(getWritableComputed('layoutLeftDrawerCustomClass'))
let layoutRightDrawerCustomClass = computed(getWritableComputed('layoutRightDrawerCustomClass'))
// let layoutPageContainerCustomClass = computed(getWritableComputed('layoutPageContainerCustomClass'))
let layoutLeftDrawerWidth = computed(getWritableComputed('layoutLeftDrawerWidth'))
let layoutRightDrawerWidth = computed(getWritableComputed('layoutRightDrawerWidth'))

function toggleLeftDrawer () {
  store.commit('AppLayout/updateLayoutLeftDrawerVisible', !layoutLeftDrawerVisible.value)
}
function toggleRightDrawer () {
  store.commit('AppLayout/updateLayoutRightDrawerVisible', !layoutRightDrawerVisible.value)
}
function onResize (size) {
  emit('onResize',size);
}
</script>
