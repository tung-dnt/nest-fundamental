import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AppController} from 'src/app/app.controller'
import {AppService} from 'src/app/app.service'
import {TodoModule} from 'src/app/todo/todo.module'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '100122',
    database: 'nest_fundamental',
    synchronize: true,
    entities: ['__dirname/db/entities/*.entity.ts'],
    subscribers: ['__dirname/db/subscribers/*.ts'],
    migrations: ['__dirname/db/migrations/*.ts'],
    autoLoadEntities: true,
  }),
  TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
