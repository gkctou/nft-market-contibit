---
title: NFT Market v0.0.1
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

<h1 id="nft-market">NFT Market v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

NFT Market API

Base URLs:

* <a href="http://localhost/api/master/v0">http://localhost/api/master/v0</a>

# Authentication

* API Key (BaseApiKey)
    - Parameter Name: **apikey**, in: header. 

<h1 id="nft-market-base">base</h1>

base api define

## get__base_ping

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/base/ping',
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

`GET /base/ping`

*伺服器作動檢查*

檢查伺服器是否有回應，并取得伺服器時間戳。

<h3 id="get__base_ping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|now|query|integer|false|本地時間戳|

> Example responses

> 200 Response

```json
0
```

<h3 id="get__base_ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|integer|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nft-market-cart">cart</h1>

NFT 購物/上架/匯入車 相關操作

## cartShoppingLoad

<a id="opIdcartShoppingLoad"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/cart/shopping/load',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /cart/shopping/load`

*取得購物車資訊*

取得購物車資訊

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="cartshoppingload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user check|
|» userId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "hash": "string",
  "userId": "string",
  "list": [
    {
      "chainId": 0,
      "contract": "string",
      "collection": "string",
      "id": 0,
      "nftName": "string",
      "shop": "string",
      "currency": "string",
      "price": 0,
      "enable": true
    }
  ],
  "cost": [
    {
      "type": "string",
      "currency": "string",
      "amount": 0
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "balance": 0,
      "enable": true,
      "willPay": 0
    }
  ],
  "payment": [
    {
      "currency": "string",
      "amount": 0,
      "payBy": [
        {
          "currency": "string",
          "used": 0,
          "rate": 0,
          "amount": 0
        }
      ]
    }
  ]
}
```

<h3 id="cartshoppingload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[CartShoppingModel](#schemacartshoppingmodel)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="cartshoppingload-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## cartShoppingSave

<a id="opIdcartShoppingSave"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "list": [
    {
      "chainId": 0,
      "contract": "string",
      "id": 0,
      "shop": "string"
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "enable": true,
      "rate": 0
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/cart/shopping/save',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /cart/shopping/save`

*更新購物車資訊*

更新購物車資訊

> Body parameter

```json
{
  "userId": "string",
  "list": [
    {
      "chainId": 0,
      "contract": "string",
      "id": 0,
      "shop": "string"
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "enable": true,
      "rate": 0
    }
  ]
}
```

<h3 id="cartshoppingsave-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user check|
|» userId|body|string|true|none|
|» list|body|[object]|false|none|
|»» chainId|body|integer|false|none|
|»» contract|body|string|false|none|
|»» id|body|integer|false|none|
|»» shop|body|string|false|none|
|» wallet|body|[object]|false|none|
|»» currency|body|string|false|none|
|»» enable|body|boolean|false|none|
|»» rate|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "hash": "string",
  "userId": "string",
  "list": [
    {
      "chainId": 0,
      "contract": "string",
      "collection": "string",
      "id": 0,
      "nftName": "string",
      "shop": "string",
      "currency": "string",
      "price": 0,
      "enable": true
    }
  ],
  "cost": [
    {
      "type": "string",
      "currency": "string",
      "amount": 0
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "balance": 0,
      "enable": true,
      "willPay": 0
    }
  ],
  "payment": [
    {
      "currency": "string",
      "amount": 0,
      "payBy": [
        {
          "currency": "string",
          "used": 0,
          "rate": 0,
          "amount": 0
        }
      ]
    }
  ]
}
```

<h3 id="cartshoppingsave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[CartShoppingModel](#schemacartshoppingmodel)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="cartshoppingsave-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» hash|string|false|none|none|
|» userId|string|false|none|none|
|» list|string|false|none|none|
|» wallet|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## cartSellingLoad

<a id="opIdcartSellingLoad"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/cart/selling/load',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /cart/selling/load`

*取得上架車資訊*

取得上架車資訊

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="cartsellingload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user check|
|» userId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "hash": "string",
  "userId": "string",
  "list": [
    {
      "chainId": 0,
      "contract": "string",
      "collection": "string",
      "id": 0,
      "nftName": "string",
      "shops": [
        {
          "shop": "string",
          "currency": "string",
          "price": 0,
          "enable": true
        }
      ]
    }
  ],
  "cost": [
    {
      "type": "string",
      "currency": "string",
      "amount": 0
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "balance": 0,
      "enable": true,
      "willPay": 0
    }
  ],
  "payment": [
    {
      "currency": "string",
      "amount": 0,
      "payBy": [
        {
          "currency": "string",
          "used": 0,
          "rate": 0,
          "amount": 0
        }
      ]
    }
  ]
}
```

<h3 id="cartsellingload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[CartSellingModel](#schemacartsellingmodel)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="cartsellingload-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## cartSellingSave

<a id="opIdcartSellingSave"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "list": [
    {
      "chainId": 0,
      "contract": "string",
      "id": 0,
      "shop": "string"
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "enable": true,
      "rate": 0
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/cart/selling/save',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /cart/selling/save`

*更新上架車資訊*

更新上架車資訊

> Body parameter

```json
{
  "userId": "string",
  "list": [
    {
      "chainId": 0,
      "contract": "string",
      "id": 0,
      "shop": "string"
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "enable": true,
      "rate": 0
    }
  ]
}
```

<h3 id="cartsellingsave-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user check|
|» userId|body|string|true|none|
|» list|body|[object]|false|none|
|»» chainId|body|integer|false|none|
|»» contract|body|string|false|none|
|»» id|body|integer|false|none|
|»» shop|body|string|false|none|
|» wallet|body|[object]|false|none|
|»» currency|body|string|false|none|
|»» enable|body|boolean|false|none|
|»» rate|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "hash": "string",
  "userId": "string",
  "list": [
    {
      "chainId": 0,
      "contract": "string",
      "collection": "string",
      "id": 0,
      "nftName": "string",
      "shops": [
        {
          "shop": "string",
          "currency": "string",
          "price": 0,
          "enable": true
        }
      ]
    }
  ],
  "cost": [
    {
      "type": "string",
      "currency": "string",
      "amount": 0
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "balance": 0,
      "enable": true,
      "willPay": 0
    }
  ],
  "payment": [
    {
      "currency": "string",
      "amount": 0,
      "payBy": [
        {
          "currency": "string",
          "used": 0,
          "rate": 0,
          "amount": 0
        }
      ]
    }
  ]
}
```

<h3 id="cartsellingsave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[CartSellingModel](#schemacartsellingmodel)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="cartsellingsave-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» hash|string|false|none|none|
|» userId|string|false|none|none|
|» list|string|false|none|none|
|» wallet|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## cartExportCheck

<a id="opIdcartExportCheck"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "chainId": 0,
  "list": [
    {
      "contract": "string",
      "id": 0
    }
  ],
  "receiver": "string",
  "sign": "string",
  "wallet": [
    {
      "currency": "string",
      "enable": true
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/cart/export/check',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /cart/export/check`

*檢查匯出車内品項及計算匯出手續費*

檢查匯出車内品項及計算匯出手續費

