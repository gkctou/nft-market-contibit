/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ipfsFile } from '../models/ipfsFile';
import type { ipfsFileRequest } from '../models/ipfsFileRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StorageService {

    /**
     * Uploads multiple files and place them in a folder directory
     * Uploads multiple files and place them in a folder directory
 * 
     * @returns ipfsFile Returns the path to the uploaded files
     * @throws ApiError
     */
    public static uploadFolder({
requestBody,
}: {
/**
 * Array of JSON and Base64 Supported
 */
requestBody?: Array<ipfsFileRequest>,
}): CancelablePromise<Array<ipfsFile>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ipfs/uploadFolder',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
