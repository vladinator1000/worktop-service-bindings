// This works
// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		return new Response('Hello from API!');
// 	},
// };

// This does not work
import { Router } from 'worktop';
import { start } from 'worktop/cfw';

let router = new Router();

router.add('GET', '/', (_request, context) => {
	return new Response('Hello from Worktop!');
});

export default {
	...start(router.run),
};
