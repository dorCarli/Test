self.addEventListener('push', function(event) {
  const payload = event.data?.json() || {};
  const title = payload.notification?.title || 'Neue Nachricht';
  const options = {
    body: payload.notification?.body || '',
    icon: '/Promille/icon-192.png', // oder dein eigenes Icon
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});