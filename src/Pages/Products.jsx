import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button
} from "@mui/material";

import products from "../data/products";

function Products() {
  return (

    <Container sx={{ mt: 5 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        Our Products
      </Typography>

      <Grid container spacing={3}>

        {products.map((product) => (

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={product.id}
          >

            <Card
              sx={{
                borderRadius: 3
              }}
            >

              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.name}
              />

              <CardContent>

                <Typography variant="h6">
                  {product.name}
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  ₹{product.price}
                </Typography>

                <Button
                  variant="contained"

                  href="https://www.instagram.com/myst.icknots/"                  
                  target="_blank"

                  sx={{
                    mt: 2,

                    "&:hover": {
                      transform: "scale(1.05)"
                    }
                  }}
                >
                  Order on Instagram
                </Button>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Container>
  );
}

export default Products;