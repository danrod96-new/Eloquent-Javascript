import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* Modern JavaScript applications can be quite huge in terms of bundle size. You don’t want your users to have to 
 * download a 1MB package of JavaScript (your code and the libraries you use) just to load the first page, right? 
 * But this is what happens by default when you ship a modern Web App built with Webpack bundling.

 * That bundle will contain code that might never run because the user only stops on the login page and never sees 
 * the rest of your app.
 * Code splitting is the practice of only loading the JavaScript you need the moment when you need it.
 */

/* This improves:
 * - the performance of your app
 * - the impact on memory, and so battery usage on mobile devices
 * -the downloaded KiloBytes (or MegaBytes) size
 * React 16.6.0, released in October 2018, introduced a way of performing code splitting that should take the place of every previously used tool or library: React.lazy and Suspense. */

/* Let’s start with React.lazy. You use it to import any component: */

const TodoList = React.lazy(() => import('./Todolist'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

