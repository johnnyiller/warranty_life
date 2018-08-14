# warranty_life

## Generate the api for your language
```shell
openapi-generator generate -i api.yaml -g javascript -o ./javascript
```

## Javascript

Then install via:

```shell
npm install warranty_life --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WarrantyLife = require('warranty_life');

var defaultClient = WarrantyLife.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new WarrantyLife.CategoriesApi()
var categoryId = "categoryId_example"; // {String} Id for the category you would like to retrieve

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.categoriesCategoryIdGet(categoryId, callback);

```

## Promises
if you would like to use the promise client you must instantiate the api with the async client.

```javascript
var WarrantyLife = require('warranty_life');
var ApiClientSync = require("warranty_life/api_client_async");
var client = new ApiClientSync();

// Configure HTTP basic authorization: basicAuth
var basicAuth = client.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'
var api = new WarrantyLife.CategoriesApi(client)
var categoryId = "94";

api.categoriesCategoryIdGet(categoryId).
  then((d) => console.log(d)).
  catch((e) => console.log(e))

```
