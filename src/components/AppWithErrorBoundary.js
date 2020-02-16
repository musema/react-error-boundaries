import React from 'react';
import AppErrorBoundary from './AppErrorBoundary';
import App from './App';


export const AppWithErrorBoundary = () => <AppErrorBoundary> 
                                            <App/>
                                          </AppErrorBoundary>
            