# Koko Connect Social Platform API Framework

[![license badge](https://img.shields.io/badge/license-MIT--License-blue)](#License)

## Description

A basic social media platform api endpoint. It uses MongoDB via Mongoose with models for Users, Thoughts (user posts), and Reactions (comments).

Posts created will be added to the user's "thoughts" array using their \_id value. User's friends'\_id values are added to the "friends" array. Reations to Thoughts will be added to the thoughts' "reaction" array using their \_id value. Users who are deleted will have their thoughts deleted aswell.

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation

`npm i`, then start with `npm start`

## Usage

As a social network developer, I need an api enpoint system to connect my MongoDB database to my frontend.

## Credits

Created by CarlJMcGee

## License

[This project uses MIT License](./mit.txt)

## Contributing

[Click to see the Contributor Covenant guidelines](./code_of_conduct.md)

## Tests

Test with POSTman/Insomnia/Thunder Client

## Questions?

If you have any issues, submit them to my [Github](https://github.com/CarlJMcGee)

or

If you have any other questions or inquiries, you can contact me at [carl.jack.mcgee@gmail.com](mailto:carl.jack.mcgee@gmail.com)

## [Check Out This Video Demonstration](https://youtu.be/mD4oxY89tR8)
