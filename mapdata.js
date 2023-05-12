var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "300", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    COL1283: {
      name: "Amazonas",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1314: {
      name: "Antioquia: Caturra Natural",
      description: "In South Antioquia, surrounded by mountains and hills, we locate the Loma Casagrande farm. Don Hector Castro leads the production in the farm, accessible only by horse or mule. \nThe natural process means the coffee cherries were sun dried before depitting, highlighting the caramel and cocoa notes of this variety.",
      color: "#2737ae",
      image_url: "https://havanatimes.org/wp-content/uploads/2020/07/23-7-El-Pennl-2-1024x768.x13285.jpg"
    },
    COL1315: {
      name: "Boyacá",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1316: {
      name: "Córdoba",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1317: {
      name: "Santander",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1318: {
      name: "La Guajira",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1342: {
      name: "San Andrés y Providencia",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1397: {
      name: "Caldas: Washed Caturra, Castillo",
      description: "Home to two farms, Caldas is the origen of our Washed Caturra and our popular Castillo.\nIn Villamaria, Alvaro Naranjo from the Hacienda Jardin grows a washed processed Caturra in a majestic 170 hectares coffee farm. Three generations of the Naranjo family have been part of this Hacienda.\nNot far from Hacienda Jardin we find the Chambaku farm, where Juan Felipe Restrepo grows the popular Castillo variety. Juan Felipe is also the designer and person in charge of protocols as a Q-Processor, bringing his knowledge and experience to help guarantee the quality of the coffee coming from Chambaku.",
      color: "#27ae65",
      image_url: "data:image/jpeg;base64,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"
    },
    COL1398: {
      name: "Cundinamarca",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1399: {
      name: "Bogota",
      description: "Capital of Colombia",
      color: "#847272"
    },
    COL1400: {
      name: "Quindío",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1401: {
      name: "Risaralda: Honey Caturra",
      description: "The origen of our Honey processed Caturra; grown by Ricardo Castilla, a coffee grower with a film worthy backstory: A mechanical engineer who found his calling in coffee and moved to the countryside to grow coffee by vocation using his knowledge to bring new protocols to the industry.  \nThe 'honey' process reffers not to actual honey, but rather the honey like membrane left on the beans as they dry before being washed. This process results in 'warm' or 'earthy' flavours in the coffee.",
      color: "#fbfbf9",
      image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/08/46/c3/espectacular-lugar-vale.jpg?w=500&h=300&s=1"
    },
    COL1402: {
      name: "Tolima",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1403: {
      name: "Caquetá",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1404: {
      name: "Cauca",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1405: {
      name: "Huila: Bourbon, Gesha, Yellow Caturra",
      color: "#f54a4a",
      description: "In Pitalito we locate two farms: The first, Finca Monteblanco, is led by couple Rodrigo Sanchez and Claudia Milena and stands tall at 1730 masl. Finca Monteblanco is the home of a few unusual varieties, including Gesha and Bourbon.\nThe second, La Florentina farm led by Dielber Viana, gives us Yellow Caturra from a micro-lot grown in a the outskirts of Pacarni, a land being restored from ilicit crops.",
      image_url: "data:image/jpeg;base64,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"
    },
    COL1406: {
      name: "Nariño",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1407: {
      name: "Putumayo",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1408: {
      name: "Valle del Cauca",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1412: {
      name: "Atlántico",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1413: {
      name: "Bolívar",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1414: {
      name: "Cesar: Caturra Timor",
      color: "#ecdb16",
      image_url: "https://awindwuatour.com/wp-content/uploads/2016/12/pueblos-indigenas.jpg",
      description: "[Nabusimake, Sierra Nevada] In Nabusimake -the land where the sun rises- the Kurukumis community, with their own language and culture dating centuries ago; grow a vast range of products with a focus on their relationship to Mother Nature. Amongst these products is Caturra Timor, a coffee variety that balances orange & chocolate notes that display a mix of some of the most celebrated flavours in Colombian coffees."
    },
    COL1415: {
      name: "Chocó",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1416: {
      name: "Magdalena",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1417: {
      name: "Sucre",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1420: {
      name: "Arauca",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1421: {
      name: "Norte de Santander",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1422: {
      name: "Casanare",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1423: {
      name: "Guaviare",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1424: {
      name: "Guainía",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1425: {
      name: "Meta",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1426: {
      name: "Vaupés",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    },
    COL1427: {
      name: "Vichada",
      color: "#d5d5d5",
      hover_color: "#f8cf03"
    }
  },
  locations: {
    "0": {
      lat: "4.649178",
      lng: "-74.062827",
      name: "Bogotá"
    }
  },
  labels: {},
  legend: {
    entries: []
  },
  regions: {}
};