import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/Product";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  const { products, onHandleRemove } = useContext(ProductContext);
  console.log(products);
  return (
    <>
      <div className="mt-10 ml-4">
        <Link to={"/admin/products/add"}>
          <button className="px-4 py-2 mb-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Create New
          </button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#F9F1E7] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              {/* <th scope="col" className="px-6 py-3">
          Price
        </th> */}
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((ProductItem: IProduct, index: number) => {
              return (
                <tr
                  key={index}
                  className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {ProductItem.title}
                  </th>
                  <td className="px-6 py-4">{ProductItem.desc}</td>
                  <td className="px-6 py-4">
                    {" "}
                    <img src={ProductItem.img} alt="" className="w-[360px] " />
                  </td>
                  {/* <td className="px-6 py-4">
        {ProductItem.price}
        </td> */}
                  <td className="flex  translate-y-[40%]">
                    <div>
                      <Link to={`/admin/products/${ProductItem.id}/edit`}>
                        <button className="w-14 py-2 mb-4 ml-2 text-white bg-green-500 rounded dark:text-red-500 hover:underline hover:bg-blue-700">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => onHandleRemove(ProductItem.id!)}
                        className="py-2 w-14 mb-4 ml-2 text-white bg-red-500 rounded dark:text-red-500 hover:underline hover:bg-blue-700"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
