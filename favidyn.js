function setFavicon(favtype){
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    switch (favtype) {
        case 'error':
            link.href = 'favicons/fav-error.ico';
            break;
        case 'active':
            link.href= 'favicons/fav-active.ico';
            break;
        default:
            link.href = 'favicons/fav-default.ico';
    }
    document.getElementsByTagName('head')[0].appendChild(link);
}
