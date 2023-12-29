import { UserDto } from "../../users/dto/user.dto";
import { User } from "../../users/entities/user.entity";

/**
 *@description a helper function to extract relevant user data from User object
 * @param data : This is the User object
 * @returns user data based on the UseDto class
 */

export const toUserDto = (data: User): UserDto => {
  const {
    id,
    firstName,
    lastName,
    middleName,
    email,
    phoneNumber,
    gender,
    dateOfBirth,
    country,
    state,
    city,
    postalCode,
    accountType,
  } = data;
  let userDto: UserDto = {
    id,
    firstName,
    lastName,
    middleName,
    email,
    phoneNumber,
    gender,
    dateOfBirth,
    country,
    state,
    city,
    postalCode,
    accountType,
  };
  return userDto;
};
