import React, { useContext, useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContextProvider";
import axios from "axios";

type FormValue = {
  title: string;
  img: string;
  desc: string;
};

const ProductEdit = () => {
  const { onHandleEdit } = useContext(ProductContext);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>();

  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      reset(data);
    })();
  }, [id]);
  const onSubmit: SubmitHandler<FormValue> = (data) => {
    onHandleEdit(data);
    navigate("/admin");
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white text-center">
            Edit Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Title
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product title"
                />
                {errors.title && <span>This field is required</span>}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Image
                </label>
                <input
                  type="img"
                  {...register("img")}
                  name="img"
                  id="img"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product Image"
                />
                {errors.img && <span>This field is required</span>}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>

                <input
                  type="desc"
                  {...register("desc", { required: true })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                />
                {errors.desc && <span>This field is required</span>}
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Edit Product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ProductEdit;
