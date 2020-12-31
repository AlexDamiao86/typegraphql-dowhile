import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class Category { 
  @Field()
  name: string; 
  @Field()
  description: string;
  @Field(type => ID)
  _id: string;
}

export default Category;