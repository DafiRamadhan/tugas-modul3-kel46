import { Component } from "react";
import React from "react";
import "./Menu.css";
import Game from "./Game";
import Makanan from "./Makanan";
import Gambar1 from "../assets/images/image1.jpg";
import Gambar2 from "../assets/images/image2.jpg";

class Menu extends Component {
  state = {
    game: false,
    makanan: false,
  };
  
viewKomponen1 = () => {
    this.setState(() => {
      return {
        game: !this.state.game,
      };
    });
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
         <div className="component1">
            <button onClick={this.viewKomponen1}>
              {this.state.game ? "Tutup" : "Munculkan"} Daftar Game
            </button>
            {this.state.game && (
              <Game image={Gambar1} image2={Gambar2} />
            )}
          </div>

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
