import * as singleSpa from 'single-spa';
import 'reset-css';
import * as NavBarApp from '../navBar/root.js';

singleSpa.registerApplication(
    'nav-bar',
    NavBarApp,
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
