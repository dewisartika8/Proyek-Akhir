//var mapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":20},{"color":"#ececec"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ececec"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21},{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#303030"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"geometry.stroke","stylers":[{"lightness":"-61"},{"gamma":"0.00"},{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#dadada"},{"lightness":17}]}];
//var mapStyles = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}];
//var mapStyles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dde6e8"},{"visibility":"on"}]}];

var automaticGeoLocation = false;
var useColorMarkers = true;

var lastClickedMarker;
var searchClicked;
var mapAutoZoom;
var map;
var isFullScreen;
var mapData = [{"id":1,"latitude":40.72807182,"longitude":-73.85735035,"featured":1,"title":"Marky's Restaurant","location":"63 Birch Street","city":1,"phone":"361-492-2356","email":"hello@markys.com","website":"http:\/\/www.markys.com","category":"Restaurant","rating":"4","reviews_number":"6","marker_image":"assets\/img\/items\/1.jpg","gallery":["assets\/img\/items\/1.jpg","assets\/img\/items\/2.jpg","assets\/img\/items\/12.jpg"],"tags":["Wi-Fi","Parking","TV","Vegetarian"],"additional_info":"Average price $30","url":"detail.html","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, arcu non hendrerit imperdiet, metus odio scelerisque elit, sed lacinia odio est ac felis. Nam ullamcorper hendrerit ullamcorper. Praesent quis arcu quis leo posuere ornare eu in purus. Nulla ornare rutrum condimentum. Praesent eu pulvinar velit. Quisque non finibus purus, eu auctor ipsum.","reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"opening_hours":["08:00am - 11:00pm","08:00am - 11:00pm","12:00am - 11:00pm","08:00am - 11:00pm","03:00pm - 02:00am","03:00pm - 02:00am","Closed"],"marker_color":"#000000"},{"id":2,"latitude":40.73925841,"longitude":-73.85348797,"featured":0,"title":"Ironapple","location":"4209 Glenview Drive","city":1,"contact":"989-410-0777","category":"Restaurant","rating":"3","reviews_number":"12","marker_image":"assets\/img\/items\/2.jpg","gallery":["assets\/img\/items\/2.jpg","assets\/img\/items\/4.jpg","assets\/img\/items\/12.jpg"],"additional_info":"","url":"detail.html","description":"Aliquam vel turpis sagittis, semper tellus eget, aliquam turpis. Cras aliquam, arcu","today_menu":[{"meal_type":"Starter","meal":"Smoked Salmon, Classic Condiments, Brioche"},{"meal_type":"Soup","meal":"Roasted Golden Beets, Goat Cheese, Hazelnut Granola"},{"meal_type":"Main course","meal":"Napoleon of Rabbit Loin, Braised Leek, Fava Bean Puree"}],"reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"marker_color":"#c92e2e"},{"id":3,"address":"Forest Hills, Queens, NY 11375, USA","featured":0,"title":"Food Festival","location":"23 Hillhaven Drive","city":1,"contact":"<i class='fa fa-phone'><\/i>323-843-4729","category":"Event","rating":"5","reviews_number":"15","marker_image":"assets\/img\/items\/4.jpg","gallery":["assets\/img\/items\/4.jpg","assets\/img\/items\/2.jpg","assets\/img\/items\/12.jpg"],"tags":["Wi-Fi","Parking","TV","Vegetarian"],"ribbon":"Last Tickets!","additional_info":"Starts at 19:00","url":"detail.html","description":"Sed ac dolor auctor, elementum lacus vitae, efficitur magna. Quisque sed semper tellus","reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Town Square","location_address":"458 Brigth Street London"},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":"87 Yellow Lane, Manhattan"}],"marker_color":"#f1a400"},{"id":4,"latitude":40.709016,"longitude":-73.844969,"featured":0,"title":"Cosmopolit","location":"4209 Glenview Drive","city":1,"contact":"<i class='fa fa-phone'><\/i>323-843-4729","category":"Wellness","rating":"5","reviews_number":"28","marker_image":"assets\/img\/items\/5.jpg","gallery":["assets\/img\/items\/5.jpg","assets\/img\/items\/2.jpg","assets\/img\/items\/12.jpg"],"tags":["Wi-Fi","Parking","TV","Vegetarian"],"additional_info":"","url":"detail.html","description":"Sed ac dolor auctor, elementum lacus vitae, efficitur magna. Quisque sed semper tellus","reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"opening_hours":["08:00am - 11:00pm","08:00am - 11:00pm","12:00am - 11:00pm","08:00am - 11:00pm","03:00pm - 02:00am","03:00pm - 02:00am","Closed"],"marker_color":"#c92e2e"},{"id":5,"latitude":47.8043117,"longitude":13.0356014,"featured":0,"title":"Enjoy a small meal","location":"Monchstein","city":2,"contact":"<i class='fa fa-phone'><\/i>","category":"Restaurant","rating":"","reviews_number":"","marker_image":"assets\/img\/items\/6.jpg","gallery":["https:\/\/experio.at\/monchstein.jpg","https:\/\/experio.at\/monchstein.jpg","https:\/\/experio.at\/monchstein.jpg"],"tags":["Romantic","Scenic","Culinary","Partners"],"ribbon":"Sale","additional_info":"","url":"detail.html","description":"The smallest restaurant in the world.  Enjoz a romatic gourmet pakage for 2.  This package includes a panoram view over Salzburg with a welcome Prosecco drink, followed by a 5 course menu-of-the-day accompanied by wine, and coffee and pralines to conclude.","description_list":[{"title":"Bathrooms","value":3},{"title":"Bedrooms","value":4},{"title":"Area","value":"458m<sup>2<\/sup>"},{"title":"Garages","value":2},{"title":"Status","value":"Sale"}],"marker_color":"#1d7e5f"},{"id":6,"address":"1721 Corcoran St NW Washington, DC","featured":1,"title":"Stand Up Show","location":"534 Sycamore Road","city":2,"contact":"<i class='fa fa-phone'><\/i>352-383-7435","category":"Sport","rating":"4","reviews_number":"8","marker_image":"assets\/img\/items\/6.jpg","gallery":["assets\/img\/items\/6.jpg","assets\/img\/items\/12.jpg","assets\/img\/items\/5.jpg"],"tags":["Wi-Fi","Parking","TV","Vegetarian"],"additional_info":"Free entry","url":"detail.html","description":"Phasellus at facilisis est. Sed dignissim porttitor aliquam. Quisque fermentum mollis diam id porttitor. Maecenas pulvinar, lacus non egestas finibus, nibh lectus ornare massa, id lacinia est nunc quis ante. Cras non nisl enim. Sed sodales volutpat nisl. Phasellus dictum lacus eu volutpat venenatis. Ut commodo massa ac sagittis finibus. ","schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Town Square","location_address":"458 Brigth Street London"},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":"87 Yellow Lane, Manhattan"}]},{"id":7,"latitude":40.75408424,"longitude":-73.87666225,"featured":0,"title":"University Day","location":"Central Town University","city":1,"contact":"<i class='fa fa-phone'><\/i>925-585-2459","category":"Relax","rating":"5","reviews_number":"10","marker_image":"assets\/img\/items\/12.jpg","gallery":["assets\/img\/items\/12.jpg","assets\/img\/items\/9.jpg","assets\/img\/items\/11.jpg"],"additional_info":"","url":"","description":"Duis nec lobortis massa. Mauris tempus vitae augue eu tempus","schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Town Square","location_address":"458 Brigth Street London"},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":"87 Yellow Lane, Manhattan"}],"reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"video":"<iframe src='https:\/\/player.vimeo.com\/video\/184360631' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>"},{"id":8,"latitude":40.75479944,"longitude":-73.89786243,"featured":0,"title":"City Tour","location":"Downtown center","city":1,"contact":"<i class='fa fa-envelope'><\/i>reservation@citytours.com","category":"Sport","rating":"5","reviews_number":"17","marker_image":"assets\/img\/items\/10.jpg","gallery":["assets\/img\/items\/10.jpg","assets\/img\/items\/4.jpg","assets\/img\/items\/8.jpg"],"additional_info":"Get to know your city!","url":"","description":"Integer mattis nibh ante, vel vulputate tortor iaculis a. Aenean iaculis aliquam magna eget fermentum. Nulla euismod, arcu in aliquet vestibulum, justo quam ultricies mauris, eget elementum ex odio ut nulla. Suspendisse neque tellus, varius nec tortor consectetur, gravida ullamcorper magna. Sed ut enim dui.","schedule":[{"date":"24.03.2017","time":"12:00","location_title":"Town Square","location_address":""},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":""}]},{"id":9,"latitude":40.74654168,"longitude":-73.90515804,"featured":1,"title":"High Mountain Trip","location":"East Alps","city":1,"contact":"<i class='fa fa-phone'><\/i>hello@mountaintrip.com","category":"Sport","rating":"4","reviews_number":"9","marker_image":"assets\/img\/items\/13.jpg","gallery":["assets\/img\/items\/13.jpg","assets\/img\/items\/2.jpg","assets\/img\/items\/12.jpg"],"additional_info":"","url":"","description":"Duis sed consectetur sem. Nam vitae laoreet mi. Praesent vel quam massa. Nulla vitae nisi leo.","tags":["Adrenaline","Skialp","Climbing","Tourism"],"reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Town Square","location_address":"458 Brigth Street London"},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":"87 Yellow Lane, Manhattan"}],"marker_color":"#1d7e5f"},{"id":10,"latitude":40.73203937,"longitude":-73.8216877,"featured":1,"title":"Hyundai i30","location":"580 Briarhill Lane","city":1,"phone":"325-990-8452","category":"Car Rental","rating":"","reviews_number":"","marker_image":"assets\/img\/items\/29.jpg","gallery":["assets\/img\/items\/29.jpg","assets\/img\/items\/11.jpg","assets\/img\/items\/12.jpg"],"price":"$28.000","tags":["Diesel","First Owner","4x4","Air Conditioning"],"additional_info":"","url":"detail.html","description":"Vivamus vitae lacus accumsan, gravida orci sit amet, convallis erat. Sed at porttitor quam. Proin faucibus lacus et massa tempus, sed mattis justo elementum. Proin mauris felis, laoreet quis lacus non, mattis venenatis massa. ","description_list":[{"title":"Engine","value":"Diesel"},{"title":"Mileage","value":14500},{"title":"Max Speed","value":"220 Mph"},{"title":"marker_color","value":"Dark Brown"},{"title":"Status","value":"Sale"}],"marker_color":"#45ad00"},{"id":11,"latitude":40.72787669,"longitude":-73.90992165,"featured":1,"title":"Thai Massage","location":"1360 Meadowbrook Mall Road","city":1,"contact":"<i class='fa fa-phone'><\/i>+21 310-877-5920","category":"Wellness","rating":"5","reviews_number":"23","marker_image":"assets\/img\/items\/15.jpg","gallery":["assets\/img\/items\/15.jpg","assets\/img\/items\/6.jpg","assets\/img\/items\/11.jpg"],"ribbon":"Hot","additional_info":"Relax your body","url":"","description":"Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam et elit faucibus, fringilla sapien"},{"id":12,"address":"63-0-63-98 Woodbine Street, Ridgewood, NY 11385, USA","featured":0,"title":"Senior C# Developer","location":"ERF Solutions","city":1,"contact":"<i class='fa fa-envelope'><\/i>developers@erf.com","tags":["Java","C#","Developer","Big Company","Benefits"],"category":"Job","rating":"","reviews_number":"","marker_image":"assets\/img\/items\/16.jpg","gallery":["assets\/img\/items\/16.jpg"],"additional_info":"Payment from $1.200","url":"","description":"Proin feugiat eget erat ut euismod. Nulla vitae fringilla ligula. Ut laoreet malesuada elit, imperdiet gravida ante dignissim sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et orci quis mi luctus gravida id eu nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "},{"id":13,"latitude":40.76191849,"longitude":-73.83419752,"featured":0,"title":"The Brooklyns & Hosts","location":"Town Hall","city":1,"contact":"<i class='fa fa-envelope'><\/i>reservations@tickets.com","category":"Concert","rating":"5","reviews_number":"17","marker_image":"assets\/img\/items\/17.jpg","gallery":["assets\/img\/items\/17.jpg","assets\/img\/items\/2.jpg","assets\/img\/items\/12.jpg"],"additional_info":"","url":"","description":"Vivamus nec commodo lorem. Morbi mattis et quam eu elementum.","schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Town Square","location_address":"458 Brigth Street London"},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":"87 Yellow Lane, Manhattan"}]},{"id":14,"latitude":40.76299115,"longitude":-73.82361889,"featured":1,"title":"How to Draw Better","location":"Central Gallery","city":1,"contact":"<i class='fa fa-phone'><\/i>402-565-1871","category":"Course","rating":"3","reviews_number":"12","marker_image":"assets\/img\/items\/18.jpg","gallery":["assets\/img\/items\/18.jpg","assets\/img\/items\/6.jpg","assets\/img\/items\/8.jpg"],"additional_info":"","url":"","description":"Ut blandit tortor vitae laoreet convallis. Nulla facilisi. Phasellus nec scelerisque sem","schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Town Square","location_address":"458 Brigth Street London"},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":"87 Yellow Lane, Manhattan"}],"reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}]},{"id":15,"latitude":40.73659201,"longitude":-73.80778313,"featured":0,"title":"Bambi Planet Houseboat Bar & Grill","location":"White River Dock","city":1,"contact":"<i class='fa fa-phone'><\/i>","category":"Wellness","rating":"4","reviews_number":"6","marker_image":"assets\/img\/items\/3.jpg","gallery":["assets\/img\/items\/3.jpg","assets\/img\/items\/2.jpg","assets\/img\/items\/12.jpg"],"additional_info":"Special menu this week!","url":"detail.html","description":"Nulla elit libero, dapibus quis ultrices a, luctus ut arcu. Pellentesque iaculis nec ipsum vel malesuada. Curabitur blandit erat non eros tincidunt malesuada. Etiam vulputate viverra hendrerit. Sed tempus lacinia lacinia","today_menu":[{"meal_type":"Starter","meal":"Smoked Salmon, Classic Condiments, Brioche"},{"meal_type":"Soup","meal":"Roasted Golden Beets, Goat Cheese, Hazelnut Granola"},{"meal_type":"Main course","meal":"Napoleon of Rabbit Loin, Braised Leek, Fava Bean Puree"}],"reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"opening_hours":["08:00am - 11:00pm","08:00am - 11:00pm","12:00am - 11:00pm","08:00am - 11:00pm","03:00pm - 02:00am","03:00pm - 02:00am","Closed"]},{"id":16,"latitude":40.72891738,"longitude":-73.78855705,"featured":0,"title":"Paris Trip","location":"Saturn Hotel Eiffel Square","city":1,"contact":"<i class='fa fa-phone'><\/i>","category":"Trip","rating":"5","reviews_number":"9","marker_image":"assets\/img\/items\/19.jpg","gallery":["assets\/img\/items\/19.jpg","assets\/img\/items\/1.jpg","assets\/img\/items\/11.jpg"],"additional_info":"$59\/night","tags":["Wi-Fi","Parking","TV","Vegetarian"],"url":"","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non purus mattis, lobortis tellus blandit, fringilla erat. Phasellus finibus suscipit felis a pellentesque. Proin nec viverra magna. Integer euismod nisl eget ipsum imperdiet, tincidunt imperdiet lacus dignissim. Sed sodales id tortor id porta","reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}]},{"id":17,"latitude":40.72592534,"longitude":-73.93910408,"featured":1,"title":"Big Pizza for Couples","location":"Riccardo Pizza House","city":1,"contact":"<i class='fa fa-phone'><\/i>","category":"Restaurant","rating":"4","reviews_number":"7","marker_image":"assets\/img\/items\/22.jpg","gallery":["assets\/img\/items\/22.jpg","assets\/img\/items\/8.jpg","assets\/img\/items\/10.jpg"],"additional_info":"","url":"","description":"Etiam ac hendrerit mi, vitae hendrerit diam. Mauris porttitor justo ac pulvinar bibendum. Ut ex orci, hendrerit ut lectus ac, dapibus cursus neque. Pellentesque eleifend quam nulla, ut blandit purus rutrum eget. ","tags":["Wi-Fi","Parking","TV","Vegetarian"],"opening_hours":["08:00am - 11:00pm","08:00am - 11:00pm","12:00am - 11:00pm","08:00am - 11:00pm","03:00pm - 02:00am","03:00pm - 02:00am","Closed"],"reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}]},{"id":18,"latitude":40.76000064,"longitude":-73.93069267,"featured":0,"title":"Healthy Breakfast","location":"Mom's Kitchen","city":1,"contact":"<i class='fa fa-phone'><\/i>","category":"Relax","rating":"5","reviews_number":"12","marker_image":"assets\/img\/items\/20.jpg","gallery":["assets\/img\/items\/20.jpg","assets\/img\/items\/21.jpg","assets\/img\/items\/10.jpg"],"additional_info":"Start your delicious day","url":"","description":"Donec eget nunc sed velit vehicula vehicula et ut turpis. Curabitur sem ipsum, fermentum eu mattis quis, condimentum ut enim. Curabitur consequat, diam ac faucibus pulvinar, eros sem dapibus dolor, ac malesuada justo ex non nunc.","opening_hours":["08:00am - 11:00pm","08:00am - 11:00pm","12:00am - 11:00pm","08:00am - 11:00pm","03:00pm - 02:00am","03:00pm - 02:00am","Closed"],"today_menu":[{"meal_type":"Starter","meal":"Smoked Salmon, Classic Condiments, Brioche"},{"meal_type":"Soup","meal":"Roasted Golden Beets, Goat Cheese, Hazelnut Granola"},{"meal_type":"Main course","meal":"Napoleon of Rabbit Loin, Braised Leek, Fava Bean Puree"}]},{"id":19,"latitude":40.76546147,"longitude":-73.88348579,"featured":0,"title":"Coffee Break","location":"35 High Street","city":1,"contact":"<i class='fa fa-phone'><\/i>","category":"Coffee","rating":"3","reviews_number":"6","marker_image":"assets\/img\/items\/23.jpg","gallery":["assets\/img\/items\/23.jpg","assets\/img\/items\/9.jpg","assets\/img\/items\/12.jpg"],"additional_info":"","url":"","description":"Nulla auctor, metus vel congue facilisis, ante orci tempus nibh, a dictum libero purus nec enim. Nullam at eleifend lorem, consectetur posuere sem. Nam molestie tincidunt ligula vel vehicula. Vivamus eleifend quam non volutpat aliquam.","opening_hours":["08:00am - 11:00pm","08:00am - 11:00pm","12:00am - 11:00pm","08:00am - 11:00pm","03:00pm - 02:00am","03:00pm - 02:00am","Closed"],"tags":["Wi-Fi","Parking","TV","Vegetarian"],"reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}]},{"id":20,"latitude":40.75857035,"longitude":-73.86185646,"featured":1,"title":"Weekend in Venice","location":"Venice Hotel****","city":1,"contact":"<i class='fa fa-phone'><\/i>","category":"Trip","rating":"5","reviews_number":"23","marker_image":"assets\/img\/items\/27.jpg","gallery":["assets\/img\/items\/27.jpg","assets\/img\/items\/25.jpg","assets\/img\/items\/10.jpg"],"additional_info":"$99\/Weekend","url":"","description":"Nulla et diam magna. Pellentesque accumsan turpis a mi pulvinar aliquam. Pellentesque tempor blandit sapien, efficitur hendrerit nisi tristique a. Vivamus vitae convallis eros. Sed a mi faucibus, cursus erat vel, molestie sapien","tags":["Wi-Fi","Parking","TV","Vegetarian"],"schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Town Square","location_address":"458 Brigth Street London"},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":"87 Yellow Lane, Manhattan"}]},{"id":21,"latitude":40.75408424,"longitude":-73.87666225,"featured":0,"title":"Tree Therapy","location":"Eastpark Forest","city":1,"contact":"<i class='fa fa-phone'><\/i>","category":"Therapy","rating":"5","reviews_number":"6","marker_image":"assets\/img\/items\/26.jpg","gallery":["assets\/img\/items\/26.jpg","assets\/img\/items\/4.jpg","assets\/img\/items\/12.jpg"],"additional_info":"","url":"","description":"Mauris porttitor justo ac pulvinar bibendum. Ut ex orci, hendrerit ut lectus ac, dapibus cursus neque. Pellentesque eleifend quam nulla, ut blandit purus rutrum eget. Maecenas orci dolor, efficitur porta pharetra eu, cursus at ex. Donec mattis ipsum id dui rutrum malesuada","schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Town Square","location_address":"458 Brigth Street London"},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":"87 Yellow Lane, Manhattan"}],"reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}]},{"id":22,"latitude":40.71929033,"longitude":-73.8737011,"featured":0,"title":"Gourman Festival","location":"Station Square","city":1,"contact":"<i class='fa fa-phone'><\/i>","category":"Relax","rating":"","reviews_number":"0","marker_image":"assets\/img\/items\/21.jpg","gallery":["assets\/img\/items\/21.jpg","assets\/img\/items\/2.jpg","assets\/img\/items\/12.jpg"],"additional_info":"","url":"","description":"Nulla auctor, metus vel congue facilisis, ante orci tempus nibh, a dictum libero purus nec enim. Nullam at eleifend lorem, consectetur posuere sem. Nam molestie tincidunt ligula vel vehicula. Vivamus eleifend quam non volutpat aliquam","schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Town Square","location_address":"458 Brigth Street London"},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":"87 Yellow Lane, Manhattan"}],"tags":["Wi-Fi","Parking","TV","Vegetarian"],"marker_color":"#1d7e5f"},{"id":23,"address":"12055 Queens Boulevard, Kew Gardens, NY 11415, USA","featured":1,"title":"Nascar Racing","location":"London Airport","city":1,"contact":"<i class='fa fa-phone'><\/i>541-435-6211","category":"Relax","rating":"5","reviews_number":"11","marker_image":"assets\/img\/items\/11.jpg","gallery":["assets\/img\/items\/11.jpg","assets\/img\/items\/5.jpg","assets\/img\/items\/7.jpg"],"additional_info":"","url":"detail.html","description":"Sed ac dolor auctor, elementum lacus vitae, efficitur magna. Quisque sed semper tellus","reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Century Cup","location_address":"Nascar Ring"},{"date":"03.04.2017","time":"18:00","location_title":"24\/7 Rally","location_address":"Nascar Ring"}]},{"id":24,"latitude":40.7486875,"longitude":-73.91451359,"featured":1,"title":"Golf Lessons","location":"49 Lance Golf Club","city":1,"contact":"<i class='fa fa-phone'><\/i>+1 317-598-2912","category":"Sport","rating":"5","reviews_number":"17","marker_image":"assets\/img\/items\/14.jpg","gallery":["assets\/img\/items\/14.jpg","assets\/img\/items\/6.jpg","assets\/img\/items\/9.jpg"],"additional_info":"Starts form $49","url":"","description":"Donec sed odio tempus, accumsan lectus eget, lobortis ligula. Sed sollicitudin urna et justo cursus imperdiet. Nullam semper est urna. Mauris nec volutpat lectus, quis commodo libero. In sed sagittis mauris, vitae feugiat magna.","reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"schedule":[{"date":"24.03.2017","time":"16:00","location_title":"Town Square","location_address":"458 Brigth Street London"},{"date":"03.04.2017","time":"18:00","location_title":"Bristol Gallery","location_address":"87 Yellow Lane, Manhattan"}],"video":"<iframe src='https:\/\/player.vimeo.com\/video\/16688587?title=0&byline=0&portrait=0' width='640' height='272' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>"},{"id":25,"latitude":51.508111,"longitude":-0.132533,"featured":1,"title":"Tennis for Beginners","location":"Tennis Center","city":3,"contact":"<i class='fa fa-phone'><\/i>+1 317-598-2912","category":"Sport","rating":"4","reviews_number":"17","marker_image":"assets\/img\/items\/8.jpg","gallery":["assets\/img\/items\/8.jpg","assets\/img\/items\/6.jpg","assets\/img\/items\/9.jpg"],"additional_info":"Starts form $49","url":"","description":"Donec sed odio tempus, accumsan lectus eget, lobortis ligula. Sed sollicitudin urna et justo cursus imperdiet. Nullam semper est urna. Mauris nec volutpat lectus, quis commodo libero. In sed sagittis mauris, vitae feugiat magna.","reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"video":""},{"id":26,"latitude":51.505867,"longitude":-0.136954,"featured":1,"title":"Red Ear Restaurant","location":"48 Josh Lane","city":3,"contact":"<i class='fa fa-phone'><\/i>+1 457-48-6846","category":"Restaurant","rating":"5","reviews_number":"5","marker_image":"assets\/img\/items\/3.jpg","gallery":["assets\/img\/items\/3.jpg","assets\/img\/items\/6.jpg","assets\/img\/items\/9.jpg"],"additional_info":"","url":"","description":"Donec sed odio tempus, accumsan lectus eget, lobortis ligula. Sed sollicitudin urna et justo cursus imperdiet. Nullam semper est urna. Mauris nec volutpat lectus, quis commodo libero. In sed sagittis mauris, vitae feugiat magna.","reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"video":""},{"id":27,"latitude":48.859092,"longitude":2.35514,"featured":1,"title":"Paris st. Restaurant","location":"Rue La Fayette","city":4,"contact":"<i class='fa fa-phone'><\/i>+6 457-48-6846","category":"Restaurant","rating":"5","reviews_number":"5","marker_image":"assets\/img\/items\/6.jpg","gallery":["assets\/img\/items\/6.jpg","assets\/img\/items\/6.jpg","assets\/img\/items\/9.jpg"],"additional_info":"","url":"","description":"Donec sed odio tempus, accumsan lectus eget, lobortis ligula. Sed sollicitudin urna et justo cursus imperdiet. Nullam semper est urna. Mauris nec volutpat lectus, quis commodo libero. In sed sagittis mauris, vitae feugiat magna.","reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"video":""},{"id":28,"latitude":48.874022,"longitude":2.36088,"featured":1,"title":"Manoir Wellness & Spa","location":"Quai de Valmy","city":4,"contact":"<i class='fa fa-phone'><\/i>+6 3548-189-4455","category":"Wellness","rating":"5","reviews_number":"6","marker_image":"assets\/img\/items\/2.jpg","gallery":["assets\/img\/items\/2.jpg","assets\/img\/items\/6.jpg","assets\/img\/items\/9.jpg"],"additional_info":"","url":"","description":"Donec sed odio tempus, accumsan lectus eget, lobortis ligula. Sed sollicitudin urna et justo cursus imperdiet. Nullam semper est urna. Mauris nec volutpat lectus, quis commodo libero. In sed sagittis mauris, vitae feugiat magna.","reviews":[{"author_name":"Jane Doe","author_image":"assets\/img\/person-01.jpg","date":"09.05.2016","rating":4,"review_text":"Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros"},{"author_name":"Norma Brown","author_image":"assets\/img\/person-02.jpg","date":"09.05.2016","rating":4,"review_text":"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"}],"video":""},{"id":29,"latitude":47.4497732,"longitude":12.2513095,"featured":0,"title":"Spend the night in an igloo!","location":"Alpeniglu","city":2,"contact":"<i class='fa fa-phone'><\/i>","category":"Hotel","rating":"","reviews_number":"","marker_image":"assets\/img\/items\/6.jpg","gallery":["https:\/\/www.experio.at\/alpeniglu.JPG","https:\/\/www.experio.at\/alpeniglu.JPG","https:\/\/www.experio.at\/alpeniglu.JPG"],"tags":["Partners","Scenic","Winter","Tyrol"],"ribbon":"Sale","additional_info":"","url":"detail.html","description":"The Alpeniglu villiage in Tirol: an igloo village with hotel, ice bar, art and experiences.  Located in the heart of ski resort SkiWelt Wilder Kaiser - Brixental.","description_list":[{"title":"Bathrooms","value":3},{"title":"Bedrooms","value":4},{"title":"Area","value":"458m<sup>2<\/sup>"},{"title":"Garages","value":2},{"title":"Status","value":"Sale"}]}];
// Hero Map on Home ----------------------------------------------------------------------------------------------------

function heroMap(_latitude,_longitude, element, markerTarget, sidebarResultTarget, showMarkerLabels, mapDefaultZoom){
    if( document.getElementById(element) != null ){

        // Create google map first -------------------------------------------------------------------------------------

        if( !mapDefaultZoom ){
            mapDefaultZoom = 14;
        }

        if( !optimizedDatabaseLoading ){
            var optimizedDatabaseLoading = 0;
        }

        map = new google.maps.Map(document.getElementById(element), {
            zoom: mapDefaultZoom,
            scrollwheel: false,
            center: new google.maps.LatLng(_latitude, _longitude),
            mapTypeId: "roadmap",
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#c6c6c6"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dde6e8"},{"visibility":"on"}]}]
        });

        // Load necessary data for markers using PHP (from database) after map is loaded and ready ---------------------

        var allMarkers;

        //  When optimization is enabled, map will load the data in Map Bounds every time when it's moved. Otherwise will load data at once

        if( optimizedDatabaseLoading == 1 ){
            google.maps.event.addListener(map, 'idle', function(){
                if( searchClicked != 1 ){
                    var ajaxData = {
                        optimized_loading: 1,
                        north_east_lat: map.getBounds().getNorthEast().lat(),
                        north_east_lng: map.getBounds().getNorthEast().lng(),
                        south_west_lat: map.getBounds().getSouthWest().lat(),
                        south_west_lng: map.getBounds().getSouthWest().lng()
                    };
                    if( markerCluster != undefined ){
                        markerCluster.clearMarkers();
                    }
                    loadData("assets/external/data.json", ajaxData);
                }
            });
        }
        else {
            google.maps.event.addListenerOnce(map, 'idle', function(){
                loadData("assets/external/data.json");
            });
        }

        if( showMarkerLabels == true ){
            $(".hero-section .map").addClass("show-marker-labels");
        }

        // Create and place markers function ---------------------------------------------------------------------------

        var i;
        var a;
        var newMarkers = [];
        var resultsArray = [];
        var visibleMarkersId = [];
        var visibleMarkersOnMap = [];
        var markerCluster;
        var markerCounter = -1;

        function placeMarkers(markers){

            newMarkers = [];

            for (i = 0; i < markers.length; i++) {

                var marker;
                var markerContent = document.createElement('div');
                var thumbnailImage;
                var color;

                if( markers[i]["marker_image"] != undefined ){
                    thumbnailImage = markers[i]["marker_image"];
                }
                else {
                    thumbnailImage = "assets/img/items/default.png";
                }

                if( markers[i]["marker_color"] ){
                    color = markers[i]["marker_color"];
                }
                else {
                    color = "";
                }



                if( markers[i]["featured"] == 1 ){
                    markerContent.innerHTML =
                    '<div class="marker" data-id="'+ markers[i]["id"] +'" data-url="'+ markers[i]["url"] +'" data-color="'+ color +'" data-i="'+ i +'">' +
                        '<div class="title">'+ markers[i]["title"] +'</div>' +
                        '<div class="marker-wrapper">' +
                            '<div class="tag"><i class="fa fa-check"></i></div>' +
                            '<div class="pin">' +
                                '<div class="image" style="background-image: url('+ thumbnailImage +');"></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
                }
                else {
                    markerContent.innerHTML =
                        '<div class="marker" data-id="'+ markers[i]["id"] +'" data-url="'+ markers[i]["url"] +'"  data-color="'+ color +'" data-i="'+ i +'">' +
                            '<div class="title">'+ markers[i]["title"] +'</div>' +
                            '<div class="marker-wrapper">' +
                                '<div class="pin">' +
                                '<div class="image" style="background-image: url('+ thumbnailImage +');"></div>' +
                            '</div>' +
                        '</div>';
                }

                if( useColorMarkers === true ){
                    if( markers[i]["marker_color"] ){
                        var style = document.createElement("style");
                        document.head.appendChild(style);
                        document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper::before { background-color: '  + color + '}', 0);
                        document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper .pin { border-color: '  + color + '}', 0);
                        document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper .pin::before { background-color: '  + color + '}', 0);
                        document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper .pin::before { border-color: '  + color + '}', 0);
                        document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper .pin .image::after { border-color: '  + color + ' transparent transparent transparent }', 0);
                        document.styleSheets[0].insertRule('.map .marker[data-color="'  + color + '"] .marker-wrapper .tag { background-color: '  + color + '}', 0);
                        document.styleSheets[0].insertRule('.hero-section .results-wrapper .result-item[data-id="'  + markers[i]["id"] + '"] > a::before { background-color: '  + color + '}', 0);
                        document.styleSheets[0].insertRule('.sidebar-content[data-id="'  + markers[i]["id"] + '"] .label { background-color: '  + color + '}', 0);
                    }
                }



                // Latitude, Longitude and Address

                if ( markers[i]["latitude"] && markers[i]["longitude"] && markers[i]["address"] ){
                    renderRichMarker(i,"latitudeLongitude");
                }

                // Only Address

                else if ( markers[i]["address"] && !markers[i]["latitude"] && !markers[i]["longitude"] ){
                    renderRichMarker(i,"address");
                }

                // Only Latitude and Longitude

                else if ( markers[i]["latitude"] && markers[i]["longitude"] && !markers[i]["address"] ) {
                    renderRichMarker(i,"latitudeLongitude");
                }

                // No coordinates

                else {
                    console.log( "No location coordinates");
                }
            }

            // Create marker using RichMarker plugin -------------------------------------------------------------------

            function renderRichMarker(i,method){
                if( method == "latitudeLongitude" ){
                    marker = new RichMarker({
                        position: new google.maps.LatLng( markers[i]["latitude"], markers[i]["longitude"] ),
                        map: map,
                        draggable: false,
                        content: markerContent,
                        flat: true,
                        id: markers[i]["id"]
                    });
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                            if( markerTarget == "sidebar"){
                                openSidebarDetail( $(this.content.firstChild).attr("data-id") );								
                            }
                            else if( markerTarget == "infobox" ){
                                openInfobox( $(this.content.firstChild).attr("data-id"), this, i );															
                            }
                            else if( markerTarget == "modal" ){
                                openModal($(this.content.firstChild).attr("data-id"), "modal_item.php", false, isFullScreen);
                            }
                        }
                    })(marker, i));
                    newMarkers.push(marker);
                }
                else if ( method == "address" ){
                    a = i;
                    var geocoder = new google.maps.Geocoder();
                    var geoOptions = {
                        address: markers[i]["address"]
                    };
                    geocoder.geocode(geoOptions, geocodeCallback(markerContent));

                }

                if ( mapAutoZoom == 1 ){					
                    var bounds  = new google.maps.LatLngBounds();
                    for (var i = 0; i < newMarkers.length; i++ ) {
                        bounds.extend(newMarkers[i].getPosition());
                    }
                    map.fitBounds(bounds);
                }
            }

            var markerId;

            $("h2").on("click", function () {
                if( markerCounter < visibleMarkersOnMap.length-1 ){
                    showNextOrPreviousItem(markerCounter++);
                }
            });
            $("h3").on("click", function () {
                if( markerCounter > 0 ){
                    showNextOrPreviousItem(markerCounter--);
                }
            });

            function showNextOrPreviousItem(){
                markerId = visibleMarkersOnMap[markerCounter].id;
                //openInfobox( markerId, visibleMarkersOnMap[markerCounter], markerCounter );
                //openSidebarDetail( markerId );
                //openModal( markerId, "modal_item.php");
            }

            //console.log( $(".marker[data-i='" + markerCounter +"']").attr("data-id") );
            /*
            for( var i=0; i<newMarkers.length; i++ ){
                if( newMarkers[i].id === markerCounter ){
                    console.log( newMarkers[i].content.innerText );
                    break;
                }
            }
            */

            // Ajax loading of infobox -------------------------------------------------------------------------------------

            var lastInfobox;

            function openInfobox(id, _this, i){
                $.ajax({
                    url: "assets/external/infobox.php",
                    dataType: "html",
                    data: { id: id },
                    method: "POST",
                    success: function(results){
                        infoboxOptions = {
                            content: results,
                            disableAutoPan: false,
                            pixelOffset: new google.maps.Size(-135, -50),
                            zIndex: null,
                            alignBottom: true,
                            boxClass: "infobox-wrapper",
                            enableEventPropagation: true,
                            closeBoxMargin: "0px 0px -8px 0px",
                            closeBoxURL: "assets/img/close-btn.png",
                            infoBoxClearance: new google.maps.Size(1, 1)
                        };

                        if( lastInfobox != undefined ){
                            lastInfobox.close();
                        }

                        newMarkers[i].infobox = new InfoBox(infoboxOptions);
                        newMarkers[i].infobox.open(map, _this);
                        lastInfobox = newMarkers[i].infobox;

                        setTimeout(function(){
                            //$("div#"+ id +".item.infobox").parent().addClass("show");
                            $(".item.infobox[data-id="+ id +"]").parent().addClass("show");
                        }, 10);

                        google.maps.event.addListener(newMarkers[i].infobox,'closeclick',function(){
                            $(lastClickedMarker).removeClass("active");
                        });
                    },
                    error : function () {
                        console.log("error");
                    }
                });
            }

            // Geocoder callback ---------------------------------------------------------------------------------------

            function geocodeCallback(markerContent) {
                return function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        marker = new RichMarker({
                            position: results[0].geometry.location,
                            map: map,
                            draggable: false,
                            content: markerContent,
                            flat: true,
                            id: parseInt($(markerContent.innerHTML).attr("data-id"))
                        });
                        newMarkers.push(marker);
                        markerCluster.addMarker(marker, true);
                        renderResults();
                        if ( mapAutoZoom == 1 ){
                            var bounds  = new google.maps.LatLngBounds();
                            for (var i = 0; i < newMarkers.length; i++ ) {
                                bounds.extend(newMarkers[i].getPosition());
                            }
                            map.fitBounds(bounds);
                        }
                        google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {
                                if( markerTarget == "sidebar"){
                                    openSidebarDetail( $(this.content.firstChild).attr("data-id") );
									//console.log(this);
                                }
                                else if( markerTarget == "infobox" ){
                                    openInfobox( $(this.content.firstChild).attr("data-id"), this, 0 );
                                }
                                else if( markerTarget == "modal" ){
                                    openModal($(this.content.firstChild).attr("data-id"), "modal_item.php", false, isFullScreen);
                                }

                            }
                        })(marker, i));

                    } else {
                        console.log("Geocode failed " + status);
                    }
                }
            }

            // sidebar function

            // Highlight result in sidebar on marker hover -------------------------------------------------------------

            $(".marker").live("mouseenter", function(){
                var id = $(this).attr("data-id");
                $(".results-wrapper .results-content .result-item[data-id="+ id +"] a" ).addClass("hover-state");
                //console.log( $(this).parent("div").parent("div").parent("div") );
                $(this).closest( "[style]").css("z-index", 1);
            }).live("mouseleave", function(){
                var id = $(this).attr("data-id");
                $(".results-wrapper .results-content .result-item[data-id="+ id +"] a" ).removeClass("hover-state");
                $(this).closest( "[style]").css("z-index", 0);
            });

            $(".marker").live("click", function(){
                var id = $(this).attr("data-id");
                $(lastClickedMarker).removeClass("active");
                $(this).addClass("active");
                lastClickedMarker = $(this);
                markerCounter = $(this).attr("data-i");
            });

            // Marker clusters -----------------------------------------------------------------------------------------

            var clusterStyles = [
                {
                    url: 'assets/img/cluster.png',
                    height: 36,
                    width: 36					
                }
            ];

            markerCluster = new MarkerClusterer(map, newMarkers, { styles: clusterStyles, maxZoom: 16, ignoreHidden: true });

            google.maps.event.addListener(markerCluster, 'click', function(e) {
                var markerClusterArray = [];
                var markerPositionLatitude = [];
                var markerPositionLongitude = [];

                for( i = 0; i < e.markers_.length; i++ ){
                    markerClusterArray.push( $(e.markers_[i].content.innerHTML).attr("data-id") );
                    markerPositionLatitude.push( e.markers_[i].position.lat() );
                    markerPositionLongitude.push( e.markers_[i].position.lng() );
                }

                if( checkIfSame(e.markers_[0].position.lat(), markerPositionLatitude ) === true ){
                    if( checkIfSame(e.markers_[0].position.lng(), markerPositionLongitude ) === true ){
                        e.markerClusterer_.zoomOnClick_ = false;
                        openModal( "multi-choice", "modal_marker_cluster.php", markerClusterArray, isFullScreen );
                    }
                }
                else {
                    e.markerClusterer_.zoomOnClick_ = true;
                }
            });

            function checkIfSame(key,arr){
                var uniq = $.unique(arr);
                if( uniq.length == 1 && uniq[0] == key){
                    return true;
                }
                else {
                    return false;
                }
            }

            // Show results in sidebar after map is moved --------------------------------------------------------------

            google.maps.event.addListener(map, 'idle', function() {
                renderResults();
            });

            renderResults();

            // Results in the sidebar ----------------------------------------------------------------------------------
			
            function renderResults(){
                resultsArray = [];
                visibleMarkersId = [];
                visibleMarkersOnMap = [];

                for (var i = 0; i < newMarkers.length; i++) {
                    if ( map.getBounds().contains(newMarkers[i].getPosition()) ){
                        visibleMarkersOnMap.push(newMarkers[i]);
                        visibleMarkersId.push( $(newMarkers[i].content.firstChild).attr("data-id") );
                        newMarkers[i].setVisible(true);
                    }
                    else {
                        newMarkers[i].setVisible(false);
                    }
                }
                markerCluster.repaint();

                // Ajax load data for sidebar results after markers are placed

                if( $(".hero-section").hasClass("sidebar-grid") ){
                    var sidebarUrl = "assets/external/sidebar_results_grid.php";
                }
                else {
                    sidebarUrl = "assets/external/sidebar_results.php";
                }	
				
                //$.ajax({
                    //url: sidebarUrl,
                    //method: "POST",
                    //data: { markers: visibleMarkersId},
                    //success: function(results){
						var hasil = '<div class="result-item" data-id="1"><a href="detail.html"><h3>Markys Restaurant</h3><div class="result-item-detail"><div class="image" style="background-image: url(assets/img/items/1.jpg)"><figure>Average price $30</figure></div><div class="description"><h5><i class="fa fa-map-marker"></i>63 Birch Street</h5><div class="rating-passive"data-rating="4"> <span class="stars"></span><span class="reviews">6</span></div><div class="label label-default">Restaurant</div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, arcu non hendrerit imperdiet, metus odio scelerisque elit, sed lacinia odio est ac felis. Nam ullamcorper hendrerit ullamcorper. Praesent quis arcu quis leo posuere ornare eu in purus. Nulla ornare rutrum condimentum. Praesent eu pulvinar velit. Quisque non finibus purus, eu auctor ipsum.</p></div></div></a><div class="controls-more"><ul><li><a href="#" class="add-to-favorites">Add to favorites</a></li><li><a href="#" class="add-to-watchlist">Add to watchlist</a></li> </ul></div> </div><div class="result-item" data-id="2"><a href="detail.html"><h3>Ironapple</h3><div class="result-item-detail"><div class="image" style="background-image: url(assets/img/items/2.jpg)"></div><div class="description"><h5><i class="fa fa-map-marker"></i>4209 Glenview Drive</h5><div class="rating-passive"data-rating="3"> <span class="stars"></span> <span class="reviews">12</span> </div><div class="label label-default">Restaurant</div><p>Aliquam vel turpis sagittis, semper tellus eget, aliquam turpis. Cras aliquam, arcu</p></div></div></a><div class="controls-more"><ul><li><a href="#" class="add-to-favorites">Add to favorites</a></li> <li><a href="#" class="add-to-watchlist">Add to watchlist</a></li></ul> </div></div><div class="result-item" data-id="9"><a href=""><h3>High Mountain Trip</h3><div class="result-item-detail"><div class="image" style="background-image: url(assets/img/items/13.jpg)"></div><div class="description"><h5><i class="fa fa-map-marker"></i>East Alps</h5><div class="rating-passive"data-rating="4"> <span class="stars"></span><span class="reviews">9</span></div><div class="label label-default">Sport</div><p>Duis sed consectetur sem. Nam vitae laoreet mi. Praesent vel quam massa. Nulla vitae nisi leo.</p></div> </div></a><div class="controls-more"><ul><li><a href="#" class="add-to-favorites">Add to favorites</a></li> <li><a href="#" class="add-to-watchlist">Add to watchlist</a></li></ul></div></div><div class="result-item" data-id="11"><figure class="ribbon">Hot</figure><a href=""><h3>Thai Massage</h3><div class="result-item-detail"><div class="image" style="background-image: url(assets/img/items/15.jpg)"><figure>Relax your body</figure></div><div class="description"><h5><i class="fa fa-map-marker"></i>1360 Meadowbrook Mall Road</h5><div class="rating-passive"data-rating="5"> <span class="stars"></span> <span class="reviews">23</span></div><div class="label label-default">Wellness</div><p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam et elit faucibus, fringilla sapien</p></div> </div></a><div class="controls-more"><ul><li><a href="#" class="add-to-favorites">Add to favorites</a></li><li><a href="#" class="add-to-watchlist">Add to watchlist</a></li> </ul> </div></div><div class="result-item" data-id="12"><a href=""><h3>Senior C# Developer</h3><div class="result-item-detail"><div class="image" style="background-image: url(assets/img/items/16.jpg)"><figure>Payment from $1.200</figure></div><div class="description"><h5><i class="fa fa-map-marker"></i>ERF Solutions</h5><div class="label label-default">Job</div><p>Proin feugiat eget erat ut euismod. Nulla vitae fringilla ligula. Ut laoreet malesuada elit, imperdiet gravida ante dignissim sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et orci quis mi luctus gravida id eu nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p></div></div></a><div class="controls-more"><ul><li><a href="#" class="add-to-favorites">Add to favorites</a></li><li><a href="#" class="add-to-watchlist">Add to watchlist</a></li></ul> </div> </div>';
					
                        resultsArray.push(hasil); // push the results from php into array
                        $(".results-wrapper .results-content").html(hasil); // render the new php data into html element
                        $(".results-wrapper .section-title h2 .results-number").html(visibleMarkersId.length); // show the number of results
                        ratingPassive(".results-wrapper .results"); // render rating stars

                        // Hover on the result in sidebar will highlight the marker

                        $(".result-item").on("mouseenter", function(){
                            $(".map .marker[data-id="+ $(this).attr("data-id") +"]").addClass("hover-state");
                        }).on("mouseleave", function(){
                                $(".map .marker[data-id="+ $(this).attr("data-id") +"]").removeClass("hover-state");
                        });

                        trackpadScroll("recalculate");

                        // Show detailed information in sidebar

                        $(".result-item, .results-content .item").children("a").on("click", function(e){
                            if( sidebarResultTarget == "sidebar" ){
                                e.preventDefault();
                                openSidebarDetail( $(this).parent().attr("data-id") );
                            }
                            else if( sidebarResultTarget == "modal" ){
                                e.preventDefault();
                                openModal( $(this).parent().attr("data-id"), "modal_item.php",false, isFullScreen );
                            }

                            $(lastClickedMarker).removeClass("active");

                            $(".map .marker[data-id="+ $(this).parent().attr("data-id") +"]").addClass("active");
                            lastClickedMarker = $(".map .marker[data-id="+ $(this).parent().attr("data-id") +"]");
                        });

                    //},
                    //error : function (e) {
                      //  console.log(e);
                    //}
                //});

            }
        }

        /*
        $("[data-ajax-live='location']").on("changed.bs.select", function (e) {
            ajaxAction( $(this), "location" );
        });

        $("[data-ajax-live='string']").on("changed.bs.select", function (e) {
            ajaxAction( $(this), "string" );
        });
        */

        /* Check if Google Maps are in fullscree mode */

        google.maps.event.addListener( map, 'bounds_changed', onBoundsChanged );

        function onBoundsChanged() {
            if ( $(map.getDiv()).children().eq(0).height() === window.innerHeight &&
                $(map.getDiv()).children().eq(0).width()  === window.innerWidth ) {
                isFullScreen = true;
            }
            else {
                isFullScreen = false;
            }
        }

        $("[data-ajax-response='map']").on("click", function(e){
            e.preventDefault();
            var dataFile = $(this).attr("data-ajax-data-file");
            searchClicked = 1;
            if( $(this).attr("data-ajax-auto-zoom") == 1 ){
                mapAutoZoom = 1;
            }
            var form = $(this).closest("form");
            var ajaxData = form.serialize();
            markerCluster.clearMarkers();
            loadData(dataFile, ajaxData);
        });

        function loadData(url, ajaxData){
            /*$.ajax({
                url: url,
                dataType: "json",
                method: "POST",
                data: ajaxData,
                cache: false,
                success: function(results){
                    for( var i=0; i <newMarkers.length; i++ ){
                        newMarkers[i].setMap(null);
                    }
                    allMarkers = results;
                    placeMarkers(results);
                },
                error : function (e) {
                    console.log(e);
                }
            });
			*/
			for( var i=0; i <newMarkers.length; i++ ){
				newMarkers[i].setMap(null);
			}
			allMarkers = mapData;
			placeMarkers(mapData);
        }

        // Geo Location ------------------------------------------------------------------------------------------------

        function success(position) {
            var center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.panTo(center);
            $('#map').removeClass('fade-map');
        }

        // Geo Location on button click --------------------------------------------------------------------------------

        $(".geo-location").on("click", function() {
            if (navigator.geolocation) {
                $('#map').addClass('fade-map');
                navigator.geolocation.getCurrentPosition(success);
            } else {
                console.log('Geo Location is not supported');
            }
        });

        // Automatic Geo Location

        if( automaticGeoLocation == true ){
            navigator.geolocation.getCurrentPosition(success);
        }

        // Autocomplete

        autoComplete(map);

    }
    else {
        //console.log("No map element");
    }

}

