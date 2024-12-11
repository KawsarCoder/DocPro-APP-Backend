'use strict';

/**
 * physician controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::physician.physician');
