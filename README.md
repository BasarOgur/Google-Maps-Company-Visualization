# Google Maps Company Visualization

## Overview
The Google Maps Company Visualization is a web application designed to display the locations of companies on Google Maps. Users can filter companies based on various criteria, add new companies, and delete existing ones. The application also allows users to draw shapes on the map to highlight companies within selected areas. It supports both light and dark themes for a customizable user experience.

## Features
- **Interactive Map**: Displays company locations using Google Maps with the ability to draw shapes and view companies within those shapes.
- **Filtering**: Filter companies by revenue, company code, company name, CEO name, and whether they are local or foreign.
- **Company Management**: Add new companies with specific details or delete existing ones.
- **Shape Drawing**: Draw polygons, circles, or rectangles on the map to display companies within selected areas.
- **Theming**: Switch between light and dark modes for better visibility.

## Technologies Used
- **HTML/CSS**: For the structure and styling of the web application.
- **JavaScript**: For dynamic interaction with the Google Maps API and data handling.
- **Google Maps API**: To display company locations on an interactive map.

## How to Use
1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/google-maps-company-visualization.git
    ```
2. **Open the project**: Navigate to the project directory and open the `UI.html` file in your web browser.
3. **API Key**: Replace `"Your API KEY"` in `UI.html` with your own Google Maps API key.
    ```html
    <script src="https://maps.googleapis.com/maps/api/js?key=Your API KEY&libraries=drawing,geometry&callback=initMap" async defer></script>
    ```
4. **Add and Manage Companies**: Use the provided modals to filter, view, add, and delete companies. Draw shapes on the map to highlight companies within selected areas.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
