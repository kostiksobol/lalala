import { HexString } from "@polkadot/util/types";

const ADDRESS = {
  NODE: process.env.REACT_APP_NODE_ADDRESS as string,
};

const LOCAL_STORAGE = {
  ACCOUNT: 'account',
  WALLET: 'wallet',
};

const MAIN_CONTRACT_ADDRESS: HexString = '0x5a45d988dac11513b25264fc0a5828a334c9fb99ccba1cddbbb03c0e5514721f'

export { ADDRESS, LOCAL_STORAGE, MAIN_CONTRACT_ADDRESS };
