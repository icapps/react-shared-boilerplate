import Network from './Network';

describe('Network component', () => {
  describe('getUrl', () => {
    it('should return the url if it starts with https', () => {
      const url = 'https://www.validUrl.com';
      const processedUrl = Network.getUrl(url);
      expect(url).toEqual(processedUrl);
    });

    it('should return the url if it starts with http', () => {
      const url = 'http://www.validUrl.com';
      const processedUrl = Network.getUrl(url);
      expect(url).toEqual(processedUrl);
    });

    it('should return the url if it starts with www', () => {
      const url = 'www.validUrl.com';
      const processedUrl = Network.getUrl(url);
      expect(url).toEqual(processedUrl);
    });
  });

  describe('getUrlWithParams', () => {
    it('should return the url if it was set using setHost and 1 params', () => {
      const route = '/thisIsARoute';
      Network.setHost('https://host.com/');
      const processedUrl = Network.getUrlWithParams(route, { name: 'Jan' });
      expect(processedUrl).toEqual(`https://host.com/${route}?name=Jan`);
    });

    it('should return the url if it was set using setHost and 2 params', () => {
      const route = '/thisIsARoute';
      Network.setHost('https://host.com/');
      const processedUrl = Network.getUrlWithParams(route, { name: 'Jan', id: '1223' });
      expect(processedUrl).toEqual(`https://host.com/${route}?name=Jan&id=1223`);
    });

    it('should return the url if it was set using setHost and undefined', () => {
      const route = '/thisIsARoute';
      Network.setHost('https://host.com/');
      const processedUrl = Network.getUrlWithParams(route, undefined);
      expect(processedUrl).toEqual(`https://host.com/${route}`);
    });
  });

  describe('basicHeaders', () => {
    let headers = {};

    const testBasicHeaders = () => {
      const applicationJson = 'application/json';

      expect(headers['Content-Type']).toEqual(applicationJson);
      expect(headers.Accept).toEqual(applicationJson);
    };

    it('should return a headers object.', () => {
      headers = Network.basicHeaders();
      testBasicHeaders();
    });
  });

  describe('errorHandler', () => {
    it('should throw an error when nothing is passed through', () => {
      const sampleErrorMessage = 'Syntax error';
      const errorThrower = () => Network.errorHandler({ message: sampleErrorMessage });
      expect(errorThrower).toThrow();
    });

    it('should throw an error when nothing is passed through', () => {
      const sampleErrorMessage = 'Request error';
      const errorThrower = () => Network.errorHandler({ request: sampleErrorMessage });
      expect(errorThrower).toThrow();
    });

    it('should throw an error when nothing is passed through', () => {
      const sampleErrorMessage = 'Response error';
      const errorThrower = () => Network.errorHandler({ response: sampleErrorMessage });
      expect(errorThrower).toThrow();
    });
  });

  describe('requests', () => {
    const testRequest = promise => {
      promise.then(data => {
        expect(data.response.status).toEqual('200');
        expect(data.response.message).toEqual('success');
      });
    };

    const testErrRequest = promise => {
      promise.catch(err => {
        expect(err.errors[0].meta).toEqual('This is a mocked error response');
      });
    };

    describe('get', () => {
      it('should perform a get request and return a success message', () => {
        const getResp = Network.get('/test');
        testRequest(getResp);
      });

      it('should perform a get request and throw an error', () => {
        const getResp = Network.get('https://err');
        testErrRequest(getResp);
      });
    });

    describe('put', () => {
      it('should perform a put request and return a success message', () => {
        const putResp = Network.put('/test');
        testRequest(putResp);
      });

      it('should perform a put request and throw an error', () => {
        const putResp = Network.put('https://err');
        testErrRequest(putResp);
      });
    });

    describe('post', () => {
      it('should perform a post request and return a success message', () => {
        const postResp = Network.post('/test');
        testRequest(postResp);
      });

      it('should perform a post request and throw an error', () => {
        const postResp = Network.post('https://err');
        testErrRequest(postResp);
      });
    });

    describe('delete', () => {
      it('should perform a delete request and return a success message', () => {
        const deleteResp = Network.delete('/test');
        testRequest(deleteResp);
      });

      it('should perform a delete request and throw an error', () => {
        const deleteResp = Network.delete('https://err');
        testErrRequest(deleteResp);
      });
    });
  });
});
