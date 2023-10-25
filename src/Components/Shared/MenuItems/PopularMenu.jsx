
const PopularMenu = ({ items }) => {
    const { name, recipe, price, image } = items;
    return (
        <div>
            <div className="flex space-x-5">
                {/* First Div with Image */}
                <div>
                    <img
                        src={image}
                        alt="Product"
                        className="w-[200px] rounded-ee-full rounded-es-full rounded-tr-full"
                    />
                </div>

                {/* Second Div with Title and Text */}
                <div className="">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="mt-2 text-gray-600">
                       {recipe}...
                    </p>
                </div>

                {/* Third Div with Price */}
                <div className="">
                    <p className="text-xl font-bold">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularMenu;