'use strict';

/**
 * event service
 */
const {auth} = require('google-auth-library')
const {google} = require('googleapis')
const dayjs = require('dayjs')

const keysEnvVar = process.env['CREDS']

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event.event', ({ strapi }) =>  ({

  async listEvents(mode) {
    if (!keysEnvVar) {
      throw new Error('The $CREDS environment variable was not found!')
    }
    const keys = JSON.parse(keysEnvVar)

    // load the JWT or UserRefreshClient from the keys
    const client = auth.fromJSON(keys)
    const timeStamp = dayjs().toISOString()
    client.scopes = ['https://www.googleapis.com/auth/calendar.events.public.readonly']
    let url = ''
    if(mode==='preview'){
      url = `https://www.googleapis.com/calendar/v3/calendars/admin%40mindbubble.org/events?timeMin=${timeStamp}`
    }
    else{
      url = `https://www.googleapis.com/calendar/v3/calendars/admin%40mindbubble.org/events`
    }
    const res = await client.request({url})
    return res.data.items
  },
}));