import { Module } from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { MessagingController } from './messaging.controller';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange',
          type: 'topic',
        },
      ],
      uri: 'amqp://localhost:5672',
      connectionInitOptions: { wait: false },
    }),
  ],
  providers: [MessagingService],
  controllers: [MessagingController],
})
export class MessagingModule {}
