import "./product.scss";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import imgWar from "../../assets/imgWar.jpg";
import imgWar2 from "../../assets/download.jpg";

function Product() {
  // const img1 =
  //   "https://salt.tikicdn.com/cache/w1200/ts/product/0f/08/21/d46f8159e0ad5dff0192b9316e7d415f.png";
  // const img2 =
  //   "https://salt.tikicdn.com/cache/w1200/ts/product/0f/08/21/d46f8159e0ad5dff0192b9316e7d415f.png";
  // const img3 =
  //   "https://salt.tikicdn.com/cache/750x750/ts/product/fc/12/78/74f6b93c99df7051adcc932b2f48e92a.jpg.webp";

  // const img4 =
  //   "https://salt.tikicdn.com/cache/w1200/ts/product/9e/f1/81/0c4346469531d019026114d779f5ad34.jpg";
  const images = [imgWar, imgWar2];

  const [img, setImg] = useState(imgWar);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handlePrevClick = () => {
    let index = images.findIndex((item) => item === img);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="product-container">
        <div className="bar-left">
          <div className="imageMain">
            <img
              onClick={handlePrevClick}
              alt="main"
              className="imageMain-main"
              src={img}
            ></img>
          </div>
          <div className="imageSubMain">
            <img
              onClick={() => setImg(imgWar)}
              alt="alt"
              className={
                imgWar === img ? "imageSubMain-sub active" : "imageSubMain-sub"
              }
              src={imgWar}
            ></img>
            <img
              onClick={() => setImg(imgWar2)}
              alt="alt"
              className={
                imgWar2 === img ? "imageSubMain-sub active" : "imageSubMain-sub"
              }
              src={imgWar2}
            ></img>
            {/* <img
            onClick={() =>
              setImg(
                "https://salt.tikicdn.com/cache/750x750/ts/product/fc/12/78/74f6b93c99df7051adcc932b2f48e92a.jpg.webp"
              )
            }
            alt="alt"
            className="imageSubMain-sub"
            src="https://salt.tikicdn.com/cache/750x750/ts/product/fc/12/78/74f6b93c99df7051adcc932b2f48e92a.jpg.webp"
          ></img>
          <img
            onClick={() =>
              setImg(
                "https://salt.tikicdn.com/cache/750x750/ts/product/b7/11/3f/081308de1206063bfca038dd1c2399c7.jpg.webp"
              )
            }
            alt="alt"
            className="imageSubMain-sub"
            src="https://salt.tikicdn.com/cache/750x750/ts/product/b7/11/3f/081308de1206063bfca038dd1c2399c7.jpg.webp"
          ></img>
          <img
            onClick={() =>
              setImg(
                "https://salt.tikicdn.com/cache/w1200/ts/product/9e/f1/81/0c4346469531d019026114d779f5ad34.jpg"
              )
            }
            alt="alt"
            className="imageSubMain-sub"
            src="https://salt.tikicdn.com/cache/w1200/ts/product/9e/f1/81/0c4346469531d019026114d779f5ad34.jpg"
          ></img> */}
          </div>
        </div>
        <div className="bar-right">
          <div className="title">Iphone 14</div>
          <div className="price">24.000.000d</div>
          <div className="size">size: 6.5 inch</div>
          <div className="action">
            <span>Quantity</span>
            <input type="number" className="qt" min="1"></input>
            <button className="BuyBtn">Buy now</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
export default Product;
