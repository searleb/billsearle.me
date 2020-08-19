export default (req, res) => {
  const codes = {
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status (WebDAV)',
    208: 'Already Reported (WebDAV)',
    226: 'IM Used (HTTP Delta encoding)',
    300: 'Multiple Choice',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbibben',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'No Acceptable',
    407: 'Proxy Authenication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I\'m a teapot',
    421: 'Misdirected Request',
    422: 'Unprocessable Entity (WebDAV)',
    423: 'Locked',
    424: 'Failed Dependency (WebDAV)',
    425: 'Too Early',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage (WebDAV)',
    508: 'Loop Detected (WebDAV)',
    510: 'Not Extended',
    511: 'Network Authentication Required',
  };

  const { query } = req;
  const mdn = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status';
  const response = {
    mdn,
  };
  if (!query.status) {
    response.message = 'Provide a status query param to set the response code. eg: ?status=503. All other params will also be returned. eg: &data=some-data';
  } else if (query.status < 200) {
    query.status = 200;
    response.error = 'Informational status (1**) not supported';
  } else if (query.status in codes === false) {
    query.status = 500;
    response.error = 'Invalid HTTP Status Code';
  } else if (query.status in codes) {
    response.statusText = codes[query.status];
    response.mdn = `${mdn}/${query.status}`;
  }

  res
    .status(query.status || 200)
    .send(JSON.stringify({ ...response, ...query }));
};
