<template>
  <q-breadcrumbs
    :active-color="breadcrumbs.activeColor"
    :gutter="breadcrumbs.gutter ? breadcrumbs.gutter : 'sm'"
    class="breadcrumbs-container"
    :class="breadcrumbs.customClass"
  >
    <template
      v-if="breadcrumbs.separator"
      #separator
    >
      <q-icon
        :name="breadcrumbs.separator"
        :color="breadcrumbs.separatorColor"
      />
    </template>

    <q-breadcrumbs-el
      v-for="(breadcrumbItem, index) in config"
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

<script>
export default {
  name: 'Breadcrumbs',
  data:()=>({
    model: ''
  }),
  props:{
    breadcrumbs: {
      type : Object,Boolean,
      default :() => {}
    },
    config: {
      type : Array,
      default :() => []
    },

  },
}
</script>

<style scoped lang="scss">
.breadcrumbs-container{
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  padding: inherit;
  margin: inherit;
}
</style>
