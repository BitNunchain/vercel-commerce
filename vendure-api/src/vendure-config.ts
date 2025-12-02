import { DefaultLogger, LogLevel, VendureConfig } from '@vendure/core';

export const config: VendureConfig = {
  apiOptions: {
    port: Number(process.env.PORT) || 3000,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    cors: {
      origin: '*',
      credentials: true
    }
  },
  authOptions: {
    tokenMethod: 'bearer',
    requireVerification: false
  },
  dbConnectionOptions: {
    type: 'sqlite',
    database: process.env.DB_PATH || '/data/vendure.sqlite',
    synchronize: true,
    logging: false
  },
  logger: new DefaultLogger({ level: LogLevel.Info }),
  paymentOptions: {
    paymentMethodHandlers: []
  },
  plugins: []
};
