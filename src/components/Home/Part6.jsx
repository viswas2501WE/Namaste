import Image from "next/image"

const Part6 = () => {
    return(
        <div className="flex justify-center items-center px-[14%] text-gray-600">
            <Image
                src={`/Cream_Black_Minimalist.png`}
                alt="Cream Black Minimalist"
                height={700}
                width={550}
            />
            <div className="pl-20 pr-10">
                <h1 className="text-2xl pb-5">Sustainable Packaging</h1>
                <div className="text-gray-500 font-extralight">
                <p className="pb-4">Our Dream, Your Treasure: The Story Behind Our Wooden Celestial Boxes</p>
                <p className="pb-4">Every product has a story, and ours is one of passion, dreams, and artistry. Our journey began with a vision to create something unique and meaningful—something that would bring beauty and joy into people’s lives.</p>
                <p className="pb-4">The celestial engravings in brass on each box are carefully handcrafted crafted to evoke the mystery and magic of the night sky.</p>
                <p className="pb-4">Inspired by the wonders of the cosmos and the timeless allure of celestial motifs, we set out to design boxes that would not only serve as functional storage but also as beautiful pieces of art. 🌙✨</p>
                </div>
            </div>
        </div>
    )
}
export default Part6