module.exports = {
  updateLayoutView: (state, data) => {
    state.layoutView = data
  },

  updateLayoutHeader: (state, data) => {
    state.layoutHeader = data
  },

  updateLayoutHeaderVisible: (state, data) => {
    state.layoutHeaderVisible = data
  },

  updateLayoutHeaderReveal: (state, data) => {
    state.layoutHeaderReveal = data
  },

  updateLayoutHeaderElevated: (state, data) => {
    state.layoutHeaderElevated = data
  },

  updateLayoutHeaderBordered: (state, data) => {
    state.layoutHeaderBordered = data
  },
  updateLayoutLeftDrawer: (state, data) => {
    state.layoutLeftDrawer = data
  },

  updateLayoutLeftDrawerVisible: (state, data) => {
    state.layoutLeftDrawerVisible = data
  },

  updateLayoutLeftDrawerBehavior: (state, data) => {
    state.layoutLeftDrawerBehavior = data
  },

  updateLayoutLeftDrawerOverlay: (state, data) => {
    state.layoutLeftDrawerOverlay = data
  },

  updateLayoutLeftDrawerElevated: (state, data) => {
    state.layoutLeftDrawerElevated = data
  },

  updateLayoutLeftDrawerBordered: (state, data) => {
    state.layoutLeftDrawerBordered = data
  },

  updateLayoutLeftDrawerShowIfAbove: (state, data) => {
    state.layoutLeftDrawerShowIfAbove = data
  },

  updateLayoutRightDrawer: (state, data) => {
    state.layoutRightDrawer = data
  },

  updateLayoutRightDrawerVisible: (state, data) => {
    state.layoutRightDrawerVisible = data
  },

  updateLayoutRightDrawerBehavior: (state, data) => {
    state.layoutRightDrawerBehavior = data
  },

  updateLayoutRightDrawerOverlay: (state, data) => {
    state.layoutRightDrawerOverlay = data
  },

  updateLayoutRightDrawerElevated: (state, data) => {
    state.layoutRightDrawerElevated = data
  },

  updateLayoutRightDrawerBordered: (state, data) => {
    state.layoutRightDrawerBordered = data
  },

  updateLayoutRightDrawerShowIfAbove: (state, data) => {
    state.layoutRightDrawerShowIfAbove = data
  },

  updateLayoutFooter: (state, data) => {
    state.layoutFooter = data
  },

  updateLayoutFooterVisible: (state, data) => {
    state.layoutFooterVisible = data
  },

  updateLayoutFooterReveal: (state, data) => {
    state.layoutFooterReveal = data
  },

  updateLayoutFooterElevated: (state, data) => {
    state.layoutFooterElevated = data
  },

  updateLayoutFooterBordered: (state, data) => {
    state.layoutFooterBordered = data
  },

  updateLayoutFooterCustomClass: (state, data) => {
    state.footerCustomClass = data
  },

  updateLayoutHeaderCustomClass: (state, data) => {
    return state.headerCustomClass = data
  },

  updateLayoutLeftDrawerCustomClass: (state,data) => {
    return state.leftDrawerCustomClass = data
  },

  updateLayoutRightDrawerCustomClass: (state, data) => {
    return state.rightDrawerCustomClass = data
  },

  updateLayoutPageContainerCustomClass: (state, data) => {
    return state.pageContainerCustomClass = data
  },
  updateLayoutRightDrawerWidth: (state, data) => {
    return state.rightDrawerWidth = data
  },
  updateLayoutLeftDrawerWidth: (state, data) => {
    return state.leftDrawerWidth = data
  },

  updateLayoutInjectDrawerOnScrolling: (state, data) => {
    return state.leftDrawerWidth = data
  },

  updateLayoutBreadcrumbs: (state, data) => {
    return state.layoutBreadcrumbs = data
  },

  updateLayoutBreadcrumbsElements: (state, data) => {
    if(data.length > 0){
      return state.layoutBreadcrumbsElements = data
    }
  }
}
