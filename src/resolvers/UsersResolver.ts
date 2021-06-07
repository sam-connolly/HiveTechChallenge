import { Resolver, Mutation, Query, Arg, Field, ObjectType } from 'type-graphql';
import User from '../models/User';

@ObjectType()
class UserType {
  @Field(() => Number)
  _id!: number;

  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  surname!: string;

  @Field(() => String)
  username!: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => UserType)
  async createUser(
    @Arg('firstName', () => String) firstName: string,
    @Arg('surname', () => String) surname: string,
    @Arg('username', () => String) username: string
  ) {
    const user = new User({ firstName: firstName, surname: surname, username: username });
    await user.save().then(() => console.log(`New user: ${user}`));
    return user;
  }

  @Query(() => [UserType])
  async users(
    @Arg('username', () => String, { nullable: true }) username: string | null
  ) {
    let users: [UserType] | null = null;
    console.log(`users: ${users}`);
    console.log(`username: ${username}`);
    if (username !== null && username !== undefined) {
      users = await User.find({ username: username });
    }else {
      users = await User.find();
    }
    console.log(users);
    return users;
  }
}