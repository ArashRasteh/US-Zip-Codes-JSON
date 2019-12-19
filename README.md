# List of all US Zip codes in JSON format. 
### Includes Latitude, Longitude, City, State, County, and of course, Zip Code.

##### Divided Versions
* UScities-divided.zip - Full Table Version, divided by every 10,000 zip code
 * Missing table header: ````["zip", "lat", "long", "city", "state", "county"]````, but that is the order everything is in
 * size: 2,372,409 bytes (On average 237,241 bytes each)
 * zip size: 677,083 bytes

##### Full Versions
* USCities-table.json - Minified Table (Nested Array) - first line is the table header
  * 2,372,445 bytes
* USCities.min.json - Minified version with all information and tags untouched
  * 4,851,378 bytes
* USCities.json - All information Unminifed
  * 7,330,359 bytes

##### Modified Versions
* USCities-table-coord-city-state-zip.json - Minified Table (Nested Array) - first line is the table header
  * 1,930,450 bytes
* USCities-reduced-zip-city-state.json - Minified, Only has Zip, City, and State
  * 2,155,450 bytes<br />
