import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";

const LatestNews = async () => {
  const { data } = await getAllNews();
  return (
    <Box>
      <Link href={`/${data[0]?.category}/${data[0]?._id}`}>
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image
                src={data[0].thumbnail_url}
                width={800}
                height={500}
                alt="top-news"
              />
            </CardMedia>
            <CardContent>
              <p className="w-32 my-5 text-center rounded bg-red-500 text-white">
                {data[0].category}
              </p>
              <Typography gutterBottom variant="h4" component="div">
                {data[0].title}
              </Typography>
              <Typography gutterBottom component="div" className="my-3">
                By {data[0].author.name} - {data[0].author.published_date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data[0].details.length > 200
                  ? data[0].details.slice(0, 200) + "..."
                  : data[0].details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>

      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        

        {data?.map(news=><Grid key={news._id} items xs={6}>
         <Link href={`/${news?.category}/${news?._id}`}> <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={news.thumbnail_url} width={800} height={100} alt="top-news" />
              </CardMedia>
              <CardContent>
                <p className="w-32 my-5 text-center rounded bg-red-500 text-white">
                  {news.category}
                </p>
                <Typography gutterBottom variant="h6" component="div">
                  {news.title}
                </Typography>
                <Typography gutterBottom component="div" className="my-3">
                  By {news.author.name} - {news.author.published_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {news.details.length > 200
                  ? news.details.slice(0, 200) + "..."
                  : news.details}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card></Link>
        </Grid>)}
      </Grid>
    </Box>
  );
};

export default LatestNews;
