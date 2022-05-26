# NFT Market

> Version 0.0.1

NFT Market API

## Path Table

| Method | Path | Description |
| --- | --- | --- |
| GET | [/base/ping](#getbaseping) | 伺服器作動檢查 |
| GET | [/blank/ping](#getblankping) | 伺服器作動檢查 |
| POST | [/db/{collection}/create](#postdbcollectioncreate) | create doc |
| POST | [/db/{collection}/read](#postdbcollectionread) | read docs |
| POST | [/db/{collection}/count](#postdbcollectioncount) | read docs |
| POST | [/db/{collection}/update/{id}](#postdbcollectionupdateid) | update doc |
| POST | [/db/{collection}/delete/{id}](#postdbcollectiondeleteid) | delete doc |
| POST | [/guest/register/phone](#postguestregisterphone) |  |
| POST | [/guest/login/password](#postguestloginpassword) |  |
| POST | [/guest/verify/email](#postguestverifyemail) |  |
| POST | [/guest/verify/phone](#postguestverifyphone) |  |
| POST | [/guest/reset/password](#postguestresetpassword) |  |
| POST | [/guest/verify/account/phone](#postguestverifyaccountphone) |  |

## Reference Table

| Name | Path | Description |
| --- | --- | --- |
| BaseAny | [#/components/schemas/BaseAny](#componentsschemasbaseany) |  |
| BaseArrayAny | [#/components/schemas/BaseArrayAny](#componentsschemasbasearrayany) |  |
| BaseError | [#/components/schemas/BaseError](#componentsschemasbaseerror) |  |
| DbJsonFn | [#/components/schemas/DbJsonFn](#componentsschemasdbjsonfn) |  |
| DbQuery | [#/components/schemas/DbQuery](#componentsschemasdbquery) |  |
| BaseAny | [#/components/responses/BaseAny](#componentsresponsesbaseany) | Response any object |
| BaseArrayAny | [#/components/responses/BaseArrayAny](#componentsresponsesbasearrayany) | Response array of any |
| BaseError | [#/components/responses/BaseError](#componentsresponsesbaseerror) | Error response |
| AuthToken | [#/components/responses/AuthToken](#componentsresponsesauthtoken) | Auth token. |
| BaseApiKey | [#/components/securitySchemes/BaseApiKey](#componentssecurityschemesbaseapikey) |  |
| DbQueryFn | [#/components/requestBodies/DbQueryFn](#componentsrequestbodiesdbqueryfn) |  |
| DbFindFn | [#/components/requestBodies/DbFindFn](#componentsrequestbodiesdbfindfn) |  |
| DbAny | [#/components/requestBodies/DbAny](#componentsrequestbodiesdbany) |  |

## Path Details

***

### [GET]/base/ping

- Summary  
伺服器作動檢查

- Description  
檢查伺服器是否有回應，并取得伺服器時間戳。

#### Parameters(Query)

```ts
now?: integer
```

#### Responses

- 200 OK

`application/json`

```ts
{
  "type": "integer",
  "description": "伺服器時間戳"
}
```

- default undefined

***

### [GET]/blank/ping

- Summary  
伺服器作動檢查

- Description  
檢查伺服器是否有回應，并取得伺服器時間戳。  
``` mermaid  
graph TD;  
國產疫苗-->二期解盲成功就EUA;  
國產疫苗-->三期歐美標準才可EUA;  
二期解盲成功就EUA-->時效派;  
三期歐美標準才可EUA-->標規派;  
時效派-->需公開透明;  
時效派-->需醫界共識;  
時效派-->需預盤風險;  
時效派--->仍可做三期試驗;  
標規派-->延後半年短缺因應;  
仍可做三期試驗-->可跟國外大型藥廠合作試驗;  
```

#### Parameters(Query)

```ts
now?: integer
```

#### Responses

- 200 OK

`application/json`

```ts
{
  "type": "integer",
  "description": "伺服器時間戳",
  "example": 1653532830797
}
```

- default undefined

***

### [POST]/db/{collection}/create

- Summary  
create doc

- Description  
create doc

- Security  
BaseApiKey  

#### Parameters(Query)

```ts
createBy?: string
```

#### RequestBody

- application/json

```ts
{
}
```

#### Responses

- 200 OK

`application/json`

```ts
{
}
```

- default undefined

***

### [POST]/db/{collection}/read

- Summary  
read docs

- Description  
read docs

- Security  
BaseApiKey  

#### RequestBody

- application/json

```ts
{
  jsonFn: string
}
```

#### Responses

- 200 OK

`application/json`

```ts
{
}[]
```

- default undefined

***

### [POST]/db/{collection}/count

- Summary  
read docs

- Description  
read docs

- Security  
BaseApiKey  

#### RequestBody

- application/json

```ts
{
  jsonFn: string
}
```

#### Responses

- 200 OK

`application/json`

```ts
{
  "type": "number"
}
```

- default undefined

***

### [POST]/db/{collection}/update/{id}

- Summary  
update doc

- Description  
update doc

- Security  
BaseApiKey  

#### Parameters(Query)

```ts
replace?: boolean
```

#### RequestBody

- application/json

```ts
{
}
```

#### Responses

- 200 OK

`application/json`

```ts
{
}
```

- default undefined

***

### [POST]/db/{collection}/delete/{id}

- Summary  
delete doc

- Description  
delete doc

- Security  
BaseApiKey  

#### Parameters(Query)

```ts
hash?: string
```

#### Responses

- 200 OK

`application/json`

```ts
{
}
```

- default undefined

***

### [POST]/guest/register/phone

- Description  
Register a new user by phone.

#### RequestBody

- application/json

```ts
{
  email: string
  emailVerify: string
  phone: string
  phoneVerify: string
  password: string
}
```

#### Responses

- 200 undefined

- 403 注冊資訊錯誤

`application/json`

```ts
// 回傳對應欄位的錯誤訊息/代號
{
  email?: string
  emailVerify?: string
  phone?: string
  phoneVerify?: string
  password?: string
}
```

- default undefined

***

### [POST]/guest/login/password

- Description  
Login by email and password.

#### RequestBody

- application/json

```ts
// Auth info
{
  // email
  account: string
  password: string
}
```

#### Responses

- 200 undefined

- 401 登入資訊錯誤

`application/json`

```ts
// 回傳對應欄位的錯誤訊息/代號
{
  account?: string
  password?: string
}
```

- default undefined

***

### [POST]/guest/verify/email

- Description  
寄發電子郵件檢查碼信件

#### RequestBody

- application/json

```ts
{
  email: string
  lang?: string
}
```

#### Responses

- 200 OK

`application/json`

```ts
{
  "description": "成功送出並取回下次可執行時間",
  "type": "integer",
  "example": 1653502991840
}
```

- 403 資訊錯誤

`application/json`

```ts
// 回傳對應欄位的錯誤訊息/代號
{
  email?: string
  // 下次可執行時間
  time?: integer
}
```

- default undefined

***

### [POST]/guest/verify/phone

- Description  
寄發手機檢查碼簡訊

#### RequestBody

- application/json

```ts
{
  phone: string
  lang?: string
}
```

#### Responses

- 200 OK

`application/json`

```ts
{
  "description": "成功送出並取回下次可執行時間",
  "type": "integer",
  "example": 1653502991840
}
```

- 403 資訊錯誤

`application/json`

```ts
// 回傳對應欄位的錯誤訊息/代號
{
  phone?: string
  // 下次可執行時間
  time?: integer
}
```

- default undefined

***

### [POST]/guest/reset/password

- Description  
Reset member password.

#### RequestBody

- application/json

```ts
{
  email: string
  emailVerify: string
  phoneVerify: string
  password: string
}
```

#### Responses

- 200 undefined

- 403 注冊資訊錯誤

`application/json`

```ts
// 回傳對應欄位的錯誤訊息/代號
{
  email?: string
  emailVerify?: string
  phoneVerify?: string
  password?: string
}
```

- default undefined

***

### [POST]/guest/verify/account/phone

- Description  
依帳號關聯手機號碼寄發檢查碼簡訊

#### RequestBody

- application/json

```ts
{
  email: string
  lang?: string
}
```

#### Responses

- 200 OK

`application/json`

```ts
{
  "description": "成功送出並取回下次可執行時間",
  "type": "integer",
  "example": 1653502991840
}
```

- 403 資訊錯誤

`application/json`

```ts
// 回傳對應欄位的錯誤訊息/代號
{
  email?: string
  // 下次可執行時間
  time?: integer
}
```

- default undefined

## References

### #/components/schemas/BaseAny

```ts
{
}
```

### #/components/schemas/BaseArrayAny

```ts
{
}[]
```

### #/components/schemas/BaseError

```ts
{
  // Error code
  code: integer
  // Error Message
  message?: string
  data: {
  }
}
```

### #/components/schemas/DbJsonFn

```ts
{
  jsonFn: string
}
```

### #/components/schemas/DbQuery

```ts
{
  find: {
  }
  sort:#/components/schemas/BaseAny
  skip?: number
  limit?: number
  // JSONfn string keys array, or function
  map?: string
}
```

### #/components/responses/BaseAny

- application/json

```ts
{
}
```

### #/components/responses/BaseArrayAny

- application/json

```ts
{
}[]
```

### #/components/responses/BaseError

- application/json

```ts
{
  // Error code
  code: integer
  // Error Message
  message?: string
  data: {
  }
}
```

### #/components/responses/AuthToken

- application/json

```ts
// Login token
{
  userId: string
  token: string
}
```

### #/components/securitySchemes/BaseApiKey

```ts
```

### #/components/requestBodies/DbQueryFn

- application/json

```ts
{
  jsonFn: string
}
```

### #/components/requestBodies/DbFindFn

- application/json

```ts
{
  jsonFn: string
}
```

### #/components/requestBodies/DbAny

- application/json

```ts
{
}
```