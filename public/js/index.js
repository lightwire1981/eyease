$(()=>{
    setWidget()

})

function setWidget() {
    $('.Btn-Login').on('click', (e)=>{
        Swal.fire({
            title: 'Login Test',
            text: 'Login Function Test',
        })
    })
}