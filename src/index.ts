import * as dotenv from "dotenv";
import { NBEBaseServer } from '@nbe/nbe-server-base';
import { HttpMethod } from "@nbe/nbe-server-base/lib/common-domain/http-common";
import {helloWorldHandler} from './routes';

if (process.env.NODE_ENV !== 'production') dotenv.config();
const port  = process.env.PORT || 3000;
const hostname = process.env.HOST || '0.0.0.0';
const nbeServer = new NBEBaseServer();
nbeServer.createRoute('/api/hello');
nbeServer.addSubRoutes('/api/hello', '/', HttpMethod.GET, helloWorldHandler)
const app = nbeServer.getServer();


app.listen(port, hostname, () => {
  console.log(`Application running on http://${hostname}:${port}`)
})