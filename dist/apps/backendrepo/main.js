/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const app_controller_1 = __webpack_require__(7);
const app_service_1 = __webpack_require__(8);
const config_1 = __webpack_require__(9);
const configuration_1 = tslib_1.__importDefault(__webpack_require__(10));
const database_module_1 = __webpack_require__(11);
const card_module_1 = __webpack_require__(18);
const user_module_1 = __webpack_require__(23);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.development.env',
                isGlobal: true,
                load: [configuration_1.default],
            }),
            database_module_1.DatabaseModule,
            user_module_1.UserModule,
            card_module_1.CardModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(8);
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
let AppService = exports.AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const configurations = () => ({
    port: parseInt(process.env.SERVER_PORT, 10) || 4000,
    database: {
        host: process.env.DATABASE_HOST || '',
        port: parseInt(process.env.DATABASE_PORT) || 5432,
        type: process.env.DATABASE_TYPE || 'postgres',
        password: process.env.DATABASE_PASSWORD || '',
        username: process.env.DATABASE_USERNAME || 'postgres',
    },
});
exports["default"] = configurations;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(9);
const typeorm_1 = __webpack_require__(12);
const configuration_1 = tslib_1.__importDefault(__webpack_require__(10));
const user_entity_1 = __webpack_require__(13);
const card_entity_1 = __webpack_require__(17);
let DatabaseModule = exports.DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [
                    config_1.ConfigModule.forRoot({
                        envFilePath: '.development.env',
                        isGlobal: true,
                        load: [configuration_1.default],
                    }),
                ],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: configService.get('database.type'),
                    host: configService.get('database.host'),
                    port: configService.get('database.port'),
                    password: configService.get('database.password'),
                    username: configService.get('database.username'),
                    // entities: [__dirname + '/../**/*.entity.ts'],
                    entities: [user_entity_1.User, card_entity_1.Card],
                    database: 'appdb',
                    synchronize: true,
                    // logging: true,
                }),
            }),
        ],
    })
], DatabaseModule);


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(15);
const users_constants_1 = __webpack_require__(16);
let User = exports.User = class User extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 55,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 55,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "middleName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 250,
    }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 25,
        unique: true,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 10,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 40,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 65,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "country", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 65,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "state", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 65,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "city", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 8,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "postalCode", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 8,
        nullable: false,
        default: users_constants_1.AccountTypesEnum.Buyer,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "accountType", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "registrationDevice", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 20,
    }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "registrationIpAddress", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "verificationLevel", void 0);
