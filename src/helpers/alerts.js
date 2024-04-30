import Swal from "sweetalert2"

export const alertWarning = (text = "Este campo es obligatorio", timer = 2000) => {
  
  Swal.fire({
    icon: 'warning',
    html: `<b>${text}</b>`,
    timer: timer,
    confirmButtonColor: "#444444",
    iconColor: "#F7AC08",
  })
}

export const alertInfo = (text = "Este campo es obligatorio", timer = 2000) => {
  
  Swal.fire({
    icon: 'info',
    html: `<b>${text}</b>`,
    timer: timer,
    confirmButtonColor: "#444444",
    iconColor: "#c77dff",
  })
}

export const alertSuccess = (text = "Enviado con éxito") => {
  
  Swal.fire({
    icon: 'success',
    html: `<b>${text}</b>`,
    timer: 4000,
    confirmButtonColor: "#444444",
    // iconColor: "#F7AC08",
  })
}