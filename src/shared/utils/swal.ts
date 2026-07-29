import Swal from 'sweetalert2'

export const basicSwal = Swal.mixin({
    theme: 'dark',
    confirmButtonText: '확인',
    confirmButtonColor: "#c9a84c",
    width: '600',
});

export const errorSwal = Swal.mixin({
    theme: 'dark',
    icon: 'error',
    confirmButtonText: '확인',
    confirmButtonColor: "#c9a84c",
    width: '600',
});

export const toastSwal = Swal.mixin({
    toast: true,
    theme: 'dark',
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    icon: "success",
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export const confirmSwal = Swal.mixin({
    theme: 'dark',
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: '취소',
    confirmButtonColor: "#ff0000",
    cancelButtonColor: "#c9a84c",
    width: '600',
});