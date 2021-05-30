import * as dotenv from 'dotenv';
import { NBEBaseServer } from '@bksdrodrigo/nbe-server-base';
import { HttpMethod } from '@bksdrodrigo/nbe-server-base/lib/common-domain/http-common';
import { calcAdd, helloWorldHandler } from './routes';
import { logInfo } from '@bksdrodrigo/nbe-commono-utils/lib/logger';

if (process.env.NODE_ENV !== 'production') dotenv.config();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST || '0.0.0.0';
const nbeServer = new NBEBaseServer();
nbeServer.createRoute('/api/hello');
nbeServer.addSubRoutes('/api/hello', '/', HttpMethod.GET, helloWorldHandler);

//calc routes
nbeServer.createRoute('/api/calc');
nbeServer.addSubRoutes('/api/calc', '/add/:first/:second', HttpMethod.GET, calcAdd);
const app = nbeServer.getServer();

app.listen(port, hostname, () => {
  const message = `Application running on http://${hostname}:${port}`;
  logInfo(message);
});
