import Part13Common from "./Part13Common";

const Part13 = () => {
  // Explicitly defined product items with unique image URLs and titles
  const products = [
    {
      id: 1,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Replace with your actual image path
      linkHref: '/product/1',
    },
    {
      id: 2,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      linkHref: '/product/2',
    },
    {
      id: 3,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      linkHref: '/product/3',
    },
    {
      id: 4,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      linkHref: '/product/4',
    },
    {
      id: 5,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      linkHref: '/product/5',
    },
     {
      id: 6,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      price: '1000',
      linkHref: '/product/4',
    },
    {
      id: 7,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      price: '1000',
      linkHref: '/product/5',
    },
    {
      id: 8,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Replace with your actual image path
      price: '1000',
      linkHref: '/product/1',
    },
    {
      id: 9,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      price: '1000',
      linkHref: '/product/2',
    },
    {
      id: 10,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      price: '1000',
      linkHref: '/product/3',
    },
  ];

  return (
    <div className="text-black px-[14%] pb-8 pt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        <h1 className="flex justify-self-center text-2xl py-[2%]">Follow us on Instagram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-items-center">
        {products.map((product) => (
          <Part13Common
            key={product.id}
            imageUrl={product.imageUrl}
            linkHref={product.linkHref}
          />
        ))}
      </div>
    </div>
  );
};

export default Part13;
