import Swal from "sweetalert2"

export const alertaWarning = (text = "Este campo es obligatorio") => {
  
  Swal.fire({
    icon: 'warning',
    html: `<b>${text}</b>`,
    timer: 2000,
    confirmButtonColor: "#444444",
    iconColor: "#F7AC08",
  })
}

export const alertaSuccess = (text = "Enviado con éxito") => {
  
  Swal.fire({
    icon: 'success',
    html: `<b>${text}</b>`,
    timer: 2000,
    confirmButtonColor: "#444444",
    // iconColor: "#F7AC08",
  })
}