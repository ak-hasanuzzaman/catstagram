import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  handleError(error: Error) {
    console.log(error);
  }
}
