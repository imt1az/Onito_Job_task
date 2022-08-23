import { FiChevronDown } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import Users from "./Users";
import axios from "axios";

const Form = () => {
  const initialValues = {
    name: "",
    mobile: "",
    guardian: "",
    label: "",
  };
  const [info, setInfo] = useState(null);
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.mobile) {
      errors.mobile = "Required";
    }
    if (!values.label) {
      errors.label = "Required";
    }
    if (!values.guardian) {
      errors.guardian = "Required";
    }

    return errors;
  };

  //   const  onSubmit=(values , {resetForm} ) => {
  //     console.log(values);
  //     resetForm({ values: ''});
  // }

  const onSubmit = async (values, { resetForm }) => {
    // setInfo(values);
    // initialValues();
    await axios.post("http://localhost:5000/users", values).then((res) => {
      console.log(res.data);
    });
    resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues,

    validate,
    onSubmit,
  });

  return (
    <div>
      <div className="container mx-auto mt-10">
        <h1 className="font-bold">Personal Details</h1>
        <hr></hr>
        {/* Form Section Started */}
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-7 gap-7">
            <div className="col-span-3 ">
              {/* Name */}
              <div className="mt-3">
                <div className="flex flex-row items-center">
                  <div className="w-4">
                    <h1 className="font-semibold">Name*:</h1>
                  </div>
                  <div className="basis-full ml-10">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      placeholder="Enter Name"
                      className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="">
                        <p className="text-red-500">{formik.errors.name}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              {/* Mobile */}
              <div className="mt-3">
                <div className="flex flex-row items-center">
                  <div className="w-4">
                    <h1 className="font-semibold">Mobile:</h1>
                  </div>
                  <div className="basis-4/6 ml-10">
                    <input
                      type="text"
                      name="mobile"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mobile}
                      placeholder="Mobile Number"
                      className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                    />
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className="">
                        <p className="text-red-500">{formik.errors.mobile}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h1 className="font-bold">Contact Details</h1>
                <hr></hr>
                {/* Guardian Details */}
                <div className="mt-3">
                  <div className="flex flex-row items-center">
                    <div className="">
                      <h1 className="font-semibold">Guardian Details:</h1>
                    </div>
                    <div className="basis-2/6 ml-10">
                      <div className="group relative">
                        <select
                          name="label"
                          id="label"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.label}
                          placeholder=""
                          className="text-gray-400 border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                        >
                          <option value="">Enter Label</option>
                          <option value="Father">Father</option>
                          <option value="Mother">Mother</option>
                        </select>
                        {formik.touched.label && formik.errors.label ? (
                          <div className="">
                            <p className="text-red-500">
                              {formik.errors.label}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="basis-4/6 ml-10">
                      <input
                        type="text"
                        name="guardian"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.guardian}
                        placeholder="Enter Guardian Name"
                        className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                      />
                      {formik.touched.guardian && formik.errors.guardian ? (
                        <div className="">
                          <p className="text-red-500">
                            {formik.errors.guardian}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              {/* Address */}
              <div className="mt-3">
                <h1 className="font-bold">Contact Details</h1>
                <hr></hr>
                <div className="flex flex-row items-center mt-3">
                  <div className="w-4">
                    <h1 className="font-semibold">Address:</h1>
                  </div>
                  <div className="basis-full ml-12">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      placeholder="Enter Address"
                      className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="">
                        <p className="text-red-500">{formik.errors.name}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              {/* Country */}
              <div className="mt-3">
                <div className="flex flex-row items-center">
                  <div className="w-4">
                    <h1 className="font-semibold">Country:</h1>
                  </div>
                  <div className="basis-4/6 ml-12">
                    <div className="group relative">
                      <select
                        name="label"
                        id="label"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.label}
                        placeholder=""
                        className="text-gray-400 border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                      >
                        <option value="">Enter Country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                      </select>
                      {formik.touched.label && formik.errors.label ? (
                        <div className="">
                          <p className="text-red-500">{formik.errors.label}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Col */}
            <div className="col-span-4">
              {/* Date Birth or Age */}
              <div className="mt-3">
                <div className="flex flex-row items-center">
                  <div className="">
                    <h1 className="font-semibold">Date Birth or Age:</h1>
                  </div>
                  <div className="basis-4/6 ml-5">
                    <div className="group relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="Age"
                        className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="">
                          <p className="text-red-500">{formik.errors.name}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="basis-2/6 ml-5">
                    <div className="flex flex-row items-center justify-between gap-4">
                      <div className="">
                        <h1 className="font-semibold">Sex:</h1>
                      </div>
                      <select
                        name="label"
                        id="label"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.label}
                        placeholder=""
                        className="text-gray-400 border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                      >
                        <option value="">Enter Sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {formik.touched.label && formik.errors.label ? (
                        <div className=" diis">
                          <p className="text-red-500">{formik.errors.label}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* Govt  Id */}
              <div className="mt-3">
                <div className="flex flex-row items-center">
                  <div className="">
                    <h1 className="font-semibold">Govt Issued ID:</h1>
                  </div>
                  <div className="basis-2/6 ml-10">
                    <div className="group relative">
                      <select
                        name="id_type"
                        id="id_type"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id_type}
                        placeholder=""
                        className="text-gray-400 border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                      >
                        <option value="">ID Type</option>
                        <option value="Passport">Passport</option>
                        <option value="National Id">National Id</option>
                      </select>
                      {formik.touched.label && formik.errors.label ? (
                        <div className="">
                          <p className="text-red-500">{formik.errors.label}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="basis-4/6 ml-10">
                    <input
                      type="text"
                      name="govt_id"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.guardian}
                      placeholder="Enter Govt id"
                      className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                    />
                    {formik.touched.guardian && formik.errors.guardian ? (
                      <div className="">
                        <p className="text-red-500">{formik.errors.guardian}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Email And Emergency */}
              <div className="mt-3">
                <div className="flex flex-row gap-2">
                  {/* Email */}
                  <div className="basis-4/6">
                    <div className="flex items-center">
                      <div className="w-28">
                        <h1 className="font-semibold">Email:</h1>
                      </div>
                      <div className="ml-11 w-full">
                        <input
                          type="text"
                          name="govt_id"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.guardian}
                          placeholder="Enter Govt id"
                          className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                        />
                        {formik.touched.guardian && formik.errors.guardian ? (
                          <div className="">
                            <p className="text-red-500">
                              {formik.errors.guardian}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact Number */}
                  <div className="basis-3/6">
                    <div className="flex items-center">
                      <div className="">
                        <h1 className="font-semibold">
                          Emergency Contact Number:
                        </h1>
                      </div>
                      <div className="">
                        <input
                          type="text"
                          name="govt_id"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.guardian}
                          placeholder="Enter Govt id"
                          className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                        />
                        {formik.touched.guardian && formik.errors.guardian ? (
                          <div className="">
                            <p className="text-red-500">
                              {formik.errors.guardian}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* State and City */}
              <div className="mt-3">
                <div className="flex flex-row gap-4">
                  {/* State */}
                  <div className="basis-3/6">
                    <div className="flex items-center">
                      <div className="w-28">
                        <h1 className="font-semibold">State:</h1>
                      </div>
                      <div className="ml-11 w-full">
                        <input
                          type="text"
                          name="govt_id"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.guardian}
                          placeholder="State"
                          className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                        />
                        {formik.touched.guardian && formik.errors.guardian ? (
                          <div className="">
                            <p className="text-red-500">
                              {formik.errors.guardian}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* City */}
                  <div className="basis-3/6">
                    <div className="flex items-center">
                      <div className="w-12">
                        <h1 className="font-semibold">City:</h1>
                      </div>
                      <div className="ml-11 w-full">
                        <input
                          type="text"
                          name="govt_id"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.guardian}
                          placeholder="City"
                          className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                        />
                        {formik.touched.guardian && formik.errors.guardian ? (
                          <div className="">
                            <p className="text-red-500">
                              {formik.errors.guardian}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pincode */}
              <div className="mt-3">
                <div className="flex flex-row gap-4">
                  {/* Pincode */}
                  <div className="basis-3/6">
                    <div className="flex items-center">
                      <div className="w-28">
                        <h1 className="font-semibold">Pincode:</h1>
                      </div>
                      <div className="ml-11 w-full">
                        <input
                          type="text"
                          name="govt_id"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.guardian}
                          placeholder="State"
                          className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                        />
                        {formik.touched.guardian && formik.errors.guardian ? (
                          <div className="">
                            <p className="text-red-500">
                              {formik.errors.guardian}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section Ended */}
            </div>
          </div>
          {/* Other Details */}
          <div className="mt-3">
            <h1 className="font-bold">Other Details</h1>
            <hr></hr>
            <div className="mt-3">
              <div className="grid grid-cols-2 gap-10">
                {/* Occupation and Religion*/}
              <div className="flex flex-row gap-4">
                  {/* State */}
                  <div className="basis-3/6">
                    <div className="flex items-center">
                      <div className="">
                        <h1 className="font-semibold">Occupation:</h1>
                      </div>
                      <div className="ml-11 w-full">
                        <input
                          type="text"
                          name="govt_id"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.guardian}
                          placeholder="Occupation"
                          className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                        />
                        {formik.touched.guardian && formik.errors.guardian ? (
                          <div className="">
                            <p className="text-red-500">
                              {formik.errors.guardian}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Religion */}
                  <div className="basis-3/6">
                    <div className="flex items-center">
                      <div className="">
                        <h1 className="font-semibold">Religion:</h1>
                      </div>
                      <div className="ml-11 w-full">
                      <select
                        name="id_type"
                        id="id_type"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id_type}
                        placeholder=""
                        className="text-gray-400 border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                      >
                        <option value="">Religion</option>
                        <option value="Islam">Islam</option>
                        <option value="Hinduism">Hinduism</option>
                      </select>
                      {formik.touched.label && formik.errors.label ? (
                        <div className="">
                          <p className="text-red-500">{formik.errors.label}</p>
                        </div>
                      ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marital and Blood Group */}
                <div className="flex flex-row gap-4">
                  {/* Marital Status */}
                  <div className="basis-3/6">
                    <div className="flex items-center">
                      <div className="">
                        <h1 className="font-semibold">Marital Status:</h1>
                      </div>
                      <div className="ml-11 w-full">
                        <input
                          type="text"
                          name="govt_id"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.guardian}
                          placeholder="Marital Status"
                          className="border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                        />
                        {formik.touched.guardian && formik.errors.guardian ? (
                          <div className="">
                            <p className="text-red-500">
                              {formik.errors.guardian}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Blood Group */}
                  <div className="basis-3/6">
                    <div className="flex items-center">
                      <div className="">
                        <h1 className="font-semibold">Blood Group:</h1>
                      </div>
                      <div className="ml-11 w-full">
                      <select
                        name="id_type"
                        id="id_type"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id_type}
                        placeholder=""
                        className="text-gray-400 border border-red-300 border-1 rounded-md   w-full border-gray-200 px-3 py-1.5 focus:outline-none border-gray-300"
                      >
                        <option value="">Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                      </select>
                      {formik.touched.label && formik.errors.label ? (
                        <div className="">
                          <p className="text-red-500">{formik.errors.label}</p>
                        </div>
                      ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-slate-700 p-3 border-2 border-gray-400 rounded-lg mt-5"
          >
            Submit
          </button>
        </form>
        <Users info={info}></Users>
      </div>
    </div>
  );
};

export default Form;
