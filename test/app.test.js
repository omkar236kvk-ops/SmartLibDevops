
const test = require('node:test');
const assert = require('node:assert');
const app = require('../server');

test('SmartLibrary health check', async () => {
    const server = app.listen(0);

    const port = server.address().port;

    try {
        const response = await fetch(`http://localhost:${port}/health`);
        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(data.status, 'OK');

        console.log('Health check passed!');
    } finally {
        server.close();
    }
});
