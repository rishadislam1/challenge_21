import { getSingleNews } from '@/utils/getSingleNews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async({params}) => {
    const {data:news} = await getSingleNews(params.newsId);
    
    return (
        <Box>
           <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} width={800} height={500} alt={news.title}/>
                        <Grid container spacing={2} className='mt-3'>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} width={800} height={500} alt={news.title}/>
                        
                    </Grid>

                    <Grid item lg={6}>
                    <Image src={news.image_url} width={800} height={500} alt={news.title}/>
                    </Grid>
                </Grid>

                    </Grid>

                    <Grid item lg={6}>
                        <Typography variant='h5' component='h2'>{news.title}</Typography>
                        <Box sx={{
                            display: "flex",
                            gap: 3,
                            alignItems: 'center'
                        }}>
                        <Avatar alt="Remy Sharp" src={news.author.img} />
                        <Typography>By {news.author.name}</Typography>
                        <Typography>Publish {news.author.published_date}</Typography>
                        </Box>

                        <Typography className='mt-5 whitespace-pre-line text-gray-500'>Publish {news.details}</Typography>
                    </Grid>
                </Grid>
           </Container>
        </Box>
    );
};

export default NewsDetailsPage;