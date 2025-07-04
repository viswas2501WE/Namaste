import Part5Common from "./Part5Common";

const Part5 = () => {
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
  ];

  return (
    <div className="text-black px-[14%] py-8" style={{ fontFamily: 'Inter, sans-serif' }}>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((product) => (
          <Part5Common
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

export default Part5;
