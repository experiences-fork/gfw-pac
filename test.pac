function isMatchProxy(url, pattern) {
    try {
        return new RegExp(pattern.replace('.', '.')).test(url);
    } catch (e) {
        return false;
    }
}

function FindProxyForURL(url, host) {
    debugPAC ="PAC Debug Informationn";
    debugPAC +="-----------------------------------n";
    debugPAC +="Machine IP: " + myIpAddress() + "n";
    debugPAC +="Hostname: " + host + "n";
    if (isResolvable(host)) {
        resolvableHost = "True"
    } else {
        resolvableHost = "False"
    };
    debugPAC += "Host Resolvable: " + resolvableHost + "n";
    debugPAC += "Hostname IP: " + dnsResolve(host) + "n";
    if (isPlainHostName(host)) {
        plainHost = "True"
    } else {
        plainHost = "False"
    };
    debugPAC += "Plain Hostname: " + plainHost + "n";
    debugPAC += "Domain Levels: " + dnsDomainLevels(host) + "n";
    debugPAC += "URL: " + url + "n";
    alert(debugPAC);
    var Proxy = 'SOCKS5 localhost:9090; DIRECT';

    var list = [
        't.co',
        'twitter.com',
        'twimg.com',
        'posterous.com',
        'tinypic.com',
        'twitpic.com',
        'bitly.com',
        'yfrog.com',
        'youtube.com',
        'facebook.com',
        'appspot.com',
        'dropbox.com',
        'flickr.com',
        'youtube.com',
        'ytimg.com',
        'plus.google.com',
        'ggpht.com',
        'talkgadget.google.com',
        'picasaweb.google.com',
        'googleusercontent.com',
        'hzmangel.info',
        'slideshare.net',
        'code.google.com',
        'golang.org',
        'vimeo.com',
        'wordpress.com',
        'dxtl.net',
        'google.com',
        '123cha.com'
    ];

    for(var i=0, l=list.length; i<l; i++) {
        if (isMatchProxy(url, list[i])) {
            alert("Match");
            return Proxy;
        }
    }

    alert("direct");
    return 'DIRECT';
}
