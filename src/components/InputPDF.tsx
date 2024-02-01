const InputPDF = ({ routePDF }) => {
  const filename = routePDF?.split("/").pop();
  return (
    <a
      className="  text-black p-2 py-2 flex bg-white border-2
    items-center rounded-lg font-semibold
    hover:bg-black hover:border-2 hover:text-white
    
    "
      href={routePDF}
      download={filename}
      target="_blank"
    >
      Download PDF
    </a>
  );
};

export default InputPDF;
