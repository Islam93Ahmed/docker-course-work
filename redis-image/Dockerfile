# use an existing image as base image 
FROM alpine

# download and install a dependency 
RUN apk add --update redis

# tell the image what to do when it starts as container
CMD ["redis-server"]