> Body parameter

```json
{
  "userId": "string",
  "chainId": 0,
  "list": [
    {
      "contract": "string",
      "id": 0
    }
  ],
  "receiver": "string",
  "sign": "string",
  "wallet": [
    {
      "currency": "string",
      "enable": true
    }
  ]
}
```

<h3 id="cartexportcheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user check|
|» userId|body|string|true|none|
|» chainId|body|integer|false|none|
|» list|body|[object]|false|none|
|»» contract|body|string|false|contract address|
|»» id|body|integer|false|nft id|
|» receiver|body|string|false|收件人錢包賬號|
|» sign|body|string|false|eip712 簽名證明為錢包持有人|
|» wallet|body|[object]|false|none|
|»» currency|body|string|false|none|
|»» enable|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "chainId": 0,
  "list": [
    {
      "contract": "string",
      "id": 0,
      "transfer": "string"
    }
  ],
  "cost": [
    {
      "type": "string",
      "currency": "string",
      "amount": 0
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "balance": 0,
      "enable": true,
      "willPay": 0
    }
  ],
  "payment": [
    {
      "currency": "string",
      "amount": 0,
      "payBy": [
        {
          "currency": "string",
          "used": 0,
          "rate": 0,
          "amount": 0
        }
      ]
    }
  ]
}
```

<h3 id="cartexportcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="cartexportcheck-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|true|none|none|
|» chainId|integer|false|none|none|
|» list|[object]|false|none|none|
|»» contract|string|false|none|contract address|
|»» id|integer|false|none|nft id|
|»» transfer|string|false|none|目標匯入賬號地址|
|» cost|[object]|false|none|none|
|»» type|string|false|none|gas / price / fee|
|»» currency|string|false|none|none|
|»» amount|number|false|none|none|
|» wallet|[object]|false|none|none|
|»» currency|string|false|none|none|
|»» balance|number|false|none|none|
|»» enable|boolean|false|none|none|
|»» willPay|number|false|none|none|
|» payment|[object]|false|none|none|
|»» currency|string|false|none|none|
|»» amount|number|false|none|none|
|»» payBy|[object]|false|none|none|
|»»» currency|string|false|none|none|
|»»» used|number|false|none|none|
|»»» rate|number|false|none|none|
|»»» amount|number|false|none|none|

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» chainId|string|false|none|none|
|» userId|string|false|none|none|
|» list|string|false|none|none|
|» sender|string|false|none|none|
|» sign|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## cartImportRegister

<a id="opIdcartImportRegister"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "chainId": 0,
  "list": [
    {
      "contract": "string",
      "id": 0
    }
  ],
  "sender": "string",
  "sign": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/cart/import/register',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /cart/import/register`

*注冊NFT匯入並取得匯入錢包賬號*

注冊NFT匯入並取得匯入錢包賬號

> Body parameter

```json
{
  "userId": "string",
  "chainId": 0,
  "list": [
    {
      "contract": "string",
      "id": 0
    }
  ],
  "sender": "string",
  "sign": "string"
}
```

<h3 id="cartimportregister-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user check|
|» userId|body|string|true|none|
|» chainId|body|integer|false|none|
|» list|body|[object]|false|none|
|»» contract|body|string|false|contract address|
|»» id|body|integer|false|nft id|
|» sender|body|string|false|匯入錢包賬號|
|» sign|body|string|false|eip712 簽名證明為錢包持有人|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "chainId": 0,
  "list": [
    {
      "contract": "string",
      "id": 0,
      "transfer": "string"
    }
  ]
}
```

<h3 id="cartimportregister-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="cartimportregister-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|true|none|none|
|» chainId|integer|false|none|none|
|» list|[object]|false|none|none|
|»» contract|string|false|none|contract address|
|»» id|integer|false|none|nft id|
|»» transfer|string|false|none|目標匯入賬號地址|

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» chainId|string|false|none|none|
|» userId|string|false|none|none|
|» list|string|false|none|none|
|» sender|string|false|none|none|
|» sign|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

<h1 id="nft-market-catagory">catagory</h1>

NFT 集合查詢

## catagoryQuery

<a id="opIdcatagoryQuery"></a>

> Code samples

```javascript
const inputBody = '{
  "keyword": "string",
  "catagory": "string",
  "offset": 0,
  "limit": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/catagory/query',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /catagory/query`

*查詢/搜尋NFT集合清單.*

空查詢時各分類導入固定數量,
關鍵字回傳固定使用名稱排序.
關鍵字查詢使用 Moralis.
分類索引使用系統資料庫.

> Body parameter

```json
{
  "keyword": "string",
  "catagory": "string",
  "offset": 0,
  "limit": 0
}
```

