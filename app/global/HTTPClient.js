import superagent from 'superagent';
let HTTPClient = {
    wrapper: function (inner) {
        return function (error, response) {
            // Network.completed();

            if (!inner) return;
            // chance to wrap and call original

            let parsed = null;
            if (response && response.text && response.text.length > 0) {
                try {
                    parsed = JSON.parse(response.text);
                }
                catch (e) {
                    parsed = null;
                }
            }

            let errorObj = null;
            let valueObj = null;

            if (error) {
                // error.status => 422
                errorObj = {};
                if (error.status) {
                    errorObj.status = error.status; // 422
                }
                else {
                    errorObj.status = 520; // Unknown error
                }

                errorObj.errors = [];
                if (parsed && parsed.error) {
                    errorObj.message = parsed.error
                }
                if (!errorObj.message) {
                    errorObj.message = 'Server Error: ' + errorObj.status;
                }
            }
            else {
                valueObj = parsed;
            }
            inner(errorObj, valueObj);
        };
    },

    addHeaders: function (req) {
        // TODO: load version from somewhere
        let appVersion = "1.0";
        let userAgent = "Sample iPhone v" + appVersion;
        let locale = 'en-US';

        req = req.accept('application/json');
        req = req.type('application/json');
        req = req.set('User-Agent', userAgent);
        req = req.set('X-CLIENT-VERSION', appVersion);
        req = req.set('X-Sample-User-Agent', userAgent);
        req = req.set('X-LOCALE', locale);
        req = req.set('Authorization', 'APPCODE 2a7623248f794f2cb53fd046b1c6effb');
        return req;
    },

    fetch: function (req, callback) {
        req = this.addHeaders(req);
        // Network.started();
        req.end(this.wrapper(callback));
    },

    url: function (path) {
        if (path) {
            return path;
        }
        // let host = 'http://192.168.0.26:8080/reader/dispatch';//开发
        let host = 'http://192.168.0.37:8040/reader/dispatch';//测试

        return host;
    },

    post: function (path, values, callback) {
        let req = superagent.post(this.url(path));
        req.timeout(30000);
        if (values) {
            req = req.send(values);
        }
        this.fetch(req, callback);
    },

    put: function (path, values, callback) {
        let req = superagent.put(this.url(path));
        if (values) {
            req = req.send(values);
        }
        this.fetch(req, callback);
    },

    get: function (path, params, callback) {
        let req = superagent.get(this.url(path));
        if (params) {
            req = req.query(params);
        }
        this.fetch(req, callback);
    }
};

export default HTTPClient;
