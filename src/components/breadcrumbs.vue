<template>
  <q-breadcrumbs
    v-if="layoutBreadcrumbs"
    :active-color="layoutBreadcrumbs.activeColor"
    :gutter="layoutBreadcrumbs.gutter ? breadcrumbs.gutter : 'sm'"
    :class="layoutBreadcrumbs.customClass"
  >
    <template
      v-if="layoutBreadcrumbs.separator"
      #separator
    >
      <q-icon
        :name="layoutBreadcrumbs.separator"
        :color="layoutBreadcrumbs.separatorColor"
      />
    </template>

    <q-breadcrumbs-el
      v-for="(breadcrumbItem, index) in layoutBreadcrumbsElements"
      :key="index"
      :exact="breadcrumbItem.exact"
      :href="breadcrumbItem.href?.url"
      :to="{name: breadcrumbItem.route?.name}"
      :target="breadcrumbItem.href?.target"
      :disable="breadcrumbItem.disable"
      :exact-active-class="breadcrumbItem.exactActiveClass"
      :active-class="breadcrumbItem.activeClass"
    >
      <template #default>
        <q-skeleton
          v-if="breadcrumbItem.loading"
          type="QBadge"
        />
        <div v-else>
          <q-icon
            v-if="breadcrumbItem.icon"
            class="q-mx-xs"
            :name="breadcrumbItem.icon"
          />
          <span>{{ breadcrumbItem.title }}</span>
        </div>
      </template>
    </q-breadcrumbs-el>
  </q-breadcrumbs>
</template>

<script setup>
import {useStore} from 'vuex';
import { computed } from 'vue'
const store = useStore()

function getWritableComputed (state) {
  let mutation = 'update' + state.substring(0, 1).toUpperCase() + state.substring(1)
  return {
    set (newValue) {
      store.commit('AppLayout/' + mutation, newValue)
    },
    get () {
      return store.getters['AppLayout/' + state]
    }
  }
}

let layoutBreadcrumbs = computed(getWritableComputed('layoutBreadcrumbs'))
let layoutBreadcrumbsElements = computed(getWritableComputed('layoutBreadcrumbsElements'))

</script>
