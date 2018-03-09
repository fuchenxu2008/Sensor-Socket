import { HOME_PAGE_ROUTE } from '../shared/routes';
import { APP_NAME } from '../shared/config';

import renderApp from './renderApp';

export default (app) => {
    app.get(HOME_PAGE_ROUTE, (req, res) => {
        res.send(renderApp(req.url, APP_NAME));
    });

    app.get('/500', () => {
        throw Error('Fake Internal Server Error');
    });

    app.get('*', (req, res) => {
        res.status(404).send(renderApp(req.url));
    });

    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
        // eslint-disable-next-line no-console
        console.error(err.stack);
        res.status(500).send('Something went wrong!');
    });
};
