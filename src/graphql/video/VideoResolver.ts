import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Video from "./Video";
import VideoInput from "./VideoInput";
import VideoSchema from "../../models/VideoSchema";

@Resolver(Video)
class VideoResolver { 

  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find();
    return videos;
  }

  @Mutation(() => Video)
  async createVideo(
    @Arg("videoInput") videoInput: VideoInput
  ) {
    const video = await VideoSchema.create(videoInput);
    return video;
  }
}

export default VideoResolver;