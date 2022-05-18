<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com//OlssonLukas/Flappy_Cloud/">
    <img src="./Flappy_Cloud/frontend/resources/birdScout.gif" alt="Logo" width="120" height="120">
  </a>

<h3 align="center">FLAPPY CLOUD</h3>

  <p align="center">
    A cloud hosted web game that collects game data and analyzes user interactions with the game. 
    <br />
    <a href="https://github.com//OlssonLukas/Flappy_Cloud/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://flappycloud.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com//OlssonLukas/Flappy_Cloud/issues">Report Bug</a>
    ·
    <a href="https://github.com//OlssonLukas/Flappy_Cloud/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://flappycloud.herokuapp.com/)

<br>
<br>
This is a project for cloud development course DA376E in HKR. The project is exploring how to develop for the cloud, deploying and hosting applications using the cloud provider Heroku. This project is a web based game that collects statistics from every signed in user. Statistics such as amount of clicks, playtime and score are gathered and analyzed to be displayed for the users. Data security and collection has been highly considered and an ACL list is implemented to assure that no unauthorized user can view data from other users. 
<br>
<br>
The project is hosted by Heroku and uses PostgreSQL to save and persist data. The backend consists of an API that supports users, metrics, and authentication. The API is accessible as a remote service, but only some routes as open for visitors that are not signed in to the application. When connected to the internet, the frontend does calls to the API in order to communicate with the backend and database. Calls like update the user score or get an average of all playtime. If there is no internet connection, the statistics are locally cached in the user's browser engine to then be deployed to the backend and cloud hoster when connection to the internet is re-established. 

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Knex.js](https://knexjs.org/)
* [Docker](https://www.docker.com/)
* [Heroku](https://heroku.com/)
* [Express.js](https://expressjs.com/)
* [PostegreSQL](https://postgresql.org)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/OlssonLukas/Flappy_Cloud.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the node server
   ```sh
   npm start
   ```

The game is now running on localhost port 5001 [[Localhost port 5001]][localhost-url]

<p align="right">(<a href="#top">back to top</a>)</p>





<!-- USAGE -->
## Usage

To use the game, simply browse to the web site and sign up as a user. You can still play the game if you are not signed in, but you can not keep track of your highscore or compare your scores to other players. Each game session and its data will be deleted if you are not signed in. It is free to sign up and play the game and you can even play the game offline if you are signed in as a user. 

[[Take me to the game]][game-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Lukas Olsson - olssonlukas@yahoo.com 
<br>
[![LinkedIn][linkedin-shield]][linkedin-url-lukas]

Fanny Söderlund - fannysarasoderlund@gmail.com
<br>
[![LinkedIn][linkedin-shield]][linkedin-url-fanny]

<p align="right">(<a href="#top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
[issues-shield]: https://img.shields.io/github/issues/OlssonLukas/Flappy_Cloud.svg?style=for-the-badge
[issues-url]: https://github.com/OlssonLukas/Flappy_Cloud/issues
[license-shield]: https://img.shields.io/github/license/OlssonLukas/Flappy_Cloud.svg?style=for-the-badge
[license-url]: https://github.com/OlssonLukas/Flappy_Cloud/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-lukas]: https://linkedin.com/in/lukas-olsson-64b54a224
[linkedin-url-fanny]: https://linkedin.com/in/fannysarasoderlund
[product-screenshot]: ./Flappy_Cloud/frontend/resources/demo.png
[game-url]: https://flappycloud.herokuapp.com/
[localhost-url]: http://localhost:5001/