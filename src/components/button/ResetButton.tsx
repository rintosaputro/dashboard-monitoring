type Props = {
  onClick: () => void;
};

const ResetButton = ({ onClick }: Props) => {
  return (
    <button
      title="Reset Filter"
      type="button"
      onClick={onClick}
      className="bg-primary text-white rounded-md px-5 cursor-pointer hover:opacity-50"
    >
      Reset
    </button>
  );
};

export default ResetButton;
