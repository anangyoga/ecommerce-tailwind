const Card = ({ product }) => {
  // {product} berasal dari:
  // const product = props.product

  const priceAfterDiscounted = product.originalPrice - (product.originalPrice * product.discountPercent) / 100;

  return (
    <div className="border-2 border-gray-200 rounded-lg">
      <img src={product.image} alt="" className="mt-3" />
      <h2 className="font-bold mb-3 mt-3">{product.name}</h2>
      <p className="text-gray-500 text-xs">{product.desc}</p>
      <div className="flex justify-between mt-3">
        <div className="flex-col">
          <p className="font-bold">Rp {priceAfterDiscounted}</p>
          {product.discountPercent > 0 && <p className="text-gray-500 text-xs line-through">{product.originalPrice}</p>}
        </div>
        <button className="h-8 px-2 font-bold text-white bg-green-600 rounded-lg">Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