<h3 id="catagoryquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» keyword|body|string|false|關鍵字查詢|
|» catagory|body|string|false|分類查詢|
|» offset|body|integer|false|起始位置|
|» limit|body|integer|false|單頁數量|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "offset": 0,
  "list": [
    {
      "nftId": "string",
      "imgUrl": "string",
      "name": "string",
      "catagory": "catagory.hot",
      "chainId": 0,
      "contract": "string"
    }
  ]
}
```

<h3 id="catagoryquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="catagoryquery-responseschema">Response Schema</h3>

Status Code **200**

*NFT 集合回傳物件*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» total|integer|false|none|查詢結果總數|
|» offset|integer|false|none|回傳起始位置|
|» list|[object]|false|none|none|
|»» nftId|string|false|none|資料庫 NFT ID|
|»» imgUrl|string|false|none|none|
|»» name|string|false|none|none|
|»» catagory|string|false|none|none|
|»» chainId|integer|false|none|none|
|»» contract|string|false|none|NFT 合約地址|

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» catagory|string|false|none|none|
|» keyword|string|false|none|none|
|» offset|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nft-market-collection">collection</h1>

NFT 系列查詢

## collectionQuery

<a id="opIdcollectionQuery"></a>

> Code samples

```javascript
const inputBody = '{
  "chainId": 0,
  "contract": "string",
  "offset": 0,
  "limit": 0,
  "filter": {
    "idStart": 0,
    "idEnd": 0,
    "rarityStart": 0,
    "rarityEnd": 0,
    "buyNow": true,
    "shops": [
      "string"
    ],
    "attributes": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "sort": {
    "price": "string",
    "rarity": "string",
    "id": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/collection/query',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /collection/query`

*查詢/搜尋NFT系列清單.*

查詢NFT集合

> Body parameter

```json
{
  "chainId": 0,
  "contract": "string",
  "offset": 0,
  "limit": 0,
  "filter": {
    "idStart": 0,
    "idEnd": 0,
    "rarityStart": 0,
    "rarityEnd": 0,
    "buyNow": true,
    "shops": [
      "string"
    ],
    "attributes": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "sort": {
    "price": "string",
    "rarity": "string",
    "id": "string"
  }
}
```

<h3 id="collectionquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chainId|body|integer|false|公鏈ID|
|» contract|body|string|false|NFT合約地址|
|» offset|body|integer|false|起始位置|
|» limit|body|integer|false|單頁數量|
|» filter|body|object|false|none|
|»» idStart|body|integer|false|none|
|»» idEnd|body|integer|false|none|
|»» rarityStart|body|integer|false|none|
|»» rarityEnd|body|integer|false|none|
|»» buyNow|body|boolean|false|none|
|»» shops|body|[string]|false|none|
|»» attributes|body|[object]|false|none|
|»»» key|body|string|false|none|
|»»» value|body|string|false|none|
|» sort|body|object|false|none|
|»» price|body|string|false|asc | des|
|»» rarity|body|string|false|asc | des|
|»» id|body|string|false|asc | des|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "offset": 0,
  "rarity": [
    {
      "key": "string",
      "values": [
        "string"
      ]
    }
  ],
  "idMin": 0,
  "idMax": 0,
  "rarityMin": 0,
  "rarityMax": 0,
  "totalSupply": 0,
  "floorPrice": 0,
  "chainId": 0,
  "contract": "string",
  "name": "string",
  "symbol": "string",
  "description": "string",
  "chainOn": 0,
  "nftId": "string",
  "catagories": [
    "string"
  ],
  "list": [
    {
      "id": 0,
      "rarity": 0,
      "attrubutes": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "imgUrl": "string",
      "name": "string",
      "shops": [
        {
          "buyNow": true,
          "currency": "string",
          "price": 0
        }
      ]
    }
  ]
}
```

<h3 id="collectionquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="collectionquery-responseschema">Response Schema</h3>

Status Code **200**

*NFT 系列回傳物件*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» total|integer|false|none|查詢結果總數|
|» offset|integer|false|none|回傳起始位置|
|» rarity|[object]|false|none|稀有度資料|
|»» key|string|false|none|none|
|»» values|[string]|false|none|none|
|» idMin|integer|false|none|none|
|» idMax|integer|false|none|none|
|» rarityMin|integer|false|none|none|
|» rarityMax|integer|false|none|none|
|» totalSupply|integer|false|none|none|
|» floorPrice|number|false|none|none|
|» chainId|integer|false|none|none|
|» contract|string|false|none|none|
|» name|string|false|none|none|
|» symbol|string|false|none|none|
|» description|string|false|none|none|
|» chainOn|integer|false|none|部署上鏈時間|
|» nftId|string|false|none|資料庫 NFT ID|
|» catagories|[string]|false|none|none|
|» list|[object]|false|none|none|
|»» id|integer|false|none|none|
|»» rarity|integer|false|none|none|
|»» attrubutes|[object]|false|none|none|
|»»» key|string|false|none|none|
|»»» value|string|false|none|none|
|»» imgUrl|string|false|none|none|
|»» name|string|false|none|none|
|»» shops|[object]|false|none|none|
|»»» buyNow|boolean|false|none|none|
|»»» currency|string|false|none|none|
|»»» price|number|false|none|none|

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» chainId|string|false|none|none|
|» contract|string|false|none|none|
|» offset|string|false|none|none|
|» limit|string|false|none|none|
|» filter|string|false|none|none|
|» sort|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## collectionMember

<a id="opIdcollectionMember"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "offset": 0,
  "limit": 0,
  "filter": {
    "chainId": 0,
    "contract": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/collection/member',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /collection/member`

*查詢我的NFT清單.*

查詢我的NFT集合

> Body parameter

```json
{
  "userId": "string",
  "offset": 0,
  "limit": 0,
  "filter": {
    "chainId": 0,
    "contract": "string"
  }
}
```

<h3 id="collectionmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» userId|body|string|true|member ID|
|» offset|body|integer|false|起始位置|
|» limit|body|integer|false|單頁數量|
|» filter|body|object|false|none|
|»» chainId|body|integer|false|none|
|»» contract|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "chains": [
    {
      "chainId": 0,
      "contract": "string",
      "name": "string"
    }
  ],
  "total": 0,
  "offset": 0,
  "list": [
    {
      "id": 0,
      "rarity": 0,
      "attrubutes": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "imgUrl": "string",
      "name": "string",
      "shops": [
        {
          "currency": "string",
          "price": 0
        }
      ],
      "chainId": 0,
      "contract": "string",
      "collection": "string",
      "symbol": "string"
    }
  ]
}
```

<h3 id="collectionmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="collectionmember-responseschema">Response Schema</h3>

Status Code **200**

*NFT 系列回傳物件*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|
|» chains|[object]|false|none|公鏈及NFT合約地址|
|»» chainId|integer|false|none|none|
|»» contract|string|false|none|none|
|»» name|string|false|none|none|
|» total|integer|false|none|查詢結果總數|
|» offset|integer|false|none|回傳起始位置|
|» list|[object]|false|none|none|
|»» id|integer|false|none|none|
|»» rarity|integer|false|none|none|
|»» attrubutes|[object]|false|none|none|
|»»» key|string|false|none|none|
|»»» value|string|false|none|none|
|»» imgUrl|string|false|none|none|
|»» name|string|false|none|none|
|»» shops|[object]|false|none|none|
|»»» currency|string|false|none|none|
|»»» price|number|false|none|none|
|»» chainId|integer|false|none|none|
|»» contract|string|false|none|none|
|»» collection|string|false|none|none|
|»» symbol|string|false|none|none|

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|
|» offset|string|false|none|none|
|» filter|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## collectionSelling

<a id="opIdcollectionSelling"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "offset": 0,
  "limit": 0,
  "filter": {
    "chainId": 0,
    "contract": "string",
    "shops": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/collection/selling',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /collection/selling`

*查詢已上架NFT清單.*

查詢已上架NFT集合

> Body parameter

```json
{
  "userId": "string",
  "offset": 0,
  "limit": 0,
  "filter": {
    "chainId": 0,
    "contract": "string",
    "shops": "string"
  }
}
```

<h3 id="collectionselling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» userId|body|string|true|member ID|
|» offset|body|integer|false|起始位置|
|» limit|body|integer|false|單頁數量|
|» filter|body|object|false|none|
|»» chainId|body|integer|false|none|
|»» contract|body|string|false|none|
|»» shops|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "chains": [
    {
      "chainId": 0,
      "contract": "string",
      "name": "string"
    }
  ],
  "shops": [
    "string"
  ],
  "total": 0,
  "offset": 0,
  "list": [
    {
      "id": 0,
      "rarity": 0,
      "imgUrl": "string",
      "name": "string",
      "shop": "string",
      "chainId": 0,
      "contract": "string",
      "collection": "string",
      "symbol": "string",
      "invoiceId": "string"
    }
  ]
}
```

<h3 id="collectionselling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="collectionselling-responseschema">Response Schema</h3>

Status Code **200**

*NFT 系列回傳物件*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|
|» chains|[object]|false|none|公鏈及NFT合約地址|
|»» chainId|integer|false|none|none|
|»» contract|string|false|none|none|
|»» name|string|false|none|none|
|» shops|[string]|false|none|none|
|» total|integer|false|none|查詢結果總數|
|» offset|integer|false|none|回傳起始位置|
|» list|[object]|false|none|none|
|»» id|integer|false|none|none|
|»» rarity|integer|false|none|none|
|»» imgUrl|string|false|none|none|
|»» name|string|false|none|none|
|»» shop|string|false|none|none|
|»» chainId|integer|false|none|none|
|»» contract|string|false|none|none|
|»» collection|string|false|none|none|
|»» symbol|string|false|none|none|
|»» invoiceId|string|false|none|none|

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|
|» offset|string|false|none|none|
|» filter|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nft-market-guest">guest</h1>

未登入使用者操作界面

## guestRegisterByPhone

<a id="opIdguestRegisterByPhone"></a>

> Code samples

```javascript
const inputBody = '{
  "email": "string",
  "emailVerify": "string",
  "phone": "string",
  "phoneVerify": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/guest/register/phone',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /guest/register/phone`

