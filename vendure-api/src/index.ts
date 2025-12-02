import 'reflect-metadata';
import { bootstrap } from '@vendure/core';
import { config } from './vendure-config.js';

bootstrap(config)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Vendure server bootstrapped');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });
