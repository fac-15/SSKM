### SSKM
[![Build Status](https://travis-ci.org/fac-15/SSKM.svg?branch=staging)](https://travis-ci.org/fac-15/SSKM)

![](https://media.giphy.com/media/1zgzK9wg3xvKeoFUX8/giphy.gif)

### What are you looking at? 

A centralized place where you can add and review different types of technology / software mentioned on the course. 

## User journies: 
![](https://media.giphy.com/media/QMx34qsqgJ8iI/giphy.gif)

- User can see a flexbox grid of everything added to db
- User can add entry to db 
- When you click on a technology you'll redirect to `/technology/:nameOfTech` to view that specific technology post.

### How to view on Heroku

https://sskm-tech.herokuapp.com/

![](https://media.giphy.com/media/NmGbJwLl7Y4lG/giphy.gif)

### How to install locally (so you can run db_tests):

1) Clone the project and run `npm install`

2) Create a `config.env` file in the root of the directory

3) Set up a local database on your machine and add the `DB_URL` to the `config.env` file in the format:
```
DB_URL = postgres://username:password@localhost:5432/techdatabase
```
4) Alter the database to make your user role the owner

5) Be sure to grant all permissions on the database/tables to the user role you are using

6) Run this code from the command line to build the database:
```
node db/db_build.js
```
7) Run your server:
```
npm run dev
```
8) In your browser, navigate to 
```
http://localhost:8001
```

## Database includes: 
![](https://media.giphy.com/media/4J5AbUY4LmagU/giphy.gif)

A technologies table called: `tech`
- id 
- name 
- description
- language (can remain empty)
- rating: boolean/ blank: happy face, sad face, neutral
- author


## Stretch goals: 

![](https://media.giphy.com/media/lxd4kT7RkyxI4/giphy.gif)

- Sorting alphabetically
- Filtering recommendations
- Search bar
- Login page
- Fonts according to user rating
- Add multiple posts per tech

## To dos: 

![](https://media.giphy.com/media/lCB1VDBgnLx3a/giphy.gif)

- [x] Build express server 
- [x] Build handlebar `hbs` pages:
    - `home` (ul of all techs)
    - `add-tech` (form)
    - `tech-info` (info about specific tech)
- [ ] Build partials: 
    - [x]`header`
    - [ ]`footer`
- [ ] Build controllers
    - [x] `get all data` 
    - [x] `get tech data`
    - [x] `post tech data`
- [ ] Build helpers: ? 
- [ ] Test helpers: ?
- [x] Build a form for `add-tech`
- [x] Build a local db 
- [x] Set up Heroku db + app 
- [ ] Testing 
    - [x]on local db 
    - [partial] routes 
- [partial] Set up Travis
- [x] Set up CodeCov
- [ ] Keep README updated 
- [x] Add README badges: 
    - [x] Travis
    - [ ] CodeCov
- [partial] Add styling for pages (grid, choosing fonts...)

## Getting TRAVIS to work with database testing (****WE NEED HELP)

Paste into YML file
```
services:
  - postgresql
  
env:
  - DB=postgres
  - DB_URL=postgres://admin:password@localhost:5432/superbase
  - TEST_DB_URL=postgres://admin:password@localhost:5432/superbaseTest

language: node_js
node_js :
 - "node"
after_success: npm run coverage

before_script:
  - psql -c "CREATE DATABASE superbase;" -U postgres
  - psql -c "CREATE DATABASE superbaseTest;" -U postgres
  - psql -c "CREATE USER admin WITH PASSWORD 'password';" -U postgres
  - psql -c "ALTER DATABASE superbase OWNER TO admin;" -U postgres
  - psql -c "ALTER DATABASE superbaseTest OWNER to admin;" -U postgres

```

## Design Inspiration

![](https://i.imgur.com/FHJP5uj.png)

![](https://i.imgur.com/whLTWs7.png)
Color palette:
#F0F0F0 (background)
#E7D8D4 (light pink)
#EEA095 (medium pink)
#455AFB (blue)


## Potential color palettes

![](https://i.imgur.com/U5Plc8b.png)


## Fonts
![](https://i.imgur.com/451OYZL.png)
![](https://i.imgur.com/EqRCbeO.png)

```
<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|PT+Sans:400,400i,700,700i" rel="stylesheet">
	.	font-family: 'PT Sans', sans-serif;
	.	font-family: 'Lato', sans-serif;
 ```
 
 
 
Database cheatsheet:
https://hackmd.io/yTktI4TtQ825ZKj0x-m4qw?view


# SCHOOLS OUT!
![](https://media.giphy.com/media/xT1Ra6gsLRINatl3s4/giphy.gif)

