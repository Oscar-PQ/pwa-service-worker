
if ('serviceWorker' in navigator) {
    const isGitHubPages = window.location.hostname.endsWith('github.io');
    const basePath = isGitHubPages
        ? `/${window.location.pathname.split('/').filter(Boolean)[0]}`
        : '';
    const workerUrl = `${basePath}/sw.js`;

    window.addEventListener('load', () => {
        navigator.serviceWorker.register(workerUrl, {
            scope: `${basePath}/`
        });
    });
}