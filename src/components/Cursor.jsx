function Cursor() {
  return (
    <>
      <div
        className="cursor-base hidden h-3 w-3 bg-gold transition-[width,height,background-color,transform] duration-150 md:block"
        id="cursor"
      />
      <div className="cursor-ring-base h-10 w-10 transition-all duration-200" id="cursorRing" />
    </>
  );
}

export default Cursor;
