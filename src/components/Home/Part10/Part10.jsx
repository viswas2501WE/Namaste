import Part10Common from "./Part10Common";

const Part10 = () => {
  // Explicitly defined product items with unique image URLs and titles
  const products = [
    {
      id: 1,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Replace with your actual image path
      title: 'Rings Silver 925',
      price: '1000',
      linkHref: '/product/1',
    },
    {
      id: 2,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Pendants',
      price: '1000',
      linkHref: '/product/2',
    },
    {
      id: 3,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Silver 925 Earrings',
      price: '1000',
      linkHref: '/product/3',
    },
    {
      id: 4,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Nose rings / Nose pins / Septums / Clip ons',
      price: '1000',
      linkHref: '/product/4',
    },
    {
      id: 5,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Nose rings / Nose pins / Septums / Clip ons',
      price: '1000',
      linkHref: '/product/4',
    },
    {
      id: 6,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Nose rings / Nose pins / Septums / Clip ons',
      price: '1000',
      linkHref: '/product/4',
    },
    {
      id: 7,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Bracelets Gold Plated',
      price: '1000',
      linkHref: '/product/5',
    },
    {
      id: 8,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Replace with your actual image path
      title: 'Rings Silver 925',
      price: '1000',
      linkHref: '/product/1',
    },
    {
      id: 9,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Pendants',
      price: '1000',
      linkHref: '/product/2',
    },
    {
      id: 10,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Silver 925 Earrings',
      price: '1000',
      linkHref: '/product/3',
    },
    {
      id: 11,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Nose rings / Nose pins / Septums / Clip ons',
      price: '1000',
      linkHref: '/product/4',
    },
    {
      id: 12,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Bracelets Gold Plated',
      price: '1000',
      linkHref: '/product/5',
    },
  ];

  return (
    <div className="text-black px-[14%] py-8" style={{ fontFamily: 'Inter, sans-serif' }}>
        <h1 className="text-4xl pb-[3%]">Featured Products</h1>
        <h1 className="text-sm pb-[3%]">Top Best Sellers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 justify-items-center">
        {products.map((product) => (
          <Part10Common
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            linkHref={product.linkHref}
          />
        ))}
      </div>

        <div className="border-1 border-[#93826E] w-fit flex justify-self-center ">
      <button className="flex justify-self-center bg-[#93826E] text-white border-white border-1 px-8 py-3" >
        View All
      </button>
        </div>
    </div>
  );
};

export default Part10;
