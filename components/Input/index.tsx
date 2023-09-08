const InputText = ({ label, name, type, register, error }: any) => {
  return (
    <>
      <input
        id={name}
        name={name}
        type={type}
        {...register(name)}
        placeholder={label}
        className="bg-blue-500 p-2 rounded-md text-gray-300 w-full mb-3 text-md font-thin focus:outline-none focus:ring-1 focus:ring-pink-500 "
      />
      <p className="mb-2 text-xs text-red-500 font-thin">{error}</p>
    </>
  )
}

export default InputText