Register a new user by phone.

> Body parameter

```json
{
  "email": "string",
  "emailVerify": "string",
  "phone": "string",
  "phoneVerify": "string",
  "password": "string"
}
```

<h3 id="guestregisterbyphone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Register informations|
|» email|body|string|true|none|
|» emailVerify|body|string|true|none|
|» phone|body|string|true|none|
|» phoneVerify|body|string|true|none|
|» password|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "token": "string"
}
```

<h3 id="guestregisterbyphone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Auth token.|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|注冊資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="guestregisterbyphone-responseschema">Response Schema</h3>

Status Code **200**

*Login token*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|true|none|none|
|» token|string|true|none|none|

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» email|string|false|none|none|
|» emailVerify|string|false|none|none|
|» phone|string|false|none|none|
|» phoneVerify|string|false|none|none|
|» password|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## guestLoginByPassword

<a id="opIdguestLoginByPassword"></a>

> Code samples

```javascript
const inputBody = '{
  "account": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/guest/login/password',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /guest/login/password`

Login by email and password.

> Body parameter

```json
{
  "account": "string",
  "password": "string"
}
```

<h3 id="guestloginbypassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Login fields|
|» account|body|string|true|email|
|» password|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "token": "string"
}
```

<h3 id="guestloginbypassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Auth token.|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|登入資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="guestloginbypassword-responseschema">Response Schema</h3>

Status Code **200**

*Login token*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|true|none|none|
|» token|string|true|none|none|

Status Code **401**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» account|string|false|none|none|
|» password|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## guestVerifyEmail

<a id="opIdguestVerifyEmail"></a>

> Code samples

```javascript
const inputBody = '{
  "email": "string",
  "lang": "en-US"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/guest/verify/email',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /guest/verify/email`

寄發電子郵件檢查碼信件

> Body parameter

```json
{
  "email": "string",
  "lang": "en-US"
}
```

<h3 id="guestverifyemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|true|none|
|» lang|body|string|false|none|

> Example responses

> 200 Response

```json
1653502991840
```

<h3 id="guestverifyemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="guestverifyemail-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» email|string|false|none|none|
|» time|integer|false|none|下次可執行時間|

<aside class="success">
This operation does not require authentication
</aside>

## guestVerifyPhone

<a id="opIdguestVerifyPhone"></a>

> Code samples

```javascript
const inputBody = '{
  "phone": 886987654321,
  "lang": "en-US"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/guest/verify/phone',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /guest/verify/phone`

寄發手機檢查碼簡訊

> Body parameter

```json
{
  "phone": 886987654321,
  "lang": "en-US"
}
```

<h3 id="guestverifyphone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» phone|body|string|true|none|
|» lang|body|string|false|none|

> Example responses

> 200 Response

```json
1653502991840
```

<h3 id="guestverifyphone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="guestverifyphone-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» phone|string|false|none|none|
|» time|integer|false|none|下次可執行時間|

<aside class="success">
This operation does not require authentication
</aside>

## guestResetPassword

<a id="opIdguestResetPassword"></a>

> Code samples

```javascript
const inputBody = '{
  "email": "string",
  "emailVerify": "string",
  "phoneVerify": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/guest/reset/password',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /guest/reset/password`

Reset member password

> Body parameter

```json
{
  "email": "string",
  "emailVerify": "string",
  "phoneVerify": "string",
  "password": "string"
}
```

<h3 id="guestresetpassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Reset informations|
|» email|body|string|true|none|
|» emailVerify|body|string|true|none|
|» phoneVerify|body|string|true|none|
|» password|body|string|true|none|

> Example responses

> 403 Response

```json
{
  "email": "api.guest.register.error.email.format",
  "emailVerify": "api.guest.register.error.emailVerify.notMatch",
  "phoneVerify": "api.guest.register.error.phoneVerify.overTime",
  "password": "api.guest.register.error.password.minLength8"
}
```

<h3 id="guestresetpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK --> renew token salt(logout all devices) --> 導向登入頁|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|注冊資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="guestresetpassword-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» email|string|false|none|none|
|» emailVerify|string|false|none|none|
|» phoneVerify|string|false|none|none|
|» password|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## guestVerifyAccountPhone

<a id="opIdguestVerifyAccountPhone"></a>

> Code samples

```javascript
const inputBody = '{
  "email": "string",
  "lang": "en-US"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost/api/master/v0/guest/verify/account/phone',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /guest/verify/account/phone`

依帳號關聯手機號碼寄發檢查碼簡訊

> Body parameter

```json
{
  "email": "string",
  "lang": "en-US"
}
```

<h3 id="guestverifyaccountphone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|true|none|
|» lang|body|string|false|none|

> Example responses

> 200 Response

```json
1653502991840
```

<h3 id="guestverifyaccountphone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="guestverifyaccountphone-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» email|string|false|none|none|
|» time|integer|false|none|下次可執行時間|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nft-market-invoice">invoice</h1>

購物/上架/提領 訂單處理相關操作

## invoiceShoppingCreate

<a id="opIdinvoiceShoppingCreate"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "cartHash": "string",
  "lang": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/invoice/shopping/create',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /invoice/shopping/create`

*建立購物車交易訂單*

建立購物車交易訂單

> Body parameter

```json
{
  "userId": "string",
  "cartHash": "string",
  "lang": "string"
}
```

<h3 id="invoiceshoppingcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|shopping order|
|» userId|body|string|true|none|
|» cartHash|body|string|false|none|
|» lang|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "invoiceType": "string",
  "invoiceId": "string",
  "status": "success",
  "createOn": 0,
  "jobs": [
    {
      "jobType": "string",
      "jobId": "string",
      "data": {},
      "status": "success",
      "finishOn": 0,
      "description": "string"
    }
  ]
}
```

<h3 id="invoiceshoppingcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[InvoiceStatus](#schemainvoicestatus)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="invoiceshoppingcreate-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|
|» cartHash|string|false|none|none|
|» lang|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## invoiceCheck

<a id="opIdinvoiceCheck"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "invoiceType": "string",
  "invoiceId": "string",
  "lang": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/invoice/check',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /invoice/check`

*查詢訂單資訊*

查詢訂單資訊

> Body parameter

```json
{
  "userId": "string",
  "invoiceType": "string",
  "invoiceId": "string",
  "lang": "string"
}
```

