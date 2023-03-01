import fastify from 'fastify';
import { sum } from './sum';

const app = fastify({ logger: true });

const PORT = 3031;

app.get('/', async () => {
  return { hello: 'world' }
})

app.post('/sum', async (request, reply) => {
  const { a, b } = request.body as { a: number, b: number }
  
  reply.send({ sum: sum(a, b) })
})

const start = async () => {
  try {
    await app.listen({ port: PORT });
  } catch (err) {
    app.log.error(err);
    process.exit(0);
  }
}

start()