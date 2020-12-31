import { Field, InputType } from "type-graphql";

@InputType()
class CategoryInput { 
  @Field()
  name: string; 
  @Field()
  description: string;
  // @Field()
  // _id: string;
}

export default CategoryInput;