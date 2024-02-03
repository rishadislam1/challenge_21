import { getCategoryNews } from '@/utils/getCategoryNews';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async({searchParams}) => {
    const {data} = await getCategoryNews(searchParams.category);

    return (
        <div className='my-5'>
           Total <strong>{searchParams.category}</strong> news : {data.length}

           <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
      >
      

        {data?.map(news=>(
  <Grid items xs={6} key={news.id} >
 <Link href={`/${news.category}/${news._id}`}> <Card>
    <CardActionArea>
      <CardMedia sx={{
        "& img":{
            width: "100%",
            height: "250px"
        }
      }}>
        <Image src={news.thumbnail_url} width={800} height={100} alt="top-news" />
      </CardMedia>
      <CardContent>
        <p className="w-32 my-5 text-center rounded bg-red-500 text-white">
          {news.category}
        </p>
        <Typography gutterBottom variant="h6" component="div">
          {news.title.length>30?news.title.slice(0,30)+"....":news.title}
        </Typography>
        <Typography gutterBottom component="div" className="my-3">
         by {news.author.name} - {news.author.published_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {news.details.length>200?news.details.slice(0,200)+"....":news.details}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></Link>
</Grid>
        ))}

      </Grid>
        </div>
    );
};

export default DynamicNewsPage;