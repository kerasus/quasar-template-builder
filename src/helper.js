const getRouteWithParent = function (routeNode, toName) {
  const routes = routeNode.children;
  for (const routeIndex in routes) {
    const route = routes[routeIndex];
    if (route.name === toName) {
      return {
        route,
        parent: routeNode
      };
    } else {
      if (route.children && route.children.length > 0) {
        const res = getRouteWithParent(route, toName);
        if (res) {
          return {
            route: res,
            parent: routeNode
          };
        }
      }
    }
  }
}

const createBreadcrumbsFromRouteWithParent = function (routeWithParent) {
  if (routeWithParent.route) {
    const array = createBreadcrumbsFromRouteWithParent(routeWithParent.route);
    if (routeWithParent.parent.breadcrumbs) {
      array.unshift(routeWithParent.parent.breadcrumbs);
    }
    return array;
  } else {
    if (routeWithParent.breadcrumbs) {
      return [routeWithParent.breadcrumbs];
    } else {
      return [];
    }
  }
}

const createLayoutConfigArray = function (routeWithParent) {
  if (routeWithParent.route) {
    const array = createLayoutConfigArray(routeWithParent.route);
    if (routeWithParent.parent.layoutConfig) {
      array.unshift(routeWithParent.parent.layoutConfig);
    }
    return array;
  } else {
    if (routeWithParent.layoutConfig) {
      return [routeWithParent.layoutConfig];
    } else {
      return [];
    }
  }
}

module.exports = {getRouteWithParent, createBreadcrumbsFromRouteWithParent, createLayoutConfigArray}
