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

