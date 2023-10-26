import React from "react";
import { BsCupHotFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="home-page">
        <img
          className="home-bg"
          src="public/image/michael-oeser-V5nGhxuovig-unsplash.jpg"
        />
        <h1 className="home-title">
          Soto Ayam <br />
          Malang
        </h1>
        <Link to="/order" className="order-btn" >pesan</Link>
        <div className="home-card">
          <div className="card-box">
            <BsCupHotFill />
            <h1>Rest area</h1>
            <p>Lahan parkir yang cukup luas dapat menampung hingga 2 mini bus</p>
          </div>
          <div className="card-box">
            <BsCupHotFill />
            <h1>Makan siang</h1>
            <p>Pilihan menu dan suasana yang asri sebagai pendamping istirahat siang</p>
          </div>
          <div className="card-box">
            <BsCupHotFill />
            <h1>katering</h1>
            <p>Kami menyediakan tampat makan hingga 30 orang dan menerima pesanan untuk kebutuhan pesta</p>
          </div>
          
        </div>
      </section>
    </>
  );
}
