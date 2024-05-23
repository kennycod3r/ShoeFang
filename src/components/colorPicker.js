export default function ColorPicker({hovered}){
    return(
        <>
            <div className="flexCenter color-picker">
              <span className="flexCenter color-radio-border">
                <span
                  className="color-radio"
                  style={{ backgroundColor:hovered ? "#3c443f" : "grey" }}
                ></span>
              </span>
              <span className="flexCenter color-radio-border">
                <span
                  className="color-radio"
                  style={{ backgroundColor:hovered ? "grey" : "#3c443f"}}
                ></span>
              </span>
            </div>
        
        </>
    )
}