import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "./Textbox";
import Loading from "./Loader";
import Button from "./Button";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { useUpdateUserMutation } from "../redux/slices/api/userApiSlice";


const AddUser = ({ open, setOpen, userData }) => {
  let defaultValues = userData ?? {};
  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const dispatch = useDispatch();

const [addNewUser,{isLoading}] = useRegisterMutation()
const [updateUser, {isLoading: isUpdating}] = useUpdateUserMutation();

  const handleOnSubmit =async () => {
    try {
      if (userData) {
        const result = await updateUser(data).unwrap();

        toast.success(result?.message);

        if(userData?._id == user>_id){
          dispatch(setCredentials({...result.user}))
        }

      }else{
        const result = await addNewUser({...data,password: data.email}).unwrap();

        toast.success("New User added")
      }

      setTimeout(() =>{
        setOpen(false)
      },1500)
    } catch (error) {
      toast.error("something went wrong")
    }
  };

//handleOnSubmit: An async function that handles form submission.
// If userData exists, it means we are updating an existing user.
// updateUser(data): Triggers the update user mutation with the form data.
// unwrap(): Extracts the response or throws an error.
// toast.success(result?.message): Displays a success message.
// If the updated user is the current user, update the credentials in the Redux state.
// If userData does not exist, it means we are adding a new user.
// addNewUser({ ...data, password: data.email }): Triggers the register mutation with the form data and sets the password to the email.
// toast.success("New User added"): Displays a success message.
// setTimeout(() => { setOpen(false); }, 1500): Closes the modal after 1.5 seconds.
// toast.error("Something went wrong"): Displays an error message if the request fails.


  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
          <Dialog.Title
            as='h2'
            className='text-base font-bold leading-6 text-gray-900 mb-4'
          >
            {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
          </Dialog.Title>
          <div className='mt-2 flex flex-col gap-6'>
            <Textbox
              placeholder='Full name'
              type='text'
              name='name'
              label='Full Name'
              className='w-full rounded'
              register={register("name", {
                required: "Full name is required!",
              })}
              error={errors.name ? errors.name.message : ""}
            />
            <Textbox
              placeholder='Title'
              type='text'
              name='title'
              label='Title'
              className='w-full rounded'
              register={register("title", {
                required: "Title is required!",
              })}
              error={errors.title ? errors.title.message : ""}
            />
            <Textbox
              placeholder='Email Address'
              type='email'
              name='email'
              label='Email Address'
              className='w-full rounded'
              register={register("email", {
                required: "Email Address is required!",
              })}
              error={errors.email ? errors.email.message : ""}
            />

            <Textbox
              placeholder='Role'
              type='text'
              name='role'
              label='Role'
              className='w-full rounded'
              register={register("role", {
                required: "User role is required!",
              })}
              error={errors.role ? errors.role.message : ""}
            />
          </div>

          {isLoading || isUpdating ? (
            <div className='py-5'>
              <Loading />
            </div>
          ) : (
            <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
              <Button
                type='submit'
                className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
                label='Submit'
              />

              <Button
                type='button'
                className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                onClick={() => setOpen(false)}
                label='Cancel'
              />
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  );
};

export default AddUser;

