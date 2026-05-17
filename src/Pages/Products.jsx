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

                  href="https://wa.me/919999999999"
                  target="_blank"

                  sx={{
                    mt: 2,

                    "&:hover": {
                      transform: "scale(1.05)"
                    }
                  }}
                >
                  Order Now
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