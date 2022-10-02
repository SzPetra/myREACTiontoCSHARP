import React from 'react';
//import { encryptQueryParams, decryptQueryParams } from 'query-string-hash';

const Container = () => {
    //const { encryptQueryParams } = require('query-string-hash')
    //const key = "real secret keys should be long and random"; //Encryption key (optional) should be atleast 16 characters long.

    //const queryParams = 'name=John&&age=22&&number=9876543210'; //query string params which you want to encrypt
    //const hash = encryptQueryParams(queryParams, key)
    const hash = encodeURIComponent('name=John&&age=22&&number=9876543210');
    const s = decodeURIComponent(hash);
    const myUrl = "http://example.com/index.html?param=1&anotherParam=2";
    const myOtherUrl = new URL("http://example.com/index.html");
    myOtherUrl.search = new URLSearchParams({url: myUrl});
    console.log(myOtherUrl.toString());
  return (
    <container>
      {s}
    </container>
  );
};

export default Container;
