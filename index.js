'use strict';

const QTemplateBuilderHelper = require('./src/helper')
const Breadcrumbs = require('./src/components/breadcrumbs')
const QuasarTemplateBuilder = require('./src/quasar-template-builder')
const QuasarTemplateBuilderAppLayout = require('./src/store/QuasarTemplateBuilderAppLayout')
const {getRouteWithParent, createBreadcrumbsFromRouteWithParent, createLayoutConfigArray} = QTemplateBuilderHelper
const QuasarTemplateBuilderObject = { QuasarTemplateBuilder, QuasarTemplateBuilderAppLayout, Breadcrumbs,  getRouteWithParent, createBreadcrumbsFromRouteWithParent, createLayoutConfigArray }

module.exports = QuasarTemplateBuilderObject
module.exports.default = QuasarTemplateBuilderObject
