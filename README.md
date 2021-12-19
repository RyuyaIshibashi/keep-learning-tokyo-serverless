# Nuxt.js on AWS Lambda

## Versions

- Nuxt.js: 2.15.8
- Node.js: 14.18.2
- Lambda runtime: Node.js 14.x 

## Commands

### Deploy

#### Build & Deploy for API Gateway

Endpoint: API Gateway  
Deploy to: Lambda

```
$ yarn deploy:api_gw
```

#### Build & Deploy for CloudFront

Endpoint: CloudFront  
Deploy to: Lambda, S3

```
$ yarn deploy
```

### Remove Lambda 

```
$ yarn delete
```
