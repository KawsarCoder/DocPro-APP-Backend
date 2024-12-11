'use strict';

/**
 * physician service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::physician.physician');
