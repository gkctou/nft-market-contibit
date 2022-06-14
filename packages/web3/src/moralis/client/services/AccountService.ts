/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { chainList } from '../models/chainList';
import type { erc20TokenBalance } from '../models/erc20TokenBalance';
import type { erc20TransactionCollection } from '../models/erc20TransactionCollection';
import type { nativeBalance } from '../models/nativeBalance';
import type { nftOwnerCollection } from '../models/nftOwnerCollection';
import type { nftTransferCollection } from '../models/nftTransferCollection';
import type { transactionCollection } from '../models/transactionCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountService {

    /**
     * Gets native transactions
     * Gets native transactions in descending order based on block number
     * @returns transactionCollection Returns a collection of native transactions.
     * @throws ApiError
     */
    public static getTransactions({
address,
chain,
subdomain,
fromBlock,
toBlock,
fromDate,
toDate,
cursor,
limit,
}: {
/**
 * address
 */
address: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The subdomain of the moralis server to use (Only use when selecting local devchain as chain)
 */
subdomain?: string,
/**
 * The minimum block number from where to get the transactions
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromBlock?: number,
/**
 * The maximum block number from where to get the transactions.
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toBlock?: number,
/**
 * The date from where to get the transactions (any format that is accepted by momentjs)
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromDate?: string,
/**
 * Get the transactions to this date (any format that is accepted by momentjs)
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toDate?: string,
/**
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: any,
/**
 * limit
 */
limit?: number,
}): CancelablePromise<transactionCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{address}',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'subdomain': subdomain,
                'from_block': fromBlock,
                'to_block': toBlock,
                'from_date': fromDate,
                'to_date': toDate,
                'cursor': cursor,
                'limit': limit,
            },
        });
    }

    /**
     * Gets native balance for a specific address.
     * Gets native balance for a specific address
     * @returns nativeBalance Returns native balance for a specific address
     * @throws ApiError
     */
    public static getNativeBalance({
address,
chain,
providerUrl,
toBlock,
}: {
/**
 * The address for which the native balance will be checked
 */
address: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * web3 provider url to user when using local dev chain
 */
providerUrl?: string,
/**
 * The block number on which the balances should be checked
 */
toBlock?: number,
}): CancelablePromise<nativeBalance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{address}/balance',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'providerUrl': providerUrl,
                'to_block': toBlock,
            },
        });
    }

    /**
     * Gets token balances for a specific address.
     * Gets token balances for a specific address
     * @returns erc20TokenBalance Returns token balances for a specific address
     * @throws ApiError
     */
    public static getTokenBalances({
address,
chain,
subdomain,
toBlock,
tokenAddresses,
}: {
/**
 * The address for which token balances will be checked
 */
address: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The subdomain of the moralis server to use (Only use when selecting local devchain as chain)
 */
subdomain?: string,
/**
 * The block number on which the balances should be checked
 */
toBlock?: number,
/**
 * The addresses to get balances for (Optional)
 */
tokenAddresses?: Array<string>,
}): CancelablePromise<Array<erc20TokenBalance>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{address}/erc20',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'subdomain': subdomain,
                'to_block': toBlock,
                'token_addresses': tokenAddresses,
            },
        });
    }

    /**
     * Gets erc 20 token transactions
     * Gets ERC20 token transactions in descending order based on block number
     * @returns erc20TransactionCollection Returns a collection of token transactions.
     * @throws ApiError
     */
    public static getTokenTransfers({
address,
chain,
subdomain,
fromBlock,
toBlock,
fromDate,
toDate,
limit,
cursor,
}: {
/**
 * address
 */
address: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The subdomain of the moralis server to use (Only use when selecting local devchain as chain)
 */
subdomain?: string,
/**
 * The minimum block number from where to get the transactions
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromBlock?: number,
/**
 * The maximum block number from where to get the transactions.
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toBlock?: number,
/**
 * The date from where to get the transactions (any format that is accepted by momentjs)
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromDate?: string,
/**
 * Get the transactions to this date (any format that is accepted by momentjs)
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toDate?: string,
/**
 * limit
 */
limit?: number,
/**
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: string,
}): CancelablePromise<erc20TransactionCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{address}/erc20/transfers',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'subdomain': subdomain,
                'from_block': fromBlock,
                'to_block': toBlock,
                'from_date': fromDate,
                'to_date': toDate,
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Gets the NFTs owned by a given address
     * Gets NFTs owned by the given address
 * * The response will include status [SYNCED/SYNCING] based on the contracts being indexed.
 * * Use the token_address param to get results for a specific contract only
 * * Note results will include all indexed NFTs
 * * Any request which includes the token_address param will start the indexing process for that NFT collection the very first time it is requested
 * 
     * @returns nftOwnerCollection Returns a collection of nft owners
     * @throws ApiError
     */
    public static getNfTs({
address,
chain,
format = 'decimal',
limit,
tokenAddresses,
cursor,
}: {
/**
 * The owner of a given token
 */
address: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The format of the token id
 */
format?: 'decimal' | 'hex',
/**
 * limit
 */
limit?: number,
/**
 * The addresses to get balances for (Optional)
 */
tokenAddresses?: Array<string>,
/**
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: string,
}): CancelablePromise<nftOwnerCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{address}/nft',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'format': format,
                'limit': limit,
                'token_addresses': tokenAddresses,
                'cursor': cursor,
            },
        });
    }

    /**
     * Gets NFT transfers to and from a given address
     * Gets the transfers of the tokens matching the given parameters
     * @returns nftTransferCollection Returns a collection of NFT transfer
     * @throws ApiError
     */
    public static getNftTransfers({
address,
chain,
format = 'decimal',
direction = 'both',
limit,
cursor,
}: {
/**
 * The sender or recepient of the transfer
 */
address: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The format of the token id
 */
format?: 'decimal' | 'hex',
/**
 * The transfer direction
 */
direction?: 'both' | 'to' | 'from',
/**
 * limit
 */
limit?: number,
/**
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: string,
}): CancelablePromise<nftTransferCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{address}/nft/transfers',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'format': format,
                'direction': direction,
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Gets the NFTs owned by a given address
     * Gets NFTs owned by the given address
 * * Use the token_address param to get results for a specific contract only
 * * Note results will include all indexed NFTs
 * * Any request which includes the token_address param will start the indexing process for that NFT collection the very first time it is requested
 * 
     * @returns nftOwnerCollection Returns a collection of nft owners
     * @throws ApiError
     */
    public static getNfTsForContract({
address,
tokenAddress,
chain,
format = 'decimal',
cursor,
limit,
}: {
/**
 * The owner of a given token
 */
address: string,
/**
 * Address of the contract
 */
tokenAddress: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The format of the token id
 */
format?: 'decimal' | 'hex',
/**
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: string,
/**
 * limit
 */
limit?: number,
}): CancelablePromise<nftOwnerCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{address}/nft/{token_address}',
            path: {
                'address': address,
                'token_address': tokenAddress,
            },
            query: {
                'chain': chain,
                'format': format,
                'cursor': cursor,
                'limit': limit,
            },
        });
    }

}
