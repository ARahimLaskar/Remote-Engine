import Swal from "sweetalert2";
export const failComp = (title) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: title,
    showConfirmButton: false,
    timer: 2000,
  });
};

export const successComp = (title) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 2000,
  });
};
