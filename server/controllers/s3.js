import aws from 'aws-sdk';

aws.config.region = 'eu-central-1';
aws.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
aws.config.secretAccessKey = process.env.AWS_SECRET_KEY_ID;

const S3_BUCKET = process.env.S3_BUCKET || 'gg-file-storage';

export function getSignedRequest(req, res) {
  const s3 = new aws.S3();
  const fileNameArray = req.query.fileName.split('.');
  const beforeDotIndex = fileNameArray.length - 2;

  if (fileNameArray[beforeDotIndex]) {
    fileNameArray[beforeDotIndex] += `_${(+new Date).toString(36)}`;
  }

  const fileName = fileNameArray.join('.');
  const s3Params = {
    Bucket: S3_BUCKET,
    Expires: 60,
    Key: fileName,
    ContentType: req.query.fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.status(200).send(returnData);
    res.end();
  });
}
