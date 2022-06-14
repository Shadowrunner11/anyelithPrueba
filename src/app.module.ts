import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';
import { CategoryModule } from './category/category.module';
import {} from 'dotenv/config'
@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGU_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }),
    QuestionsModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}