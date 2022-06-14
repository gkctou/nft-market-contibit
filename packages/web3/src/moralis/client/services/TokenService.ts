/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { chainList } from '../models/chainList';
import type { erc20Allowance } from '../models/erc20Allowance';
import type { erc20Metadata } from '../models/erc20Metadata';
import type { erc20Price } from '../models/erc20Price';
import type { erc20TransactionCollection } from '../models/erc20TransactionCollection';
import type { metadataResync } from '../models/metadataResync';
import type { nft } from '../models/nft';
import type { nftCollection } from '../models/nftCollection';
import type { nftContractMetadata } from '../models/nftContractMetadata';
import type { nftMetadataCollection } from '../models/nftMetadataCollection';
import type { nftOwnerCollection } from '../models/nftOwnerCollection';
import type { nftTransferCollection } from '../models/nftTransferCollection';
import type { trade } from '../models/trade';
import type { tradeCollection } from '../models/tradeCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TokenService {

    /**
     * Gets token metadata
     * Returns metadata (name, symbol, decimals, logo) for a given token contract address.
     * @returns erc20Metadata Returns metadata (name, symbol, decimals, logo) for a given token contract address.
     * @throws ApiError
     */
    public static getTokenMetadata({
addresses,
chain,
subdomain,
providerUrl,
}: {
/**
 * The addresses to get metadata for
 */
addresses: Array<string>,
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
}): CancelablePromise<Array<erc20Metadata>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/erc20/metadata',
            query: {
                'chain': chain,
                'subdomain': subdomain,
                'providerUrl': providerUrl,
                'addresses': addresses,
            },
        });
    }

    /**
     * Get nft trades by marketplaces
     * Get the nft trades for a given contracts and marketplace
     * @returns tradeCollection Returns the trades
     * @throws ApiError
     */
    public static getNftTrades({
address,
chain,
fromBlock,
toBlock,
fromDate,
toDate,
providerUrl,
marketplace = 'opensea',
cursor,
limit,
}: {
/**
 * Address of the contract
 */
address: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The minimum block number from where to get the transfers
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromBlock?: number,
/**
 * To get the reserves at this block number
 */
toBlock?: string,
/**
 * The date from where to get the transfers (any format that is accepted by momentjs)
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromDate?: string,
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
/**
 * marketplace from where to get the trades (only opensea is supported at the moment)
 */
marketplace?: 'opensea',
/**
 * cursor
 */
cursor?: string,
/**
 * limit
 */
limit?: number,
}): CancelablePromise<tradeCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/{address}/trades',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'from_block': fromBlock,
                'to_block': toBlock,
                'from_date': fromDate,
                'to_date': toDate,
                'provider_url': providerUrl,
                'marketplace': marketplace,
                'cursor': cursor,
                'limit': limit,
            },
        });
    }

    /**
     * Get the lowest price found for a nft token contract
     * Get the lowest price found for a nft token contract for the last x days (only trades paid in ETH)
     * @returns trade Returns the trade with the lowest price
     * @throws ApiError
     */
    public static getNftLowestPrice({
address,
chain,
days,
providerUrl,
marketplace = 'opensea',
}: {
/**
 * Address of the contract
 */
address: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The number of days to look back to find the lowest price
 * If not provided 7 days will be the default
 * 
 */
days?: number,
/**
 * web3 provider url to user when using local dev chain
 */
providerUrl?: string,
/**
 * marketplace from where to get the trades (only opensea is supported at the moment)
 */
marketplace?: 'opensea',
}): CancelablePromise<trade> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/{address}/lowestprice',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'days': days,
                'provider_url': providerUrl,
                'marketplace': marketplace,
            },
        });
    }

    /**
     * Gets token metadata
     * Returns metadata (name, symbol, decimals, logo) for a given token contract address.
     * @returns erc20Metadata Returns metadata (name, symbol, decimals, logo) for a given token contract address.
     * @throws ApiError
     */
    public static getTokenMetadataBySymbol({
symbols,
chain,
subdomain,
}: {
/**
 * The symbols to get metadata for
 */
symbols: Array<string>,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The subdomain of the moralis server to use (Only use when selecting local devchain as chain)
 */
subdomain?: string,
}): CancelablePromise<Array<erc20Metadata>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/erc20/metadata/symbols',
            query: {
                'chain': chain,
                'subdomain': subdomain,
                'symbols': symbols,
            },
        });
    }

    /**
     * Gets token price
     * Returns the price nominated in the native token and usd for a given token contract address.
     * @returns erc20Price Returns the price nominated in the native token and usd for a given token contract address
     * @throws ApiError
     */
    public static getTokenPrice({
address,
chain,
providerUrl,
exchange,
toBlock,
}: {
/**
 * The address of the token contract
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
 * The factory name or address of the token exchange
 */
exchange?: string,
/**
 * to_block
 */
toBlock?: number,
}): CancelablePromise<erc20Price> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/erc20/{address}/price',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'providerUrl': providerUrl,
                'exchange': exchange,
                'to_block': toBlock,
            },
        });
    }

    /**
     * Gets erc20 transactions of a token contract
     * Gets ERC20 token contract transactions in descending order based on block number
     * @returns erc20TransactionCollection Returns a collection of token contract transactions.
     * @throws ApiError
     */
    public static getTokenAddressTransfers({
address,
chain,
subdomain,
fromBlock,
toBlock,
fromDate,
toDate,
offset,
limit,
}: {
/**
 * The address of the token contract
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
 * The minimum block number from where to get the transfers
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromBlock?: number,
/**
 * The maximum block number from where to get the transfers.
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toBlock?: number,
/**
 * The date from where to get the transfers (any format that is accepted by momentjs)
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromDate?: string,
/**
 * Get the transfers to this date (any format that is accepted by momentjs)
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
}): CancelablePromise<erc20TransactionCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/erc20/{address}/transfers',
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
                'offset': offset,
                'limit': limit,
            },
        });
    }

    /**
     * Gets the amount which the spender is allowed to withdraw from the owner.
     * Gets the amount which the spender is allowed to withdraw from the spender
     * @returns erc20Allowance Returns the amount which the spender is allowed to withdraw from the owner..
     * @throws ApiError
     */
    public static getTokenAllowance({
address,
ownerAddress,
spenderAddress,
chain,
providerUrl,
}: {
/**
 * The address of the token contract
 */
address: string,
/**
 * The address of the token owner
 */
ownerAddress: string,
/**
 * The address of the token spender
 */
spenderAddress: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * web3 provider url to user when using local dev chain
 */
providerUrl?: string,
}): CancelablePromise<erc20Allowance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/erc20/{address}/allowance',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'providerUrl': providerUrl,
                'owner_address': ownerAddress,
                'spender_address': spenderAddress,
            },
        });
    }

    /**
     * Retrieves the NFT data based on a metadata search
     * Gets NFTs that match a given metadata search.
     * @returns nftMetadataCollection Returns the matching NFTs
     * @throws ApiError
     */
    public static searchNfTs({
q,
chain,
format = 'decimal',
filter = 'global',
fromBlock,
toBlock,
fromDate,
toDate,
addresses,
cursor,
limit,
}: {
/**
 * The search string
 */
q: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The format of the token id
 */
format?: 'decimal' | 'hex',
/**
 * What fields the search should match on. To look into the entire metadata set the value to 'global'. To have a better response time you can look into a specific field like name
 */
filter?: 'name' | 'description' | 'attributes' | 'global' | 'name,description' | 'name,attributes' | 'description,attributes' | 'name,description,attributes',
/**
 * The minimum block number from where to start the search
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromBlock?: number,
/**
 * The maximum block number from where to end the search
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toBlock?: number,
/**
 * The date from where to start the search (any format that is accepted by momentjs)
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromDate?: string,
/**
 * Get search results up until this date (any format that is accepted by momentjs)
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toDate?: string,
/**
 * The addresses to get metadata for
 */
addresses?: Array<string>,
/**
 * cursor
 */
cursor?: string,
/**
 * limit
 */
limit?: number,
}): CancelablePromise<nftMetadataCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/search',
            query: {
                'chain': chain,
                'format': format,
                'q': q,
                'filter': filter,
                'from_block': fromBlock,
                'to_block': toBlock,
                'from_date': fromDate,
                'to_date': toDate,
                'addresses': addresses,
                'cursor': cursor,
                'limit': limit,
            },
        });
    }

    /**
     * Gets NFT transfers from a block number to a block number
     * Gets the transfers of the tokens from a block number to a block number
     * @returns nftTransferCollection Returns a collection of NFT transfers
     * @throws ApiError
     */
    public static getNftTransfersFromToBlock({
chain,
fromBlock,
toBlock,
fromDate,
toDate,
format = 'decimal',
limit,
cursor,
}: {
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The minimum block number from where to get the transfers
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromBlock?: number,
/**
 * The maximum block number from where to get the transfers.
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toBlock?: number,
/**
 * The date from where to get the transfers (any format that is accepted by momentjs)
 * * Provide the param 'from_block' or 'from_date'
 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
 * 
 */
fromDate?: string,
/**
 * Get transfers up until this date (any format that is accepted by momentjs)
 * * Provide the param 'to_block' or 'to_date'
 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
 * 
 */
toDate?: string,
/**
 * The format of the token id
 */
format?: 'decimal' | 'hex',
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
            url: '/nft/transfers',
            query: {
                'chain': chain,
                'from_block': fromBlock,
                'to_block': toBlock,
                'from_date': fromDate,
                'to_date': toDate,
                'format': format,
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Retrieves the unique NFTs inside a given contract
     * Gets data, including metadata (where available), for all token ids for the given contract address.
 * * Results are limited to 100 per page by default
 * * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
 * 
     * @returns nftCollection Returns a collection of nfts
     * @throws ApiError
     */
    public static getAllTokenIds({
address,
chain,
format = 'decimal',
limit,
cursor,
}: {
/**
 * Address of the contract
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
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: string,
}): CancelablePromise<nftCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/{address}',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'format': format,
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Gets NFT transfers of a given contract
     * Gets the transfers of the tokens matching the given parameters
     * @returns nftTransferCollection Returns a collection of NFT transfers
     * @throws ApiError
     */
    public static getContractNftTransfers({
address,
chain,
format = 'decimal',
limit,
cursor,
}: {
/**
 * Address of the contract
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
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: string,
}): CancelablePromise<nftTransferCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/{address}/transfers',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'format': format,
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Gets the owners of the NFTs of a given contract
     * Gets all owners of NFT items within a given contract collection
 * * Use after /nft/contract/{token_address} to find out who owns each token id in a collection
 * * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
 * 
     * @returns nftOwnerCollection Returns a collection of nft owners
     * @throws ApiError
     */
    public static getNftOwners({
address,
chain,
format = 'decimal',
limit,
cursor,
}: {
/**
 * Address of the contract
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
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: string,
}): CancelablePromise<nftOwnerCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/{address}/owners',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
                'format': format,
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Gets the global metadata for a given contract
     * Gets the contract level metadata (name, symbol, base token uri) for the given contract
 * * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
 * 
     * @returns nftContractMetadata Returns a collection NFT collections.
     * @throws ApiError
     */
    public static getNftMetadata({
address,
chain,
}: {
/**
 * Address of the contract
 */
address: string,
/**
 * The chain to query
 */
chain?: chainList,
}): CancelablePromise<nftContractMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/{address}/metadata',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
            },
        });
    }

    /**
     * resync the metadata for a given token_id
     * ReSync the metadata for an NFT
 * * The metadata(default) flag will request a the NFT's metadata from the already existing token_uri
 * * The uri flag will fetch the latest token_uri from the given NFT address. In sync mode the metadata will also be fetched
 * * The sync mode will make the endpoint synchronous so it will wait for the task to be completed before responding
 * * The async mode(default) will make the endpoint asynchronous so we will wait for the task to be completed before responding
 * 
     * @returns metadataResync (In sync mode) Resync request executed.
     * @throws ApiError
     */
    public static reSyncMetadata({
address,
tokenId,
chain,
flag = 'metadata',
mode = 'async',
}: {
/**
 * Address of the contract
 */
address: string,
/**
 * The id of the token
 */
tokenId: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The type of resync to operate
 */
flag?: 'uri' | 'metadata',
/**
 * To define the behaviour of the endpoint
 */
mode?: 'async' | 'sync',
}): CancelablePromise<metadataResync> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/{address}/{token_id}/metadata/resync',
            path: {
                'address': address,
                'token_id': tokenId,
            },
            query: {
                'chain': chain,
                'flag': flag,
                'mode': mode,
            },
            errors: {
                404: `(In sync mode) Resync request executed and metadata could not be updated.`,
            },
        });
    }

    /**
     * Sync a Contract for NFT Index
     * Sync a Contract for NFT Index
 * 
     * @returns any Contract Address was triggered for index.
     * @throws ApiError
     */
    public static syncNftContract({
address,
chain,
}: {
/**
 * Address of the contract
 */
address: string,
/**
 * The chain to query
 */
chain?: chainList,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/nft/{address}/sync',
            path: {
                'address': address,
            },
            query: {
                'chain': chain,
            },
        });
    }

    /**
     * Gets the NFT with the given id of a given contract
     * Gets data, including metadata (where available), for the given token id of the given contract address.
 * * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
 * 
     * @returns nft Returns the specified NFT
     * @throws ApiError
     */
    public static getTokenIdMetadata({
address,
tokenId,
chain,
format = 'decimal',
}: {
/**
 * Address of the contract
 */
address: string,
/**
 * The id of the token
 */
tokenId: string,
/**
 * The chain to query
 */
chain?: chainList,
/**
 * The format of the token id
 */
format?: 'decimal' | 'hex',
}): CancelablePromise<nft> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/{address}/{token_id}',
            path: {
                'address': address,
                'token_id': tokenId,
            },
            query: {
                'chain': chain,
                'format': format,
            },
        });
    }

    /**
     * Gets the owners of NFTs for a given contract
     * Gets all owners of NFT items within a given contract collection
 * * Use after /nft/contract/{token_address} to find out who owns each token id in a collection
 * * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
 * 
     * @returns nftOwnerCollection Returns a collection of NFTs with their respective owners
     * @throws ApiError
     */
    public static getTokenIdOwners({
address,
tokenId,
chain,
format = 'decimal',
limit,
cursor,
}: {
/**
 * Address of the contract
 */
address: string,
/**
 * The id of the token
 */
tokenId: string,
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
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: string,
}): CancelablePromise<nftOwnerCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/{address}/{token_id}/owners',
            path: {
                'address': address,
                'token_id': tokenId,
            },
            query: {
                'chain': chain,
                'format': format,
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Gets NFT transfers of a given contract
     * Gets the transfers of the tokens matching the given parameters
     * @returns nftTransferCollection Returns a collection of NFT transfers
     * @throws ApiError
     */
    public static getWalletTokenIdTransfers({
address,
tokenId,
chain,
format = 'decimal',
limit,
order,
cursor,
}: {
/**
 * Address of the contract
 */
address: string,
/**
 * The id of the token
 */
tokenId: string,
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
 * The field(s) to order on and if it should be ordered in ascending or descending order. Specified by: fieldName1.order,fieldName2.order. Example 1: "block_number", "block_number.ASC", "block_number.DESC", Example 2: "block_number and contract_type", "block_number.ASC,contract_type.DESC"
 */
order?: string,
/**
 * The cursor returned in the last response (for getting the next page)
 * 
 */
cursor?: string,
}): CancelablePromise<nftTransferCollection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/nft/{address}/{token_id}/transfers',
            path: {
                'address': address,
                'token_id': tokenId,
            },
            query: {
                'chain': chain,
                'format': format,
                'limit': limit,
                'order': order,
                'cursor': cursor,
            },
        });
    }

}
