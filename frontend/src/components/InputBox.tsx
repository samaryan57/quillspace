type InputBoxProps = {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

function InputBox({ label, placeholder, onChange, type }: InputBoxProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <input
        type={type || "text"}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default InputBox;
