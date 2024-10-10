//ServiceWorker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}

window.addEventListener('load', function() {
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        document.getElementById('installguide').style.display = 'none';
    }
});

//SideBar
