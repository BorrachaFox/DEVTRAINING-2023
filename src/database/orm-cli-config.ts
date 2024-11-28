import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1732581224903 } from 'src/migrations/1732581224903-CreateCoursesTable';
import { CreateTagsTable1732587511273 } from 'src/migrations/1732587511273-CreateTagsTable';
import { CreateCoursesTagsTable1732621474753 } from 'src/migrations/1732621474753-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1732621735219 } from 'src/migrations/1732621735219-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1732625350920 } from 'src/migrations/1732625350920-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1732581224903,
    CreateTagsTable1732587511273,
    CreateCoursesTagsTable1732621474753,
    AddCoursesIdToCoursesTagsTable1732621735219,
    AddTagsIdToCoursesTagsTable1732625350920,
  ],
});
