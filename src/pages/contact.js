import React from "react";
import { useForm, Controller } from "react-hook-form";
import { MdEmail, MdPhone } from "react-icons/md";
import FormElement from "../../components/FormElement";

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="xl:container mx-auto mb-32">
      <div className="flex justify-center bg-gray-700">
        <h1 className="text-4xl sm:text-6xl text-white uppercase pt-4 py-10">
          Contact Us
        </h1>
      </div>
      <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto my-14">
        <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6">
          <div className="grid grid-cols-2 gap-x-6 mb-12 mx-auto">
            <div className="flex flex-col items-center">
              <MdEmail className="w-12 h-12 mb-2" />
              <span className="text-sm">Contact@us</span>
            </div>
            <div className="flex flex-col items-center">
              <MdPhone className="w-12 h-12 mb-2" />
              <span className="text-sm">+123 123 123</span>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="text"
                    label="Name"
                    placeholder="Enter name here ..."
                    fieldRef={field.ref}
                    hasError={errors.name}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="email"
                    label="Email"
                    placeholder="Enter email here ..."
                    fieldRef={field.ref}
                    hasError={errors.email}
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="textarea"
                    label="Message"
                    placeholder="Enter message here ..."
                    fieldRef={field.ref}
                    hasError={errors.message}
                  />
                )}
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-500 focus:outline-none focus:ring-0 active:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
