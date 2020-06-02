
export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-uploads-felicia"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://43b8svpcx4.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_ZZFmKQI37",
      APP_CLIENT_ID: "3i6g9ujuamh2m7gg6np3ci6145",
      IDENTITY_POOL_ID: "us-east-1:1fde2c5b-4e92-4b63-816c-ae4a9309d0b5"
    }
  };