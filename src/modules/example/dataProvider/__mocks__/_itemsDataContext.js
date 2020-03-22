import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/api/items").reply(200, {
  items: [{ id: 1, name: "John Smith" }],
});