<h3 id="invoicecheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user check|
|» userId|body|string|true|none|
|» invoiceType|body|string|false|shopping / selling / export / mint|
|» invoiceId|body|string|false|none|
|» lang|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "invoiceType": "string",
  "invoiceId": "string",
  "status": "success",
  "createOn": 0,
  "jobs": [
    {
      "jobType": "string",
      "jobId": "string",
      "data": {},
      "status": "success",
      "finishOn": 0,
      "description": "string"
    }
  ]
}
```

<h3 id="invoicecheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[InvoiceStatus](#schemainvoicestatus)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="invoicecheck-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## invoiceSellingCreate

<a id="opIdinvoiceSellingCreate"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "cartHash": "string",
  "lang": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/invoice/selling/create',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /invoice/selling/create`

*建立上架車交易訂單*

建立上架車交易訂單

> Body parameter

```json
{
  "userId": "string",
  "cartHash": "string",
  "lang": "string"
}
```

<h3 id="invoicesellingcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|shopping order|
|» userId|body|string|true|none|
|» cartHash|body|string|false|none|
|» lang|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "invoiceType": "string",
  "invoiceId": "string",
  "status": "success",
  "createOn": 0,
  "jobs": [
    {
      "jobType": "string",
      "jobId": "string",
      "data": {},
      "status": "success",
      "finishOn": 0,
      "description": "string"
    }
  ]
}
```

<h3 id="invoicesellingcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[InvoiceStatus](#schemainvoicestatus)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="invoicesellingcreate-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|
|» cartHash|string|false|none|none|
|» lang|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## invoiceSellingCancel

<a id="opIdinvoiceSellingCancel"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "invoiceId": "string",
  "chainId": 0,
  "contract": "string",
  "id": "string",
  "shop": "string",
  "payable": {
    "cost": [
      {
        "type": "string",
        "currency": "string",
        "amount": 0
      }
    ],
    "wallet": [
      {
        "currency": "string",
        "enable": true
      }
    ],
    "payment": [
      {
        "currency": "string",
        "amount": 0,
        "payBy": [
          {
            "currency": "string",
            "used": 0,
            "rate": 0,
            "amount": 0
          }
        ]
      }
    ]
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/invoice/selling/cancel',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /invoice/selling/cancel`

*取消單一NFT上架訂單*

取消單一NFT上架訂單

> Body parameter

```json
{
  "userId": "string",
  "invoiceId": "string",
  "chainId": 0,
  "contract": "string",
  "id": "string",
  "shop": "string",
  "payable": {
    "cost": [
      {
        "type": "string",
        "currency": "string",
        "amount": 0
      }
    ],
    "wallet": [
      {
        "currency": "string",
        "enable": true
      }
    ],
    "payment": [
      {
        "currency": "string",
        "amount": 0,
        "payBy": [
          {
            "currency": "string",
            "used": 0,
            "rate": 0,
            "amount": 0
          }
        ]
      }
    ]
  }
}
```

<h3 id="invoicesellingcancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|cancel selling order|
|» userId|body|string|true|none|
|» invoiceId|body|string|false|none|
|» chainId|body|number|false|none|
|» contract|body|string|false|none|
|» id|body|string|false|none|
|» shop|body|string|false|none|
|» payable|body|object|false|none|
|»» cost|body|[object]|false|none|
|»»» type|body|string|false|gas / price / fee|
|»»» currency|body|string|false|none|
|»»» amount|body|number|false|none|
|»» wallet|body|[object]|false|none|
|»»» currency|body|string|false|none|
|»»» enable|body|boolean|false|none|
|»» payment|body|[object]|false|none|
|»»» currency|body|string|false|none|
|»»» amount|body|number|false|none|
|»»» payBy|body|[object]|false|none|
|»»»» currency|body|string|false|none|
|»»»» used|body|number|false|none|
|»»»» rate|body|number|false|none|
|»»»» amount|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "invoiceType": "string",
  "invoiceId": "string",
  "status": "success",
  "createOn": 0,
  "jobs": [
    {
      "jobType": "string",
      "jobId": "string",
      "data": {},
      "status": "success",
      "finishOn": 0,
      "description": "string"
    }
  ]
}
```

<h3 id="invoicesellingcancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[InvoiceStatus](#schemainvoicestatus)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="invoicesellingcancel-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|
|» cartHash|string|false|none|none|
|» lang|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## invoiceSellingCancelCost

<a id="opIdinvoiceSellingCancelCost"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "invoiceId": "string",
  "chainId": 0,
  "contract": "string",
  "id": "string",
  "shop": "string",
  "wallet": [
    {
      "currency": "string",
      "enable": true
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/invoice/selling/cancel/cost',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /invoice/selling/cancel/cost`

*查詢取消單一NFT上架費用*

查詢取消單一NFT上架費用

> Body parameter

```json
{
  "userId": "string",
  "invoiceId": "string",
  "chainId": 0,
  "contract": "string",
  "id": "string",
  "shop": "string",
  "wallet": [
    {
      "currency": "string",
      "enable": true
    }
  ]
}
```

<h3 id="invoicesellingcancelcost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» userId|body|string|true|none|
|» invoiceId|body|string|true|none|
|» chainId|body|number|true|none|
|» contract|body|string|true|none|
|» id|body|string|true|none|
|» shop|body|string|true|none|
|» wallet|body|[object]|false|none|
|»» currency|body|string|false|none|
|»» enable|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "cost": [
    {
      "type": "string",
      "currency": "string",
      "amount": 0
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "enable": true,
      "balance": 0
    }
  ],
  "payment": [
    {
      "currency": "string",
      "amount": 0,
      "payBy": [
        {
          "currency": "string",
          "used": 0,
          "rate": 0,
          "amount": 0
        }
      ]
    }
  ]
}
```

<h3 id="invoicesellingcancelcost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="invoicesellingcancelcost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» cost|[object]|false|none|none|
|»» type|string|false|none|gas / price / fee|
|»» currency|string|false|none|none|
|»» amount|number|false|none|none|
|» wallet|[object]|false|none|none|
|»» currency|string|false|none|none|
|»» enable|boolean|false|none|none|
|»» balance|number|false|none|none|
|» payment|[object]|false|none|none|
|»» currency|string|false|none|none|
|»» amount|number|false|none|none|
|»» payBy|[object]|false|none|none|
|»»» currency|string|false|none|none|
|»»» used|number|false|none|none|
|»»» rate|number|false|none|none|
|»»» amount|number|false|none|none|

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|
|» cartHash|string|false|none|none|
|» lang|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## invoiceExportCreate

<a id="opIdinvoiceExportCreate"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "chainId": 0,
  "list": [
    {
      "contract": "string",
      "id": 0
    }
  ],
  "receiver": "string",
  "sign": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/invoice/export/create',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /invoice/export/create`

*建立NFT匯出訂單*

建立NFT匯出訂單

> Body parameter

```json
{
  "userId": "string",
  "chainId": 0,
  "list": [
    {
      "contract": "string",
      "id": 0
    }
  ],
  "receiver": "string",
  "sign": "string"
}
```

