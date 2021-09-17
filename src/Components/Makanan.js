import React, { Component } from "react";
import "./Makanan.css";

const makanan = [
  {
    gambar: "🥪",
    nama: "Sandwich",
    harga: 25000,
  },
  {
    gambar: "🍔",
    nama: "Hamburger",
    harga: 37000,
  },
  {
    gambar: "🍕",
    nama: "Pizza",
    harga: 50000,
  },
];

export default class Makanan extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    alert(`Selamat Datang, silahkan pilih menu makanan yang ingin dipesan!`);
  }
  componentDidUpdate(prevProps, state, snapshot) {
    alert(
      `Item diupdate! Total item pesanan Anda : ${
        this.state.cart.length
      }. Total harga : Rp${this.getTotal()}`
    );
  }
  componentWillUnmount() {
    alert("Terima Kasih telah memesan");
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return window.confirm("Update pesanan Anda?");
  }

  add = (pilihan) => {
    this.setState((state) => ({
      cart: [...state.cart, pilihan],
    }));
  };

  remove = (pilihan) => {
    this.setState((state) => {
      const cart = [...state.cart];
      const pilihanIndex = cart.findIndex((p) => p.nama === pilihan.nama);
      if (pilihanIndex < 0) {
        return;
      }
      cart.splice(pilihanIndex, 1);
      return {
        cart,
      };
    });
  };

  getTotal = () => {
    const total = this.state.cart.reduce(
      (totalCost, item) => totalCost + item.harga,
      0
    );
    return total.toLocaleString(undefined);
  };

  render() {
    return (
      <div className="komponen">
        <div>Keranjang Belanja: {this.state.cart.length} Makanan</div>
        <div>Harga Total: Rp{this.getTotal()}</div>
        <div className="container">
          <div className="card">
            <div className="pilihan">
              {makanan.map((pilihan) => (
                <div key={pilihan.nama}>
                  <div className="gambar">{pilihan.gambar}</div>
                  <div className="nama">{pilihan.nama}</div>
                  <button onClick={() => this.add(pilihan)}>Tambah</button>{" "}
                  <button onClick={() => this.remove(pilihan)}>Hapus</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
