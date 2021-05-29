import { NBERequest, NBEResponse, nbeSend } from '@nbe/nbe-server-base/lib/common-domain/http-common';

export const helloWorldHandler = async (req: NBERequest, res: NBEResponse) => {
  nbeSend(200, { message: 'Hello World' }, res);
};
