import os

S3_BUCKET                 = os.environ.get("zachbowles.com")
S3_KEY                    = os.environ.get("AKIAI4S4COPJU5O25HUA")
S3_SECRET                 = os.environ.get("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")
S3_LOCATION               = 'http://http://zachbowles.com.s3-website-us-west-2.amazonaws.com/'.format(S3_BUCKET)

SECRET_KEY                = os.urandom(32)
DEBUG                     = True
PORT                      = 5000
