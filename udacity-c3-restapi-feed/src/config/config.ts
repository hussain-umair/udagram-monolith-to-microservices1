export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DB,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_reigion": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_BUCKET
    // "username": "umair",
    // "password": "umairhussain",
    // "database": "cdrdb",
    // "host": "cdr.c3elwqveng6j.us-east-1.rds.amazonaws.com",
    // "dialect": "postgres",
    // "aws_reigion": "us-east-1",
    // "aws_profile": "default",
    // "aws_media_bucket": "test-microservices-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
console.log('postgresshost=> ',process.env.POSTGRESS_HOST)
