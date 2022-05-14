'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', function (req, reply) {
    fastify.mysql.getConnection(onConnect, {
      host: process.env.HOST,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    })

  function onConnect (err, client) {
    if (err) return reply.send(err).code(204)

    client.query(
      'SELECT * FROM devops', [req.params.id],
      function onResult (err, result) {
        client.release()
        reply.send(err || result)
        .code(200)
      }
    )
  }
})
}

