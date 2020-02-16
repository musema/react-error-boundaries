import React from 'react';
import { AppFallbackUI } from "./AppFallbackUI";
import { logger } from "../services/logger";

export class AppErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { errorFound: false };
   }

   static getDerivedStateFromError(error) {
      // see the render method below to see how this affects what to be rendered.
      return { errorFound: true };
   }

   componentDidCatch(error) {
      logger.logError(error);
   }

   render() {
     if (this.state.errorFound) {
       return <AppFallbackUI />
     }
     else {
        return this.props.children; 
     }
   }
}

export default AppErrorBoundary;