# node-okex-apiv3

* https://www.okex.com/docs/en/#README


## limit

```
When a rate limit is exceeded, a status of 429 Too Many Requests will be returned.

REST API
We use user id for rate limiting if you have a valid API key. If not, we use the public IP for rate limiting.
Rate limit: 6 requests per second for regular endpoints. Spot trading API includes all endpoints of "accounts" and "orders", and their rate limit is 10 requests per second.
```

* accounts and orders 10 req/sec
* other api 6 req/sec
