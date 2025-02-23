import { IsOptional, IsString } from "class-validator";

export class CreateBlogDto {
  @IsString()
  slug: string;

  @IsString()
  imageURL: string;

  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsString()
  description: string;

  @IsString()
  long_description: string;

  @IsString()
  isShowHomepage: string;

  @IsString()
  status: string;

  @IsString()
  seo_title: string;

  @IsString()
  seo_description: string;

  @IsString()
  postBy: string;
}
