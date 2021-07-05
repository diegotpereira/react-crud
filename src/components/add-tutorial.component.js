import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
    constructor (props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            id: null,
            titulo: "",
            descricao: "",
            publicado: false,

            submitted: false
        };
    }

    onChangeTitle(e){
        this.setState({
            titulo: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            descricao: e.target.value
        });
    }

    saveTutorial(){
        var data = {
            titulo: this.state.titulo,
            descricao: this.state.descricao
        };

        TutorialDataService.create(data) .then(response => {
            this.setState({
                id: response.data.id,
                titulo: response.data.titulo,
                descricao: response.data.descricao,
                publicado: response.data.publicado,

                submitted: true
            });

            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    newTutorial(){
        this.setState({
            id: null,
            titulo: "",
            descricao: "",
            publicado: false,

            submitted: false
        });
    }

    render(){
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Você se inscreveu com sucesso!</h4>
                        <button className="btn btn-success" onClick={this.newTutorial}>
                            Adicionar
                        </button>
                    </div>
                ): (
                    <div>
                        <div className="form-group">
                            <label htmlFor="titulo">Titulo</label>
                            <input type="text" className="form-control" id="titulo" required value={this.state.titulo} name="titulo"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <input type="text" className="form-control" id="descricao" required value={this.state.descricao} onChange={this.onChangeDescription} name="descricao"/>
                        </div>

                        <button onClick={this.saveTutorial} className="btn btn-success">
                            Submit
                        </button>
                            
                    </div>
                )}
            </div>
        );
    }
}