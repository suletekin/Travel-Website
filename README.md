# Trip Trekker Travel Website



<img width="1512" alt="Home Page" src="https://github.com/suletekin/Travel-Website/assets/72993040/b1a42e56-69fe-42ec-86b8-c71b5e59a339">


## Introduction
Goal was to allow users to learn more about different cities by focusing primarily on the city’s location, landmarks, and attractions/businesses. I wanted to build a platform that made it easier to find all the essential information about a specific country before traveling there. Having the descriptions of several countries on one web platform makes it easier for travelers to compare different aspects of countries without having to use multiple web tabs. 

## Design - Three Models
### Cities
Allowing users to search for specific locations, such as cities or towns, to find information about them. In the future, users can enter a location name or browse through a list of popular destinations. The platform will provide details about each location and users can explore different aspects of a location, such as its attractions, hotels, restaurants, and other businesses, to plan their trip effectively.

![Cities Page](https://github.com/suletekin/Travel-Website/assets/72993040/0d9e4160-4618-4ef2-a6b3-3e07a087bc3d)


### Attractions
Another one of our models are attractions, which are prominent and recognizable points of interest within a destination. Users can search for specific landmarks or browse through popular ones. Each landmark result will provide users with detailed information about the site, including its significance and location. Users can also find nearby businesses, restaurants, and attractions related to the landmark to enhance their travel experience.

![Attractions Page 2](https://github.com/suletekin/Travel-Website/assets/72993040/348e73a4-2674-4f18-a6e6-5ba90d038dd5)


### Reviews
I hope to offer an extensive database of accommodations and businesses across various categories, such as hotels, motels, apartments, and more. Users can search for specific attractions or browse through categories based on their interests. Each housing location or business listing will include comprehensive details, such as descriptions, photos, etc. Based on our database, users will be able to make informed decisions about which accommodations or businesses to visit during their trip.

![Reviews Page](https://github.com/suletekin/Travel-Website/assets/72993040/6e1cf8ef-1ba7-4d55-afd9-ff2da00c53c5)


## Postman Documentation
Postman: https://documenter.getpostman.com/view/28202650/2s93zFYevj

## RESTful API
The API assumes that you have JSON data files containing information about cities, attractions, and attraction reviews. The file structure and naming convention should be as follows:
 
City data: ./data/attractions_{city_name}.json
Attraction reviews data: ./data/{city_name}/{attraction_id}_{attraction_alias}_reviews.json
Replace {city_name}, {attraction_id}, and {attraction_alias} with the actual names and IDs of the cities and attractions.
 
The JSON files should contain the required data fields and follow the structure expected by the API. 

The API defines three models using SQLAlchemy: City, Attraction, and AttractionReview. 

## Tools
### Front-End
- React - the main Javascript library used in the development of the front-end
- Bootstrap - the CSS framework for front-end development
- AWS Amplify - the service that hosts the React application
### Front-End
- Postman - used for testing and documenting the APIs
- Flask - web framework that provides tools and features for making web applications in Python
- SQLAlchemy - a flask extension and toolkit for efficient database access  
- PostgreSQL - relational database and management system 
- Unittest - library to test source code
### Other Tools
- Visual Studio Code - the text editor used for modifying code 
- GitLab - repository location for project 
- NameCheap - location for where domain name was bought
- AWS - cloud computing service where weebsite was hosted (not currently hosted)
### Data Sources
- https://docs.developer.yelp.com
- https://developers.google.com/maps 
- https://www.mediawiki.org/wiki/API:Main_page


## Pagination
As the platform grows and more destinations, attractions, and reviews are added to the database, it becomes crucial to implement pagination to enhance the user experience. Pagination allows for the division of content into manageable chunks or pages, making it easier for users to navigate through large sets of data. By incorporating pagination, the platform ensures that users can access the information they need without overwhelming them with excessive amounts of data on a single page.
 
With pagination, users can browse through different pages of search results, such as a list of destinations, attractions, or reviews, rather than having to scroll endlessly through a single page. Each page typically displays a limited number of items, such as 10, 20, or 50, depending on the platform's design and user preferences. Pagination provides a more organized and user-friendly interface, allowing users to navigate through content at their own pace and locate specific information more efficiently.

## Sorting
Sorting functionality is essential for allowing users to organize and view data based on specific criteria. For example, users may want to sort destinations based on popularity, ratings, or alphabetical order. Similarly, attractions can be sorted by distance, user reviews, or price. By incorporating sorting options, the platform empowers users to customize their browsing experience and find relevant information quickly.
 
Sorting can be implemented by providing users with a dropdown or selection menu that contains various sorting options. Once a user selects a sorting criterion, the platform reorders the data accordingly and presents it to the user. For instance, if a user chooses to sort attractions by ratings, the platform will display attractions in descending order, with the highest-rated attractions appearing at the top of the list.

## Filtering
Filtering allows users to narrow down search results based on specific criteria or preferences. By applying filters, users can refine their search and focus on content that aligns with their requirements. Filters can be based on various attributes, such as location, category, price range, ratings, and more, depending on the data available in the platform.
 
For example, users may want to filter destinations based on continents, countries, or specific regions. They can also filter attractions by category, such as museums, landmarks, or outdoor activities. Additionally, users may apply filters to find accommodations within a specific price range or restaurants that offer vegetarian options.
 
By incorporating filtering functionality, the platform enables users to customize their search and browse experience according to their preferences. It helps users find specific information more efficiently, reduces the time required to locate relevant content, and enhances the overall user experience.

## Searching
A robust search functionality is essential for allowing users to find specific destinations, attractions, or reviews quickly. By implementing a search feature, users can enter keywords or phrases and receive relevant search results based on their query. The search feature should be intuitive, providing accurate and comprehensive results that match user expectations.
 
To further enhance the search feature, the platform can incorporate advanced search options, such as filtering search results by specific attributes or offering advanced search operators like AND, OR, and NOT. These advanced search capabilities enable users to perform more complex and targeted searches to find specific information quickly.
 
By incorporating pagination, sorting, filtering, and searching features, the platform enhances the user experience and provides users with the flexibility and control to explore and find information according to their preferences. These features make it easier for users to navigate through large sets of data, customize their browsing experience, and locate specific information efficiently. Ultimately, these functionalities contribute to a more user-friendly and effective travel platform that empowers users in their trip planning and exploration endeavors.





