<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  
  <h1>Simple To Do App</h1>
  <p align="center">
    <a href="https://github.com/KhairulAminShabudin/simple-to-do"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://kas-to-do-app.herokuapp.com/">View Demo</a>
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
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/KhairulAminShabudin/simple-to-do)


A simple to-do list web application.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Express](https://expressjs.com/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started



### Prerequisites


#### ReactJS, Tailwind CSS, Express, Prisma

- NodeJS
- Any code editor e.g. VSC, Atom


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/KhairulAminShabudin/simple-to-do
   ```
2. Download and Install the latest version of [PostgreSQL](https://www.postgresql.org/download/)
3. Install all dependencies by running the code below in your VS Code terminal
   ```node
   npm run install-all
   ```
4. Create `.env` file in root folder and store the following informations
   ```Js
	  PORT=YOUR DESIRED RUN PORT
    
   DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/DATABASE_NAME?schema=SCHEMA_NAME"
   ```
5. Setup for Prisma
   1. Run the following command in your VS Code terminal
   ```node
   npx prisma migrate dev --name init
   ```
   2. [Optional] Open Prisma Studio by running the following in the terminal
   ```node
   npx prisma studio
   ```
6. Start the backend server
   1. Run the following in VS Code terminal
   
   ```node
   npm start
   ```

7. Launch web application
   1. Go to the `client` directory in by running the following command in the terminal:
   ```node
   cd client
   ``` 
   2. Launch web server
   ```node
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Khairul Amin Shabudin - khairulaminshabudin@gmail.com

Project Link: [Simple To Do App](https://github.com/KhairulAminShabudin/simple-to-do)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/KhairulAminShabudin/simple-to-do.svg?style=for-the-badge
[contributors-url]: https://github.com/KhairulAminShabudin/simple-to-do/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/KhairulAminShabudin/simple-to-do.svg?style=for-the-badge
[forks-url]: https://github.com/KhairulAminShabudin/simple-to-do/network/members
[stars-shield]: https://img.shields.io/github/stars/KhairulAminShabudin/simple-to-do.svg?style=for-the-badge
[stars-url]: https://github.com/KhairulAminShabudin/simple-to-do/stargazers
[issues-shield]: https://img.shields.io/github/issues/KhairulAminShabudin/simple-to-do.svg?style=for-the-badge
[issues-url]: https://github.com/KhairulAminShabudin/simple-to-do/issues
[license-shield]: https://img.shields.io/github/license/KhairulAminShabudin/simple-to-do.svg?style=for-the-badge
[license-url]: https://github.com/KhairulAminShabudin/simple-to-do/blob/master/LICENSE
[product-screenshot]: client/public/screenshot.jpg
