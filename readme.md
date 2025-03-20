
# EBUDDY - David Valentino


## How to run project

project was created with node 22
#### For the challenge 
>[!QUOTE] 
>Make FE repo able to test API calling locally using Firebase Emulator if I  
  `run npm run build && firebase emulators:start --only functions` on BE repo

 i have added `--only functions,firestore` 

> `npm i `
> `turbo firebaseFunctionOnlyChallenge` 

frontend is served at `http://localhost:3000`
backend is served at `http://127.0.0.1:5009/demo-ebuddy/asia-east1/api`


## Bonus Firebase technical questions answer

### How do you ensure that the 'recently active' is remains updated

the sweet spot between requirement and performance consideration is to update on create/refresh jwt token


### Criteria

to give the ultimate scoring towards a user by some set of criteria, we can use `multiplication factor by 10` for each of the criteria. The higher the priority will be multiplied by bigger factor

#### 1. Total Average Weight
the highest priority, but also having the smallest  maximum number among other criteria (max out of 5) hence need to be multiplied by factor of `10 000`

#### 2. Numbers of rent
this criteria could be having uncapped maximum number, hence to be multiplied by factor of `2`

#### 3. Recently active
This criteria is unique because we get the big integer number. hence to get accurate scoring, what we can do is to get the `hour difference to now`. Since the criteria is the smaller the better thus this become a penalty and a deduction

### example
``` json
// USER A
{
  totalAverageWeightRatings: 4.3,  
  numberOfRents: 30,
  hourDifferenceLogin: 5
}
```
User A = (4.3 * 10000) + (30 * 2) - 5 =  **43 055**

``` json
// USER B
{
  totalAverageWeightRatings: 4.3,  
  numberOfRents: 45,
  hourDifferenceLogin: 100
}
```
User B = (4.3 * 10000) + (45 * 2) - 100 =  **42 990**

although user B have more rent but he was not active thus User A still win

