'use strict';

/**
 * quotes-collection service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quotes-collection.quotes-collection');
