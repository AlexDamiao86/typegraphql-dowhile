import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Category from "./Category";
import CategoryInput from "./CategoryInput";
import CategorySchema from "../../models/CategorySchema";

@Resolver(Category)
class CategoryResolver { 

  @Query(() => [Category])
  async categories() {
    const categories = await CategorySchema.find();
    return categories;
  }

  @Mutation(() => Category)
  async createCategory(
    @Arg("categoryInput") categoryInput: CategoryInput
  ) {
    const category = await CategorySchema.create(categoryInput);
    return category;
  }
}

export default CategoryResolver;