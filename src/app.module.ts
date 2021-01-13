import { JwtMiddleware } from './auth/jwt.middleware';
import { User } from './user/entities/user.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PodcastsModule } from './podcast/podcasts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Podcast } from './podcast/entities/podcast.entity';
import { Episode } from './podcast/entities/episode.entity';
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite3',
      synchronize: true,
      logging: true,
      entities: [Podcast, Episode, User],
    }),
    GraphQLModule.forRoot(
      { 
        autoSchemaFile: true, 
        context:({req})=>({
          user: req['user']}) 
      }
    ),
    PodcastsModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer.apply(JwtMiddleware).forRoutes({path:'/graphql', method:RequestMethod.POST})
  }
}
