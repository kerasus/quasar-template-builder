<template>
  <div>
    <q-breadcrumbs
      :active-color="config.activeColor"
      :gutter="config.gutter ? config.gutter : 'sm'"
      class="breadcrumbs-container"
      :class="config.customClass"
    >
      <template
        v-if="config.separator"
        #separator
      >
        <q-icon
          :name="config.separator"
          :color="config.separatorColor"
        />
      </template>

      <q-breadcrumbs-el
        v-for="(breadcrumbItem, index) in breadcrumbs"
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
          <q-icon
            v-if="breadcrumbItem.icon"
            class="q-mx-xs"
            :name="breadcrumbItem.icon"
          />
          <span>{{ breadcrumbItem.title }}</span>
        </template>
      </q-breadcrumbs-el>
    </q-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data:()=>({
    model: ''
  }),
  props:{
    breadcrumbs: {
      type : Array,
      default :() => []
    },
    config: {
      type : Object,
      default :() => {}
    },

  },
  methods:{
    validation(val){
      console.log(val)
    },
    icon(icon, img){
      if(icon){
        return icon
      }else if(img){
        return 'img:' + img
      }
      return false
    }
  }

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
