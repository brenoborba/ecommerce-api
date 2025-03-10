import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import dataSource from './config/database.config'
import { UsersModule } from './users/users.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync(dataSource),
		UsersModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
