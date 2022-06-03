import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import useStyles from '../styles'

const Cards = () => {
  const classes = useStyles()
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <div className={classes.container}>
        <Container maxWidth='sm'>
          <Typography
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Photo album
          </Typography>

          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
          >
            Hello everyone! This is a photo album and I'm trying to make this
            sentence as long as posible so we can see howdoes it look like on
            the screen.
          </Typography>

          <div className={classes.buttons}>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item>
                <Button variant='contained' color='primary'>
                  See my photos
                </Button>
              </Grid>

              <Grid item>
                <Button variant='outlined' color='primary'>
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://source.unsplash.com/random'
                  title='Image title'
                />

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5'>
                    Heading
                  </Typography>

                  <Typography gutterBottom variant='h5'>
                    This is a media card. You can use this section to describe
                    the content
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size='small' color='primary'>
                    View
                  </Button>
                  <Button size='small' color='primary'>
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Cards
