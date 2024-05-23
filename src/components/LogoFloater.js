export default function LogoFloater({children, bgColor}) {
  
    return (
    <div className="bag" style={{backgroundColor:bgColor}} onClick={handleBagData}>
      {children}
    </div>
  );
}
