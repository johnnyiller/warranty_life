# WarrantyLifeApi.CustomerApi

All URIs are relative to *https://sandbox.warrantylife.com/api/201308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersCustomerIdGet**](CustomerApi.md#customersCustomerIdGet) | **GET** /customers/{customerId} | get customer by customer id
[**customersGet**](CustomerApi.md#customersGet) | **GET** /customers | get a customer by refId
[**customersPost**](CustomerApi.md#customersPost) | **POST** /customers | Add a new customer


<a name="customersCustomerIdGet"></a>
# **customersCustomerIdGet**
> Customer customersCustomerIdGet(customerId)

get customer by customer id

### Example
```javascript
var WarrantyLifeApi = require('warranty_life_api');
var defaultClient = WarrantyLifeApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLifeApi.CustomerApi();
var customerId = "customerId_example"; // String | Id for the warranty-plan you want to retrieve
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customersCustomerIdGet(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Id for the warranty-plan you want to retrieve | 

### Return type

[**Customer**](Customer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="customersGet"></a>
# **customersGet**
> Customer customersGet(opts)

get a customer by refId

### Example
```javascript
var WarrantyLifeApi = require('warranty_life_api');
var defaultClient = WarrantyLifeApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLifeApi.CustomerApi();
var opts = {
  'refId': "refId_example" // String | ref customer to your local database
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | **String**| ref customer to your local database | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="customersPost"></a>
# **customersPost**
> Customer customersPost(customer)

Add a new customer

### Example
```javascript
var WarrantyLifeApi = require('warranty_life_api');
var defaultClient = WarrantyLifeApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WarrantyLifeApi.CustomerApi();
var customer = new WarrantyLifeApi.Customer(); // Customer | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customersPost(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [**Customer**](Customer.md)|  | 

### Return type

[**Customer**](Customer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