function reloadMap(){
    google.maps.event.trigger(map, 'resize');
}


// Simple map ----------------------------------------------------------------------------------------------------------

function simpleMap(_latitude,_longitude, element, markerDrag, place){

    if (!markerDrag){
        markerDrag = false;
    }
    var mapCenter, geocoder, geoOptions;

    if( place ){
        geocoder = new google.maps.Geocoder();
        geoOptions = {
            address: place
        };
        geocoder.geocode(geoOptions, getCenterFromAddress());
        function getCenterFromAddress() {
            return function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    mapCenter = new google.maps.LatLng( results[0].geometry.location.lat(), results[0].geometry.location.lng() );
                    drawMap(mapCenter);
                } else {
                    console.log("Geocode failed");
                    console.log(status);
                }
            };
        }
    }
    else {
        mapCenter = new google.maps.LatLng(_latitude,_longitude);
        drawMap(mapCenter);
    }

    function drawMap(mapCenter){
        var mapOptions = {
            zoom: 14,
            center: mapCenter,
            disableDefaultUI: true,
            scrollwheel: true,
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":20},{"color":"#ececec"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f0f0ef"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ececec"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21},{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d4d4d4"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#303030"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","elementType":"geometry.stroke","stylers":[{"lightness":"-61"},{"gamma":"0.00"},{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#dadada"},{"lightness":17}]}]
        };
        var mapElement = document.getElementById(element);
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new RichMarker({
            position: mapCenter,
            map: map,
            draggable: markerDrag,
            content: "<img src='assets/img/marker.png'>",
            flat: true
        });
        google.maps.event.addListener(marker, "dragend", function () {
            var latitude = this.position.lat();
            var longitude = this.position.lng();
            $('#latitude').val( this.position.lat() );
            $('#longitude').val( this.position.lng() );
        });

        autoComplete(map, marker);
    }

}

