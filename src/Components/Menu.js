import { Component } from "react";
import React from "react";
import "./Menu.css";
import Makanan from "./Makanan";
import Gambar1 from "../assets/images/image1.jpg";
import Gambar2 from "../assets/images/image2.jpg";

class Menu extends Component {
  state = {
    makanan: false,
  };

  viewKomponen2 = () => {
    this.setState(() => {
      return {
        makanan: !this.state.makanan,
      };
    });
  };

  render() {
    return (
      <>
        <h1 className="welcome">
          Selamat datang, silakan pilih Menu dibawah ini!
        </h1>
        <div className="body">
          <div className="component2">
            <button onClick={this.viewKomponen2}>
              {this.state.makanan ? "Tutup" : "Munculkan"} Daftar Makanan
            </button>
            {this.state.makanan && <Makanan />}
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
