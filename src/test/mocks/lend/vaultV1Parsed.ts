import {
  Vault,
  VaultVersion,
  Vaults,
} from '~/types/contracts/lend/vaultRegistry/model';
import { LendContractStatus } from '~/types/contracts/lend/vaultRegistry/response';

const vaultV1Parsed: Vault = {
  id: '1',
  vaultVersion: VaultVersion.V1,
  name: 'stkd-SCRT Vault',
  collateralAddress: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
  silkMaxAllowance: '0',
  silkAllowanceUsed: '11825.976211616265357496',
  maxLtv: 0.45,
  collateral: {
    total: '69822.082224544587516946',
    elastic: '69822.082224544587516946',
    base: '69822.082224544587516946',
    safe: '3076.606761056046617547',
    lastAccruedAt: new Date(1681764653000),
    oracleDelay: 600,
  },
  debt: {
    total: '12734.302492560037164766',
    base: '12734.302492560037164766',
    lastAccruedAt: new Date(1712346110000),
  },
  interestRate: {
    current: 0,
    target: 0,
    delta: 0.01,
    ratePerSecond: 0,
    lastUpdatedAt: new Date(1681764653000),
  },
  borrowFee: {
    current: 0,
    target: 0,
    delta: 0.01,
    ratePerSecond: 0,
    lastUpdatedAt: new Date(1681764653000),
  },
  liquidationFee: {
    discount: 0.1,
    minimumDebt: '100',
    daoShare: 0.2,
    callerShare: 0.1,
  },
  isProtocolOnly: false,
  status: LendContractStatus.DEPRECATED,
  openPositions: 32,
  totalPositions: 73,
  whitelist: [],
};

const vaultsV1Parsed: Vaults = {
  1: {
    id: '1',
    vaultVersion: VaultVersion.V1,
    name: 'stkd-SCRT Vault',
    collateralAddress: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
    silkMaxAllowance: '0',
    silkAllowanceUsed: '11825.976211616265357496',
    maxLtv: 0.45,
    collateral: {
      total: '69822.082224544587516946',
      elastic: '69822.082224544587516946',
      base: '69822.082224544587516946',
      safe: '3076.606761056046617547',
      lastAccruedAt: new Date(1681764653000),
      oracleDelay: 600,
    },
    debt: {
      total: '12734.302492560037164766',
      base: '12734.302492560037164766',
      lastAccruedAt: new Date(1710953012000),
    },
    interestRate: {
      current: 0,
      target: 0,
      delta: 0.01,
      ratePerSecond: 0,
      lastUpdatedAt: new Date(1681764653000),
    },
    borrowFee: {
      current: 0,
      target: 0,
      delta: 0.01,
      ratePerSecond: 0,
      lastUpdatedAt: new Date(1681764653000),
    },
    liquidationFee: {
      discount: 0.1,
      minimumDebt: '100',
      daoShare: 0.2,
      callerShare: 0.1,
    },
    isProtocolOnly: false,
    status: LendContractStatus.DEPRECATED,
    openPositions: 32,
    totalPositions: 73,
    whitelist: [],
  },
  2: {
    id: '2',
    vaultVersion: VaultVersion.V1,
    name: 'USDT Vault',
    collateralAddress: 'secret1wk5j2cntwg2fgklf0uta3tlkvt87alfj7kepuw',
    silkMaxAllowance: '0',
    silkAllowanceUsed: '0',
    maxLtv: 0.85,
    collateral: {
      total: '0',
      elastic: '0',
      base: '0',
      safe: '0.000004653229977094',
      lastAccruedAt: new Date(1681764653000),
      oracleDelay: 600,
    },
    debt: {
      total: '0',
      base: '0',
      lastAccruedAt: new Date(1710953012000),
    },
    interestRate: {
      current: 0,
      target: 0,
      delta: 0.01,
      ratePerSecond: 0,
      lastUpdatedAt: new Date(1681764653000),
    },
    borrowFee: {
      current: 0,
      target: 0,
      delta: 0.01,
      ratePerSecond: 0,
      lastUpdatedAt: new Date(1681764653000),
    },
    liquidationFee: {
      discount: 0.05,
      minimumDebt: '100',
      daoShare: 0.2,
      callerShare: 0.1,
    },
    isProtocolOnly: false,
    status: LendContractStatus.DEPRECATED,
    openPositions: 3,
    totalPositions: 9,
    whitelist: [],
  },
};

export {
  vaultV1Parsed,
  vaultsV1Parsed,
};
