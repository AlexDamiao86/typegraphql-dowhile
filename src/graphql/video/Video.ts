
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class Video { 
  @Field()
  name: string; 
  @Field()
  description: string;
  @Field()
  category: string;
  @Field(type => ID)
  _id: string;
}

export default Video;