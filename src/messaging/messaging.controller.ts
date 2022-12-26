import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Controller, Post } from '@nestjs/common';

@Controller('messaging')
export class MessagingController {
  constructor(private readonly amqpConnection: AmqpConnection) {}
  @Post('')
  async send() {
    const response = await this.amqpConnection.request({
      exchange: 'exchange',
      routingKey: 'key',
      payload: {
        request: 'val',
      },
      //  timeout: 10000, // optional timeout for how long the request
      // should wait before failing if no response is received
    });
    this.amqpConnection.publish('exchange', undefined, {});
  }
}
