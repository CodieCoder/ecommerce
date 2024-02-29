import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import * as Bcrypt from "bcrypt";
import { saltForBcryptHashing } from "../utils/users/password";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async findOneByEmail(email: string): Promise<User> {
    if (!email) {
      return null;
    } else {
      return await this.userRepository.findOne({
        where: {
          email: email,
        },
      });
    }
  }

  async findOneByPhoneNumber(phoneNumber: string): Promise<User> {
    if (!phoneNumber) {
      return null;
    } else {
      return await this.userRepository.findOne({
        where: {
          phoneNumber: phoneNumber,
        },
      });
    }
  }

  async findOneById(userId: string): Promise<User> {
    if (!userId) {
      return null;
    } else {
      return await this.userRepository.findOne({
        where: {
          id: userId,
        },
      });
    }
  }

  async registerUser(user: CreateUserDto): Promise<boolean> {
    //hash the password
    const hashedPassword = await Bcrypt.hash(
      user.password,
      saltForBcryptHashing
    );

    const newUser = {
      ...user,
      password: hashedPassword,
      registrationDevice: user.userDevice,
      registrationIpAddress: user.userIP,
    };
    const addUser = this.userRepository.create(newUser);
    const savedUser = await this.userRepository.save(addUser);
    if (savedUser) {
      return true;
    } else {
      return false;
    }
  }

  // async findMany(): Promise<User[]> {
  //   const users = await this.userRepository.find()
  //   return users
  // }

  // async createUser(user: CreateUserDto): Promise<User> {
  //   const newUser = new User()
  //   newUser.firstName = user.firstName
  //   newUser.middleName = user.middleName
  //   newUser.lastName = user.lastName
  //   newUser.email = user.email
  //   newUser.password = user.password
  //   newUser.phoneNumber = user.phoneNumber
  //   newUser.gender = user.gender
  //   newUser.country = user.country
  //   newUser.state = user.state
  //   newUser.city = user.city
  //   newUser.postalCode = user.postalCode
  //   return await this.userRepository.save(newUser)
  // }

  // updateOne() {}

  // updateMany() {}
}

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
