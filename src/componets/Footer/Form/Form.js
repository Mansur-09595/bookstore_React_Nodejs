import React from "react";
import './form.scss'
import '../../Section/buttons.scss'

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Получаем значения из формы
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const mailOptions = {
      name,
      email,
      message,
    };

    fetch("http://localhost:3001/send_email", {
      method: "POST",
      body: JSON.stringify(mailOptions),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Сообщение успешно отправлено!");
          form.reset();
        } else {
          alert("Произошла ошибка при отправке сообщения.");
        }
      })
      .catch((error) => {
        alert("Произошла ошибка при отправке сообщения.");
        console.error(error);
      });
  };

  return (
    <div className="block8" id="order">
      <h1>Форма отправки заказа</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Имя:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Сообщение:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button className="btn btn--stripe" type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Form;
