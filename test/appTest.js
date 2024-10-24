import { assert } from 'chai';
import app from "../app.js"; // Adjust this based on how you export your app function

describe('App', function() {
    it('should return hello', function() {
        assert.equal(app(), "hello");
    });
});
