---
title: OpenSea API vunknown
language_tabs:
  - javascript: JavaScript
language_clients:
  - javascript: ""
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="opensea-api">OpenSea API vunknown</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.opensea.io/api/v1">https://api.opensea.io/api/v1</a>

# Authentication

* API Key (sec0)
    - Parameter Name: **X-API-KEY**, in: header. 

<h1 id="opensea-api-default">Default</h1>

## retrieving-a-single-asset

<a id="opIdretrieving-a-single-asset"></a>

> Code samples

```javascript

const headers = {
  'X-API-KEY':'string'
};

fetch('https://api.opensea.io/api/v1/asset/{asset_contract_address}/{token_id}/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /asset/{asset_contract_address}/{token_id}/`

*Retrieve an asset*

<h3 id="retrieving-a-single-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_contract_address|path|string|true|Address of the contract for this NFT|
|token_id|path|string|true|Token ID for this item|
|X-API-KEY|header|string|false|Your API Key (contact us to request one!)|
|account_address|query|string|false|Address of an owner of the token.  If you include this, the response will include an `ownership` object that includes the number of tokens owned by the address provided instead of the `top_ownerships` object included in the standard response, which provides the number of tokens owned by each of the 10 addresses with the greatest supply of the token..|
|include_orders|query|string|false|A flag determining if order information should be included in the response.  The default value of this flag is false.|

<h3 id="retrieving-a-single-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|

<aside class="success">
This operation does not require authentication
</aside>

## getting-assets

<a id="opIdgetting-assets"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'X-API-KEY':'string',
  'X-API-KEY':'API_KEY'
};

