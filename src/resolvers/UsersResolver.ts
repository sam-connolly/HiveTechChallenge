import { Query, Resolver } from 'type-graphql';

const users: object[] = [
  {  "firstName": "John", "surname": "Smith", "username": "JSmith" },
  {  "firstName": "Jane", "surname": "Doe", "username": "JDoe" },
  {  "firstName": "Adam", "surname": "Black", "username": "ABlack" },
  {  "firstName": "Emily", "surname": "Crown", "username": "ECrown" }
];

@Resolver()
export class UsersResolver {
  @Query(() => Array)
  users() {
    return users;
  }
}