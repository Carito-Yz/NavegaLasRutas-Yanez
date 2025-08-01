const FormCheckout = ({dataForm, handleChangeInput, sendOrder}) => {
  return (
    <div>
        <form onSubmit={sendOrder}>
            <h2>Chekout</h2>
            <div>
                <label>Nombre completo:</label>
                <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/>
            </div>

            <div>
                <label>Telefono:</label>
                <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>
            </div>

            <div>
                <label>Email:</label>
                <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>
            </div>

            <button type="submit">Enviar Orden</button>
        </form>
    </div>
  )
}

export default FormCheckout