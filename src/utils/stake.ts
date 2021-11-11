import { Contract } from '@/models/contract';

export const canStakeIn = async (
  contract: Contract,
  address: string
): Promise<{ _can: boolean; _errorMessage: string }> => {
  return await contract.canStakeIn(address).call();
};

export const canStakeOut = async (
  contract: Contract,
  address: string,
  stake: number
): Promise<{ _can: boolean; _errorMessage: string }> => {
  return await contract.canStakeOut(address, stake).call();
};

export const canClaimPendingStakeOut = async (
  contract: Contract,
  address: string
): Promise<{
  _can: boolean;
  _errorMessage: string;
  _hasPendingStakeOut: boolean;
  _amount: number;
  _stakeoutTimestamp: number;
  _stakeoutAvailableTimestamp: number;
}> => {
  return await contract.canClaimPendingStakeOut(address).call();
};

export const canClaimReward = async (
  contract: Contract,
  address: string
): Promise<{
  _can: boolean;
  _errorMessage: string;
  _hasPendingStakeOut: boolean;
  _reward: number;
}> => {
  return await contract.canClaimReward(address).call();
};
