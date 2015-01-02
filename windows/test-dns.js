var dns = require('dns');

dns.lookup('www.google.com', function onLookup(err, addresses, family) {
    console.log('addresses:', addresses);
});

dns.resolveNs('jubelkue.com', function(err, ns){
    if (err) throw err;
    //console.log(ns);
    ns.forEach(function (n) {
        console.log(n);
    });
});