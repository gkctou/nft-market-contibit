/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { block } from '../models/block';
import type { blockDate } from '../models/blockDate';
import type { blockTransaction } from '../models/blockTransaction';
import type { chainList } from '../models/chainList';
import type { logCollection } from '../models/logCollection';
import type { logEvent } from '../models/logEvent';
import type { nftTransferCollection } from '../models/nftTransferCollection';
import type { RunContractDto } from '../models/RunContractDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NativeService {

    /**
     * Gets block contents by block hash
     * Gets the contents of a block by block hash
     * @returns block Returns the contents of a block
     * @throws ApiError
     */
    public static getBlock({
blockNumberOrHash,
chain,
subdomain,
}: {
/**
 * The block hash or block number
 */
blockNumberOrHash: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The subdomain of the moralis server to use (Only use when selecting local devchain as chain)
 */
subdomain?: string,
}): CancelablePromise<block> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/block/{block_number_or_hash}',
            path: {
                'block_number_or_hash': blockNumberOrHash,
            },
            query: {
                'chain': chain,
                'subdomain': subdomain,
            },
        });
    }

    /**
     * Gets the closest block of the provided date
     * Gets the closest block of the provided date
     * @returns blockDate Returns the blocknumber and corresponding date and timestamp
     * @throws ApiError
     */
    public static getDateToBlock({
date,
chain,
providerUrl,
}: {
/**
 * Unix date in miliseconds or a datestring (any format that is accepted by momentjs)
 */
date: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * web3 provider url to user when using local dev chain
 */
providerUrl?: string,
}): CancelablePromise<blockDate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dateToBlock',
            query: {
                'chain': chain,
                'providerUrl': providerUrl,
                'date': date,
            },
        });
    }

    /**
     * Gets address logs
     * Gets the logs from an address
     * @returns logCollection Returns the logs of an address
     * @throws ApiError
     */
    public static getLogsByAddress({
address,
chain,
subdomain,
blockNumber,
fromBlock,
toBlock,
fromDate,
toDate,
topic0,
topic1,
topic2,
topic3,
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
 * The block number
 * * Provide the param 'block_numer' or ('from_block' and / or 'to_block')
 * * If 'block_numer' is provided in conbinaison with 'from_block' and / or 'to_block', 'block_number' will will be used
 * 
 */
blockNumber?: string,
/**
 * The minimum block number from where to get the logs
 * * Provide the param 'block_numer' or ('from_block' and / or 'to_block')
 * * If 'block_numer' is provided in conbinaison with 'from_block' and / or 'to_block', 'block_number' will will be used
 * 
 */
fromBlock?: string,
/**
 * The maximum block number from where to get the logs
 * * Provide the param 'block_numer' or ('from_block' and / or 'to_block')
 * * If 'block_numer' is provided in conbinaison with 'from_block' and / or 'to_block', 'block_number' will will be used
 * 
 */
toBlock?: string,
/**
 * The date from where to get the logs (any format that is accepted by momentjs)
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * * If 'from_date' and the block params are provided, the block params will be used. Please refer to the blocks params sections (block_number,from_block and to_block) on how to use them
 * 
 */
fromDate?: string,
/**
 * Get the logs to this date (any format that is accepted by momentjs)
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * * If 'to_date' and the block params are provided, the block params will be used. Please refer to the blocks params sections (block_number,from_block and to_block) on how to use them
 * 
 */
toDate?: string,
/**
 * topic0
 */
topic0?: string,
/**
 * topic1
 */
topic1?: string,
/**
 * topic2
 */
topic2?: string,
/**
 * topic3
 */
topic3?: string,
/**
 * limit
 */
limit?: number,
/**
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: string,
}): CancelablePromise<logCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{address}/logs',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'subdomain': subdomain,
                'block_number': blockNumber,
                'from_block': fromBlock,
                'to_block': toBlock,
                'from_date': fromDate,
                'to_date': toDate,
                'topic0': topic0,
                'topic1': topic1,
                'topic2': topic2,
                'topic3': topic3,
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Gets NFT transfers by block number or block hash
     * Gets NFT transfers by block number or block hash
     * @returns nftTransferCollection Returns the contents of a block
     * @throws ApiError
     */
    public static getNftTransfersByBlock({
blockNumberOrHash,
chain,
subdomain,
limit = 100,
cursor,
}: {
/**
 * The block hash or block number
 */
blockNumberOrHash: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The subdomain of the moralis server to use (Only use when selecting local devchain as chain)
 */
subdomain?: string,
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
            url: '/block/{block_number_or_hash}/nft/transfers',
            path: {
                'block_number_or_hash': blockNumberOrHash,
            },
            query: {
                'chain': chain,
                'subdomain': subdomain,
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Get transaction details by transaction hash
     * Gets the contents of a block transaction by hash
     * @returns blockTransaction Transaction details by transaction hash
     * @throws ApiError
     */
    public static getTransaction({
transactionHash,
chain,
subdomain,
}: {
/**
 * The transaction hash
 */
transactionHash: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The subdomain of the moralis server to use (Only use when selecting local devchain as chain)
 */
subdomain?: string,
}): CancelablePromise<blockTransaction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transaction/{transaction_hash}',
            path: {
                'transaction_hash': transactionHash,
            },
            query: {
                'chain': chain,
                'subdomain': subdomain,
            },
        });
    }

    /**
     * Gets events by topic
     * Gets events in descending order based on block number
     * @returns logEvent Returns a collection of events by topic
     * @throws ApiError
     */
    public static getContractEvents({
address,
topic,
chain,
subdomain,
providerUrl,
fromBlock,
toBlock,
fromDate,
toDate,
offset,
limit,
requestBody,
}: {
/**
 * address
 */
address: string,
/**
 * The topic of the event
 */
topic: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The subdomain of the moralis server to use (Only use when selecting local devchain as chain)
 */
subdomain?: string,
/**
 * web3 provider url to user when using local dev chain
 */
providerUrl?: string,
/**
 * The minimum block number from where to get the logs
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromBlock?: number,
/**
 * The maximum block number from where to get the logs.
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toBlock?: number,
/**
 * The date from where to get the logs (any format that is accepted by momentjs)
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromDate?: string,
/**
 * Get the logs to this date (any format that is accepted by momentjs)
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toDate?: string,
/**
 * offset
 */
offset?: number,
/**
 * limit
 */
limit?: number,
/**
 * ABI of the specific event
 */
requestBody?: any,
}): CancelablePromise<Array<logEvent>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{address}/events',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'subdomain': subdomain,
                'providerUrl': providerUrl,
                'from_block': fromBlock,
                'to_block': toBlock,
                'from_date': fromDate,
                'to_date': toDate,
                'topic': topic,
                'offset': offset,
                'limit': limit,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Runs a function of a contract abi
     * Runs a given function of a contract abi and returns readonly data
     * @returns string Returns response of the function executed
     * @throws ApiError
     */
    public static runContractFunction({
address,
functionName,
requestBody,
chain,
subdomain,
providerUrl,
}: {
/**
 * address
 */
address: string,
/**
 * function_name
 */
functionName: string,
/**
 * Body
 */
requestBody: RunContractDto,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The subdomain of the moralis server to use (Only use when selecting local devchain as chain)
 */
subdomain?: string,
/**
 * web3 provider url to user when using local dev chain
 */
providerUrl?: string,
}): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{address}/function',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'subdomain': subdomain,
                'providerUrl': providerUrl,
                'function_name': functionName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
