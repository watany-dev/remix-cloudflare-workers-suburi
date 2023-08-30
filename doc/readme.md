

## usage

### Ref:
https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/

### Step1 

```bash
npx create-remix@latest
Need to install the following packages:
  create-remix@1.19.3
Ok to proceed? (y) y

npm WARN deprecated @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
? Where would you like to create your app? ./my-remix-app
? What type of app do you want to create? Just the basics
? Where do you want to deploy? Choose Remix App Server if you're unsure; it's easy to change deployment targets. 
Cloudflare Workers
? TypeScript or JavaScript? TypeScript
? Do you want me to run `npm install`? Yes
```

### Step2

```bash
# install CLI
npm install -g wrangler@latest

# API KEY
export CLOUDFLARE_API_TOKEN=<API KEY>

# Deploy
npx wrangler deploy --name <name>
```
