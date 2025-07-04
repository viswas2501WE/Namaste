import Image from "next/image";

const Part9 = () => {
    return(
        <div className="flex px-[14%] text-black pt-15 justify-center items-center">
            <div className="w-[50%] px-20">
                <h1 className="text-2xl pb-5">Free Healing Crystals</h1>
                <p className="pb-4">With every order, we include free healing crystal chips
These small, beautiful stones can easily fit in your bag, pocket, or anywhere you like</p>
                <p>How to Use the Crystal Chips:</p>
                <p>- Carry Them -Keep a few in your bag for daily energy boosts.</p>
                <p>- Meditation -Use them during meditation to enhance your practice and focus your intentions.</p>
                <p>- Decorate-Place them in a small dish at home or work for positive energy.</p>
                <p>- Gift Them-Share with friends or family to spread the healing vibes.</p>
            </div>
            <div className="w-[50%] h-130 flex justify-center items-center border-1 border-gray-100">
                <Image
                    src={`/Free_healing_crystals_aas.jpg`}
                    alt="Free healing crystals"
                    height={700}
                    width={700}
                />
            </div>
        </div>
    )
}
export default Part9;