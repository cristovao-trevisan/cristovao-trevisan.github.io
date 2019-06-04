import sirv from 'sirv';
import express from 'express';

import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express()
	// this will make url base lang work when using the server
	// .use(
	// 	'/webpage/lang/:lang*',
	// 	(req, res) => {
	// 		res.redirect(req.baseUrl.replace(/\/lang\/[^/]+/, '') + '?lang=' + req.params.lang)
	// 	},
	// )
	.use(
		'/webpage',
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
