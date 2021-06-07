import { Resolver, Mutation, Query, Arg, Field, ObjectType } from 'type-graphql';
import Five from '../models/Five';

@ObjectType()
class FiveType {
  @Field(() => Number)
  _id!: number;

  @Field(() => String)
  sender!: string;

  @Field(() => String)
  reciever!: string;

  @Field(() => String)
  content!: string;
}

@Resolver()
export class FiveResolver {
  @Mutation(() => FiveType)
  async createFive(
    @Arg('sender', () => String) sender: string,
    @Arg('reciever', () => String) reciever: string,
    @Arg('content', () => String) content: string
  ) {
    const five = new Five({ sender: sender, reciever: reciever, content: content });
    await five.save().then(() => console.log(`New Five: ${five}`));
    return five;
  }

  @Query(() => [FiveType])
  async fives(
    @Arg('sender', () => String, { nullable: true }) sender: string | null,
    @Arg('reciever', () => String, { nullable: true }) reciever: string | null
  ) {
    let fives: [FiveType] | null = null;
    console.log(`fives: ${fives}`);
    console.log(`sender: ${sender}`);
    console.log(`reciever: ${reciever}`);
    if (sender !== null && sender !== undefined) {
      fives = await Five.find({ sender: sender });
    } else if (reciever !== null && reciever !== undefined) {
      fives = await Five.find({ reciever: reciever});
    } else {
      fives = await Five.find();
    }
    console.log(fives);
    return fives;
  }
}