import { NBERequest, NBEResponse, nbeSend } from '@bksdrodrigo/nbe-server-base/lib/common-domain/http-common';
import { logInfo, logDebug } from '@bksdrodrigo/nbe-commono-utils/lib/logger';

export const helloWorldHandler = async (req: NBERequest, res: NBEResponse) => {
  nbeSend(200, { message: 'Hello World' }, res);
};

export const calcAdd = async (req: any, res: any) => {
  logInfo('Request to Calculator Add Method');
  const firstNumber = parseInt(req.params.first, 10) || 0;
  const secondNumber = parseInt(req.params.second, 10) || 0;
  const result = firstNumber + secondNumber
  logDebug(`Input values: ${firstNumber}, ${secondNumber} and Result: ${result}`);
  nbeSend(200, { operation: 'add', firstNumber, secondNumber, result }, res);
};
