// Load the SDK for JavaScript
const { config, S3 } = require('aws-sdk');
const { createReadStream } = require('fs');
const { basename } = require('path');

// Set the Region
config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.S3_AWS_REGION,
  s3ForcePathStyle: true
});

// Create S3 service object
const s3 = new S3({ apiVersion: '2006-03-01' });

module.exports = {
  /**
   * Function that returns s3 buckets
   * @param {func} cb - Takes in (err, data)
   */
  listBuckets: (cb) => {
    // Call S3 to list the buckets
    s3.listBuckets((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  },

  /**
   * Creates new s3 bucket
   * @param {String} bucketName - Name of s3 bucket
   * @param {func} cb - Takes in (err, data)
   */
  createBucket: (bucketName, cb) => {
    const bucketParams = {
      Bucket: bucketName,
      CreateBucketConfiguration: {
        LocationConstraint: process.env.S3_AWS_REGION
      }
    };

    s3.createBucket(bucketParams, (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  },

  /**
   * Deletes s3 bucket
   * @param {String} bucketName - Name of s3 bucket
   * @param {*} cb - Takes in (err, data)
   */
  deleteBucket: (bucketName, cb) => {
    const bucketParams = {
      Bucket: bucketName
    };

    s3.deleteBucket(bucketParams, (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  },

  /**
   * Lists items in s3 bucket
   * @param {String} bucketName - Name of s3 bucket
   * @param {*} cb - Takes in (err, data)
   */
  listObjects: (bucketName, cb) => {
    // Create the parameters for calling listObjects
    const bucketParams = {
      Bucket: bucketName
    };

    // Call S3 to obtain a list of the objects in the bucket
    s3.listObjects(bucketParams, (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  },

  /**
   * Uploads object to s3 bucket
   * @param {*} bucketName - Name of s3 bucket
   * @param {*} folder - name of folder for path
   * @param {*} file - file object for upload
   * @param {*} cb - Takes in (err, data)
   */
  uploadObject: (bucketName, folder, file, mime, cb) => {
    const uploadParams = {
      Bucket: bucketName,
      Key: '',
      Body: '',
      ACL: 'public-read',
      ContentType: mime
    };

    const fileStream = createReadStream(file);
    fileStream.on('error', (err) => {
      // eslint-disable-next-line no-console
      console.error('File Error', err);
    });
    uploadParams.Body = fileStream;
    uploadParams.Key = `${folder}/${basename(file)}`;

    // call S3 to retrieve upload file to specified bucket
    s3.upload(uploadParams, (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data); // data.Location
      }
    });
  },

  /**
   * Deletes object form s3 bucket
   * @param {String} bucketName - Name of s3 bucket
   * @param {String} key - file object for upload
   * @param {func} cb - Takes in (err, data)
   */
  deleteObject: (bucketName, key, cb) => {
    const bucketParams = {
      Bucket: bucketName,
      Key: key
    };

    s3.deleteBucket(bucketParams, (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  }
};
