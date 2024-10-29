const submitForm = async(event: SubmitEvent, id: string, route: string) => {
    event.preventDefault()
    const form = document.getElementById(id) as HTMLFormElement | null
    if(!form){
        console.log("Form not found")
        return
    }
    const formData = new FormData(form)
    try {
        const response = await fetch(route, {
            method: "POST",
            body: formData
        })
        if(!response.ok) {
            throw new Error(`Error: ${response.status}: ${response.statusText}`)
        }
        form.reset()
    } catch (error) {
        if(error instanceof(Error)){
            console.log("Error al registrar usuario", error.message)
        }
    }
}