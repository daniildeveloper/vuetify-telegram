import { MTProto } from 'telegram-mtproto';

const api = {
  invokeWithLayer: 0xda9b0d0d,
  layer: 57,
  initConnection: 0x69796de9,
  api_id: 49631,
  app_version: '1.0.1',
  lang_code: 'en',
};

const server = { webogram: true, dev: true };

export default MTProto({ api, server });
