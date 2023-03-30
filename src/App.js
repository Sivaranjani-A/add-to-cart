import "./App.css";
import Product from "./Components/Product";
import Nav from "./Components/NavBar";
import { useState } from "react";

function App() {
  //initialization:

  const [items] = useState([
    {
      name: "Apple iPhone 11",
      price: "$899",
      pic:"https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MHDD3HN_A_1.jpg?v=1630473834",
      addedToCart: false,
    },
    {
      name: "Apple iPhone 11 pro",
      price: "$999",
      pic:"https://cdn.shopify.com/s/files/1/0083/6380/2720/products/22_1_ea75a955-a1f6-440c-bcaf-f16aac0a7241.jpg?v=1656510624",
      addedToCart: false,
    },
    // {
    //   name: "Apple iPhone 11 pro max",
    //   price: "$1299",
    //   pic:"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11-pro-max/iphone-11-pro-max-silver.jpg",
    //   addedToCart: false,
    // },
    {
      name: "Apple iPhone 12",
      price: "$960",
      pic:"https://static.toiimg.com/thumb/resizemode-4,msid-71446518,imgsize-200,width-1200/71446518.jpg",
      addedToCart: false,
    },
    {
      name: "Apple iPhone 12 pro",
      price: "$1420",
      pic:"https://m.media-amazon.com/images/I/71xkMA+gvYL._SX522_.jpg",
      addedToCart: false,
    },
    // {
    //   name: "Apple iPhone 12 pro max",
    //   price: "$1500",
    //   pic:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK053?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1617321716000",
    //   addedToCart: false,
    // },
    {
      name: "Apple iPhone 13",
      price: "$1090",
      pic:"https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
      addedToCart: false,
    },
    {
      name: "Apple iPhone 13 pro",
      price: "$1600",
      pic:"https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.slideshow-large_2x.jpg",
      addedToCart: false,
    },
    // {
    //   name: "Apple iPhone 13 pro max",
    //   price: "$1799",
    //   pic:"https://www.reliancedigital.in/medias/Apple-iPhone-13-Pro-492849510-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDQ5NTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g1YS85Nzg4MDgyNzQ5NDcwLmpwZ3w0ZjBjNWZmNjE0OTc1ZmJlZjc5NmU1MmNjYTIwZDJiMmVhYjk5ZTlkMTUzNDI5ZTZkZjBkYmJjZWQzMzAxMmE5",
    //   addedToCart: false,
    // },
    {
      name: "Apple iPhone 14",
      price: "$999",
      pic:"https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Mobile-Phone-493177779-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzk1OHxpbWFnZS9qcGVnfGltYWdlcy9oOTUvaDQyLzk4OTA0NTA4MDA2NzAuanBnfDNiZGMyYTIzY2FmMWFlMDM2ZmNmZGI5NTVlMTJjNTUxMGI2YjJlMGEwODI0MGUzMmJkMmY3ODk1YWQxZWMyZTI",
      addedToCart: false,
    },
     {
      name: "Apple iPhone 14 pro",
      price: "$1499",
      pic:"https://m.media-amazon.com/images/I/31wacBawB3L.jpg",
      addedToCart: false,
    },
    // {
    //   name: "Apple iPhone 14 pro max",
    //   price: "$1899",
    //   pic:"https://img3.gadgetsnow.com/gd/images/products/additional/original/G390870_View_1/mobiles/smartphones/apple-iphone-14-pro-max-1-tb-silver-6-gb-ram-.jpg",
    //   addedToCart: false,
    // }

  ]);
  // cart Count details:

  const [cart, setCart] = useState(0); //by default cart 

  const Child = (data, name) => {
    setCart(cart + data);
    console.log(name);
    items.map((item) => {
      if (name === item.name) {
        item.addedToCart = !item.addedToCart;
      }
      return item;
    });
    console.log(items);
  };

  return (
    <div className="App">
      <Nav cartCount={cart} />
      <div className="cardContainer">
        {items.map((item, index) => {
          return <Product key={index} value={item} parent={Child} />;
        })}
      </div>
    </div>
  );
}

export default App;