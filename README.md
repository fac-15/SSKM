### SSKM

[![Build Status](https://travis-ci.org/fac-15/SSKM.svg?branch=staging)](https://travis-ci.org/fac-15/SSKM)

Database cheatsheet:
https://hackmd.io/yTktI4TtQ825ZKj0x-m4qw?view

### FAC-15 Technologies:

Different software mentioned on the course.

## User journies:

- User can see a grid (flexbox) of everything added to db
- Add entry to db
- When you click on a technology you'll redirect to `/technology/:nameOfTech` to view that specific technology post.

### How to install locally:

1. Clone the project and run `npm install`

2. Create a `config.env` file in the root of the directory

3. Set up a local database on your machine and add the `DB_URL` to the `config.env` file in the format:

```
DB_URL = postgres://username:password@localhost:5432/dbtech
```

4. Alter the database to make your user role the owner

5. Be sure to grant all permissions on the database/tables to the user role you are using

6. Run this code from the command line to build the database:

```
node db/db_build.js
```

7. Enter a secret in the config file in the following format:

```
SECRET = 'your-secret'
```

8. To get things crack-a-lack-in run:

```
npm run dev
```

## Database:

Technologies table `tech`:

- id
- name
- description
- language (can remain empty)
- rating: boolean/ blank: happy face, sad face, neutral
- author

## Stretch goals:

- Sorting alphabetically
- Filtering recommendations
- Search bar
- Login page
- Fonts according to user rating
- Add multiple posts per tech

## To dos:

- [x] Build express server
- [x] Build handlebar `hbs` pages:
  - `home` (ul of all techs)
  - `add-tech` (form)
  - `tech-info` (info about specific tech)
- [ ] Build partials:
  - [x]`header`
  - [ ]`footer`
- [ ] Build helpers: ?
- [ ] Test helpers: ?
- [ ] Build a form for `add-tech`
- [x] Build a local db
- [x] Set up Heroku db + app
- [ ] Testing
  - [x]on local db
  - [partial] routes
- [partial] Set up Travis
- [ ] Set up CodeCov
- [ ] Keep README updated
- [ ] Add README badges:
  - Travis
  - CodeCov
- [ ] Add styling for pages (grid, choosing fonts...)

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
![](https://i.imgur.com/kjU22lX.png)
![](https://i.imgur.com/oTYKFjt.png)

## Fonts

![](https://i.imgur.com/451OYZL.png)
![](https://i.imgur.com/EqRCbeO.png)

```
<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|PT+Sans:400,400i,700,700i" rel="stylesheet">
	.	font-family: 'PT Sans', sans-serif;
	.	font-family: 'Lato', sans-serif;
```
