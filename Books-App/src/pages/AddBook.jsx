import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import books from '../constants/books.json'
import { toast } from "react-toastify";
import { toastConfig } from "../constants/ToastConfig";

function AddBook() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    if (isValid) {
      console.log(data)
      books.push(data)
      toast.success(`Book added successfully.`, toastConfig);
      navigate('/list')
    }
  };
  return (
    <div className="max-w-[25rem] my-0 mx-auto">

      <form className="flex flex-col justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">Add Book</h2>
        <div className="mb-4">
          <TextField
            className="w-full"
            id="author"
            label="Author"
            variant="outlined"
            error={errors?.author?.type === "required"}
            {...register("author", { required: true })}
          />
          {errors?.author?.type === "required" && (
            <small className="text-red-600">*Author name is required.</small>
          )}
        </div>
        <div className="mb-6">
          <TextField
            className="w-full"
            id="title"
            label="Title"
            variant="outlined"
            error={errors?.title?.type === "required"}
            {...register("title", { required: true })}
          />
          {errors?.title?.type === "required" && (
            <small className="text-red-600">*Book title is required.</small>
          )}
        </div>
        <input
              type="submit"
              name="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              value="Create Agent"
              onClick={handleSubmit(onSubmit)}
            />
      </form>
    </div>
  );
}
export default AddBook;
