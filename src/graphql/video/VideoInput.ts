import { Field, InputType } from "type-graphql";

@InputType()
class VideoInput { 
  @Field()
  name: string; 
  @Field()
  description: string;
  @Field()
  category: string;
  // @Field()
  // _id: string; 
}

export default VideoInput;