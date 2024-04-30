# worktop-service-bindings

Reproduces a bug in where [the Worktop framework](https://github.com/lukeed/worktop/tree/next) router fails when using the [service bindings](https://developers.cloudflare.com/pages/functions/bindings/#service-bindings) Cloudflare API.

Steps:
1. `cd` into the api folder
2. `npm i && npm start`
3. Open another terminal
4. `cd` into the pages folder
5. `npm i && npm start`
6. In your browser, open http://localhost:9787/api
7. You should see "Hello from Worktop!" but instead there's "Not found"