<h3 id="invoiceexportcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user check|
|» userId|body|string|true|none|
|» chainId|body|integer|false|none|
|» list|body|[object]|false|none|
|»» contract|body|string|false|contract address|
|»» id|body|integer|false|nft id|
|» receiver|body|string|false|匯出錢包賬號|
|» sign|body|string|false|eip712 簽名證明為錢包持有人(可選)|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "invoiceType": "string",
  "invoiceId": "string",
  "status": "success",
  "createOn": 0,
  "jobs": [
    {
      "jobType": "string",
      "jobId": "string",
      "data": {},
      "status": "success",
      "finishOn": 0,
      "description": "string"
    }
  ]
}
```

<h3 id="invoiceexportcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[InvoiceStatus](#schemainvoicestatus)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="invoiceexportcreate-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» chainId|string|false|none|none|
|» userId|string|false|none|none|
|» list|string|false|none|none|
|» importer|string|false|none|none|
|» sign|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## invoiceMintCreate

<a id="opIdinvoiceMintCreate"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "mintId": "string",
  "quantity": 0,
  "payable": {
    "cost": [
      {
        "type": "string",
        "currency": "string",
        "amount": 0
      }
    ],
    "wallet": [
      {
        "currency": "string",
        "enable": true
      }
    ],
    "payment": [
      {
        "currency": "string",
        "amount": 0,
        "payBy": [
          {
            "currency": "string",
            "used": 0,
            "rate": 0,
            "amount": 0
          }
        ]
      }
    ]
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/invoice/mint/create',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /invoice/mint/create`

*建立NFT鑄造訂單*

建立NFT鑄造訂單

> Body parameter

```json
{
  "userId": "string",
  "mintId": "string",
  "quantity": 0,
  "payable": {
    "cost": [
      {
        "type": "string",
        "currency": "string",
        "amount": 0
      }
    ],
    "wallet": [
      {
        "currency": "string",
        "enable": true
      }
    ],
    "payment": [
      {
        "currency": "string",
        "amount": 0,
        "payBy": [
          {
            "currency": "string",
            "used": 0,
            "rate": 0,
            "amount": 0
          }
        ]
      }
    ]
  }
}
```

<h3 id="invoicemintcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user check|
|» userId|body|string|true|none|
|» mintId|body|string|true|資料庫内 mint 按鈕 widget ID|
|» quantity|body|integer|false|鑄造數量|
|» payable|body|object|false|none|
|»» cost|body|[object]|false|none|
|»»» type|body|string|false|gas / price / fee|
|»»» currency|body|string|false|none|
|»»» amount|body|number|false|none|
|»» wallet|body|[object]|false|none|
|»»» currency|body|string|false|none|
|»»» enable|body|boolean|false|none|
|»» payment|body|[object]|false|none|
|»»» currency|body|string|false|none|
|»»» amount|body|number|false|none|
|»»» payBy|body|[object]|false|none|
|»»»» currency|body|string|false|none|
|»»»» used|body|number|false|none|
|»»»» rate|body|number|false|none|
|»»»» amount|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "invoiceType": "string",
  "invoiceId": "string",
  "status": "success",
  "createOn": 0,
  "jobs": [
    {
      "jobType": "string",
      "jobId": "string",
      "data": {},
      "status": "success",
      "finishOn": 0,
      "description": "string"
    }
  ]
}
```

<h3 id="invoicemintcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[InvoiceStatus](#schemainvoicestatus)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="invoicemintcreate-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|
|» collectionId|string|false|none|none|
|» mintId|string|false|none|none|
|» cost|string|false|none|none|
|» wallet|string|false|none|none|
|» payment|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

<h1 id="nft-market-member">member</h1>

已登入使用者操作界面

## memberInfo

<a id="opIdmemberInfo"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/member/info',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /member/info`

check and renew auth token

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="memberinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user id|
|» userId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "email": "string",
  "level": 0
}
```

<h3 id="memberinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|會員基本資料|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|登入資訊錯誤|None|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="memberinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» userId|string|false|none|none|
|» email|string|false|none|none|
|» level|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## memberVerifyPhone

<a id="opIdmemberVerifyPhone"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "lang": "en-US"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/member/verify/phone',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /member/verify/phone`

send SMS to member phone for verify code

> Body parameter

```json
{
  "userId": "string",
  "lang": "en-US"
}
```

<h3 id="memberverifyphone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user id|
|» userId|body|string|true|none|
|» lang|body|string|false|none|

> Example responses

> 200 Response

```json
1653502991840
```

<h3 id="memberverifyphone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|integer|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|登入資訊錯誤|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="memberverifyphone-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» time|integer|false|none|此錯誤代表尚未到達可再次送出時間|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## memberVerifyEmail

<a id="opIdmemberVerifyEmail"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "lang": "en-US"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/member/verify/email',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /member/verify/email`

寄發電子郵件檢查碼信件

> Body parameter

```json
{
  "userId": "string",
  "lang": "en-US"
}
```

<h3 id="memberverifyemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» userId|body|string|true|none|
|» lang|body|string|false|none|

> Example responses

> 200 Response

```json
1653502991840
```

<h3 id="memberverifyemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="memberverifyemail-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» time|integer|false|none|下次可執行時間|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## memberResetPhone

<a id="opIdmemberResetPhone"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "password": "string",
  "emailVerify": "string",
  "phone": "string",
  "phoneVerify": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/member/reset/phone',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /member/reset/phone`

重設連結手機號碼

> Body parameter

```json
{
  "userId": "string",
  "password": "string",
  "emailVerify": "string",
  "phone": "string",
  "phoneVerify": "string"
}
```

<h3 id="memberresetphone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user id|
|» userId|body|string|true|none|
|» password|body|string|true|none|
|» emailVerify|body|string|true|email 驗證碼|
|» phone|body|string|true|新手機號碼|
|» phoneVerify|body|string|true|使用 guestVerifyPhone 送出之手機驗證碼|

> Example responses

> 403 Response

```json
{
  "emailVerify": "api.member.reset.phone.error.emailVerify.notMatch",
  "phone": "api.member.reset.phone.error.phone.exist",
  "phoneVerify": "api.member.reset.phone.error.phoneVerify.notMatch",
  "password": "api.member.reset.phone.error.password.notMatch"
}
```

<h3 id="memberresetphone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK --> renew token salt(logout all devices)|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|登入資訊錯誤|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="memberresetphone-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» emailVerify|string|false|none|none|
|» phone|string|false|none|none|
|» phoneVerify|string|false|none|none|
|» password|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## memberResetPassword

<a id="opIdmemberResetPassword"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "emailVerify": "string",
  "phoneVerify": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/member/reset/password',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /member/reset/password`

Reset member password

> Body parameter

```json
{
  "userId": "string",
  "emailVerify": "string",
  "phoneVerify": "string",
  "password": "string"
}
```

<h3 id="memberresetpassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Reset informations|
|» userId|body|string|true|none|
|» emailVerify|body|string|true|none|
|» phoneVerify|body|string|true|none|
|» password|body|string|true|none|

> Example responses

> 403 Response

```json
{
  "email": "api.member.reset.password.error.email.format",
  "emailVerify": "api.member.reset.password.error.emailVerify.notMatch",
  "phoneVerify": "api.member.reset.password.error.phoneVerify.overTime",
  "password": "api.member.reset.password.error.password.minLength8"
}
```