exports.User = User = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], User);


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountTypesEnum = exports.GenderEnum = void 0;
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["Male"] = "male";
    GenderEnum["Female"] = "female";
})(GenderEnum || (exports.GenderEnum = GenderEnum = {}));
var AccountTypesEnum;
(function (AccountTypesEnum) {
    AccountTypesEnum["Trader"] = "trader";
    AccountTypesEnum["Buyer"] = "buyer";
    AccountTypesEnum["Both"] = "both";
})(AccountTypesEnum || (exports.AccountTypesEnum = AccountTypesEnum = {}));


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Card = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(15);
var CardLinkTypeEnum;
(function (CardLinkTypeEnum) {
    CardLinkTypeEnum["Facebook"] = "Facebook";
    CardLinkTypeEnum["Twitter"] = "Twitter";
    CardLinkTypeEnum["LinkedIn"] = "LinkedIn";
    CardLinkTypeEnum["Youtube"] = "Youtube";
    CardLinkTypeEnum["Instagram"] = "Instagram";
    CardLinkTypeEnum["Telegram"] = "Telegram";
    CardLinkTypeEnum["Others"] = "Others";
})(CardLinkTypeEnum || (CardLinkTypeEnum = {}));
var CardTypes;
(function (CardTypes) {
    CardTypes["BusinessCard"] = "BusinessCard";
    CardTypes["ShoppingCard"] = "ShoppingCard";
    CardTypes["AdvertCard"] = "AdvertCard";
})(CardTypes || (CardTypes = {}));
let Card = exports.Card = class Card extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Card.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 10,
    }),
    tslib_1.__metadata("design:type", String)
], Card.prototype, "cardType", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 500,
    }),
    tslib_1.__metadata("design:type", Object)
], Card.prototype, "shopName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 130,
    }),
    tslib_1.__metadata("design:type", Object)
], Card.prototype, "aboutShop", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 500,
    }),
    tslib_1.__metadata("design:type", Object)
], Card.prototype, "background", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 130,
    }),
    tslib_1.__metadata("design:type", Object)
], Card.prototype, "shopAddress", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 130,
    }),
    tslib_1.__metadata("design:type", Object)
], Card.prototype, "logo", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 1000,
    }),
    tslib_1.__metadata("design:type", Object)
], Card.prototype, "links", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
    }),
    tslib_1.__metadata("design:type", Boolean)
], Card.prototype, "enabled", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
    }),
    tslib_1.__metadata("design:type", String)
], Card.prototype, "userId", void 0);
exports.Card = Card = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Card);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const card_service_1 = __webpack_require__(19);
const card_controller_1 = __webpack_require__(21);
const typeorm_1 = __webpack_require__(12);
const card_entity_1 = __webpack_require__(17);
let CardModule = exports.CardModule = class CardModule {
};
exports.CardModule = CardModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([card_entity_1.Card])],
        providers: [card_service_1.CardService],
        controllers: [card_controller_1.CardController],
        exports: [card_service_1.CardService],
    })
], CardModule);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const crud_typeorm_1 = __webpack_require__(20);
const card_entity_1 = __webpack_require__(17);
const typeorm_1 = __webpack_require__(12);
const typeorm_2 = __webpack_require__(15);
let CardService = exports.CardService = class CardService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(cardRepository) {
        super(cardRepository);
        this.cardRepository = cardRepository;
    }
};
exports.CardService = CardService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(card_entity_1.Card)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CardService);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("@dataui/crud-typeorm");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const card_service_1 = __webpack_require__(19);
const crud_1 = __webpack_require__(22);
const card_entity_1 = __webpack_require__(17);
let CardController = exports.CardController = class CardController {
    constructor(service) {
        this.service = service;
    }
};
exports.CardController = CardController = tslib_1.__decorate([
    (0, crud_1.Crud)({
        model: {
            type: card_entity_1.Card,
        },
    }),
    (0, common_1.Controller)({
        path: 'card',
        version: '1',
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof card_service_1.CardService !== "undefined" && card_service_1.CardService) === "function" ? _a : Object])
], CardController);


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("@dataui/crud");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const user_service_1 = __webpack_require__(24);
const user_controller_1 = __webpack_require__(25);
const typeorm_1 = __webpack_require__(12);
const user_entity_1 = __webpack_require__(13);
const email_not_regsitered_rule_1 = __webpack_require__(27);
const duplicatePhoneNumber_validation_1 = __webpack_require__(28);
let UserModule = exports.UserModule = class UserModule {
};
exports.UserModule = UserModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        providers: [user_service_1.UserService, email_not_regsitered_rule_1.EmailExist, duplicatePhoneNumber_validation_1.PhoneNumberExist],
        controllers: [user_controller_1.UserController],
        exports: [user_service_1.UserService],
    })
], UserModule);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const user_entity_1 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(12);
const typeorm_2 = __webpack_require__(15);
let UserService = exports.UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        // super(userRepository)
    }
    async findOneByEmail(email) {
        if (!email) {
            return null;
        }
        else {
            return await this.userRepository.findOne({
                where: {
                    email: email,
                },
            });
        }
    }
    async findOneByPhoneNumber(phoneNumber) {
        if (!phoneNumber) {
            return null;
        }
        else {
            return await this.userRepository.findOne({
                where: {
                    phoneNumber: phoneNumber,
                },
            });
        }
    }
    async registerUser(user) {
        const newUser = {
            ...user,
            registrationIpAddress: user.userIP,
        };
        const addUser = this.userRepository.create(newUser);
        const savedUser = await this.userRepository.save(addUser);
        if (savedUser) {
            return true;
        }
        else {
            return false;
        }
    }
    async loginUser(user) {
        const checkUser = this.userRepository.findOne({
            where: {
                email: user.email,
                password: user.password,
            },
        });
        return checkUser;
    }
};
exports.UserService = UserService = tslib_1.__decorate([
    (0, common_1.Injectable)()
    // export class UserService extends TypeOrmCrudService<User> {
    ,
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserService);
// const newUser = {
// ...user,
// password: hashedPassword,
// firstName: user.firstName,
// lastName: user.lastName,
// middleName: user.middleName,
// email: user.email,
// password: user.password,
// phoneNumber: user.phoneNumber,
// gender: user.gender,
// country: user.country,
// state: user.state,
// city: user.city,
// postalCode: user.postalCode,
// dateOfBirth: user.dateOfBirth,
// registrationIpAddress: user.userIP,
// };


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const user_service_1 = __webpack_require__(24);
const create_user_dto_1 = __webpack_require__(26);
const user_interceptor_1 = __webpack_require__(29);
const Login_user_dto_1 = __webpack_require__(30);
// @Crud({
//   model: {
//     type: User,
//   },
//   // dto: {
//   //   create: CreateUserDto,
//   // },
// })
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    // get base(): CrudController<User> {
    //   return this;
    // }
    // @Override()
    // createOne(
    //   @Request() requestObject: ExpressRequest,
    //   @ParsedRequest() req: CrudRequest,
    //   @ParsedBody() dto: CreateUserDto
    // ) {
    //   console.log("Testee requestObject: ", dto);
    //   // console.log("Testee requestObject: ", requestObject.ip);
    //   return this.base.createOneBase(req, {
    //     ...dto,
    //     registrationIpAddress: requestObject.ip,
    //   } as any);
    // }
    async signUp(user) {
        const didCreate = await this.userService.registerUser(user);
        if (didCreate) {
            return "success";
        }
        else {
            throw new common_1.ServiceUnavailableException("Unable to create account.");
        }
    }
    async login(user) {
        console.log("Testee login controller : ", user);
        const checkUser = await this.userService.loginUser(user);
        if (checkUser) {
            return checkUser;
        }
        else {
            throw new common_1.UnauthorizedException("Invalid email and/or password.");
        }
    }
};
tslib_1.__decorate([
    (0, common_1.Post)("signup"),
    (0, common_1.UseInterceptors)(user_interceptor_1.UserInterceptor),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserController.prototype, "signUp", null);
tslib_1.__decorate([
    (0, common_1.Post)("signin"),
    (0, common_1.UseInterceptors)(user_interceptor_1.UserInterceptor),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof Login_user_dto_1.LoginUserDto !== "undefined" && Login_user_dto_1.LoginUserDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
exports.UserController = UserController = tslib_1.__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)({
        path: "user",
        version: "1",
    })
    // export class UserController implements CrudController<User> {
    ,
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const tslib_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(4);
const email_not_regsitered_rule_1 = __webpack_require__(27);
const class_transformer_1 = __webpack_require__(14);
const duplicatePhoneNumber_validation_1 = __webpack_require__(28);
const users_constants_1 = __webpack_require__(16);
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: 'First name must have atleast 2 characters' }),
    (0, class_validator_1.MaxLength)(30, { message: 'First name can not be more than 30 characters' }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: 'Last name must have atleast 2 characters' }),
    (0, class_validator_1.MaxLength)(30, { message: 'Last name can not be more than 30 characters' }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: 'First name must have atleast 2 characters' }),
    (0, class_validator_1.MaxLength)(30, { message: 'Middle name can not be more than 30 characters' }),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "middleName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide valid email' }),
    (0, class_validator_1.Validate)(email_not_regsitered_rule_1.EmailExist),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsStrongPassword)({ minLength: 8 }, {
        message: 'Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    })
    // @Matches(passwordRegEx, {
    //   message:
    //     "Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    //   // groups: [UPDATE],
    // })
    ,
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.Validate)(duplicatePhoneNumber_validation_1.PhoneNumberExist),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(users_constants_1.GenderEnum, { message: 'Invalid gender' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof users_constants_1.GenderEnum !== "undefined" && users_constants_1.GenderEnum) === "function" ? _a : Object)
], CreateUserDto.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)({ message: 'Invalid date of birth value' }),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "state", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsPostalCode)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "postalCode", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(users_constants_1.AccountTypesEnum, { message: 'Invalid account type' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof users_constants_1.AccountTypesEnum !== "undefined" && users_constants_1.AccountTypesEnum) === "function" ? _b : Object)
], CreateUserDto.prototype, "accountType", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "registrationDevice", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIP)(null, { message: 'Invalid access' }),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "userIP", void 0);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailExist = void 0;
const tslib_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(4);
const user_service_1 = __webpack_require__(24);
let EmailExist = exports.EmailExist = class EmailExist {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async validate(email) {
        if (!this.userRepository)
            return false;
        if (!email)
            return false;
        const user = await this.userRepository.findOneByEmail(email);
        if (user) {
            return false;
        }
        else {
            return true;
        }
    }
    defaultMessage() {
        return "Email is already registered";
    }
};
exports.EmailExist = EmailExist = tslib_1.__decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], EmailExist);
// export function EmailNotRegistered(validationOptions?: ValidationOptions) {
//   return function (object: object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       constraints: [],
//       validator: UserEmailExist,
//     });
//   };
// }


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PhoneNumberExist = void 0;
const tslib_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(4);
const user_service_1 = __webpack_require__(24);
let PhoneNumberExist = exports.PhoneNumberExist = class PhoneNumberExist {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async validate(phoneNumber) {
        if (!this.userRepository)
            return false;
        console.log("Testee I ran!!");
        if (phoneNumber && phoneNumber.length > 8) {
            const user = await this.userRepository.findOneByPhoneNumber(phoneNumber);
            if (user) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        } //return true if phone number is empty. Its not required.
    }
    defaultMessage() {
        return "Phone number is already registered";
    }
};
exports.PhoneNumberExist = PhoneNumberExist = tslib_1.__decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], PhoneNumberExist);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserInterceptor = void 0;
const common_1 = __webpack_require__(3);
class UserInterceptor {
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        if (!req.body) {
            throw new common_1.BadRequestException('Invalid request.');
        }
        else {
            req.body['userIP'] = req.connection.remoteAddress;
            return next.handle();
        }
    }
}
exports.UserInterceptor = UserInterceptor;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginUserDto = void 0;
const tslib_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(4);
class LoginUserDto {
}
exports.LoginUserDto = LoginUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsStrongPassword)({ minLength: 8 }, {
        message: "Invalid password",
    }),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIP)(null, { message: "Invalid access" }),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "userIP", void 0);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(2);
const common_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(4);
const app_module_1 = __webpack_require__(5);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.useGlobalInterceptors(app.get(core_1.Reflector));
    app.setGlobalPrefix('api');
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Api Documentation')
        .setDescription('Api documentation description')
        .setVersion('1.0')
        .addTag('AppBackend')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(4000);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map