//Autocomplete ---------------------------------------------------------------------------------------------------------

function autoComplete(map, marker){
    if( $("#address-autocomplete").length ){
        if( !map ){
            map = new google.maps.Map( document.getElementById('address-autocomplete') );
        }
        var input = document.getElementById('address-autocomplete');
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
            if( marker ){
                marker.setPosition(place.geometry.location);
                marker.setVisible(true);
                $('#latitude').val( marker.getPosition().lat() );
                $('#longitude').val( marker.getPosition().lng() );
            }
            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }
        });

        function success(position) {
            map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            //initSubmitMap(position.coords.latitude, position.coords.longitude);
            $('#latitude').val( position.coords.latitude );
            $('#longitude').val( position.coords.longitude );
        }

        $(".geo-location").on("click", function() {
            if (navigator.geolocation) {
                $('#'+element).addClass('fade-map');
                navigator.geolocation.getCurrentPosition(success);
            } else {
                console.log('Geo Location is not supported');
            }
        });
    }
}

function openSidebarDetail(id){
    /*$.ajax({
        url: "assets/external/sidebar_detail.php",
        data: { id: id },
        method: "POST",
        success: function(results){

            $(".sidebar-wrapper").html(results);
            $(".results-wrapper").removeClass("loading");
            initializeOwl();
            ratingPassive(".sidebar-wrapper .sidebar-content");
            initializeFitVids();
            var title = $(results).find("h2").text();
            socialShare( window.location + "?title=" + title.replace(/\s+/g, '-').toLowerCase() );
            initializeReadMore();
            $(".sidebar-wrapper .back").on("click", function(){
                $(".results-wrapper").removeClass("show-detail");
                $(lastClickedMarker).removeClass("active");
            });

            $(".results-wrapper").addClass("show-detail");
        },
        error : function (e) {
            console.log("error " + e);
        }
    });*/
	var results = '<div class="sidebar-content" data-id="1"><div class="back"></div><div class="controls-more"><ul><li><a href="#">Add to favorites</a></li><li><a href="#">Add to watchlist</a></li></ul></div><div class="section-title"><a href="detail.html" class="btn btn-primary btn-framed btn-rounded btn-xs full-detail">Lihat Detail</a><h2>Sejarah Salib Kasih</h2><h4>63 Birch Street</h4><div class="label label-default">Restaurant</div><div class="rating-passive" data-rating="4"><span class="stars"></span><span class="reviews">6</span></div></div> <!--end section-title--><h5><i class="fa fa-phone"></i>361-492-2356</h5><h5><i class="fa fa-envelope"></i>hello@markys.com</h5><h5><a href="http://www.markys.com"><i class="fa fa-globe"></i>http://www.markys.com</a></h5><div class="gallery-wrapper"><div class="gallery owl-carousel" data-owl-nav="0" data-owl-dots="1"><img src="assets/img/items/1.jpg" alt=""><img src="assets/img/items/2.jpg" alt=""><img src="assets/img/items/12.jpg" alt=""></div></div><!--end gallery--><section><h3>About</h3><div class="read-more"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, arcu non hendrerit imperdiet, metus odio scelerisque elit, sed lacinia odio est ac felis. Nam ullamcorper hendrerit ullamcorper. Praesent quis arcu quis leo posuere ornare eu in purus. Nulla ornare rutrum condimentum. Praesent eu pulvinar velit. Quisque non finibus purus, eu auctor ipsum.</p></div></section><!--end about--><section><h3>Features</h3><ul class="tags"><li>Wi-Fi</li><li>Parking</li><li>TV</li><li>Vegetarian</li></ul></section><!--end tags--><section> <h3>Opening Hours</h3><dl><dt>Monday</dt><dd>08:00am - 11:00pm</dd><dt>Tuesday</dt><dd>08:00am - 11:00pm</dd><dt>Wednesday</dt><dd>12:00am - 11:00pm</dd><dt>Thursday</dt><dd>08:00am - 11:00pm</dd><dt>Friday</dt><dd>03:00pm - 02:00am</dd><dt>Saturday</dt><dd>03:00pm - 02:00am</dd><dt>Sunday</dt><dd>Closed</dd></dl></section><!--end opening-hours--><section><h3>Latest reviews</h3><div class="review"><div class="image"><div class="bg-transfer" style="background-image: url(assets/img/person-01.jpg)"></div></div><div class="description"><figure><div class="rating-passive" data-rating="4"><span class="stars"></span></div><span class="date">09.05.2016</span></figure><p>Morbi varius orci in rhoncus posuere. Sed cursus urna ut sem rhoncus lacinia. Praesentac velit dignissim, mollis purus quis, sollicitudin eros</p> </div></div><!--end review--><div class="review"> <div class="image"><div class="bg-transfer" style="background-image: url(assets/img/person-02.jpg)"></div></div><div class="description"><figure><div class="rating-passive" data-rating="4"><span class="stars"></span></div><span class="date">09.05.2016</span></figure><p>Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis</p></div></div><!--end review--></section><!--end reviews--><section><h3>Share This Listing</h3><div class="social-share"></div></section></div>';
	//var results="";
	$(".sidebar-wrapper").html(results);
	$(".results-wrapper").removeClass("loading");
	initializeOwl();
	ratingPassive(".sidebar-wrapper .sidebar-content");
	initializeFitVids();
	var title = $(results).find("h2").text();
	socialShare( window.location + "?title=" + title.replace(/\s+/g, '-').toLowerCase() );
	initializeReadMore();
	$(".sidebar-wrapper .back").on("click", function(){
		$(".results-wrapper").removeClass("show-detail");
		$(lastClickedMarker).removeClass("active");
	});

	$(".results-wrapper").addClass("show-detail");
	
}