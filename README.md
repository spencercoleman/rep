<p align="center">
    <h1 align="center">Reps</h1>
</p> 
<p align="center">
  Create and manage workouts, track activity stats, and improve your form and fitness using a database of information on resistence exercises.
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/84942739/183560857-5bfd0684-d243-4b5d-b376-1bd725135c13.png" />
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/84942739/183560948-589dae56-8fb9-4967-bb92-345745bf93b5.png" />
</p>

## Set up MongoDB Atlas

1. Create a new project on [MongoDB Atlas](https://cloud.mongodb.com/).
2. Build a new Database using the Shared cluster and configure the settings to your liking.
3. Create the cluster and configure the authentication settings as well. Ensure that you add your IP Address to the Access List.
4. After finishing the cluster set up, click Connect and Connect your application.
5. Copy the connection string and close.

## Set up and run the app
1. Create a `.env` file at the root of the project.
```shell
touch .env
```

2. Add the saved connection string from the MongoDB Atlas dashboard.
```env
DB_URI=
```

3. Add a PORT variable and a SECRET variable to the `.env` file as well. The PORT variable will determine the server port. The SECRET variable is a random string used to sign and verify JSON web tokens.
```env
PORT=
SECRET=
```

4. Install dependencies
```shell
npm install
```

5. Run the Node server using the port entered previously
```shell
npm run server

```
5. Run the client on <http://localhost:3000>
```shell
npm run client
```

## Made With
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Dotenv](https://github.com/motdotla/dotenv#readme)
- [Express](https://expressjs.com/)
- [JSON Web Tokens](https://jwt.io/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
