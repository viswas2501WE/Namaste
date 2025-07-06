import Image from "next/image";

const Part8 = () => {
    return(
        <div className="flex px-[14%] text-gray-600 justify-center items-center">
            <div className="w-[50%] h-130 flex justify-center items-center border-1 border-gray-100">
                <Image
                    src={`/aas.jpg`}
                    alt="aas"
                    height={600}
                    width={600}
                />
            </div>
            <div className="w-[50%] px-20">
                <h1 className="text-2xl pb-5">This shiva card specially designed by Mansi priya (founder)</h1>
                <p className="pb-4 text-gray-500">You can keep this card in your wallet, desk, phone cover, etc.</p>
                <p className="pb-4 text-gray-500">(Note - you can tell us if you don't want it while placing order - we are not imposing our religion beliefs on anyone)</p>
            </div>
        </div>
    )
}
export default Part8;