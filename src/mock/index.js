import { createServer, Model } from 'miragejs';

export const makeServer = ({ environment = 'development' } = {}) => {
  const server = createServer({
    environment,

    models: {
      user: Model.extend({ name: '' }),
    },

    seeds(server) {
      server.create('user', { name: 'Tom' });
      server.create('user', { name: 'Alice' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', (schema) => {
        return schema.users.all();
      });

      this.passthrough();
    },
  });

  return server;
};
