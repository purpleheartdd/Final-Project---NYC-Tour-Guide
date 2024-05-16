# Interactive New York City Tour Guide

Welcome to your Interactive New York City Tour Guide! This project provides an engaging way to explore some of the most popular locations in New York City using a map interface.

## Project Overview

This interactive map application serves as a virtual tour guide for New York City, providing users with information about various categories of locations such as museums, landmarks, parks, restaurants, and subway stations. Users can select a category and view detailed information about each location within that category on the map.

## Features

- **Interactive Map**: Users can explore different locations in New York City on an interactive map.
- **Categories**: Locations are categorized into Museums, Landmarks, Parks, Restaurants, and Subway Stations.
- **Popups**: Clicking on a location marker opens a popup with detailed information and an image of the location.
- **Category Tabs**: Users can filter locations by selecting different categories.
- **Intro Message**: An introductory message greets users when they first visit the site.
- **Jump Box**: A guide box helps users get started by suggesting the first category to explore.

## Technologies Used

- **HTML5**: Structure of the web pages.
- **CSS3**: Styling of the web pages.
- **JavaScript**: Functionality and interactivity.
- **Mapbox GL JS**: Map rendering and interaction.

## Functions and Methods

### JavaScript Functions

- `removeBlurMask()`: Removes the introductory blur mask and displays the jump box.
- `changeCategory(selectedCategory)`: Filters the map markers based on the selected category and displays the relevant explanation.
- `showAll()`: Shows all markers on the map regardless of category.
- **Event Listeners**: Handles user interactions such as clicking on the map markers and category tabs.

### HTML Structure

- **blurMask**: Introductory message container.
- **leftContainer**: Sidebar with category tabs and explanations.
- **rightContainer**: Container for the interactive map.
- **jumpBox**: Guide box to help users get started.

### CSS Styles

- **General Styles**: Basic styling for the body, html, and containers.
- **Blur Mask**: Styles for the introductory message.
- **Map Markers**: Different marker styles for each category.
- **Popups**: Styles for the popups that appear when clicking on a marker.

## How to Play Around

- **Add New Locations**: To add new locations, update the `locations` array in `script.js` with the new location data.
- **Change Styles**: Modify `style.css` to change the appearance of the application.
- **Update Map Settings**: Adjust map settings such as center, zoom, and style in the map object initialization in `script.js`.

## Future Enhancements

- **Search Functionality**: Add a search bar to allow users to search for specific locations.
- **User Reviews**: Integrate a feature for users to leave reviews and ratings for each location.
- **Mobile Optimization**: Improve the layout and usability on mobile devices.
- **Additional Data**: Include more categories and locations for a more comprehensive tour guide.
