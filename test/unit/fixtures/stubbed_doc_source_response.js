define(function (require) {
  function stubbedDocSourceResponse(Private) {
    var mockLogstashFields = Private(require('fixtures/logstash_fields'));

    return function (id) {
      return {
        _id: id,
        _index: '.kibana',
        _type: 'index-pattern',
        _version: 2,
        found: true,
        _source: {
          customFormats: '{}',
          fields: JSON.stringify(mockLogstashFields)
        }
      };
    };
  }

  return stubbedDocSourceResponse;
});