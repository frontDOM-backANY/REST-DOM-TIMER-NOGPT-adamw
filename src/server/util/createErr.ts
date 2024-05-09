const createErr = ({ method, type, err }: { method: string, type: string, err: any }) => {
  return {
    name: type,
    log: `${method}: ${type}: ${err}`,
    message: `Error occurred in ${method}. Check server logs for details.`
  };
};

export default createErr;