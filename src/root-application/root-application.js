import * as singleSpa from 'single-spa';
import 'reset-css';

singleSpa.registerApplication(
    'nav-bar',
    () => import ('../navBar/root.js'),
    (location) => true
);

singleSpa.registerApplication(
    'app-1',
    () => import ('../app1/root.js'),
    (location) => location.pathname.startsWith('/app1')
);

singleSpa.registerApplication(
    'app-2',
    () => import ('../app2/root.js'),
    (location) => location.pathname.startsWith('/app2')
);

singleSpa.start();
