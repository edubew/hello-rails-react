# 📖 [Greetings App] <a name="about-project"></a>

> This a simple webapp which is help users to get random greeting everytime they visit the page. This app is built using React, Rails, and Webpack

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>FrontEnd</summary>
  <ul>
    <li><a href="https://railsguide.com/">React</a></li>
    <li><a href="https://railsguide.com/">Redux</a></li>
    <li><a href="https://railsguide.com/">CSS</a></li>
  </ul>
</details>

<details>
  <summary>BackEnd</summary>
  <ul>
    <li><a href="https://railsguide.com/">Ruby</a></li>
  </ul>
</details>

<details>
  <summary>Framework</summary>
  <ul>
    <li><a href="https://railsguide.com/">Rails</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **[Generate Random greetings]** - Generate Random greetings.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Version <a name="live-demo"></a>

- [Coming Soon](#)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


If you dont have Ruby installed on your computer, you can download it from [here](https://www.ruby-lang.org/en/downloads/).

If you dont have Rails installed on your computer, you can download it from [here](https://rubyonrails.org/).

If you dont have PostgreSQL installed on your computer, you can download it from [here](https://www.postgresql.org/download/).

If you have installed git you can clone the code to your machine, or download a ZIP of all the files directly.


> `NOTE:` _You may need to run the following commands in the project directory to install the required gems and run the application:_

1. Install gem packages with:

```
bundle install
```

2. Install node dependencies with:

```
npm install
```

3. Build project with:

```
npm run build
```
4. Open the config/database.yml file in the project directory and change the username and password to your PostgreSQL username and password.
Edit the default section of the file to look like this:

```
  default: &default
  adapter: postgresql
  encoding: unicode
  # For details on connection pooling, see Rails configuration guide
  # http://guides.rubyonrails.org/configuring.html#database-pooling
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  username: <your PostgreSQL role username>
  password: <your PostgreSQL role password>

```

3. Create the database and run the migrations  with:

```
rails db:create
rails db:migrate
rails db:seed
```

4. Start the development server

```
rails server
```

5. Open the app in your browser at http://localhost:3000
### Run tests

To run tests, run the following command:
rspec

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Winfred Edube**

- GitHub: [@edubew](https://github.com/edubew)
- Twitter: [@edube_winne](https://twitter.com/edube_winne)
- LinkedIn: [Winfred Edube](https://www.linkedin.com/in/winfred-edube/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- **Add Authentication**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/edubew/hello-rails-react/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give as a star! ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>
- Hat tip to anyone whose code was used
- [Microverse Document](https://github.com/microverseinc/curriculum-rails/blob/main/capstone/rails_capstone.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **[How I can run this project?]**

  - [After cloning repository, run rails server.]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/edubew/blog-box/blob/main/LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>