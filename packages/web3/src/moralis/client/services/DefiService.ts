/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { chainList } from '../models/chainList';
import type { reservesCollection } from '../models/reservesCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefiService {

    /**
     * Get liquidity pair reserves for an Uniswap V2 based Exchange.
     * Get the liquidity reserves for a given pair address. Only Uniswap V2 based exchanges supported at the moment.
     * @returns reservesCollection Returns the pair reserves
     * @throws ApiError
     */
    public static getPairReserves({
pairAddress,
chain,
toBlock,
toDate,
providerUrl,
}: {
/**
 * Liquidity pair address
 */
pairAddress: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * To get the reserves at this block number
 */
toBlock?: string,
/**
 * Get the reserves to this date (any format that is accepted by momentjs)
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toDate?: string,
/**
 * web3 provider url to user when using local dev chain
 */
providerUrl?: string,
}): CancelablePromise<reservesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{pair_address}/reserves',
            path: {
                'pair_address': pairAddress,
            },
            query: {
                'chain': chain,
                'to_block': toBlock,
                'to_date': toDate,
                'provider_url': providerUrl,
            },
        });
    }

    /**
     * Get pair address based on token0 and token1 address
     * Fetches and returns pair data of the provided token0+token1 combination.
 * The token0 and token1 options are interchangable (ie. there is no different outcome in "token0=WETH and token1=USDT" or "token0=USDT and token1=WETH")
 * 
     * @returns reservesCollection Returns the pair address of the two tokens
     * @throws ApiError
     */
    public static getPairAddress({
exchange,
token0Address,
token1Address,
chain,
toBlock,
toDate,
}: {
/**
 * The factory name or address of the token exchange
 */
exchange: 'uniswapv2' | 'uniswapv3' | 'sushiswapv2' | 'pancakeswapv2' | 'pancakeswapv1' | 'quickswap',
/**
 * Token0 address
 */
token0Address: string,
/**
 * Token1 address
 */
token1Address: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * To get the reserves at this block number
 */
toBlock?: string,
/**
 * Get the reserves to this date (any format that is accepted by momentjs)
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toDate?: string,
}): CancelablePromise<reservesCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{token0_address}/{token1_address}/pairAddress',
            path: {
                'token0_address': token0Address,
                'token1_address': token1Address,
            },
            query: {
                'chain': chain,
                'to_block': toBlock,
                'to_date': toDate,
                'exchange': exchange,
            },
        });
    }

}
