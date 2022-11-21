'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({ strapi }) => ({
    async getAll(ctx) {
      try {
        ctx.body = await strapi.service('api::event.event').listEvents()
      } catch (err) {
        ctx.body = err;
      }
    },
    async getPreview(ctx) {
      try {
        ctx.body = await strapi.service('api::event.event').listEvents('preview')
      } catch (err) {
        ctx.body = err;
      }
    },
}));