import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Box } from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";
import Grid from "@mui/material/Grid";
const LatestNews = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardMedia>
          <Image alt="top news" src={topNews} width={800} />
        </CardMedia>

        <CardContent>
          <p
            className="
            w-[90px] px-1 bg-red-500 text-white my-5 rounded
        "
          >
            Technology
          </p>
          <Typography gutterBottom variant="h5" component="div">
            Bitcoin climbs as Elon Mask sys tesla likely to accept it again.
          </Typography>
          <Typography gutterBottom className="my-3">
            By- Moshiur Rahman - Jan-09-2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that reader will be distracted by
            readable content of a page when looking at the layout.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image alt="top news" src={topNews2} width={800} />
            </CardMedia>

            <CardContent>
              <p
                className="
            w-[90px] px-1 bg-red-500 text-white my-5 rounded
        "
              >
                Technology
              </p>
              <Typography gutterBottom  component="div">
                Bitcoin climbs as Elon Mask sys tesla likely to accept it again.
              </Typography>
              <Typography gutterBottom className="my-3">
                By- Moshiur Rahman - Jan-09-2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that reader will be distracted by
                readable content of a page when looking at the layout.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image alt="top news" src={topNews2} width={800} />
            </CardMedia>

            <CardContent>
              <p
                className="
            w-[90px] px-1 bg-red-500 text-white my-5 rounded
        "
              >
                Technology
              </p>
              <Typography gutterBottom  component="div">
                Bitcoin climbs as Elon Mask sys tesla likely to accept it again.
              </Typography>
              <Typography gutterBottom className="my-3">
                By- Moshiur Rahman - Jan-09-2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that reader will be distracted by
                readable content of a page when looking at the layout.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image alt="top news" src={topNews2} width={800} />
            </CardMedia>

            <CardContent>
              <p
                className="
            w-[90px] px-1 bg-red-500 text-white my-5 rounded
        "
              >
                Technology
              </p>
              <Typography gutterBottom  component="div">
                Bitcoin climbs as Elon Mask sys tesla likely to accept it again.
              </Typography>
              <Typography gutterBottom className="my-3">
                By- Moshiur Rahman - Jan-09-2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that reader will be distracted by
                readable content of a page when looking at the layout.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image alt="top news" src={topNews2} width={800} />
            </CardMedia>

            <CardContent>
              <p
                className="
            w-[90px] px-1 bg-red-500 text-white my-5 rounded
        "
              >
                Technology
              </p>
              <Typography gutterBottom  component="div">
                Bitcoin climbs as Elon Mask sys tesla likely to accept it again.
              </Typography>
              <Typography gutterBottom className="my-3">
                By- Moshiur Rahman - Jan-09-2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that reader will be distracted by
                readable content of a page when looking at the layout.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
