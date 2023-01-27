import { useState } from "react";
import { InputNumber, Input, TextArea } from "./Inputs"
import { AlertError, AlertExit } from "./Alerts"
import Button from "./Button";

export default function Form(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [statusResponse, setStatusResponse] = useState('');
  const [ok, setOk] = useState(0);


  const SendData = async (name, email, number, message) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({
        name: name,
        email: email,
        number: number,
        message: message
      })
    };
    await fetch(props.Router, requestOptions)
      .then((Response) => {
        if (Response.status == 201) {
          setOk(1)
          setStatusResponse("Datos Agregados")
        } else {
          setOk(2);
          setStatusResponse("!Upps! hubo un error")
        }

      })
  }

  var Alert = null;

  if (ok == 1) {
    Alert = <AlertExit message={statusResponse} />
  } else {
    Alert = <AlertError message={statusResponse} />
  }

  return (
    <>

      <div className="w-full max-w-2xl  p-4 
      rounded-lg shadow 
      sm:p-6 md:p-8 
      bg-gray-800 
      border-gray-700">

        {
          props.children
        }

        <h1 className="text-center text-4xl "  >Formulario</h1>
        <br />
        <form onSubmit={(e) => {
          e.preventDefault();

          SendData(name, email, number, message);

          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
        }} >

          <div className="" >

            <Input
              label={"name"}
              placeholder={"your Name"}
              setStatus={setName}
              status={name}
              type={'text'}
            />


            <InputNumber
              label={"number"}
              placeholder={"+57 3003456789"}
              setStatus={setNumber}
              status={number}
              type={'number'}
            />

          </div>

          <Input
            label={"email"}
            placeholder={"name@example.com"}
            setStatus={setEmail}
            status={email}
            type={'email'}
          />

          <TextArea
            label={"your messages"}
            placeholder={"messages..."}
            setStatus={setMessage}
            status={message}
          />

          <br />

          <Button></Button>
        </form>
        <br />
        {
          Alert
        }
      </div>

    </>
  )
}
