# manipulist-rapidapi-react-example

React example for manipulist-rapidapi-query

It shows how to use manipulist-rapidapi-query
with both files (/file endpoints) and string-based input requests (/tool endpoints).

# Prerequisites

- NodeJs
- A [RapidAPI account](https://rapidapi.com/)
- A [Manipulist API](https://rapidapi.com/engiweb-ltd-engiweb-ltd-default/api/manipulist/) subscription and api key

# Installation

Install the required packages:
`yarn install`

Copy or rename the `.env-example` file to `.env` and add your RapidAPI key for Manipulist.

# Run the examples

You can launch the examples with
`yarn start`

The application will open at [http://localhost:3000](http://localhost:30000)

## Usage

The form shows few example of query usage, for both text-based and file-based Manipulist API calls.

- Select the tool from the dropdown.
- Choose the type of query (file vs text input).
- Add the required parameters
- Submit query

If the API key is valid and the query correct, it should display results in the Output textarea.
If any errors, a notification will pop-up.

## Documentation

Visit the [Manipulist RapidAPI API page](https://rapidapi.com/engiweb-ltd-engiweb-ltd-default/api/manipulist/) for a detailed documentation of each available endpoint.
To see how each tool works, visit [Manipulist.com](https://manipulist.com)

## Support

Visit the [Manipulist Homepage](https://manipulist.com) or raise an issue on this repository if you have any questions or ideas for improvement.

Made by [Engiweb](https://engiweb.com)
