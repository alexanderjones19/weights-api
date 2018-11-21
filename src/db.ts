import { Sequelize } from 'sequelize-typescript';

const sequelize =  new Sequelize({
        database: 'weights_db',
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        username: 'root',
        password: '',
        modelPaths: [__dirname + '/models']
});

sequelize.sync({force: true});

export default sequelize;