fetch('https://api.opensea.io/api/v1/assets',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /assets`

*Retrieve assets*

<h3 id="getting-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|owner|query|string|false|The address of the owner of the assets|
|token_ids|query|string|false|An array of token IDs to search for (e.g. `?token_ids=1&token_ids=209`). Will return a list of assets with token_id matching any of the IDs in this array.|
|collection|query|string|false|Limit responses to members of a collection.  Case sensitive and must match the collection slug exactly. Will return all assets from all contracts in a collection.  For more information on collections, see our [collections documentation](/reference#retrieving-collections).|
|collection_slug|query|string|false|Limit responses to members of a collection.  Case sensitive and must match the collection slug exactly. Will return all assets from all contracts in a collection.  For more information on collections, see our [collections documentation](/reference#retrieving-collections).|
|collection_editor|query|string|false|none|
|order_direction|query|string|false|Can be `asc` for ascending or `desc` for descending|
|asset_contract_address|query|string|false|The NFT contract address for the assets|
|asset_contract_addresses|query|string|false|An array of contract addresses to search for (e.g. `?asset_contract_addresses=0x1...&asset_contract_addresses=0x2...`). Will return a list of assets with contracts matching any of the addresses in this array. If "token_ids" is also specified, then it will only return assets that match each `(address, token_id)` pairing, respecting order. Also, `"sell_orders": null` prefetches sell orders when returning assets in a list view and `"auctions": [` shows a list of 3rd party auctions that are on-chain.|
|limit|query|string|false|Limit. Defaults to 20, capped at 50.|
|cursor|query|string|false|A cursor pointing to the page to retrieve|
|X-API-KEY|header|string|false|none|
|include_orders|query|string|false|A flag determining if order information should be included in the response.|

> Example responses

> 200

```json
{
  "next": "LXBrPTI5OTE2MDIxOQ%3D%3D",
  "previous": null,
  "assets": [
    {
      "id": 299160222,
      "num_sales": 0,
      "background_color": null,
      "image_url": "https://lh3.googleusercontent.com/OIUpIvOXhqG8F-Wa948rxJcA8bg5lQGGaJ2yquegulYrD3nncituY5DcOi_wnpVumHU4qEBR-G-zBRNsQusbIgETVcTadt0r5arh32A",
      "image_preview_url": "https://lh3.googleusercontent.com/OIUpIvOXhqG8F-Wa948rxJcA8bg5lQGGaJ2yquegulYrD3nncituY5DcOi_wnpVumHU4qEBR-G-zBRNsQusbIgETVcTadt0r5arh32A=s250",
      "image_thumbnail_url": "https://lh3.googleusercontent.com/OIUpIvOXhqG8F-Wa948rxJcA8bg5lQGGaJ2yquegulYrD3nncituY5DcOi_wnpVumHU4qEBR-G-zBRNsQusbIgETVcTadt0r5arh32A=s128",
      "image_original_url": null,
      "animation_url": null,
      "animation_original_url": null,
      "name": "Planet 0310-MI-RII",
      "description": null,
      "external_link": null,
      "asset_contract": {
        "address": "0x495f947276749ce646f68ac8c248420045cb7b5e",
        "asset_contract_type": "semi-fungible",
        "created_date": "2020-12-02T17:40:53.232025",
        "name": "OpenSea Collection",
        "nft_version": null,
        "opensea_version": "2.0.0",
        "owner": 102384,
        "schema_name": "ERC1155",
        "symbol": "OPENSTORE",
        "total_supply": null,
        "description": "",
        "external_link": null,
        "image_url": null,
        "default_to_fiat": false,
        "dev_buyer_fee_basis_points": 0,
        "dev_seller_fee_basis_points": 0,
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": 0,
        "opensea_seller_fee_basis_points": 250,
        "buyer_fee_basis_points": 0,
        "seller_fee_basis_points": 250,
        "payout_address": null
      },
      "permalink": "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/101577219900953729483682340185834053539485491429073128558041914785105988026369",
      "collection": {
        "banner_image_url": null,
        "chat_url": null,
        "created_date": "2022-02-16T06:41:53.565898",
        "default_to_fiat": false,
        "description": "We were born in a diverse, ever changing, spectacular universe which keeps, even after millions of years, feeding our curiosity to uncover its mysteries and reach farther hidden places. This collection reflects the embedded diversity in the universe, and in ourselves, and provides each of us the opportunity to represent their unique personality.   \nExplore a collection of 6000 unique and algorithmically created colorful planets. Find still and moving planets, each with its own unique geography, moons, rings, and orbits. Their counts, colors and arrangement make for different complexities and provide some aesthetically pleasing scenery. Hurry up and reserve your place in space now.  \n\n## How to Navigate\n- Filter by \"Planet 01\" to \"Planet 20\" to find planets of 20 different styles\n- Filter by \"Planet XX01\" to \"Planet XX07\" to find still planets, and \"Planet XX08\" to \"Planet \"XX10\" to find moving ones",
        "dev_buyer_fee_basis_points": "0",
        "dev_seller_fee_basis_points": "1000",
        "discord_url": null,
        "display_data": {
          "card_display_style": "cover"
        },
        "external_url": null,
        "featured": false,
        "featured_image_url": null,
        "hidden": false,
        "safelist_request_status": "not_requested",
        "image_url": "https://lh3.googleusercontent.com/IPf5tBHMv7dCDlOTJFeZbIi3vL4ONikq359W-fASBDxBwrwu6qfzfwqTMqh8fLs7wNueMurvSd77lsia7WZ3PH10YENdmDW5e1A1VA=s120",
        "is_subject_to_whitelist": false,
        "large_image_url": null,
        "medium_username": null,
        "name": "Planets of a Digital World",
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": "0",
        "opensea_seller_fee_basis_points": "250",
        "payout_address": "0xe092ab4843725299968ed46ec6a6ae6c3232428e",
        "require_email": false,
        "short_description": null,
        "slug": "planets-digital-world",
        "telegram_url": null,
        "twitter_username": null,
        "instagram_username": null,
        "wiki_url": null
      },
      "decimals": null,
      "token_metadata": null,
      "owner": {
        "user": {
          "username": "NullAddress"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
        "address": "0x0000000000000000000000000000000000000000",
        "config": ""
      },
      "sell_orders": null,
      "creator": {
        "user": {
          "username": "AItisticEngineer"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/3.png",
        "address": "0xe092ab4843725299968ed46ec6a6ae6c3232428e",
        "config": ""
      },
      "traits": [],
      "last_sale": null,
      "top_bid": null,
      "listing_date": null,
      "is_presale": true,
      "transfer_fee_payment_token": null,
      "transfer_fee": null,
      "token_id": "101577219900953729483682340185834053539485491429073128558041914785105988026369"
    },
    {
      "id": 299160219,
      "num_sales": 0,
      "background_color": null,
      "image_url": "https://lh3.googleusercontent.com/xbwAomX-LNegpzC7nfK9ACDA6GlmAJuMYHIP0X3briF6Md70nkSdDEoEUyQzEk_T5f56iSjqSvcRTmIQCP-fOfgCuZDzFnGWSPKeHQ",
      "image_preview_url": "https://lh3.googleusercontent.com/xbwAomX-LNegpzC7nfK9ACDA6GlmAJuMYHIP0X3briF6Md70nkSdDEoEUyQzEk_T5f56iSjqSvcRTmIQCP-fOfgCuZDzFnGWSPKeHQ=s250",
      "image_thumbnail_url": "https://lh3.googleusercontent.com/xbwAomX-LNegpzC7nfK9ACDA6GlmAJuMYHIP0X3briF6Md70nkSdDEoEUyQzEk_T5f56iSjqSvcRTmIQCP-fOfgCuZDzFnGWSPKeHQ=s128",
      "image_original_url": null,
      "animation_url": null,
      "animation_original_url": null,
      "name": "full snow moon 09",
      "description": "My attempt to capture the majestic feminine of a full moon through colour and movement in my ‘arty’ abstractionism using a layering of digital techniques.",
      "external_link": null,
      "asset_contract": {
        "address": "0x495f947276749ce646f68ac8c248420045cb7b5e",
        "asset_contract_type": "semi-fungible",
        "created_date": "2020-12-02T17:40:53.232025",
        "name": "OpenSea Collection",
        "nft_version": null,
        "opensea_version": "2.0.0",
        "owner": 102384,
        "schema_name": "ERC1155",
        "symbol": "OPENSTORE",
        "total_supply": null,
        "description": "",
        "external_link": null,
        "image_url": null,
        "default_to_fiat": false,
        "dev_buyer_fee_basis_points": 0,
        "dev_seller_fee_basis_points": 0,
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": 0,
        "opensea_seller_fee_basis_points": 250,
        "buyer_fee_basis_points": 0,
        "seller_fee_basis_points": 250,
        "payout_address": null
      },
      "permalink": "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/89251628251019127135783150474798842902821279268347685136567997309972058734593",
      "collection": {
        "banner_image_url": "https://lh3.googleusercontent.com/gLs5zFl3vVTOm3eqQl63z_kEenZNsbeaYsJd9oxWDmlzU2AQ_mL_6Jh-Y1cw5dPKw2KzjdSxwgY3O05B0RCdKFR_aCkxLO1yt4fHLg=s2500",
        "chat_url": null,
        "created_date": "2022-02-18T19:57:41.429402",
        "default_to_fiat": false,
        "description": "The full moon on feb 16th (snow moon) inspired a series of abstracts. The intention was to capture her majestic femininity through colour and movement. ",
        "dev_buyer_fee_basis_points": "0",
        "dev_seller_fee_basis_points": "1000",
        "discord_url": null,
        "display_data": {
          "card_display_style": "cover"
        },
        "external_url": null,
        "featured": false,
        "featured_image_url": "https://lh3.googleusercontent.com/o-de5j3CKewllk3TAzhsWMDal0Wpj-akv2GP9V1HSO2Sl0dfG4w88CYVi62GVUBJu9CGMR2ogk4T8B6am3B3I8osCBpWdr0ZAlA20J4=s300",
        "hidden": false,
        "safelist_request_status": "not_requested",
        "image_url": "https://lh3.googleusercontent.com/hG1ua2qNPkh6eFfFgCzaWhzidU-d0J4BdrjpXKvk5ZPn9qQUO-18YU2kICjkcbKMYtYklXKPII8vOgVPbOc0-HC8eDWPf7yq6bfp_rs=s120",
        "is_subject_to_whitelist": false,
        "large_image_url": "https://lh3.googleusercontent.com/o-de5j3CKewllk3TAzhsWMDal0Wpj-akv2GP9V1HSO2Sl0dfG4w88CYVi62GVUBJu9CGMR2ogk4T8B6am3B3I8osCBpWdr0ZAlA20J4=s300",
        "medium_username": null,
        "name": "Snow Moon Abstracts",
        "only_proxied_transfers": false,
        "opensea_buyer_fee_basis_points": "0",
        "opensea_seller_fee_basis_points": "250",
        "payout_address": "0xc552a1a4acebd7d9aafde9e880ef0026b3ba1d71",
        "require_email": false,
        "short_description": null,
        "slug": "snow-moon-abstracts",
        "telegram_url": null,
        "twitter_username": null,
        "instagram_username": "yourart",
        "wiki_url": null
      },
      "decimals": null,
      "token_metadata": null,
      "owner": {
        "user": {
          "username": "NullAddress"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
        "address": "0x0000000000000000000000000000000000000000",
        "config": ""
      },
      "sell_orders": null,
      "creator": {
        "user": {
          "username": "yourartylife"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/31.png",
        "address": "0xc552a1a4acebd7d9aafde9e880ef0026b3ba1d71",
        "config": ""
      },
      "traits": [],
      "last_sale": null,
      "top_bid": null,
      "listing_date": null,
      "is_presale": true,
      "transfer_fee_payment_token": null,
      "transfer_fee": null,
      "token_id": "89251628251019127135783150474798842902821279268347685136567997309972058734593"
    }
  ]
}
```

<h3 id="getting-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200|Inline|

<h3 id="getting-assets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» next|string|false|none|none|
|» previous|any|false|none|none|
|» assets|[object]|false|none|none|
|»» id|integer|false|none|none|
|»» num_sales|integer|false|none|none|
|»» background_color|any|false|none|none|
|»» image_url|string|false|none|none|
|»» image_preview_url|string|false|none|none|
|»» image_thumbnail_url|string|false|none|none|
|»» image_original_url|any|false|none|none|
|»» animation_url|any|false|none|none|
|»» animation_original_url|any|false|none|none|
|»» name|string|false|none|none|
|»» description|any|false|none|none|
|»» external_link|any|false|none|none|
|»» asset_contract|object|false|none|none|
|»»» address|string|false|none|none|
|»»» asset_contract_type|string|false|none|none|
|»»» created_date|string|false|none|none|
|»»» name|string|false|none|none|
|»»» nft_version|any|false|none|none|
|»»» opensea_version|string|false|none|none|
|»»» owner|integer|false|none|none|
|»»» schema_name|string|false|none|none|
|»»» symbol|string|false|none|none|
|»»» total_supply|any|false|none|none|
|»»» description|string|false|none|none|
|»»» external_link|any|false|none|none|
|»»» image_url|any|false|none|none|
|»»» default_to_fiat|boolean|false|none|none|
|»»» dev_buyer_fee_basis_points|integer|false|none|none|
|»»» dev_seller_fee_basis_points|integer|false|none|none|
|»»» only_proxied_transfers|boolean|false|none|none|
|»»» opensea_buyer_fee_basis_points|integer|false|none|none|
|»»» opensea_seller_fee_basis_points|integer|false|none|none|
|»»» buyer_fee_basis_points|integer|false|none|none|
|»»» seller_fee_basis_points|integer|false|none|none|
|»»» payout_address|any|false|none|none|
|»» permalink|string|false|none|none|
|»» collection|object|false|none|none|
|»»» banner_image_url|any|false|none|none|
|»»» chat_url|any|false|none|none|
|»»» created_date|string|false|none|none|
|»»» default_to_fiat|boolean|false|none|none|
|»»» description|string|false|none|none|
|»»» dev_buyer_fee_basis_points|string|false|none|none|
|»»» dev_seller_fee_basis_points|string|false|none|none|
|»»» discord_url|any|false|none|none|
|»»» display_data|object|false|none|none|
|»»»» card_display_style|string|false|none|none|
|»»» external_url|any|false|none|none|
|»»» featured|boolean|false|none|none|
|»»» featured_image_url|any|false|none|none|
|»»» hidden|boolean|false|none|none|
|»»» safelist_request_status|string|false|none|none|
|»»» image_url|string|false|none|none|
|»»» is_subject_to_whitelist|boolean|false|none|none|
|»»» large_image_url|any|false|none|none|
|»»» medium_username|any|false|none|none|
|»»» name|string|false|none|none|
|»»» only_proxied_transfers|boolean|false|none|none|
|»»» opensea_buyer_fee_basis_points|string|false|none|none|
|»»» opensea_seller_fee_basis_points|string|false|none|none|
|»»» payout_address|string|false|none|none|
|»»» require_email|boolean|false|none|none|
|»»» short_description|any|false|none|none|
|»»» slug|string|false|none|none|
|»»» telegram_url|any|false|none|none|
|»»» twitter_username|any|false|none|none|
|»»» instagram_username|any|false|none|none|
|»»» wiki_url|any|false|none|none|
|»» decimals|any|false|none|none|
|»» token_metadata|any|false|none|none|
|»» owner|object|false|none|none|
|»»» user|object|false|none|none|
|»»»» username|string|false|none|none|
|»»» profile_img_url|string|false|none|none|
|»»» address|string|false|none|none|
|»»» config|string|false|none|none|
|»» sell_orders|any|false|none|none|
|»» creator|object|false|none|none|
|»»» user|object|false|none|none|
|»»»» username|string|false|none|none|
|»»» profile_img_url|string|false|none|none|
|»»» address|string|false|none|none|
|»»» config|string|false|none|none|
|»» traits|array|false|none|none|
|»» last_sale|any|false|none|none|
|»» top_bid|any|false|none|none|
|»» listing_date|any|false|none|none|
|»» is_presale|boolean|false|none|none|
|»» transfer_fee_payment_token|any|false|none|none|
|»» transfer_fee|any|false|none|none|
|»» token_id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sec0
</aside>

## retrieving-asset-events

<a id="opIdretrieving-asset-events"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'X-API-KEY':'API_KEY'
};

fetch('https://api.opensea.io/api/v1/events',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /events`

*Retrieve events*

<h3 id="retrieving-asset-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|only_opensea|query|boolean|false|Restrict to events on OpenSea auctions. Can be `true` or `false`|
|token_id|query|integer(int32)|false|The token's id to optionally filter by|
|asset_contract_address|query|string|false|The NFT contract address for the assets for which to show events|
|collection_slug|query|string|false|Limit responses to events from a collection.  Case sensitive and must match the collection slug exactly. Will return all assets from all contracts in a collection.  For more information on collections, see our [collections documentation](/reference#retrieving-collections).|
|collection_editor|query|string|false|none|
|account_address|query|string|false|A user account's wallet address to filter for events on an account|
|event_type|query|string|false|The event type to filter. Can be `created` for new auctions, `successful` for sales, `cancelled`, `bid_entered`, `bid_withdrawn`, `transfer`, `offer_entered`, or `approve`|
|auction_type|query|string|false|Filter by an auction type. Can be `english` for English Auctions, `dutch` for fixed-price and declining-price sell orders (Dutch Auctions), or `min-price` for CryptoPunks bidding auctions.|
|occurred_before|query|string(date-time)|false|Only show events listed before this timestamp. Seconds since the Unix epoch.|
|occurred_after|query|string(date-time)|false|Only show events listed after this timestamp. Seconds since the Unix epoch.|
|cursor|query|string|false|A cursor pointing to the page to retrieve|

> Example responses

> 200

```json
{
  "next": "LWV2ZW50X3RpbWVzdGFtcD0yMDIyLTAyLTE4KzIwJTNBNDYlM0EzOC45NTc5NTYmLXBrPTM1NDYwOTA2NzQ%3D",
  "previous": null,
  "asset_events": [
    {
      "approved_account": null,
      "asset": {
        "id": 17728562,
        "num_sales": 1,
        "background_color": null,
        "image_url": "https://lh3.googleusercontent.com/YAn9vef679uw9rJLNF-o3pLvV_8Mmqc6yfT-xSNGc5UWK5Heo1ieJwxHlwN5Q0kZqPmL0ru9WKAz9GcgR-Gwqfq-buu63dtRFdaS",
        "image_preview_url": "https://lh3.googleusercontent.com/YAn9vef679uw9rJLNF-o3pLvV_8Mmqc6yfT-xSNGc5UWK5Heo1ieJwxHlwN5Q0kZqPmL0ru9WKAz9GcgR-Gwqfq-buu63dtRFdaS=s250",
        "image_thumbnail_url": "https://lh3.googleusercontent.com/YAn9vef679uw9rJLNF-o3pLvV_8Mmqc6yfT-xSNGc5UWK5Heo1ieJwxHlwN5Q0kZqPmL0ru9WKAz9GcgR-Gwqfq-buu63dtRFdaS=s128",
        "image_original_url": "https://hashmasksstore.blob.core.windows.net/hashmasks/12508.jpg",
        "animation_url": null,
        "animation_original_url": null,
        "name": "Nobody",
        "description": "⚠️ **ATTENTION**: Hashmask names can change at any time. Immediately before purchasing a Hashmask, enter the Hashmask's token ID into the `tokenNameByIndex` function on a site like [Etherscan](https://etherscan.io/address/0xc2c747e0f7004f9e8817db2ca4997657a7746928#readContract) to verify that the blockchain indicates that the Hashmask you're purchasing has the name you expect.\n\nHashmask #2367",
        "external_link": "https://www.thehashmasks.com/detail/2367",
        "asset_contract": {
          "address": "0xc2c747e0f7004f9e8817db2ca4997657a7746928",
          "asset_contract_type": "non-fungible",
          "created_date": "2021-01-28T10:22:01.756793",
          "name": "Hashmasks",
          "nft_version": "3.0",
          "opensea_version": null,
          "owner": 18650025,
          "schema_name": "ERC721",
          "symbol": "HM",
          "total_supply": "0",
          "description": "Hashmasks are ancient traits and memories of the first travelers to Earth. Their journey here was long and hard. The Hashmasks forgot their names by the time they arrived. They left clues for us to unravel so that we could discover their meaning.\r\n\r\nAre you a curious lover of fine art? Join our community of passionate detectives. Come add to the Hashmasks story and discover the character behind your own mask!",
          "external_link": "https://www.thehashmasks.com/",
          "image_url": "https://lh3.googleusercontent.com/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw=s120",
          "default_to_fiat": false,
          "dev_buyer_fee_basis_points": 0,
          "dev_seller_fee_basis_points": 250,
          "only_proxied_transfers": false,
          "opensea_buyer_fee_basis_points": 0,
          "opensea_seller_fee_basis_points": 250,
          "buyer_fee_basis_points": 0,
          "seller_fee_basis_points": 500,
          "payout_address": "0xd0eb98552f7dcafb237be28c1f9c8ae86a36e529"
        },
        "permalink": "https://opensea.io/assets/0xc2c747e0f7004f9e8817db2ca4997657a7746928/2367",
        "collection": {
          "banner_image_url": "https://lh3.googleusercontent.com/D1SwtrOZMJRnc7aDHGX1ANHVsL67nPXOma5bVuvgVTlocTcVNs_t76YYI5FMfjfcDpgjV7get7jx2vLSjj4UefSiXuxJf75Rx7rwTg=s2500",
          "chat_url": null,
          "created_date": "2021-01-28T15:01:12.705115",
          "default_to_fiat": false,
          "description": "Hashmasks are ancient traits and memories of the first travelers to Earth. Their journey here was long and hard. The Hashmasks forgot their names by the time they arrived. They left clues for us to unravel so that we could discover their meaning.\r\n\r\nAre you a curious lover of fine art? Join our community of passionate detectives. Come add to the Hashmasks story and discover the character behind your own mask!",
          "dev_buyer_fee_basis_points": "0",
          "dev_seller_fee_basis_points": "250",
          "discord_url": "https://discord.gg/crJmxxzGuZ",
          "display_data": {
            "card_display_style": "contain"
          },
          "external_url": "https://www.thehashmasks.com/",
          "featured": false,
          "featured_image_url": "https://lh3.googleusercontent.com/BYDBYE7oDy9NvHq16DTm1AyDrqUDioEELqbcZ6LucKT6kPJh-4EkfAHZs2OjMzFKtZWZERZrXycWPekMfsNPM-OjyWNRjG6jU3bp=s300",
          "hidden": false,
          "safelist_request_status": "verified",
          "image_url": "https://lh3.googleusercontent.com/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw=s120",
          "is_subject_to_whitelist": false,
          "large_image_url": "https://lh3.googleusercontent.com/BYDBYE7oDy9NvHq16DTm1AyDrqUDioEELqbcZ6LucKT6kPJh-4EkfAHZs2OjMzFKtZWZERZrXycWPekMfsNPM-OjyWNRjG6jU3bp=s300",
          "medium_username": null,
          "name": "Hashmasks",
          "only_proxied_transfers": false,
          "opensea_buyer_fee_basis_points": "0",
          "opensea_seller_fee_basis_points": "250",
          "payout_address": "0xd0eb98552f7dcafb237be28c1f9c8ae86a36e529",
          "require_email": false,
          "short_description": null,
          "slug": "hashmasks",
          "telegram_url": null,
          "twitter_username": "TheHashmasks",
          "instagram_username": null,
          "wiki_url": null
        },
        "decimals": 0,
        "token_metadata": "https://hashmap.azurewebsites.net/getMask/2367",
        "owner": {
          "user": {
            "username": "UNDER-LORD"
          },
          "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/4.png",
          "address": "0xb1fb83e08634c55fd505bbdc8f0441fc1ca3f47d",
          "config": ""
        },
        "token_id": "2367"
      },
      "asset_bundle": null,
      "auction_type": null,
      "bid_amount": "530000000000000000",
      "collection_slug": "hashmasks",
      "contract_address": "0x7f268357a8c2552623316e2562d90e642bb538e5",
      "created_date": "2022-02-18T20:46:38.984925",
      "custom_event_name": null,
      "dev_fee_payment_event": null,
      "dev_seller_fee_basis_points": 250,
      "duration": null,
      "ending_price": null,
      "event_type": "offer_entered",
      "from_account": {
        "user": {
          "username": null
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/24.png",
        "address": "0x5b86accb1d291c568693352c8138bb3cbdd4584f",
        "config": ""
      },
      "id": 3546090674,
      "is_private": null,
      "owner_account": null,
      "payment_token": {
        "id": 2,
        "symbol": "WETH",
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "image_url": "https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg",
        "name": "Wrapped Ether",
        "decimals": 18,
        "eth_price": "1.000000000000000",
        "usd_price": "2792.170000000000073000"
      },
      "quantity": "1",
      "seller": null,
      "starting_price": null,
      "to_account": null,
      "total_price": null,
      "transaction": null,
      "winner_account": null,
      "listing_time": null
    }
  ]
}
```

> 400

```json
{}
```

<h3 id="retrieving-asset-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400|Inline|

<h3 id="retrieving-asset-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» next|string|false|none|none|
|» previous|any|false|none|none|
|» asset_events|[object]|false|none|none|
|»» approved_account|any|false|none|none|
|»» asset|object|false|none|none|
|»»» id|integer|false|none|none|
|»»» num_sales|integer|false|none|none|
|»»» background_color|any|false|none|none|
|»»» image_url|string|false|none|none|
|»»» image_preview_url|string|false|none|none|
|»»» image_thumbnail_url|string|false|none|none|
|»»» image_original_url|string|false|none|none|
|»»» animation_url|any|false|none|none|
|»»» animation_original_url|any|false|none|none|
|»»» name|string|false|none|none|
|»»» description|string|false|none|none|
|»»» external_link|string|false|none|none|
|»»» asset_contract|object|false|none|none|
|»»»» address|string|false|none|none|
|»»»» asset_contract_type|string|false|none|none|
|»»»» created_date|string|false|none|none|
|»»»» name|string|false|none|none|
|»»»» nft_version|string|false|none|none|
|»»»» opensea_version|any|false|none|none|
|»»»» owner|integer|false|none|none|
|»»»» schema_name|string|false|none|none|
|»»»» symbol|string|false|none|none|
|»»»» total_supply|string|false|none|none|
|»»»» description|string|false|none|none|
|»»»» external_link|string|false|none|none|
|»»»» image_url|string|false|none|none|
|»»»» default_to_fiat|boolean|false|none|none|
|»»»» dev_buyer_fee_basis_points|integer|false|none|none|
|»»»» dev_seller_fee_basis_points|integer|false|none|none|
|»»»» only_proxied_transfers|boolean|false|none|none|
|»»»» opensea_buyer_fee_basis_points|integer|false|none|none|
|»»»» opensea_seller_fee_basis_points|integer|false|none|none|
|»»»» buyer_fee_basis_points|integer|false|none|none|
|»»»» seller_fee_basis_points|integer|false|none|none|
|»»»» payout_address|string|false|none|none|
|»»» permalink|string|false|none|none|
|»»» collection|object|false|none|none|
|»»»» banner_image_url|string|false|none|none|
|»»»» chat_url|any|false|none|none|
|»»»» created_date|string|false|none|none|
|»»»» default_to_fiat|boolean|false|none|none|
|»»»» description|string|false|none|none|
|»»»» dev_buyer_fee_basis_points|string|false|none|none|
|»»»» dev_seller_fee_basis_points|string|false|none|none|
|»»»» discord_url|string|false|none|none|
|»»»» display_data|object|false|none|none|
|»»»»» card_display_style|string|false|none|none|
|»»»» external_url|string|false|none|none|
|»»»» featured|boolean|false|none|none|
|»»»» featured_image_url|string|false|none|none|
|»»»» hidden|boolean|false|none|none|
|»»»» safelist_request_status|string|false|none|none|
|»»»» image_url|string|false|none|none|
|»»»» is_subject_to_whitelist|boolean|false|none|none|
|»»»» large_image_url|string|false|none|none|
|»»»» medium_username|any|false|none|none|
|»»»» name|string|false|none|none|
|»»»» only_proxied_transfers|boolean|false|none|none|
|»»»» opensea_buyer_fee_basis_points|string|false|none|none|
|»»»» opensea_seller_fee_basis_points|string|false|none|none|
|»»»» payout_address|string|false|none|none|
|»»»» require_email|boolean|false|none|none|
|»»»» short_description|any|false|none|none|
|»»»» slug|string|false|none|none|
|»»»» telegram_url|any|false|none|none|
|»»»» twitter_username|string|false|none|none|
|»»»» instagram_username|any|false|none|none|
|»»»» wiki_url|any|false|none|none|
|»»» decimals|integer|false|none|none|
|»»» token_metadata|string|false|none|none|
|»»» owner|object|false|none|none|
|»»»» user|object|false|none|none|
|»»»»» username|string|false|none|none|
|»»»» profile_img_url|string|false|none|none|
|»»»» address|string|false|none|none|
|»»»» config|string|false|none|none|
|»»» token_id|string|false|none|none|
|»» asset_bundle|any|false|none|none|
|»» auction_type|any|false|none|none|
|»» bid_amount|string|false|none|none|
|»» collection_slug|string|false|none|none|
|»» contract_address|string|false|none|none|
|»» created_date|string|false|none|none|
|»» custom_event_name|any|false|none|none|
|»» dev_fee_payment_event|any|false|none|none|
|»» dev_seller_fee_basis_points|integer|false|none|none|
|»» duration|any|false|none|none|
|»» ending_price|any|false|none|none|
|»» event_type|string|false|none|none|
|»» from_account|object|false|none|none|
|»»» user|object|false|none|none|
|»»»» username|any|false|none|none|
|»»» profile_img_url|string|false|none|none|
|»»» address|string|false|none|none|
|»»» config|string|false|none|none|
|»» id|integer|false|none|none|
|»» is_private|any|false|none|none|
|»» owner_account|any|false|none|none|
|»» payment_token|object|false|none|none|
|»»» id|integer|false|none|none|
|»»» symbol|string|false|none|none|
|»»» address|string|false|none|none|
|»»» image_url|string|false|none|none|
|»»» name|string|false|none|none|
|»»» decimals|integer|false|none|none|
|»»» eth_price|string|false|none|none|
|»»» usd_price|string|false|none|none|
|»» quantity|string|false|none|none|
|»» seller|any|false|none|none|
|»» starting_price|any|false|none|none|
|»» to_account|any|false|none|none|
|»» total_price|any|false|none|none|
|»» transaction|any|false|none|none|
|»» winner_account|any|false|none|none|
|»» listing_time|any|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sec0
</aside>

## retrieving-bundles

<a id="opIdretrieving-bundles"></a>

> Code samples

```javascript

fetch('https://api.opensea.io/api/v1/bundles',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /bundles`

*Retrieve bundles*

<h3 id="retrieving-bundles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|on_sale|query|boolean|false|If set to `true`, only show bundles currently on sale. If set to `false`, only show bundles that have been sold or cancelled.|
|owner|query|string|false|Account address of the owner of a bundle (and all assets within)|
|asset_contract_address|query|string|false|Contract address of all the assets in a bundle. Only works for homogenous bundles, not mixed ones.|
|asset_contract_addresses|query|string|false|An array of contract addresses to search for (e.g. `?asset_contract_addresses=0x1...&asset_contract_addresses=0x2...`). Will return a list of bundles with assets having contracts that match ALL of the addresses in this array. Useful for querying for mixed bundles, e.g. ones with CryptoKitties AND CK Talisman statues.|
|token_ids|query|string|false|A list of token IDs for showing only bundles with at least one of the token IDs in the list|
|limit|query|string|false|For pagination: how many results to return|
|offset|query|string|false|For pagination: the index of the result to start at (beginning with 0)|

<h3 id="retrieving-bundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|

<aside class="success">
This operation does not require authentication
</aside>

## retrieving-a-single-contract

<a id="opIdretrieving-a-single-contract"></a>

> Code samples

```javascript

const headers = {
  'X-API-KEY':'string'
};

fetch('https://api.opensea.io/api/v1/asset_contract/{asset_contract_address}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /asset_contract/{asset_contract_address}`

*Retrieve a contract*

<h3 id="retrieving-a-single-contract-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string|false|Your API Key (contact us to request one!)|
|asset_contract_address|path|string|true|Address of the contract|

<h3 id="retrieving-a-single-contract-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|

<aside class="success">
This operation does not require authentication
</aside>

## retrieving-collections

<a id="opIdretrieving-collections"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'X-API-KEY':'string'
};

fetch('https://api.opensea.io/api/v1/collections',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /collections`

*Retrieve collections*

<h3 id="retrieving-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_owner|query|string|false|A wallet address. If specified, will return collections where the owner owns at least one asset belonging to smart contracts in the collection. The number of assets the account owns is shown as `owned_asset_count` for each collection.|
|offset|query|integer(int32)|false|For pagination. Number of contracts offset from the beginning of the result list.|
|limit|query|integer(int32)|false|For pagination. Maximum number of contracts to return.|
|X-API-KEY|header|string|false|Your optional API Key (contact us to request one!)|

> Example responses

> 200

```json
{
  "collection": [
    {
      "banner_image_url": "https://lh3.googleusercontent.com/iUwczcA9bw-JwPIm9jTiOG3b_qK9nqxs_Fn3GXs74pvkBY7toLN2JhgoPgriFS6ivSmcErC7USjZJqLTiQpYuU40kzJLfkfJpPnY=s2500",
      "chat_url": null,
      "created_date": "2021-12-17T01:05:06.570334",
      "default_to_fiat": false,
      "description": "Bored Ape Yacht Club, PUNKS Comic, and gmoney welcome adidas Originals into the Metaverse.",
      "dev_buyer_fee_basis_points": "0",
      "dev_seller_fee_basis_points": "1000",
      "discord_url": "https://discord.gg/invite/pixelvault",
      "display_data": {
        "card_display_style": "cover"
      },
      "external_url": "https://www.adidas.com/into_the_metaverse",
      "featured": false,
      "featured_image_url": "https://lh3.googleusercontent.com/2nK8wyx608AmNkXGGlnAwBk7bQMSXgJJ_M3NCnqz1djHlfwjQTFmHrxKYOGEoC5HIp70P7p3YSljzQIv3qSGHhhCnuaUO2tGQ1gD=s300",
      "hidden": false,
      "image_url": "https://lh3.googleusercontent.com/_wXtGDZ07ZelRfyfqDQkhoTX_feD_w3wdFuJ25z2ZLA1R6GFzuQ2jOGURRS8d7UEJGJd1svd61tZnGRS4zN-VXTUUVmg8Wymt-Uk=s120",
      "instagram_username": "adidasoriginals",
      "is_subject_to_whitelist": false,
      "large_image_url": "https://lh3.googleusercontent.com/2nK8wyx608AmNkXGGlnAwBk7bQMSXgJJ_M3NCnqz1djHlfwjQTFmHrxKYOGEoC5HIp70P7p3YSljzQIv3qSGHhhCnuaUO2tGQ1gD=s300",
      "medium_username": null,
      "name": "adidas Originals Into the Metaverse",
      "only_proxied_transfers": false,
      "opensea_buyer_fee_basis_points": "0",
      "opensea_seller_fee_basis_points": "250",
      "owned_asset_count": 1,
      "payout_address": "0x81e572fe2d89c5e90f68e7040da372543afbab57",
      "primary_asset_contracts": [
        {
          "address": "0x28472a58a490c5e09a238847f66a68a47cc76f0f",
          "asset_contract_type": "semi-fungible",
          "buyer_fee_basis_points": 0,
          "created_date": "2021-12-17T01:04:49.145948",
          "default_to_fiat": false,
          "description": "Bored Ape Yacht Club, PUNKS Comic, and gmoney welcome adidas Originals into the Metaverse.",
          "dev_buyer_fee_basis_points": 0,
          "dev_seller_fee_basis_points": 1000,
          "external_link": "https://www.adidas.com/into_the_metaverse",
          "image_url": "https://lh3.googleusercontent.com/_wXtGDZ07ZelRfyfqDQkhoTX_feD_w3wdFuJ25z2ZLA1R6GFzuQ2jOGURRS8d7UEJGJd1svd61tZnGRS4zN-VXTUUVmg8Wymt-Uk=s120",
          "name": "adidas Originals: Into the Metaverse",
          "nft_version": null,
          "only_proxied_transfers": false,
          "opensea_buyer_fee_basis_points": 0,
          "opensea_seller_fee_basis_points": 250,
          "opensea_version": null,
          "owner": 175532632,
          "payout_address": "0x81e572fe2d89c5e90f68e7040da372543afbab57",
          "schema_name": "ERC1155",
          "seller_fee_basis_points": 1250,
          "symbol": "ADI",
          "total_supply": null
        }
      ],
      "require_email": false,
      "safelist_request_status": "verified",
      "short_description": null,
      "slug": "adidasoriginals",
      "stats": {
        "average_price": 0.756851871714953,
        "count": 1,
        "floor_price": 0,
        "market_cap": 0.873166705288504,
        "num_owners": 21306,
        "num_reports": 2,
        "one_day_average_price": 0.806531100917431,
        "one_day_change": -0.201157573484161,
        "one_day_sales": 109,
        "one_day_volume": 87.91189,
        "seven_day_average_price": 0.873166705288504,
        "seven_day_change": -0.0895652510489594,
        "seven_day_sales": 1261,
        "seven_day_volume": 1101.0632153688,
        "thirty_day_average_price": 0.756851871714945,
        "thirty_day_change": 0,
        "thirty_day_sales": 21792,
        "thirty_day_volume": 16493.3159884121,
        "total_sales": 21792,
        "total_supply": 1,
        "total_volume": 16493.3159884122
      },
      "telegram_url": null,
      "traits": {},
      "twitter_username": "adidasoriginals",
      "wiki_url": null
    }
  ]
}
```

<h3 id="retrieving-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200|Inline|

<h3 id="retrieving-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» collection|[object]|false|none|none|
|»» banner_image_url|string|false|none|none|
|»» chat_url|any|false|none|none|
|»» created_date|string|false|none|none|
|»» default_to_fiat|boolean|false|none|none|
|»» description|string|false|none|none|
|»» dev_buyer_fee_basis_points|string|false|none|none|
|»» dev_seller_fee_basis_points|string|false|none|none|
|»» discord_url|string|false|none|none|
|»» display_data|object|false|none|none|
|»»» card_display_style|string|false|none|none|
|»» external_url|string|false|none|none|
|»» featured|boolean|false|none|none|
|»» featured_image_url|string|false|none|none|
|»» hidden|boolean|false|none|none|
|»» image_url|string|false|none|none|
|»» instagram_username|string|false|none|none|
|»» is_subject_to_whitelist|boolean|false|none|none|
|»» large_image_url|string|false|none|none|
|»» medium_username|any|false|none|none|
|»» name|string|false|none|none|
|»» only_proxied_transfers|boolean|false|none|none|
|»» opensea_buyer_fee_basis_points|string|false|none|none|
|»» opensea_seller_fee_basis_points|string|false|none|none|
|»» owned_asset_count|integer|false|none|none|
|»» payout_address|string|false|none|none|
|»» primary_asset_contracts|[object]|false|none|none|
|»»» address|string|false|none|none|
|»»» asset_contract_type|string|false|none|none|
|»»» buyer_fee_basis_points|integer|false|none|none|
|»»» created_date|string|false|none|none|
|»»» default_to_fiat|boolean|false|none|none|
|»»» description|string|false|none|none|
|»»» dev_buyer_fee_basis_points|integer|false|none|none|
|»»» dev_seller_fee_basis_points|integer|false|none|none|
|»»» external_link|string|false|none|none|
|»»» image_url|string|false|none|none|
|»»» name|string|false|none|none|
|»»» nft_version|any|false|none|none|
|»»» only_proxied_transfers|boolean|false|none|none|
|»»» opensea_buyer_fee_basis_points|integer|false|none|none|
|»»» opensea_seller_fee_basis_points|integer|false|none|none|
|»»» opensea_version|any|false|none|none|
|»»» owner|integer|false|none|none|
|»»» payout_address|string|false|none|none|
|»»» schema_name|string|false|none|none|
|»»» seller_fee_basis_points|integer|false|none|none|
|»»» symbol|string|false|none|none|
|»»» total_supply|any|false|none|none|
|»» require_email|boolean|false|none|none|
|»» safelist_request_status|string|false|none|none|
|»» short_description|any|false|none|none|
|»» slug|string|false|none|none|
|»» stats|object|false|none|none|
|»»» average_price|number|false|none|none|
|»»» count|integer|false|none|none|
|»»» floor_price|integer|false|none|none|
|»»» market_cap|number|false|none|none|
|»»» num_owners|integer|false|none|none|
|»»» num_reports|integer|false|none|none|
|»»» one_day_average_price|number|false|none|none|
|»»» one_day_change|number|false|none|none|
|»»» one_day_sales|integer|false|none|none|
|»»» one_day_volume|number|false|none|none|
|»»» seven_day_average_price|number|false|none|none|
|»»» seven_day_change|number|false|none|none|
|»»» seven_day_sales|integer|false|none|none|
|»»» seven_day_volume|number|false|none|none|
|»»» thirty_day_average_price|number|false|none|none|
|»»» thirty_day_change|integer|false|none|none|
|»»» thirty_day_sales|integer|false|none|none|
|»»» thirty_day_volume|number|false|none|none|
|»»» total_sales|integer|false|none|none|
|»»» total_supply|integer|false|none|none|
|»»» total_volume|number|false|none|none|
|»» telegram_url|any|false|none|none|
|»» traits|object|false|none|none|
|»» twitter_username|string|false|none|none|
|»» wiki_url|any|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## retrieving-a-single-collection

<a id="opIdretrieving-a-single-collection"></a>

> Code samples

```javascript

const headers = {
  'X-API-KEY':'string'
};

fetch('https://api.opensea.io/api/v1/collection/{collection_slug}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /collection/{collection_slug}`

*Retrieve a collection*

<h3 id="retrieving-a-single-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string|false|Your optional API Key (contact us to request one!)|
|collection_slug|path|string|true|The collection slug of this collection that is used to uniquely link to this collection on OpenSea|

<h3 id="retrieving-a-single-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|

<aside class="success">
This operation does not require authentication
</aside>

## retrieving-collection-stats

<a id="opIdretrieving-collection-stats"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'X-API-KEY':'string'
};

fetch('https://api.opensea.io/api/v1/collection/{collection_slug}/stats',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /collection/{collection_slug}/stats`

*Retrieve collection stats*

<h3 id="retrieving-collection-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-API-KEY|header|string|false|Your optional API Key (contact us to request one!)|
|collection_slug|path|string|true|The collection slug|

> Example responses

> 200

```json
null
```

<h3 id="retrieving-collection-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200|None|

<h3 id="retrieving-collection-stats-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## validate-assets

<a id="opIdvalidate-assets"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-API-KEY':'string',
  'X-API-KEY':'API_KEY'
};

fetch('https://api.opensea.io/api/v1/asset/{asset_contract_address}/{token_id}/validate',
{
  method: 'GET',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /asset/{asset_contract_address}/{token_id}/validate`

*Validate an asset*

> Body parameter

```json
{}
```

<h3 id="validate-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_contract_address|path|string|true|Address of the contract for this NFT|
|token_id|path|string|true|Token ID for this item|
|X-API-KEY|header|string|false|none|
|validate|path|string|true|Adding the validate string|
|body|body|any|false|none|

> Example responses

> 200

```json
{
  "listings": [
    {
      "created_date": "2022-02-22T20:18:20.751937",
      "closing_date": "2022-03-01T20:17:54",
      "closing_extendable": false,
      "expiration_time": 1646165874,
      "listing_time": 1645560983,
      "order_hash": "0xe958d6aaa7c80881df87b99ca2b4dbb7511320d203eaf892596d2fcc4bb77ae0",
      "metadata": {
        "asset": {
          "id": "852",
          "address": "0x7470ea065e50e3862cd9b8fb7c77712165da80e5"
        },
        "schema": "ERC721"
      },
      "exchange": "0xdd54d660178b28f6033a953b0e55073cfa7e3744",
      "maker": {
        "user": {
          "username": "aminech-7890olm"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/4.png",
        "address": "0x29ed84080ee0c1590ae1380c41b1300261b00171",
        "config": ""
      },
      "taker": {
        "user": {
          "username": "NullAddress"
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
        "address": "0x0000000000000000000000000000000000000000",
        "config": ""
      },
      "current_price": "15000000000000000000.00000000",
      "current_bounty": "150000000000000000",
      "bounty_multiple": "0.01",
      "maker_relayer_fee": "250",
      "taker_relayer_fee": "0",
      "maker_protocol_fee": "0",
      "taker_protocol_fee": "0",
      "maker_referrer_fee": "0",
      "fee_recipient": {
        "user": {
          "username": null
        },
        "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
        "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
        "config": ""
      },
      "fee_method": 1,
      "side": 1,
      "sale_kind": 0,
      "target": "0x45b594792a5cdc008d0de1c1d69faa3d16b3ddc1",
      "how_to_call": 1,
      "calldata": "0xfb16a59500000000000000000000000029ed84080ee0c1590ae1380c41b1300261b0017100000000000000000000000000000000000000000000000000000000000000000000000000000000000000007470ea065e50e3862cd9b8fb7c77712165da80e50000000000000000000000000000000000000000000000000000000000000354000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000",
      "replacement_pattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "static_target": "0x0000000000000000000000000000000000000000",
      "static_extradata": "0x",
      "payment_token": "0x0000000000000000000000000000000000000000",
      "payment_token_contract": {
        "id": 2,
        "symbol": "ETH",
        "address": "0x0000000000000000000000000000000000000000",
        "image_url": "https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg",
        "name": null,
        "decimals": 18,
        "eth_price": "1.000000000000000",
        "usd_price": "405.649999999999977263"
      },
      "base_price": "15000000000000000000",
      "extra": "0",
      "quantity": "1",
      "salt": "1483016704946104104238999363521197893010432931364052566709160760601145068677",
      "v": 27,
      "r": "0x183f86fb7b61daafa77d7b334673a5c663486cc5f6d60b9a4e72fe35ca7bfb3c",
      "s": "0x1f9484e116ce43a70b268a7db5daf71be1511767e66499dc8d6d0937dabe97f4",
      "approved_on_chain": false,
      "cancelled": false,
      "finalized": false,
      "marked_invalid": false,
      "prefixed_hash": "0x486a261373b93871d6ba6a2932c6eb57feb3d50e235126245a42f8cb61822d6b"
    }
  ]
}
```

> 400

```json
{}
```

<h3 id="validate-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400|Inline|

<h3 id="validate-assets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» listings|[object]|false|none|none|
|»» created_date|string|false|none|none|
|»» closing_date|string|false|none|none|
|»» closing_extendable|boolean|false|none|none|
|»» expiration_time|integer|false|none|none|
|»» listing_time|integer|false|none|none|
|»» order_hash|string|false|none|none|
|»» metadata|object|false|none|none|
|»»» asset|object|false|none|none|
|»»»» id|string|false|none|none|
|»»»» address|string|false|none|none|
|»»» schema|string|false|none|none|
|»» exchange|string|false|none|none|
|»» maker|object|false|none|none|
|»»» user|object|false|none|none|
|»»»» username|string|false|none|none|
|»»» profile_img_url|string|false|none|none|
|»»» address|string|false|none|none|
|»»» config|string|false|none|none|
|»» taker|object|false|none|none|
|»»» user|object|false|none|none|
|»»»» username|string|false|none|none|
|»»» profile_img_url|string|false|none|none|
|»»» address|string|false|none|none|
|»»» config|string|false|none|none|
|»» current_price|string|false|none|none|
|»» current_bounty|string|false|none|none|
|»» bounty_multiple|string|false|none|none|
|»» maker_relayer_fee|string|false|none|none|
|»» taker_relayer_fee|string|false|none|none|
|»» maker_protocol_fee|string|false|none|none|
|»» taker_protocol_fee|string|false|none|none|
|»» maker_referrer_fee|string|false|none|none|
|»» fee_recipient|object|false|none|none|
|»»» user|object|false|none|none|
|»»»» username|any|false|none|none|
|»»» profile_img_url|string|false|none|none|
|»»» address|string|false|none|none|
|»»» config|string|false|none|none|
|»» fee_method|integer|false|none|none|
|»» side|integer|false|none|none|
|»» sale_kind|integer|false|none|none|
|»» target|string|false|none|none|
|»» how_to_call|integer|false|none|none|
|»» calldata|string|false|none|none|
|»» replacement_pattern|string|false|none|none|
|»» static_target|string|false|none|none|
|»» static_extradata|string|false|none|none|
|»» payment_token|string|false|none|none|
|»» payment_token_contract|object|false|none|none|
|»»» id|integer|false|none|none|
|»»» symbol|string|false|none|none|
|»»» address|string|false|none|none|
|»»» image_url|string|false|none|none|
|»»» name|any|false|none|none|
|»»» decimals|integer|false|none|none|
|»»» eth_price|string|false|none|none|
|»»» usd_price|string|false|none|none|
|»» base_price|string|false|none|none|
|»» extra|string|false|none|none|
|»» quantity|string|false|none|none|
|»» salt|string|false|none|none|
|»» v|integer|false|none|none|
|»» r|string|false|none|none|
|»» s|string|false|none|none|
|»» approved_on_chain|boolean|false|none|none|
|»» cancelled|boolean|false|none|none|
|»» finalized|boolean|false|none|none|
|»» marked_invalid|boolean|false|none|none|
|»» prefixed_hash|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
sec0
</aside>