<h3 id="memberresetpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK --> renew token salt(logout all devices)|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|注冊資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="memberresetpassword-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» email|string|false|none|none|
|» emailVerify|string|false|none|none|
|» phoneVerify|string|false|none|none|
|» password|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

<h1 id="nft-market-wallet">wallet</h1>

使用者錢包操作

## walletBalance

<a id="opIdwalletBalance"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/wallet/balance',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /wallet/balance`

wallet balance

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="walletbalance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user id|
|» userId|body|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "currency": "ETH",
    "symbol": "Ξ",
    "decimal": 4,
    "balance": 0,
    "lock": 0
  }
]
```

<h3 id="walletbalance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|錢包餘額|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|登入資訊錯誤|None|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="walletbalance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» currency|string|false|none|虛擬貨幣名稱|
|» symbol|string|false|none|貨幣標識符|
|» decimal|integer|false|none|小數位數|
|» balance|number|false|none|可動用餘額|
|» lock|number|false|none|鎖倉金額|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## walletHistory

<a id="opIdwalletHistory"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "offset": 0,
  "limit": 20
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/wallet/history',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /wallet/history`

分頁拉取用戶存提幣記錄

> Body parameter

```json
{
  "userId": "string",
  "offset": 0,
  "limit": 20
}
```

<h3 id="wallethistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» userId|body|string|true|none|
|» offset|body|integer|false|起始資料位置索引(0 base)|
|» limit|body|integer|false|每頁個數|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "offset": 0,
  "list": [
    {
      "id": "string",
      "time": 0,
      "currency": "ETH",
      "symbol": "Ξ",
      "decimal": 4,
      "from": "string",
      "into": "string",
      "chainId": 1,
      "txn": "string",
      "direction": "diposit",
      "amount": 0,
      "status": "success"
    }
  ]
}
```

<h3 id="wallethistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|錢包存提紀錄|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|登入資訊錯誤|None|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="wallethistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» total|integer|false|none|none|
|» offset|integer|false|none|none|
|» list|[object]|false|none|none|
|»» id|string|false|none|none|
|»» time|number|false|none|建立時間|
|»» currency|string|false|none|虛擬貨幣名稱|
|»» symbol|string|false|none|貨幣標識符|
|»» decimal|integer|false|none|顯示小數位數|
|»» from|string|false|none|出金賬號|
|»» into|string|false|none|入金賬號|
|»» chainId|string|false|none|[交易公鏈 ID](https://chainlist.org/)<br>1 for Ethereum Mainnet|
|»» txn|string|false|none|鏈上交易序號|
|»» direction|string|false|none|none|
|»» amount|number|false|none|交易數量|
|»» status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|diposit|
|direction|withdraw|
|status|success|
|status|cancel|
|status|processing|
|status|waiting|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## walletDipositInfo

<a id="opIdwalletDipositInfo"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "currency": "ETH"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/wallet/diposit/info',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /wallet/diposit/info`

取得虛擬貨幣入金賬號

> Body parameter

```json
{
  "userId": "string",
  "currency": "ETH"
}
```

<h3 id="walletdipositinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user id|
|» userId|body|string|true|none|
|» currency|body|string|true|虛擬貨幣名稱|

> Example responses

> 200 Response

```json
[
  {
    "currency": "ETH",
    "token": "0xdAC17F958D2ee523a2206206994597C13D831xxx",
    "chainId": 1,
    "address": "string",
    "memo": "string",
    "effect": 1653631833378
  }
]
```

