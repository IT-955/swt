import router from './router';
import loginApi from './api/login';

router.beforeEach(async (to, from, next) => {
    if (to.path == '/login') {
        next();
    } else {
        let token = localStorage.getItem('swt100-token');
        if (token != null && token != '') {
            let p = await loginApi.getUserInf(token);
            if (p.data.flag) {
                next();
            } else {
                next('/login');
            }
        } else {
            next('/login');
        }
    }
})