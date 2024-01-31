import { Inject, Injectable } from '@nestjs/common';
import {
    REDIS_PUBLISHER_CLIENT,
    REDIS_SUBSCRIBER_CLIENT,
} from './redis.constants';
// import { RedisClient } from './redis.provider';
import { Redis } from 'ioredis';

export interface RedisSubscribeMessage {
    readonly message: string;
    readonly channel: string;
}

@Injectable()
export class RedisService {
    public constructor(
        @Inject(REDIS_SUBSCRIBER_CLIENT)
        private readonly redisSubscriberClient: Redis,
        @Inject(REDIS_PUBLISHER_CLIENT)
        private readonly redisPublisherClient: Redis,
    ) { }
}
