function geoip(json) {
  // Get country code based on IP
  var country_code = json.country_code;

  var price_obj11 = {
      prices: {
        GB: "£9.99",
        US: "$ 150",
        CA: "$ 200",
        SA: "R 119",
        AU: "$14.99",
        NZ: "$14.99",
        NL: "11.99€",
        FR: "11.99€",
        IN: "₹ 7000",
        JP: "JP¥800",
      },
    },
    get_price11 = price_obj11["prices"][country_code];

  var price_obj22 = {
      prices: {
        GB: "£19.99",
        US: "$ 499",
        CA: "$ 689",
        SA: "R 1119",
        AU: "$114.99",
        NZ: "$114.99",
        NL: "111.99€",
        FR: "111.99€",
        IN: "₹ 35000",
        JP: "JP¥1800",
      },
    },
    get_price22 = price_obj22["prices"][country_code];

  var price_obj33 = {
      prices: {
        GB: "£119.99",
        US: "$ 989",
        CA: "$ 1300",
        SA: "R 11119",
        AU: "$1114.99",
        NZ: "$1114.99",
        NL: "1111.99€",
        FR: "1111.99€",
        IN: "₹ 70000",
        JP: "JP¥81100",
      },
    },
    get_price33 = price_obj33["prices"][country_code];

  if (get_price11 == null || get_price22 == null || get_price33 == null) {
    display_price11 = "₹ 7000";
    display_price22 = "₹ 35000";
    display_price33 = "₹ 70000";
  } else {
    // Else the price does exist is the array
    display_price11 = get_price11;
    display_price22 = get_price22;
    display_price33 = get_price33;
  }

  // Get the element we want to update by class
  var price_elem11 = document.getElementById("dscnt_price11");
  var price_elem22 = document.getElementById("dscnt_price22");
  var price_elem33 = document.getElementById("dscnt_price33");

  price_elem11.innerHTML = display_price11;
  price_elem22.innerHTML = display_price22;
  price_elem33.innerHTML = display_price33;

  //the discount ones
  // Set dynamic values in an object
  var price_obj1 = {
      prices: {
        GB: "£9.99",
        US: "$ 75",
        CA: "$ 99",
        SA: "R 119",
        AU: "$14.99",
        NZ: "$14.99",
        NL: "11.99€",
        FR: "11.99€",
        IN: "₹ 3500",
        JP: "JP¥800",
      },
    },
    get_price1 = price_obj1["prices"][country_code];

  var price_obj2 = {
      prices: {
        GB: "£19.99",
        US: "$ 249",
        CA: "$ 349",
        SA: "R 1119",
        AU: "$114.99",
        NZ: "$114.99",
        NL: "111.99€",
        FR: "111.99€",
        IN: "₹ 17500",
        JP: "JP¥1800",
      },
    },
    get_price2 = price_obj2["prices"][country_code];

  var price_obj3 = {
      prices: {
        GB: "£119.99",
        US: "$ 489",
        CA: "$ 650",
        SA: "R 11119",
        AU: "$1114.99",
        NZ: "$1114.99",
        NL: "1111.99€",
        FR: "1111.99€",
        IN: "₹ 35000",
        JP: "JP¥81100",
      },
    },
    get_price3 = price_obj3["prices"][country_code];

  //The Crossed Ones

  // Check if we have a price for the visitor's country, if not we'll set a default of $12.99
  if (get_price1 == null || get_price2 == null || get_price3 == null) {
    display_price1 = "₹ 3500";
    display_price2 = "₹ 17500";
    display_price3 = "₹ 35000";
  } else {
    // Else the price does exist is the array
    display_price1 = get_price1;
    display_price2 = get_price2;
    display_price3 = get_price3;
  }

  // Get the element we want to update by class
  var price_elem1 = document.getElementById("dscnt_price1");
  var price_elem2 = document.getElementById("dscnt_price2");
  var price_elem3 = document.getElementById("dscnt_price3");

  price_elem1.innerHTML = display_price1;
  price_elem2.innerHTML = display_price2;
  price_elem3.innerHTML = display_price3;

  // Update each element on the page that uses this class
}
