import { config } from 'dotenv'
import { DataSource, DataSourceOptions } from 'typeorm'

// Load env variables
config()

export const databaseConfig: DataSourceOptions = {
	type: 'postgres',
	host: process.env.POSTGRES_HOST || 'localhost',
	port: parseInt(process.env.POSTGRES_PORT || '5432'),
	username: process.env.POSTGRES_USER || 'postgres',
	password: process.env.POSTGRES_PASSWORD || 'postgres',
	database: process.env.POSTGRES_DB || 'nestjs',
	entities: ['src/**/*.entity.ts'],
	migrations: ['migrations/*.ts'],
	synchronize: false
}

// This is used by the TypeORM CLI for migrations
const dataSource = new DataSource(databaseConfig)
export default dataSource