<h3 id="walletdipositinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|入金賬號|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|登入資訊錯誤|None|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="walletdipositinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» currency|string|false|none|虛擬貨幣名稱|
|» token|string|false|none|虛擬貨幣合約地址(ex4:USDT on ether)|
|» chainId|string|true|none|[匯款公鏈 ID](https://chainlist.org/)<br>1 for Ethereum Mainnet|
|» address|string|true|none|匯入賬號/空為目前無可用賬號|
|» memo|string|false|none|匯款注記(BNB Mainnet)|
|» effect|number|false|none|有效期限(timestamp)/0為無限期有效(=固定賬號)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## walletWithdrawInfo

<a id="opIdwalletWithdrawInfo"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "currency": "ETH"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/wallet/withdraw/info',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /wallet/withdraw/info`

取得虛擬貨幣出金管道

> Body parameter

```json
{
  "userId": "string",
  "currency": "ETH"
}
```

<h3 id="walletwithdrawinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user id|
|» userId|body|string|true|none|
|» currency|body|string|true|虛擬貨幣名稱|

> Example responses

> 200 Response

```json
[
  {
    "currency": "ETH",
    "symbol": "Ξ",
    "token": "0xdAC17F958D2ee523a2206206994597C13D831xxx",
    "chainId": 1,
    "min": 0,
    "max": 0,
    "fee": 0
  }
]
```

<h3 id="walletwithdrawinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|出金管道|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|登入資訊錯誤|None|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="walletwithdrawinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» currency|string|true|none|虛擬貨幣名稱|
|» symbol|string|false|none|貨幣標識符|
|» token|string|false|none|虛擬貨幣合約地址(ex4:USDT on ether)|
|» chainId|string|true|none|[匯款公鏈 ID](https://chainlist.org/)<br>1 for Ethereum Mainnet|
|» min|number|false|none|最小轉出數量|
|» max|number|false|none|目前可用最大轉出數量(包含會員等級限制)|
|» fee|number|false|none|轉出手續費(同幣別内扣)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

## walletWithdrawSubmit

<a id="opIdwalletWithdrawSubmit"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": "string",
  "currency": "ETH",
  "chainId": 1,
  "amount": 0,
  "address": "string",
  "phoneVerify": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'apikey':'API_KEY'
};

fetch('http://localhost/api/master/v0/wallet/withdraw/submit',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /wallet/withdraw/submit`

取得虛擬貨幣出金管道

> Body parameter

```json
{
  "userId": "string",
  "currency": "ETH",
  "chainId": 1,
  "amount": 0,
  "address": "string",
  "phoneVerify": "string"
}
```

<h3 id="walletwithdrawsubmit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|user id|
|» userId|body|string|true|none|
|» currency|body|string|true|虛擬貨幣名稱|
|» chainId|body|string|true|[匯款公鏈 ID](https://chainlist.org/)|
|» amount|body|number|true|none|
|» address|body|string|true|none|
|» phoneVerify|body|string|true|手機驗證碼|

#### Detailed descriptions

**» chainId**: [匯款公鏈 ID](https://chainlist.org/)
1 for Ethereum Mainnet

> Example responses

> 403 Response

```json
{
  "currency": "api.wallet.withdraw.submit.error.currency.notExist",
  "chainId": "api.wallet.withdraw.submit.error.chainId.notExist",
  "amount": "api.wallet.withdraw.submit.error.amount.overMax",
  "address": "api.wallet.withdraw.submit.error.address.format",
  "phoneVerify": "api.wallet.withdraw.submit.error.phoneVerify.notMatch"
}
```

<h3 id="walletwithdrawsubmit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|登入資訊錯誤|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|提領資訊錯誤|Inline|
|default|Default|Error response|[BaseError](#schemabaseerror)|

<h3 id="walletwithdrawsubmit-responseschema">Response Schema</h3>

Status Code **403**

*回傳對應欄位的錯誤訊息/代號*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» currency|string|false|none|none|
|» chainId|string|false|none|none|
|» amount|string|false|none|none|
|» address|string|false|none|none|
|» phoneVerify|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BaseApiKey
</aside>

# Schemas

<h2 id="tocS_BaseAny">BaseAny</h2>
<!-- backwards compatibility -->
<a id="schemabaseany"></a>
<a id="schema_BaseAny"></a>
<a id="tocSbaseany"></a>
<a id="tocsbaseany"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_BaseArrayAny">BaseArrayAny</h2>
<!-- backwards compatibility -->
<a id="schemabasearrayany"></a>
<a id="schema_BaseArrayAny"></a>
<a id="tocSbasearrayany"></a>
<a id="tocsbasearrayany"></a>

```json
[
  {}
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BaseAny](#schemabaseany)]|false|none|none|

<h2 id="tocS_BaseError">BaseError</h2>
<!-- backwards compatibility -->
<a id="schemabaseerror"></a>
<a id="schema_BaseError"></a>
<a id="tocSbaseerror"></a>
<a id="tocsbaseerror"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|Error code|
|message|string|false|none|Error Message|
|data|[BaseAny](#schemabaseany)|false|none|none|

<h2 id="tocS_CartShoppingModel">CartShoppingModel</h2>
<!-- backwards compatibility -->
<a id="schemacartshoppingmodel"></a>
<a id="schema_CartShoppingModel"></a>
<a id="tocScartshoppingmodel"></a>
<a id="tocscartshoppingmodel"></a>

```json
{
  "hash": "string",
  "userId": "string",
  "list": [
    {
      "chainId": 0,
      "contract": "string",
      "collection": "string",
      "id": 0,
      "nftName": "string",
      "shop": "string",
      "currency": "string",
      "price": 0,
      "enable": true
    }
  ],
  "cost": [
    {
      "type": "string",
      "currency": "string",
      "amount": 0
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "balance": 0,
      "enable": true,
      "willPay": 0
    }
  ],
  "payment": [
    {
      "currency": "string",
      "amount": 0,
      "payBy": [
        {
          "currency": "string",
          "used": 0,
          "rate": 0,
          "amount": 0
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|false|none|目前資料 hash(防呆,更新時比對)|
|userId|string|false|none|none|
|list|[object]|false|none|none|
|» chainId|integer|false|none|none|
|» contract|string|false|none|none|
|» collection|string|false|none|集合名稱|
|» id|integer|false|none|none|
|» nftName|string|false|none|none|
|» shop|string|false|none|none|
|» currency|string|false|none|none|
|» price|number|false|none|none|
|» enable|boolean|false|none|none|
|cost|[object]|false|none|none|
|» type|string|false|none|gas/price/fee|
|» currency|string|false|none|none|
|» amount|number|false|none|none|
|wallet|[object]|false|none|none|
|» currency|string|false|none|none|
|» balance|number|false|none|none|
|» enable|boolean|false|none|none|
|» willPay|number|false|none|none|
|payment|[object]|false|none|none|
|» currency|string|false|none|none|
|» amount|number|false|none|none|
|» payBy|[object]|false|none|none|
|»» currency|string|false|none|none|
|»» used|number|false|none|none|
|»» rate|number|false|none|none|
|»» amount|number|false|none|none|

<h2 id="tocS_CartSellingModel">CartSellingModel</h2>
<!-- backwards compatibility -->
<a id="schemacartsellingmodel"></a>
<a id="schema_CartSellingModel"></a>
<a id="tocScartsellingmodel"></a>
<a id="tocscartsellingmodel"></a>

```json
{
  "hash": "string",
  "userId": "string",
  "list": [
    {
      "chainId": 0,
      "contract": "string",
      "collection": "string",
      "id": 0,
      "nftName": "string",
      "shops": [
        {
          "shop": "string",
          "currency": "string",
          "price": 0,
          "enable": true
        }
      ]
    }
  ],
  "cost": [
    {
      "type": "string",
      "currency": "string",
      "amount": 0
    }
  ],
  "wallet": [
    {
      "currency": "string",
      "balance": 0,
      "enable": true,
      "willPay": 0
    }
  ],
  "payment": [
    {
      "currency": "string",
      "amount": 0,
      "payBy": [
        {
          "currency": "string",
          "used": 0,
          "rate": 0,
          "amount": 0
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|false|none|目前資料 hash(防呆,更新時比對)|
|userId|string|false|none|none|
|list|[object]|false|none|none|
|» chainId|integer|false|none|none|
|» contract|string|false|none|none|
|» collection|string|false|none|集合名稱|
|» id|integer|false|none|none|
|» nftName|string|false|none|none|
|» shops|[object]|false|none|none|
|»» shop|string|false|none|none|
|»» currency|string|false|none|none|
|»» price|number|false|none|none|
|»» enable|boolean|false|none|none|
|cost|[object]|false|none|none|
|» type|string|false|none|gas / price / fee|
|» currency|string|false|none|none|
|» amount|number|false|none|none|
|wallet|[object]|false|none|none|
|» currency|string|false|none|none|
|» balance|number|false|none|none|
|» enable|boolean|false|none|none|
|» willPay|number|false|none|none|
|payment|[object]|false|none|none|
|» currency|string|false|none|none|
|» amount|number|false|none|none|
|» payBy|[object]|false|none|none|
|»» currency|string|false|none|none|
|»» used|number|false|none|none|
|»» rate|number|false|none|none|
|»» amount|number|false|none|none|

<h2 id="tocS_InvoiceStatus">InvoiceStatus</h2>
<!-- backwards compatibility -->
<a id="schemainvoicestatus"></a>
<a id="schema_InvoiceStatus"></a>
<a id="tocSinvoicestatus"></a>
<a id="tocsinvoicestatus"></a>

```json
{
  "userId": "string",
  "invoiceType": "string",
  "invoiceId": "string",
  "status": "success",
  "createOn": 0,
  "jobs": [
    {
      "jobType": "string",
      "jobId": "string",
      "data": {},
      "status": "success",
      "finishOn": 0,
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|false|none|none|
|invoiceType|string|false|none|訂單類型|
|invoiceId|string|false|none|訂單編號(ID)|
|status|string|false|none|none|
|createOn|number|false|none|建立時間|
|jobs|[object]|false|none|none|
|» jobType|string|false|none|換匯/鎖幣/站內購入/外站購入/結帳|
|» jobId|string|false|none|none|
|» data|object|false|none|none|
|» status|string|false|none|none|
|» finishOn|number|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|fail|
|status|partial|
|status|processing|
|status|waiting|
|status|error|
|status|pause|
|status|cancel|
|status|success|
|status|fail|
|status|partial|
|status|processing|
|status|waiting|
|status|error|
|status|pause|
|status|cancel|

