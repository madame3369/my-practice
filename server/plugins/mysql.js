'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) { 
    fastify.register(require('fastify-mysql'), {
        connectionString: `mysql://hwicheon:rlagnlcjs@database-1.cezyc77wf0zx.ap-northeast-2.rds.amazonaws.com/review`
      })


})