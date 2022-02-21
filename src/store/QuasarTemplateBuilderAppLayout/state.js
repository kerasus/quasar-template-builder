import languages from 'quasar/lang/index.json'

const appLanguages = languages.filter(lang =>
  ['fa', 'en-us'].includes(lang.isoName)
)

export default {

  layoutView: 'lHh Lpr lFf',
  layoutHeader: true,
  layoutHeaderVisible: true,
  layoutHeaderReveal: false,
  layoutHeaderElevated: false,
  layoutHeaderBordered: false,
  headerCustomClass: '',

  layoutHeaderNavTabs: true,
  layoutHeaderNavTabsModel: 1,

  layoutLeftDrawer: false,
  layoutLeftDrawerVisible: false,
  layoutLeftDrawerBehavior: 'default',
  layoutLeftDrawerOverlay: false,
  layoutLeftDrawerElevated: false,
  layoutLeftDrawerBordered: false,
  leftDrawerCustomClass: '',

  layoutRightDrawer: false,
  layoutRightDrawerVisible: false,
  layoutRightDrawerBehavior: 'default',
  layoutRightDrawerOverlay: false,
  layoutRightDrawerElevated: false,
  layoutRightDrawerBordered: false,
  rightDrawerCustomClass: '',

  pageContainerCustomClass: '',

  layoutFooter: false,
  layoutFooterVisible: true,
  layoutFooterReveal: false,
  layoutFooterElevated: false,
  layoutFooterBordered: false,
  footerCustomClass: '',

}
