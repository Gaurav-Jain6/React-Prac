import React from "react" ;
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -ResturantContainer
 *      -ResturantCard
 * Footer
 * -Copyrights
 *  -Links
 *  -Address
 *  -Contact
*/

// function AppLayout()
// {
//     return(
//         <div className="app">
//             <div className="Hello">Hello
//                 <Header 
//                 key="1" 
//                 resName="Props Declaration"
//                 />
//             </div>
//         </div>
//     );
// }

// function Header(props)
// {
//     const {resName} = props;
//     return 
//     (
//         <div className ="header">
//             <div className="logo-continer">
//                 <img className="logo"
//                 src="props"
//                 />
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

const resObj =
{restaurants: [
    {
      "info": {
        "id": "25175",
        "name": "BTW",
        "cloudinaryImageId": "dqxel3umlcwstdhmuco1",
        "locality": "GT Karnal Road",
        "areaName": "Kamla Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Street Food",
          "Indian",
          "North Indian",
          "Desserts",
          "Beverages",
          "Sweets"
        ],
        "avgRating": 4,
        "parentId": "10314",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-08 00:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "FREE ITEM"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "1K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/btw-gt-karnal-road-kamla-nagar-delhi-25175",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "481831",
        "name": "Peppy Parathas & Rolls By Chai Point",
        "cloudinaryImageId": "txldrpaeeclgzdhillms",
        "locality": "B Block",
        "areaName": "Connaught Place",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "South Indian",
          "Punjabi",
          "Chaat",
          "Indian",
          "American",
          "Fast Food",
          "Desserts",
          "Cafe",
          "Healthy Food",
          "Home Food",
          "North Indian"
        ],
        "avgRating": 4,
        "parentId": "289265",
        "avgRatingString": "4.0",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-02 05:29:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/peppy-parathas-and-rolls-by-chai-point-b-block-connaught-place-delhi-481831",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "426155",
        "name": "Choko La",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/455b1704-3408-4fd8-bc67-19b949d2c095_426155.jpg",
        "locality": "Bhishma Pitamah Marg",
        "areaName": "Defence Colony",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "2098",
        "avgRatingString": "4.6",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 10.4,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "10.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-01 07:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/choko-la-bhishma-pitamah-marg-defence-colony-delhi-426155",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365634",
        "name": "Wow! Momo",
        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        "locality": "Ajmeri Gate",
        "areaName": "Ajmeri Gate",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "1776",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-02 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Chinese.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Momos.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Momos.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "100+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/wow-momo-ajmeri-gate-delhi-365634",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "523304",
        "name": "Enchante By Chai Point",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/16/741fbf1f-b063-4262-bb8f-496bb13a3d0f_523304.jpg",
        "locality": "B Block",
        "areaName": "Connaught Place",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "South Indian",
          "Punjabi",
          "Chaat",
          "Indian",
          "American",
          "Fast Food",
          "Desserts",
          "Cafe",
          "Healthy Food",
          "Home Food",
          "North Indian"
        ],
        "avgRating": 4.4,
        "parentId": "312141",
        "avgRatingString": "4.4",
        "totalRatingsString": "9",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-02 05:29:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/enchante-by-chai-point-b-block-connaught-place-delhi-523304",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "371413",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/e355aa6b-bc56-4d39-ac2b-a657033916c2_371413.JPG",
        "locality": "Indra Vikash Colony",
        "areaName": "Model Town 2",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 51,
          "lastMileTravel": 9,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "9.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-02 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-indra-vikash-colony-model-town-2-delhi-371413",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "773189",
        "name": "Chai Point",
        "cloudinaryImageId": "0aff2462946494b778dc8ee198c121e2",
        "locality": "CHANKYA PURI",
        "areaName": "Lajpat nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "South Indian",
          "Punjabi",
          "Chaat",
          "Indian",
          "American",
          "Fast Food",
          "Desserts",
          "Cafe",
          "Healthy Food",
          "Home Food",
          "North Indian"
        ],
        "avgRating": 4.6,
        "parentId": "1607",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 58,
          "lastMileTravel": 10.3,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "10.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-01 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹349",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chai-point-chankya-puri-lajpat-nagar-delhi-773189",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "17854",
        "name": "Cafe Coffee Day",
        "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
        "locality": "A Block",
        "areaName": "Lajpat Nagar 2",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Burgers",
          "Ice Cream",
          "Bakery",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "1",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 10.6,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "10.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-08-08 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹699",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-a-block-lajpat-nagar-2-delhi-17854",
        "type": "WEBLINK"
      }
    }
  ]}


const Header = () => {
    return 
    (
        <div className ="header">
            <div className="logo-continer">
                <img className="logo"
                src=""
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


// const ResturantCard = ({resName,cuisine}) => 3rd Method to call props
{/*1st Method to call props below*/}
const ResturantCard = (props) => 
{
    {/*2nd Method to call props below*/}
    const { resName , cuisine } = props ; 
    console.log(props) ;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo"
            alt="res-logo"
            src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
            />
            {/* <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4> */}
            {/* <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4> 1*/}
            <h3>{resName}</h3> {/*2 & 3*/}
            <h4>{cuisine}</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};

const Body = () =>
{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {/* <ResturantCard 
                resName="Meghana Foods"
                cuisine="Biryani, North Indian, Asian"
                />
                <ResturantCard
                resName="KFC"
                cuisine="Burger" 
                /> */}
                <ResturantCard
                resData={resObj}
                />
                
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <div className="Hello">Hello
                <Header/>
                <Body/>
            </div>
        </div>
    );
};

const mainRoot = ReactDOM.createRoot(document.getElementById("root")) ;

// mainRoot.render(jsxHeading) ;
mainRoot.render(<AppLayout/>) ;

