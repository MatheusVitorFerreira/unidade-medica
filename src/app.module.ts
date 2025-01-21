import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionalModule } from './modules/regional/regional.module';
import { ClinicaModule } from './modules/clinica/clinica.module';
import { EspecialidadesMedicaModule } from './modules/especialidades_medica/especialidades_medica.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env', 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity.{js,ts}'],
        synchronize: true,
      }),
    }),
    RegionalModule,
    ClinicaModule,
    EspecialidadesMedicaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
