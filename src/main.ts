import {NestFactory} from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import {AppModule} from 'src/app/app.module'
import {HttpErrorFilter} from './helpers/exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new HttpErrorFilter())
  app.use(cookieParser())
  await app.listen(3000)
}

bootstrap()
