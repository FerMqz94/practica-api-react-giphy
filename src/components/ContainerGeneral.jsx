import React, { Component } from "react";
import Header from "./Header";
import ContainerCard from "./ContainerCard";

export class ContainerGeneral extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "Animales",
      items: [],
    };

    this.api = `https://api.giphy.com/v1/gifs/search?api_key=Zzv8FIExDT1crAsj55ekZUq3JROlJU5P&q=${this.state.keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    
    this.handleResetKeyword = this.handleResetKeyword.bind(this)
    this.handleChangeKeyword = this.handleChangeKeyword.bind(this)

  }

  async componentDidMount() {
    try {
    const {data} = await fetch(this.api).then((res) => res.json())
    const dataFormat = data.map(({title,images}) => {
    const {original:{webp}} = images
      return {
        title,
        gif: webp
      }

    })
    this.setState({
      items: dataFormat
    })
    } catch (error) {

    }
    }


  handleChangeKeyword(event) {
    const valueInput = event.target.value;
    this.setState({
      keyword: valueInput,
    });

    
  }

  handleResetKeyword() {
    this.setState({
      keyword: "",
    });
  }

  render() {
    return (
      <>
        <Header
          keyword={this.state.keyword}
          handleChangeKeyword={this.handleChangeKeyword}
          handleResetKeyword={this.handleResetKeyword}
        />

        <ContainerCard items={this.state.items}/>
      </>
    );
  }
}

export default ContainerGeneral;
