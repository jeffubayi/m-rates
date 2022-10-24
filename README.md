## M-rates

Calculate Safaricom M-PESA transaction charges and fees for sending money and withdrawing money from MPESA Agents & ATMs.


### Technology

-  Nextjs
-  Material UI
-  Typescript

### How to run the app locally

```bash
# Checkout to the current branch
  git clone https://github.com/jeffubayi/m-rates

# install dependencies
  yarn 

# start the app locally
  yarn dev
```

## Features

- Send and withdraw cost 
- Lipa na mpesa cost
- Other charges i.e fuliza ,mshwari
- Mobile responsive view

## Tests
To test if any requests and responses are fetched from the mpesa api endpoint
i.e Ksh 100

### get send and Withdraw costs:

 https://m-rates.vercel.app/api/sendAndWithdraw?amount=100
 
### get lipa na mpesa costs :

  https://m-rates.vercel.app/api/lipaNaMpesa?amount=100
  


