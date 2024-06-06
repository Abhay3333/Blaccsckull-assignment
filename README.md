# React App for Review Sentiment Analysis

This is a React application that displays reviews and highlights sentences based on their sentiment. It also includes a tooltip that appears on hovering over highlighted sentences, displaying the sentiment topic.

## Features

- Fetch and display reviews from a provided JSON file
- Highlight sentences based on sentiment analysis
- Apply different colors to sentences based on sentiment (positive, negative, neutral)
- Show a tooltip on hovering over highlighted sentences, displaying the sentiment topic

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your browser and visit `http://localhost:5173`

## Components

### `ReviewList`

This component fetches and displays the list of reviews. It renders the `ReviewHighlighter` component for each review, passing the `review` object as a prop.

### `ReviewHighlighter`

This component is responsible for highlighting the sentences within a review based on their sentiment. It uses the `analytics` property from the `review` object to determine the sentences and their corresponding sentiments, and applies colors accordingly.

### `Tooltip`

This component displays a tooltip when hovering over a highlighted sentence. It extracts the sentiment topic from the `analytics` data and shows it in the tooltip.

## Data Structure

The application expects a JSON file named `reviewsData.json` containing an array of review objects. Each review object should have the following properties:

- `reviewer_name`: Name of the reviewer
- `content`: The main text content of the review
- `raw_content`: Unmodified original content of the review
- `date`: Date when the review was posted
- `rating_review_score`: Numeric rating given by the reviewer
- `out_of`: Maximum rating possible (e.g., 10.0)
- `source`: Information about the source of the review
  - `name`: Name of the source (e.g., "booking.com")
  - `icon`: Icon of the source
- `source_language`: Language in which the review is written
- `analytics`: Array containing sentiment analytics for specific categories
  - `category`: Category associated with the analytics
  - `topic`: Topic associated with the analytics
  - `phrases`: Phrases related to the analytics
  - `sentences`: Extracted sentences related to the analytics
  - `sentiment`: Sentiment of the analytics
  - `highlight_indices`: Array containing start and end indices for highlighted sentences

## Styling

The application uses Tailwind CSS for styling. The color codes for each sentiment are:

- Positive: `#D9F2DD`
- Negative: `#F2DBD9`
- Mixed: `#e8bd6d3d`
- Neutral: `#eaf09b6b`

## Optional Feature

If you choose to implement the optional feature, you can use the `highlight_indices` property to highlight sentences using specific start and end indices.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.
