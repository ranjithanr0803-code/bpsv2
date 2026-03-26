import { Menu, Paper, Popover, Popper } from "@mui/material";

const DropdownOptionsMobile = (props) => {
  
    return (
      <>
      {
      Boolean(props?.anchorEl) &&

        <div  
          className="show-dropdown"
        //   anchorEl={props?.anchorEl}
          open={true}
        //   open={Boolean(props?.anchorEl)}
          onClose={props?.handleClose}
        //   onMouseLeave={props?.handleMouseLeave}
          anchorOrigin={{
            vertical: props?.anchorvertical ?? "bottom",
            horizontal: props?.anchorhorizontal ?? "left",
          }}
          transformOrigin={{
            vertical: props?.transformvertical ?? "top",
            horizontal: props?.transformhorizontal ?? "left",
          }}

          {...props}
        >
          <ul
            // onMouseLeave={props?.handleMouseLeave}
            style={{
              listStyleType: "none",
              padding: 0,
              paddingLeft: 0,
              minWidth: "5rem",
              maxWidth: "15rem",
              overflow: "auto",
            }}
          >
            {props.data.length > 0 &&
              props.data.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      props?.handleClose();
                      //    return <Navigate to={item.path(index)||"/"} />
  
                      // history.push(item.path(index))
                    }}
                    className="li-hover"
                    style={{
                      padding: 1,
                      paddingLeft: 10,
                    }}
                  >
                    <a
                      href={Boolean(props.path[index]) ? props.path[index] : "/"}
                      style={{ textDecoration: "none", color: "white", }}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
          </ul>
      
        </div>
}

      </>
    );
  };

  export default DropdownOptionsMobile;