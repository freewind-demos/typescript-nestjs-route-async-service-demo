import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(name: string): Promise<string> {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`Hello ${name}!`);
      }, 1000);
    })
  }
}
