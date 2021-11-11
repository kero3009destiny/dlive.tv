import uaparser from 'ua-parser-js';

export interface ClientInfo {
  browser: {
    name: string;
    version: string;
  };
  os: {
    name: string;
    version: string;
  };
  enigne: string;
  device: string;
}

let rst: ClientInfo | null = null;

export function getUA(): ClientInfo {
  // if ((process as any).server) {
  //   return null;
  // }
  if (rst) {
    return rst;
  }
  const p = new uaparser();
  const c = p.getResult();
  rst = {
    browser: {
      name: c.browser.name as string,
      version: c.browser.version as string
    },
    os: {
      name: c.os.name as string,
      version: c.os.version as string
    },
    device: c.device.model + ' ' + c.device.type,
    enigne: c.engine.name + ' ' + c.engine.version
  };
  return rst;
}
