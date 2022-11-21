// 'use strict';

// /**
//  * event router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::event.event');

module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/events', 
        handler: 'event.getAll',
      },
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/events/preview', 
        handler: 'event.getPreview',
      },
    ]
  }