export default function (to, from, next) {
    const isLoggedIn = localStorage.getItem('token');
  
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isLoggedIn) {
        next('/login'); // Redirect ke halaman login jika pengguna belum login
      } else {
        next();
      }
    } else {
      next();
    }
  }