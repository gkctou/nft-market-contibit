/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ens } from '../models/ens';
import type { resolve } from '../models/resolve';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ResolveService {

    /**
     * Resolves an Unstoppable domain and returns the address
     * Resolves an Unstoppable domain and returns the address
 * 
     * @returns resolve Returns an address
     * @throws ApiError
     */
    public static resolveDomain({
domain,
currency = 'eth',
}: {
/**
 * Domain to be resolved
 */
domain: string,
/**
 * The currency to query
 */
currency?: 'eth' | '0x1',
}): CancelablePromise<resolve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/resolve/{domain}',
            path: {
                'domain': domain,
            },
            query: {
                'currency': currency,
            },
            errors: {
                404: `Returns an address`,
            },
        });
    }

    /**
     * Return the ENS domain when available (Only for ETH)
     * Resolves an ETH address and find the ENS name
 * 
     * @returns ens Returns an ENS
     * @throws ApiError
     */
    public static resolveAddress({
address,
}: {
/**
 * The address to be resolved
 */
address: string,
}): CancelablePromise<ens> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/resolve/{address}/reverse',
            path: {
                'address': address,
            },
        });
    }

}
