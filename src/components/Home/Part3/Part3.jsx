import Part3Common from "./Part3Common";

const Part3 = () => {
  // Explicitly defined product items with unique image URLs and titles
  const products = [
    {
      id: 1,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Replace with your actual image path
      title: 'Rings Silver 925',
      linkHref: '/product/1',
    },
    {
      id: 2,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Pendants',
      linkHref: '/product/2',
    },
    {
      id: 3,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Silver 925 Earrings',
      linkHref: '/product/3',
    },
    {
      id: 4,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Nose rings / Nose pins / Septums / Clip ons',
      linkHref: '/product/4',
    },
    {
      id: 5,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Bracelets Gold Plated',
      linkHref: '/product/5',
    },
    {
      id: 6,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Necklaces Pearl',
      linkHref: '/product/6',
    },
    {
      id: 7,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Charms Collection',
      linkHref: '/product/7',
    },
    {
      id: 8,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Brooches Vintage',
      linkHref: '/product/8',
    },
    {
      id: 9,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Anklets Silver',
      linkHref: '/product/9',
    },
    {
      id: 10,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Bangles Gemstone',
      linkHref: '/product/10',
    },
    {
      id: 11,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Cufflinks Modern',
      linkHref: '/product/11',
    },
    {
      id: 12,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Hair Accessories',
      linkHref: '/product/12',
    },
    {
      id: 13,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Body Chains',
      linkHref: '/product/13',
    },
    {
      id: 14,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Toe Rings',
      linkHref: '/product/14',
    },
    {
      id: 15,
      imageUrl: '/70048E73-FC04-4A94-A59C-374E7A399E9B.jpg', // Placeholder
      title: 'Kids Jewelry',
      linkHref: '/product/15',
    },
  ];

  return (
    <div className="text-black px-[14%] py-8" style={{ fontFamily: 'Inter, sans-serif' }}>
      <h1 className="text-4xl mb-8">Shop By Category</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((product) => (
          <Part3Common
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
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

export default Part3;
