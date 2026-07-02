---
title: "Meta Business SDK Features for Conversions API"
source_url: https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/append-attribution
---

# Meta Business SDK Features for Conversions API

Updated: Jun 30, 2026

This guide helps you navigate Meta Business SDK advanced features designed especially for Conversions API users. [Asynchronous Requests](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/append-attribution#asynchronous-requests), [Concurrent Batching](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/append-attribution#concurrent-batching), and [HTTP Service Interface](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/append-attribution#http-service-interface) are available in the PHP, NodeJS, Java, Python, and Ruby SDKs. For basic Conversions API usage, refer to the main [Conversions API documentation](https://developers.facebook.com/documentation/ads-commerce/conversions-api/using-the-api#send).

The [Meta Business SDK](https://developers.facebook.com/docs/business-sdk) gives you access to Meta’s business APIs, which you can use to build solutions for your business and clients. One of the APIs available for SDK users is the [Conversions API](https://developers.facebook.com/documentation/ads-commerce/conversions-api).

## Requirements

Before using any of the features listed below, you need to have the Meta Business SDK installed. See [Get Started with the Meta Business SDK](https://developers.facebook.com/docs/business-sdk/getting-started) or follow the `README` instructions listed here:

* PHP: [`facebook-php-business-sdk`⁠](https://github.com/facebook/facebook-php-business-sdk)
* Node.js: [`facebook-nodejs-business-sdk`⁠](https://github.com/facebook/facebook-nodejs-business-sdk)
* Java: [`facebook-java-business-sdk`⁠](https://github.com/facebook/facebook-java-business-sdk)
* Python: [`facebook-python-business-sdk`⁠](https://github.com/facebook/facebook-python-business-sdk)
* Ruby: [`facebook-ruby-business-sdk`⁠](https://github.com/facebook/facebook-ruby-business-sdk)

Minimum language version required to use these features:

* PHP >= 7.2
* Node.js >= 7.6.0
* Java >= 8
* Python >= 2.7
* Ruby >= 2

## Asynchronous requests

Use this feature if you do not want to block your program’s execution to wait for a request to be completed. With this approach, you make your request and get a signal back from the server once it has been completed. While you wait for the response, the program can keep executing.

Asynchronous requests allow you to use your resources more efficiently, which leads to a decrease in server response time. Asynchronous requests also allow you to have more control on how your program handles errors coming from the server and to easily integrate the SDK into code that already runs asynchronously.

To implement Asynchronous Requests, see code samples in the following languages:

Select language

PHP Business SDKPython Business SDKNode.js Business SDKJava Business SDKRuby Business SDK

---

```
use FacebookAds\Api;  
use FacebookAds\Object\ServerSide\CustomData;  
use FacebookAds\Object\ServerSide\Event;  
use FacebookAds\Object\ServerSide\EventRequest;  
use FacebookAds\Object\ServerSide\EventRequestAsync;  
use FacebookAds\Object\ServerSide\UserData;  
  
use GuzzleHttp\Exception\RequestException;  
use GuzzleHttp\Promise;  
  
$pixel_id = getenv('PIXEL_ID');  
$access_token = getenv('ACCESS_TOKEN');  
  
if (empty($pixel_id) || empty($access_token)) {  
  throw new Exception('Missing required test config. Got pixel_id: "' . $pixel_id . '", access_token: "' . $access_token . '"');  
}  
  
Api::init(null, null, $access_token, false);  
  
function create_events($num) {  
  $user_data = (new UserData())  
    ->setEmail('joe' . $num . '@eg.com')  
    ->setClientIpAddress($_SERVER['REMOTE_ADDR'])  
    ->setClientUserAgent($_SERVER['HTTP_USER_AGENT']);  
  
$custom_data = (new CustomData())  
  ->setCurrency('usd')  
  ->setValue(123.45);  
  
$event = (new Event())  
  ->setEventName('Purchase')  
  ->setEventTime(time())  
  ->setEventSourceUrl('http://jaspers-market.com/product/123')  
  ->setUserData($user_data)  
  ->setCustomData($custom_data)  
  ->setActionSource(ActionSource::WEBSITE);  
  
  return array($event);  
}  
  
function create_async_request($pixel_id, $num) {  
  $async_request = (new EventRequestAsync($pixel_id))  
    ->setEvents(create_events($num));  
  return $async_request->execute()  
    ->then(  
      null,  
      function (RequestException $e) {  
        print(  
          "Error!!!\n" .  
          $e->getMessage() . "\n" .  
          $e->getRequest()->getMethod() . "\n"  
        );  
      }  
    );  
}  
  
// Async request:  
$promise = create_async_request($pixel_id, 2);  
  
print("Request 1 state: " . $promise->getState() . "\n");  
print("Async request - OK.\n");  
  
// Async request with wait:  
$promise = create_async_request($pixel_id, 3);  
  
$response2 = $promise->wait();  
print("Request 2: " . $response2->getBody() . "\n");  
print("Async request with wait - OK.\n");  
  
// Multiple async requests:  
$promises = [  
  "Request 3" => create_async_request($pixel_id, 4),  
  "Request 4" => create_async_request($pixel_id, 5),  
];  
  
$response3 = Promise\unwrap($promises);  
foreach ($response3 as $request_name => $response) {  
  print($request_name . ": " . $response->getBody()."\n");  
}  
print("Async - Multiple async requests OK.\n");
```

## Concurrent batching

Concurrent batching uses asynchronous requests to increase throughput by utilizing resources more efficiently. You can create batched requests to support use cases like event request workers, [cron jobs⁠](https://en.wikipedia.org/wiki/Cron), and more.

You have the following `BatchProcessor` methods to choose from:

| Method | When to use it |
| --- | --- |
| `processEvents` | Use it to process events that have the same top-level `EventRequest` fields, like `namespace_id` and `upload_tag`. |
| `processEventsGenerator` | `processEventsGenerator` is the underlying generator for `processEvents`.  `processEventsGenerator` can also process events that have the same top-level `EventRequest` fields, like `namespace_id` and `upload_tag`. |
| `processEventRequests` | Use it to process `EventRequests` concurrently when you want to specify different `EventRequest` fields per request. |
| `processEventRequestsGenerator` | `processEventRequestsGenerator` is the underlying generator for `processEventRequests`.  `processEventRequestsGenerator` can also process `EventRequests` concurrently when you want to specify different `EventRequest` fields per request. |

When using concurrent batching, send events as close to real-time as possible. For more information, see [Sharing Frequency](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/end-to-end-implementation#sharing-frequency).

If you are using the PHP, Python, or Ruby SDKs, the methods above require an `EventRequestAsync` object(s) instead of an `EventRequest`.

To implement concurrent batching, see code samples in the following languages:

Select language

PHP Business SDKPython Business SDKNode.js Business SDKJava Business SDKRuby Business SDK

---

```
use FacebookAds\Api;  
use FacebookAds\Object\ServerSide\BatchProcessor;  
use FacebookAds\Object\ServerSide\CustomData;  
use FacebookAds\Object\ServerSide\Event;  
use FacebookAds\Object\ServerSide\EventRequestAsync;  
use FacebookAds\Object\ServerSide\UserData;  
  
use GuzzleHttp\Exception\RequestException;  
use GuzzleHttp\Promise;  
  
$pixel_id = getenv('PIXEL_ID');  
$access_token = getenv('ACCESS_TOKEN');  
  
if (empty($pixel_id) || empty($access_token)) {  
  throw new Exception('Missing required test config. Got pixel_id: "' . $pixel_id . '", access_token: "' . $access_token . '"');  
}  
  
$api = Api::init(null, null, $access_token, false);  
  
function create_event($i) {  
  $user_data = (new UserData())  
    ->setEmail('joe' . $i . '@eg.com')  
    ->setClientIpAddress($_SERVER['REMOTE_ADDR'])  
    ->setClientUserAgent($_SERVER['HTTP_USER_AGENT']);  
  
$custom_data = (new CustomData())  
  ->setCurrency('usd')  
  ->setValue(123.45);  
  
  return (new Event())  
    ->setEventName('Purchase')  
    ->setEventTime(time())  
    ->setEventSourceUrl('http://jaspers-market.com/product/' . $i)  
    ->setUserData($user_data)  
    ->setCustomData($custom_data)  
    ->setActionSource(ActionSource::WEBSITE);  
}  
  
function create_events($num) {  
  $events = [];  
  
for ($i = 0; $i < $num; $i++) {  
  $events[] = create_event($i);  
}  
  
  return $events;  
}  
  
function create_async_requests($pixel_id, $num) {  
  $requests = [];  
  
for ($i = 0; $i < $num; $i++) {  
  $requests[] = (new EventRequestAsync($pixel_id))  
    ->setUploadTag('test-tag-2')  
    ->setEvents([create_event($i)]);  
}  
  
  return $requests;  
}  
  
function run($pixel_id) {  
  print("Started CONVERSIONS_API_EVENT_CREATE_BATCH...\n");  
  $batch_processor = new BatchProcessor($pixel_id, 2, 2);  
  
// processEvents  
$events = create_events(11);  
$batch_processor->processEvents(array('upload_tag' => 'test-tag-1'), $events);  
  
// processEventRequests  
$requests = create_async_requests($pixel_id, 5);  
$batch_processor->processEventRequests($requests);  
  
// processEventsGenerator  
$process_events_generator = $batch_processor->processEventsGenerator(array('upload_tag' => 'test-tag-1'), $events);  
foreach ($process_events_generator as $promises) {  
  try {  
    Promise\unwrap($promises);  
  } catch (RequestException $e) {  
    print('RequestException: ' . $e->getResponse()->getBody()->getContents() . "\n");  
    throw $e;  
  } catch (\Exception $e) {  
    print("Exception:\n");  
    print_r($e);  
    throw $e;  
  }  
}  
  
  // processEventRequestsGenerator  
  $requests = create_async_requests($pixel_id, 5);  
  $process_event_requests_generator = $batch_processor->processEventRequestsGenerator($requests);  
  foreach ($process_event_requests_generator as $promises) {  
    try {  
      Promise\unwrap($promises);  
    } catch (RequestException $e) {  
      print('RequestException: ' . $e->getResponse()->getBody()->getContents() . "\n");  
      throw $e;  
    } catch (\Exception $e) {  
      print("Exception:\n");  
      print_r($e);  
      throw $e;  
    }  
  }  
  print("Finished CONVERSIONS_API_EVENT_CREATE_BATCH with no errors.\n");  
}  
  
run($pixel_id);
```

## HTTP service interface

Use HTTP Service Interface if you have a specific set of requirements for the HTTP service layer. With this feature, you can override the Business SDK’s default HTTP service and implement your own custom service with your preferred method or library.

To implement your own HTTP Service Interface, see code samples in the following languages:

Select language

PHP Business SDKPython Business SDKNode.js Business SDKJava Business SDKRuby Business SDK

---

```
require __DIR__ . '/../vendor/autoload.php';  
  
use FacebookAds\Api;  
use FacebookAds\Object\ServerSide\CustomData;  
use FacebookAds\Object\ServerSide\Event;  
use FacebookAds\Object\ServerSide\EventRequest;  
use FacebookAds\Object\ServerSide\EventRequestAsync;  
use FacebookAds\Object\ServerSide\HttpServiceClientConfig;  
use FacebookAds\Object\ServerSide\UserData;  
  
// Imports used by the TestHttpClient class  
use FacebookAds\Object\ServerSide\HttpServiceInterface;  
use GuzzleHttp\Client;  
use GuzzleHttp\HandlerStack;  
use GuzzleHttp\Handler\CurlHandler;  
use GuzzleHttp\Psr7\MultipartStream;  
use GuzzleHttp\Psr7\Request;  
  
$pixel_id = getenv('PIXEL_ID');  
$access_token = getenv('ACCESS_TOKEN');  
  
if (empty($pixel_id) || empty($access_token)) {  
  throw new Exception('Missing required test config. Got pixel_id: "' . $pixel_id . '", access_token: "' . $access_token . '"');  
}  
  
function run($access_token, $pixel_id) {  
  Api::init(null, null, $access_token, false);  
  
$request1 = getEventRequest($pixel_id, 1);  
$request1->setHttpClient(new TestHttpClient());  
  
$response1 = $request1->execute();  
  
print("Response: " . $response1->getBody() . "\n");  
print("Custom HTTP Service Request 1 - OK.\n");  
  
// Alternatively, you can set the access_token and the HTTP Client on the HttpServiceClientConfig  
Api::init(null, null, null, false);  
HttpServiceClientConfig::getInstance()->setClient(new TestHttpClient());  
HttpServiceClientConfig::getInstance()->setAccessToken($access_token);  
  
$request2 = getEventRequest($pixel_id, 2);  
  
$response2 = $request2->execute();  
  
  print("Response: " . $response2->getBody() . "\n");  
  print("Custom HTTP Service Request 2 - OK.\n");  
}  
  
function getEventRequest($pixel_id, $num) {  
  $user_data = (new UserData())  
    ->setEmail('joe' . $num . '@eg.com')  
    ->setClientIpAddress($_SERVER['REMOTE_ADDR'])  
    ->setClientUserAgent($_SERVER['HTTP_USER_AGENT']);  
  
$custom_data = (new CustomData())  
  ->setCurrency('usd')  
  ->setValue(123.45);  
  
$event = (new Event())  
  ->setEventName('Purchase')  
  ->setEventTime(time())  
  ->setEventSourceUrl('http://jaspers-market.com/product/123')  
  ->setUserData($user_data)  
  ->setCustomData($custom_data)  
  ->setActionSource(ActionSource::WEBSITE);  
  
  return (new EventRequest($pixel_id))  
    ->setEvents(array($event));  
}  
  
class TestHttpClient implements HttpServiceInterface {  
  public function executeRequest($url, $method, array $curl_options, array $headers, array $params) {  
    $multipart_contents = [];  
  
foreach ($params as $key => $value) {  
  if ($key === 'data') {  
    $multipart_contents[] = [  
      'name' => $key,  
      'contents' => \GuzzleHttp\json_encode($value),  
      'headers' => array('Content-Type' => 'multipart/form-data'),  
    ];  
  } else {  
    $multipart_contents[] = [  
      'name' => $key,  
      'contents' => $value,  
      'headers' => array('Content-Type' => 'multipart/form-data'),  
    ];  
  }  
}  
  
$body = new MultipartStream($multipart_contents);  
$request = new Request($method, $url, $headers, $body);  
  
$handler_stack = HandlerStack::create(  
  new CurlHandler(['options' => $curl_options])  
);  
  
    $client = new Client(['handler' => $handler_stack]);  
    return $client->send($request);  
  }  
}  
  
run($access_token, $pixel_id);
```

## Test your event requests

You can test your event requests using the `test_event_code` parameter. Locate the test code by going to the Test Events tool found in the **Events Manager** under **Data Sources** > **Your Pixel** > **Test Events** tab.

**Note:** You must replace the sample value in the code below (i.e., `TEST12345`) with the test code you obtain from the **Test Events** tab.

Select language

PHP Business SDKPython Business SDKNode.js Business SDKJava Business SDKRuby Business SDK

---

```
...  
$request = (new EventRequest($pixel_id))  
    ->setTestEventCode('TEST12345')  
    ->setEvents($events);  
  
$response = $request->execute();
```

## Limitations

Currently, we do not support setting a custom HTTP Service Interface when making concurrent batch requests or asynchronous requests.
