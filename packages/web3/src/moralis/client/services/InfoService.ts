/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { endpointWeights } from '../models/endpointWeights';
import type { web3version } from '../models/web3version';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InfoService {

    /**
     * Returns the web3 api version
     * @returns web3version Returns the web3 api version
     * @throws ApiError
     */
    public static web3ApiVersion(): CancelablePromise<web3version> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/web3/version',
        });
    }

    /**
     * Returns the endpoint price list for rate limits and costs
     * @returns endpointWeights Returns the endpoint price list for rate limits and costs
     * @throws ApiError
     */
    public static endpointWeights(): CancelablePromise<Array<endpointWeights>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/info/endpointWeights',
        });
    }

}
