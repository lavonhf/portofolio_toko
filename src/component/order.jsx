import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

export default function Order({ dataItem }) {
  const [cartItems, setCartItem] = useState(dataItem)
  const [btnActive, setBtnActive] = useState(false)
  const [emailForm, setEmailForm] = useState(false)

  let counting = cartItems.reduce((prev, next) => parseInt(prev) + parseInt(next.quantity), 0)

  function handleBtn(e) {
    e.preventDefault()
    setBtnActive(!btnActive)
  }
  const form = useRef();

  function handleAddProduct(id, e) {
    setCartItem(cartItems.map((items) => {
      if (items.id === id) { {
          return { ...items, quantity: e.target.value }
        }
      } else { return items }
    }))
  }


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Pesanan telah terkirim, mohon tunggu konfirmasi dari kami. terimakasih.")
        console.log(result.text);
      }, (error) => {
        alert("Mohon coba lagi")
        console.log(error.text);
      });
  };

  return <>
    <div className="order-container">
      <div className="order_title">pilihan menu</div>
      <img className="bg_img" src="src/component/image/michael-oeser-V5nGhxuovig-unsplash.jpg" />
      <div className="order-cart">
        {cartItems.map((items) =>
          <li className="order_card" key={items.id}>
            <img src={items.img} />
            <div>
              <h1>{items.name}</h1>
              <div className="btn_order">
                <input min="0" type="number" 
                value={items.quantity} 
                onChange={(e) => { handleAddProduct(items.id, e) }} 
                id={items.idname} 
                className={items.quantity > 0 ? "hijau" : ""}/>
              </div>
            </div>
          </li>
        )}
      </div>
      <div onClick={() => { setEmailForm(!emailForm) }} className={counting === 0 ? "total_item hidden" : "total_item"}>total {counting} items</div>
      <form className={emailForm ? "email_form show" : "email_form"} ref={form} onSubmit={sendEmail}>
        <span onClick={() => setEmailForm(!emailForm)} className="span">X</span>
        <div>
          <span className="first_div">
            <button disabled={!btnActive} onClick={(e) => { handleBtn(e) }}>katering</button>
            <button disabled={btnActive} onClick={(e) => { handleBtn(e) }}>reservasi</button>
          </span>
          <input className="firts_input" value={btnActive ? "katering" : "reservasi"} name="book_type" />
          <label>Atas nama</label>
          <input type="text" name="behalf_of" />
          <label>tgl</label>
          <input type="date" name="date_booked" />
          <label>{btnActive ? "alamat" : "meja"}</label>
          <input type="text" name={btnActive ? "address" : "total_order"} />
          {cartItems.map((items) => (
            <li className="list_cart" key={items.id}>
              <input value={items.name} type="text" name="message" readOnly />
              <input value={items.quantity} type="text" name="message" readOnly />
            </li>
          ))}
          <label>No yg dapat di hubungi</label>
          <input type="text" name="no_hp" />
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  </>
}

