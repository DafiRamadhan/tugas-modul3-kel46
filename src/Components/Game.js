import React, { Component } from "react";
import "./Game.css";
class Game extends Component {
    state = {
        image: this.props.image,
        title: "Microsoft Flight Simulator",
        release: "2020",
        genre: "Simulation",
    };

    componentDidMount() {
        alert(`Silahkan pilih Game yang diinginkan!`);
    }
    componentDidUpdate(nextProps) {
        alert(`Game berhasil diganti! Game pilihan Anda : ${this.state.title}`);
    }
    componentWillUnmount() {
        alert("Terimakasih telah memilih Game!");
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm("Ingin mengganti Game?");
    }

    gantiGambar = () => {
        this.setState((state) => {
            if (
                (state.image === this.props.image) && (state.title === "Microsoft Flight Simulator") && (state.release === "2020") && (state.genre === "Simulation")
            ) {
                return { image: this.props.image2, title: "F1 2021", release: "2021", genre: "Racing" };
            }
            else {
                return { image: this.props.image, title: "Microsoft Flight Simulator", release: "2020", genre: "Simulation" };
            }
        });
    };

    render() {
        return (
            <>
                <div className="container">
                    <div className="card">
                        <div>
                            <img src={this.state.image} alt="Gambar" className="gambar" />
                        </div>
                        <div className="text">
                            <h4 className="title">{this.state.title}</h4>
                            <h4 className="release">Release Year : {this.state.release}</h4>
                            <h4 className="genre">Genre : {this.state.genre}</h4>
                            <tr />
                        </div>
                    </div><br />
                    <button onClick={this.gantiGambar}>Ganti Game</button>
                </div>
            </>
        );
    }
}
export default Game;
